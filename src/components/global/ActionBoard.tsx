"use client";

import { useEffect, useState } from "react";
import { ACTION_STATUSES, gmActionGroups, gmActions, SCOPE_LABEL, type ActionStatus } from "@/content/global";

const KEY = "foodle-gm-actions-v2";
type Item = { s: ActionStatus; m: string; t: string }; // 상태 · 메모 · 갱신일
const initial = (): Record<string, Item> => Object.fromEntries(gmActions.map((a) => [a.id, { s: a.status, m: "", t: "" }]));
const today = () => new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\s/g, "");

// 상태 · 메모는 이 브라우저(localStorage)에만 저장된다. 대행사와 실시간 공유되지 않는다.
export default function ActionBoard() {
  const [s, setS] = useState<Record<string, Item>>(initial);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, Partial<Item>>;
      setS((p) => {
        const next = { ...p };
        Object.entries(saved).forEach(([id, v]) => {
          if (next[id] && v && ACTION_STATUSES.includes(v.s as ActionStatus)) next[id] = { s: v.s as ActionStatus, m: String(v.m ?? ""), t: String(v.t ?? "") };
        });
        return next;
      });
    } catch {
      /* 저장값이 깨져 있으면 기본값을 쓴다 */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(s));
  }, [s, ready]);

  const update = (id: string, patch: Partial<Item>) => setS((p) => ({ ...p, [id]: { ...p[id], ...patch, t: today() } }));
  const count = (st: ActionStatus) => gmActions.filter((a) => s[a.id].s === st).length;
  const summary = () =>
    `Foodle Global Marketing · 액션 체크리스트 (${today()})\n` +
    gmActions.map((a, i) => `${String(i + 1).padStart(2, "0")}. [${s[a.id].s}] ${a.title}${s[a.id].m ? ` — ${s[a.id].m}` : ""}`).join("\n");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary());
      setToast("현재 상태를 복사했습니다. 메신저나 메일에 붙여 넣어 공유하세요.");
    } catch {
      setToast("복사하지 못했습니다. 브라우저 권한을 확인해 주세요.");
    }
    window.setTimeout(() => setToast(""), 3000);
  };

  let no = 0;
  return (
    <div className="gm-act">
      <p className="gm-local">
        <b>이 브라우저에만 저장됩니다.</b> 상태 · 메모는 이 기기의 로컬 저장소에 남고, 대행사와 실시간으로 공유되지 않습니다. 여러 사람이 같이 보려면 공유 저장소가 필요하며, 지금은 아래 “현재 상태 복사”로 전달하세요.
      </p>
      <div className="gm-act-sum" aria-live="polite">
        {ACTION_STATUSES.map((st) => (
          <span key={st} className={`gm-act-pill gm-act-${st.replace(/ /g, "")}`}>
            {st} <b>{count(st)}</b>
          </span>
        ))}
        <button type="button" className="btn btn-outline" onClick={copy}>
          현재 상태 복사
        </button>
        <button type="button" className="btn btn-outline" onClick={() => setS(initial())}>
          처음 상태로
        </button>
      </div>
      <p className="gm-toast" role="status">
        {toast}
      </p>

      {gmActionGroups.map((g, gi) => (
        <div key={g} className="gm-act-group">
          <h3>{g}</h3>
          <ol className="gm-act-list">
            {gmActions
              .filter((a) => a.group === gi)
              .map((a) => {
                no += 1;
                const it = s[a.id];
                return (
                  <li key={a.id} data-st={it.s.replace(/ /g, "")}>
                    <span className="gm-act-no">{String(no).padStart(2, "0")}</span>
                    <div className="gm-act-body">
                      <b>{a.title}</b>
                      <span className={`gm-scope gm-scope-${a.scope}`}>{SCOPE_LABEL[a.scope]}</span>
                      <input
                        type="text"
                        value={it.m}
                        onChange={(e) => update(a.id, { m: e.target.value })}
                        placeholder="메모 (확인한 내용 · 담당자 · 다음 할 일)"
                        aria-label={`${a.title} 메모`}
                      />
                      <small>{it.t ? `최근 수정 ${it.t}` : "수정 기록 없음"}</small>
                    </div>
                    <select value={it.s} onChange={(e) => update(a.id, { s: e.target.value as ActionStatus })} aria-label={`${a.title} 상태`}>
                      {ACTION_STATUSES.map((st) => (
                        <option key={st}>{st}</option>
                      ))}
                    </select>
                  </li>
                );
              })}
          </ol>
        </div>
      ))}
    </div>
  );
}
