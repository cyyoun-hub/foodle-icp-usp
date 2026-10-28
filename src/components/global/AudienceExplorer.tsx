"use client";

import { useState } from "react";
import { gmAudiences, gmKeywords, gmShareNote, VERIFY_LABEL, type AudienceId } from "@/content/global";
import { icpNames } from "@/content/foodle";

const MARKET_OF: Record<AudienceId, { market: string; audience: string }> = {
  "kr-b2c": { market: "KR", audience: "B2C" },
  "kr-b2b": { market: "KR", audience: "B2B" },
  "jp-b2b": { market: "JP", audience: "B2B" },
  "us-b2b": { market: "US", audience: "B2B" },
};

// 타깃 구성 그래프 + 카드 선택 시 상세(ICP · 키워드 · 메시지 · 제품 · 랜딩 · KPI)
export default function AudienceExplorer() {
  const [id, setId] = useState<AudienceId>("kr-b2c");
  const a = gmAudiences.find((x) => x.id === id)!;
  const f = MARKET_OF[id];
  const clusters = Array.from(
    new Set(gmKeywords.filter((k) => k.market === f.market && k.audience === f.audience).map((k) => k.cluster))
  );

  return (
    <div className="gm-aud">
      <div className="gm-bar" role="group" aria-label="타깃 비중 (합계 100%)">
        {gmAudiences.map((x) => (
          <button
            key={x.id}
            type="button"
            className="gm-bar-seg"
            style={{ width: `${x.share}%`, background: x.color, color: x.id === "us-b2b" || x.id === "kr-b2b" ? "#2b2a28" : "#fff" }}
            aria-pressed={x.id === id}
            onClick={() => setId(x.id)}
          >
            <span>{x.share}%</span>
          </button>
        ))}
      </div>

      <div className="gm-aud-cards">
        {gmAudiences.map((x) => (
          <button
            key={x.id}
            type="button"
            className="gm-aud-card"
            style={{ ["--c" as string]: x.color }}
            aria-pressed={x.id === id}
            onClick={() => setId(x.id)}
          >
            <span className="gm-aud-share">{x.share}%</span>
            <span className="gm-aud-who">{x.who}</span>
            <span className="gm-aud-sub">
              {x.type} · {x.lang} · {x.market}
            </span>
          </button>
        ))}
      </div>
      <p className="gm-micro">{gmShareNote}</p>

      <article className="gm-detail" key={a.id} style={{ ["--c" as string]: a.color }}>
        <header>
          <span className="gm-chip">{a.campaign}</span>
          <h3>
            {a.who} <small>{a.share}% · {a.type} · {a.lang}</small>
          </h3>
        </header>
        <dl className="gm-dl">
          <div>
            <dt>ICP</dt>
            <dd>
              {a.icps.map((c) => (
                <span key={c} className="gm-tag">
                  {c}
                  {icpNames[c] ? ` ${icpNames[c].short}` : ""}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt>검색 키워드</dt>
            <dd>
              {clusters.map((c) => (
                <span key={c} className="gm-tag">
                  {c}
                </span>
              ))}
              <a className="gm-link" href="#keywords">
                키워드 표 보기 →
              </a>
            </dd>
          </div>
          <div>
            <dt>광고 메시지</dt>
            <dd>{a.message}</dd>
          </div>
          <div>
            <dt>관련 제품</dt>
            <dd>{a.products}</dd>
          </div>
          <div>
            <dt>채널</dt>
            <dd>{a.channels}</dd>
          </div>
          <div>
            <dt>랜딩</dt>
            <dd>
              {a.landing.join(" · ")} <span className={`gm-state gm-state-${a.landingState}`}>{VERIFY_LABEL[a.landingState]}</span>
            </dd>
          </div>
          <div>
            <dt>KPI</dt>
            <dd>
              {a.kpi.map((k) => (
                <span key={k} className="gm-tag">
                  {k}
                </span>
              ))}
            </dd>
          </div>
        </dl>
        <p className="gm-caution">{a.caution}</p>
      </article>
    </div>
  );
}
