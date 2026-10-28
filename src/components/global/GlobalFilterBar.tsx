"use client";

import { useEffect } from "react";
import { ALL, initFromUrl, setGlobal, useGlobalFilter } from "./filterStore";

const CH = [
  { v: ALL, l: "전체 채널" },
  { v: "google", l: "Google Ads" },
  { v: "linkedin", l: "LinkedIn" },
];
const MK = [
  { v: ALL, l: "전체 시장" },
  { v: "KR", l: "KR 한국" },
  { v: "JP", l: "JP 일본" },
  { v: "US", l: "US 미국" },
];
const TY = [
  { v: ALL, l: "전체 고객" },
  { v: "B2C", l: "B2C" },
  { v: "B2B", l: "B2B" },
];

function Seg({ label, value, options, onChange }: { label: string; value: string; options: { v: string; l: string }[]; onChange: (v: string) => void }) {
  return (
    <div className="gm-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.v} type="button" aria-pressed={value === o.v} onClick={() => onChange(o.v)}>
          {o.l}
        </button>
      ))}
    </div>
  );
}

// 채널 · 시장 · 고객 전역 필터. 키워드 표는 같은 값으로 걸러지고, 나머지 카드는 해당하지 않는 것이 흐려진다.
export default function GlobalFilterBar() {
  const f = useGlobalFilter();
  useEffect(() => {
    initFromUrl();
  }, []);
  const active = f.ch !== ALL || f.mk !== ALL || f.ty !== ALL;

  return (
    <div className="gm-filterbar">
      <div className="wrap gm-filterbar-in">
        <Seg label="채널" value={f.ch} options={CH} onChange={(v) => setGlobal({ ch: v })} />
        <Seg label="시장" value={f.mk} options={MK} onChange={(v) => setGlobal({ mk: v })} />
        <Seg label="고객" value={f.ty} options={TY} onChange={(v) => setGlobal({ ty: v })} />
        <button type="button" className="gm-filter-reset" disabled={!active} onClick={() => setGlobal({ ch: ALL, mk: ALL, ty: ALL })}>
          초기화
        </button>
        <p className="gm-filter-hint" aria-live="polite">
          {active ? "해당하지 않는 카드는 흐려지고, 선택은 주소(URL)에 저장됩니다." : "고르면 해당 카드만 또렷해지고 키워드 표도 걸러집니다."}
        </p>
      </div>
    </div>
  );
}
