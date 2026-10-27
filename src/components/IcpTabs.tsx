"use client";

import { useState } from "react";
import { icpMeta, icps, mixLabels, STATUS_LABEL, icpNames, icpPeers, peersNote } from "@/content/foodle";

export default function IcpTabs() {
  const [active, setActive] = useState(0);
  const icp = icps[active];
  const meta = icpMeta[icp.code];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + icps.length) % icps.length;
    setActive(next);
    document.getElementById(`tab-${next}`)?.focus();
  };

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="ICP 선택">
        {icps.map((x, i) => (
          <button
            key={x.code}
            id={`tab-${i}`}
            role="tab"
            className="tab"
            aria-selected={i === active}
            aria-controls="icp-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <i className="tab-dot" style={{ background: icpMeta[x.code].accent }} aria-hidden="true" />
            <span className="code">{x.code}</span>
            {icpNames[x.code].full}
          </button>
        ))}
      </div>

      <div key={icp.code} id="icp-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="icp-panel" style={{ ["--accent" as string]: meta.accent }}>
        <div>
          <div className="icp-scene">
            {icp.code} · {icp.sceneEn}
          </div>
          <h3 className="icp-who">{icp.who}</h3>
          <p className="icp-def">{icp.definition}</p>

          <div className="block">
            <div className="block-label">긴장 (훅의 출발점)</div>
            <p>{icp.tension}</p>
          </div>
          <div className="block">
            <div className="block-label">UBP · 고객이 사는 이유</div>
            <p>{icp.ubp}</p>
          </div>
          <div className="block">
            <div className="block-label">대표 카피</div>
            <p className="copy-quote">{icp.copy}</p>
          </div>
          <div className="block">
            <div className="block-label">구매 트리거</div>
            <div className="tags">
              {icp.triggers.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="block persona">
            가상 페르소나 · {icp.persona.name} — <q>{icp.persona.quote}</q>
          </p>
        </div>

        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="icp-photo" src={meta.image} alt={meta.alt} style={{ objectPosition: meta.pos, aspectRatio: meta.ratio }} width={900} height={675} loading="lazy" />
          <dl className="meta-grid">
            <div>
              <dt>주력 제품</dt>
              <dd>
                {icp.product}
                {icp.productSub && <small>{icp.productSub}</small>}
              </dd>
            </div>
            <div>
              <dt>연령</dt>
              <dd>{icp.age}</dd>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <dt>해결하려는 일</dt>
              <dd>{icp.job}</dd>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <dt>입구 비중 (가설)</dt>
              <div className="entry-bar" aria-hidden="true">
                <i style={{ width: `${icp.entry.problem}%` }} />
              </div>
              <div className="entry-legend">
                <span>문제 해결 {icp.entry.problem}</span>
                <span>미감 {icp.entry.aesthetic}</span>
              </div>
            </div>
          </dl>

          <div className="mix">
            <div className="block-label">콘텐츠 역할 배분 (가설, %)</div>
            <div className="mix-bar" role="img" aria-label={mixLabels.map((l, i) => `${l} ${meta.mix[i]}`).join(", ")}>
              {meta.mix.map((v, i) => (
                <span key={mixLabels[i]} className={`mix-seg mix-${i}`} style={{ width: `${v}%` }}>
                  {v}
                </span>
              ))}
            </div>
            <div className="mix-legend">
              {mixLabels.map((l, i) => (
                <span key={l}>
                  <i className={`mix-sw mix-${i}`} />
                  {l}
                </span>
              ))}
            </div>
            <p className="usp-note">{meta.mixNote}</p>
          </div>

          <div className="usp-list">
            {icp.usps.map((u, i) => (
              <div key={u.name} className="usp-item">
                <div className="usp-top">
                  <span className="usp-name">
                    USP {i + 1} · {u.name}
                  </span>
                  <span className={`badge badge-${u.status}`}>{STATUS_LABEL[u.status]}</span>
                </div>
                <p className="usp-copy">{u.copy}</p>
                <p className="usp-note">{u.note}</p>
              </div>
            ))}
          </div>
          <div className="shop">
            <div className="block-label">공식몰 현재 문구 (참고)</div>
            <p className="shop-title">{meta.shop.title}</p>
            <ul>
              {meta.shop.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <p className="cta-line">
            CTA · 랜딩: <b>{icp.cta}</b>
          </p>
        </div>

        <div className="peers" style={{ gridColumn: "1 / -1" }}>
          <div className="block-label">함께 보는 브랜드 · 동종 플레이어 (참고용 초안)</div>
          <p className="peers-why">{icpPeers[icp.code].why}</p>
          <ul className="peers-list">
            {icpPeers[icp.code].brands.map((b) => (
              <li key={b.url}>
                <a href={b.url} target="_blank" rel="noopener noreferrer">
                  <b>{b.name} ↗</b>
                  <span>{b.desc}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="peers-note">{peersNote}</p>
        </div>
      </div>
    </div>
  );
}
