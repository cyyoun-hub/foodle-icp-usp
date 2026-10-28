"use client";

import { useMemo, useState } from "react";
import { gmKeywords, landingMap, VERIFY_LABEL, type KeywordRow, type Lang } from "@/content/global";

const LANG_LABEL: Record<Lang, string> = { ko: "한국어", en: "영어", ja: "일본어" };
const ALL = "all";

type Filters = { market: string; audience: string; icp: string; lang: string; intent: string; priority: string; q: string };
const EMPTY: Filters = { market: ALL, audience: ALL, icp: ALL, lang: ALL, intent: ALL, priority: ALL, q: "" };

const uniq = (f: (r: KeywordRow) => string) => Array.from(new Set(gmKeywords.map(f)));
const ICP_OPTIONS = uniq((r) => r.icp).sort();
const INTENT_OPTIONS = ["정보 탐색", "제품 비교", "구매", "도매·납품 문의"];

const primary = (r: KeywordRow) => r[r.lang];

const CSV_HEAD = [
  "Audience", "Market", "ICP", "Keyword Cluster", "Search Language", "Korean Keyword", "English Keyword", "Japanese Keyword",
  "Search Intent", "Funnel Stage", "Priority", "Recommended Product", "Recommended Landing", "Notes",
  "Monthly Volume", "CPC", "Competition",
];

