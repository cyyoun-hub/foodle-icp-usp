"use client";

import { useState } from "react";
import { checklist } from "@/content/foodle";

// 소재 검수 10항목. 하나라도 “아니오”면 수정 후 집행한다.
export default function Checklist() {
  const [done, setDone] = useState<boolean[]>(() => checklist.map(() => false));
  const count = done.filter(Boolean).length;
  const ready = count === checklist.length;

  return (
    <div className="check">
      <ol className="check-list">
        {checklist.map((q, i) => (
          <li key={q}>
            <label className="check-row" data-on={done[i]}>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
              />
              <span className="check-box" aria-hidden="true" />
              <span className="check-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="check-q">{q}</span>
            </label>
          </li>
        ))}
      </ol>

      <aside className="check-result" data-ready={ready} aria-live="polite">
        <div className="check-count">
          {count}
          <small> / {checklist.length}</small>
        </div>
        <div className="check-bar" aria-hidden="true">
          <i style={{ width: `${(count / checklist.length) * 100}%` }} />
        </div>
        <p className="check-msg">
          {ready
            ? "모두 “예”입니다. 집행해도 좋습니다."
            : count === 0
            ? "하나라도 “아니오”면 수정 후 집행합니다."
            : `아직 ${checklist.length - count}개가 남았습니다. 해당 항목을 수정한 뒤 집행하세요.`}
        </p>
        <button className="btn btn-outline" onClick={() => setDone(checklist.map(() => false))}>
          처음부터 다시
        </button>
      </aside>
    </div>
  );
}
