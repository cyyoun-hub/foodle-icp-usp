"use client";

import { useEffect, useState } from "react";
import { ACTION_STATUSES, gmActions, type ActionStatus } from "@/content/global";

const KEY = "foodle-gm-actions-v1";
const initial = () => Object.fromEntries(gmActions.map((a) => [a.id, a.status])) as Record<string, ActionStatus>;

// 상태는 이 브라우저(localStorage)에만 저장된다. 대행사와 실시간 공유되지 않는다.
export default function ActionBoard() {
  const [s, setS] = useState<Record<string, ActionStatus>>(initial);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, ActionStatus>;
      setS((p) => ({ ...p, ...Object.fromEntries(Object.entries(saved).filter(([, v]) => ACTION_STATUSES.includes(v))) }));
    } catch {
      /* 저장값이 깨져 있으면 기본값을 쓴다 */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(s));
  }, [s, ready]);

  const count = (st: ActionStatus) => gmActions.filter((a) => s[a.id] === st).length;
  const summary = () =>
    `Foodle Global Marketing · 액션 체크리스트\n` +
    gmActions.map((a, i) => `${String(i + 1).padStart(2, "0")}. [${s[a.id]}] ${a.title}`).join("\n");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary());
      setToast("현재 상태를 복사했습니다. 메신저나 메일에 붙여 넣어 공유하세요.");
    } catch {
      setToast("복사하지 못했습니다. 브라우저 권한을 확인해 주세요.");
    }
    window.setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="gm-act">
      <p className="gm-local">
        <b>이 브라우저에만 저장됩니다.</b> 대행사와 실시간으로 공유되지 않습니다. 공유가 필요하면 아래 “현재 상태 복사”를 쓰세요.
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
      <ol className="gm-act-list">
        {gmActions.map((a, i) => (
          <li key={a.id} data-st={s[a.id].replace(/ /g, "")}>
            <span className="gm-act-no">{String(i + 1).padStart(2, "0")}</span>
            <div className="gm-act-body">
              <b>{a.title}</b>
              <p>{a.detail}</p>
              <small>담당 제안: {a.owner}</small>
            </div>
            <select value={s[a.id]} onChange={(e) => setS((p) => ({ ...p, [a.id]: e.target.value as ActionStatus }))} aria-label={`${a.title} 상태`}>
              {ACTION_STATUSES.map((st) => (
                <option key={st}>{st}</option>
              ))}
            </select>
          </li>
        ))}
      </ol>
    </div>
  );
}