function toCsv(rows: KeywordRow[]) {
  const esc = (v: string | number | undefined) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      r.audience, r.market, r.icp, r.cluster, LANG_LABEL[r.lang], r.ko, r.en, r.ja, r.intent, r.stage, r.priority, r.product,
      landingMap[r.landing].label, r.notes, r.metrics?.volume, r.metrics?.cpc, r.metrics?.competition,
    ]
      .map(esc)
      .join(",")
  );
  // 엑셀에서 한글이 깨지지 않도록 BOM을 붙인다.
  return "﻿" + [CSV_HEAD.map(esc).join(","), ...lines].join("\r\n");
}

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <label className="gm-field">
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={ALL}>전체</option>
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function KeywordExplorer() {
  const [f, setF] = useState<Filters>(EMPTY);
  const [toast, setToast] = useState("");
  const set = (k: keyof Filters) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const rows = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return gmKeywords.filter((r) => {
      if (f.market !== ALL && r.market !== f.market) return false;
      if (f.audience !== ALL && r.audience !== f.audience) return false;
      if (f.icp !== ALL && r.icp !== f.icp) return false;
      if (f.lang !== ALL && r.lang !== f.lang) return false;
      if (f.intent !== ALL && r.intent !== f.intent) return false;
      if (f.priority !== ALL && r.priority !== f.priority) return false;
      if (q && ![r.cluster, r.ko, r.en, r.ja, r.notes, r.product, r.icp].join(" ").toLowerCase().includes(q)) return false;
      return true;
    });
  }, [f]);

  const flash = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(""), 2200);
  };
  const copyOne = async (r: KeywordRow) => {
    await writeClipboard(primary(r));
    flash(`복사했습니다: ${primary(r)}`);
  };
  const copyAll = async () => {
    await writeClipboard(rows.map(primary).join("\n"));
    flash(`${rows.length}개 키워드를 복사했습니다`);
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([toCsv(rows)], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `foodle-global-keywords-${rows.length}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    flash(`${rows.length}개 키워드를 CSV로 내려받았습니다`);
  };

  return (
    <div className="gm-kw">
      <div className="gm-filters">
        <Select label="국가" value={f.market} onChange={set("market")} options={[{ v: "KR", l: "KR 한국" }, { v: "JP", l: "JP 일본" }, { v: "US", l: "US 미국" }]} />
        <Select label="고객" value={f.audience} onChange={set("audience")} options={[{ v: "B2C", l: "B2C" }, { v: "B2B", l: "B2B" }]} />
        <Select label="ICP" value={f.icp} onChange={set("icp")} options={ICP_OPTIONS.map((v) => ({ v, l: v }))} />
        <Select label="언어" value={f.lang} onChange={set("lang")} options={[{ v: "ko", l: "한국어" }, { v: "en", l: "영어" }, { v: "ja", l: "일본어" }]} />
        <Select label="구매 의도" value={f.intent} onChange={set("intent")} options={INTENT_OPTIONS.map((v) => ({ v, l: v }))} />
        <Select label="우선순위" value={f.priority} onChange={set("priority")} options={["P1", "P2", "P3"].map((v) => ({ v, l: v }))} />
        <label className="gm-field gm-field-q">
          <span>검색</span>
          <input type="search" value={f.q} onChange={(e) => set("q")(e.target.value)} placeholder="키워드 · 클러스터 · 제품" />
        </label>
      </div>

      <div className="gm-kw-bar">
        <p aria-live="polite">
          <b>{rows.length}</b> / {gmKeywords.length}개 표시 중
        </p>
        <div className="gm-kw-actions">
          <button type="button" className="btn btn-outline" onClick={() => setF(EMPTY)}>
            필터 초기화
          </button>
          <button type="button" className="btn btn-outline" onClick={copyAll} disabled={!rows.length}>
            표시 중 키워드 복사
          </button>
          <button type="button" className="btn btn-filled" onClick={download} disabled={!rows.length}>
            CSV 다운로드
          </button>
        </div>
      </div>
      <p className="gm-toast" role="status">
        {toast}
      </p>

      <div className="gm-table-wrap">
        <table className="gm-table">
          <thead>
            <tr>
              {["Audience", "ICP", "Keyword Cluster", "Korean", "English", "Japanese", "Search Intent", "Funnel Stage", "Priority", "Recommended Product", "Recommended Landing", "Notes", "검색량 · CPC · 경쟁도", ""].map((h, i) => (
                <th key={i} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const land = landingMap[r.landing];
              const m = r.metrics;
              return (
                <tr key={r.id}>
                  <td data-label="Audience">
                    {r.audience} · {r.market}
                  </td>
                  <td data-label="ICP">
                    <b>{r.icp}</b>
                  </td>
                  <td data-label="Cluster">{r.cluster}</td>
                  {(["ko", "en", "ja"] as Lang[]).map((l) => (
                    <td key={l} data-label={LANG_LABEL[l]} className={r.lang === l ? "gm-kw-main" : "gm-kw-ref"} lang={l}>
                      {r[l] || "—"}
                    </td>
                  ))}
                  <td data-label="Intent">{r.intent}</td>
                  <td data-label="Stage">{r.stage}</td>
                  <td data-label="Priority">
                    <span className={`gm-pri gm-pri-${r.priority}`}>{r.priority}</span>
                  </td>
                  <td data-label="Product">{r.product}</td>
                  <td data-label="Landing">
                    <div>
                      <a href={land.url} target="_blank" rel="noopener noreferrer" className="gm-link">
                        {land.label} ↗
                      </a>
                      <span className={`gm-state gm-state-${land.state}`}>{VERIFY_LABEL[land.state]}</span>
                    </div>
                  </td>
                  <td data-label="Notes" className="gm-notes">
                    {r.notes}
                  </td>
                  <td data-label="검증 데이터">
                    {m ? [m.volume != null && `검색량 ${m.volume}`, m.cpc != null && `CPC ${m.cpc}`, m.competition && `경쟁도 ${m.competition}`].filter(Boolean).join(" · ") : <span className="gm-muted">미검증</span>}
                  </td>
                  <td>
                    <button type="button" className="gm-copy" onClick={() => copyOne(r)} aria-label={`${primary(r)} 복사`}>
                      복사
                    </button>
                  </td>
                </tr>
              );
            })}
            {!rows.length && (
              <tr>
                <td colSpan={14} className="gm-empty">
                  조건에 맞는 키워드가 없습니다. 필터를 초기화해 보세요.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
