import {
  gmPools,
  gmQuote as q,
  gmQuoteDerived as d,
  gmScopeExtras,
  gmScopeNote,
  gmShareNote,
  gmTimelineBars,
  gmToVerifyBudget,
  gmVoucher,
  SCOPE_LABEL,
  VERIFY_LABEL,
  won,
  type Scope,
  type Verify,
} from "@/content/global";

const State = ({ v }: { v: Verify }) => <span className={`gm-state gm-state-${v}`}>{VERIFY_LABEL[v]}</span>;
export const ScopeBadge = ({ s }: { s: Scope }) => <span className={`gm-scope gm-scope-${s}`}>{SCOPE_LABEL[s]}</span>;

const pct = (n: number, total: number) => `${(n / total) * 100}%`;

// 협의 견적서 기반 예산 · 범위. 견적서에 적힌 금액 · 기간만 쓰고, 합계 · 월 환산은 "참고 계산"으로 표시한다.
export default function BudgetScope() {
  const g = q.google;
  const segs = [
    { k: "해외 매체 실비", v: g.overseas.media, c: "#00754a", dark: false },
    { k: "국내 매체 실비", v: g.domestic.media, c: "#1e3932", dark: false },
    { k: "운영수수료 합계", v: d.feeTotal, c: "#cba258", dark: true },
    { k: "초기 세팅", v: g.setup, c: "#b9b4aa", dark: true },
  ];

  return (
    <div className="gm-budget">
      <div className="gm-budget-head">
        <h3 className="sub-head">Budget & Scope · 협의 견적서</h3>
        <State v="quote" />
      </div>
      <p className="gm-micro">
        {q.vendor} · 견적일 {q.date} · 금액은 모두 {q.vat}. {q.negotiable}
      </p>

      <div className="gm-sum">
        <article className="gm-sum-card" style={{ ["--c" as string]: "#00754a" }}>
          <p>Google 검색광고</p>
          <b>{won(g.total)}</b>
          <span>{g.months}개월 · {q.vat}</span>
        </article>
        <article className="gm-sum-card" style={{ ["--c" as string]: "#1e3932" }}>
          <p>LinkedIn 마케팅</p>
          <b>{won(q.linkedin.total)}</b>
          <span>{q.linkedin.months}개월 · {q.vat}</span>
        </article>
        <article className="gm-sum-card gm-sum-total" style={{ ["--c" as string]: "#cba258" }}>
          <p>합계 (참고용 합산)</p>
          <b>{won(d.grandTotal)}</b>
          <span>두 상품의 기간이 달라 합산은 참고용 · {q.vat}</span>
        </article>
      </div>

      <div className="gm-grid-2 gm-budget-grid">
        <article className="gm-card">
          <h4>Google 검색광고 {won(g.total)} · {g.months}개월</h4>
          <div className="gm-stack" role="img" aria-label={`Google 견적 구성: ${segs.map((s) => `${s.k} ${won(s.v)}`).join(", ")}`}>
            {segs.map((s) => (
              <i key={s.k} style={{ width: pct(s.v, g.total), background: s.c, color: s.dark ? "#2b2a28" : "#fff" }}>
                {Math.round((s.v / g.total) * 100)}%
              </i>
            ))}
          </div>
          <ul className="gm-legend">
            {segs.map((s) => (
              <li key={s.k}>
                <span style={{ background: s.c }} />
                {s.k} <b>{won(s.v)}</b>
              </li>
            ))}
          </ul>
          <table className="gm-mini">
            <tbody>
              <tr>
                <th scope="row">초기 세팅 · 키워드 분석 · 완료 보고서</th>
                <td>{won(g.setup)}</td>
              </tr>
              <tr>
                <th scope="row">광고비 [해외 타겟] · 운영수수료 {g.overseas.feeRate}%</th>
                <td>
                  {won(g.overseas.total)}
                  <small>
                    실비 {won(g.overseas.media)} (월 {won(g.overseas.monthly)} × 4) + 수수료 {won(g.overseas.fee)}
                  </small>
                </td>
              </tr>
              <tr>
                <th scope="row">광고비 [국내 타겟] · 운영수수료 {g.domestic.feeRate}%</th>
                <td>
                  {won(g.domestic.total)}
                  <small>
                    실비 {won(g.domestic.media)} (월 {won(g.domestic.monthly)} × 4) + 수수료 {won(g.domestic.fee)}
                  </small>
                </td>
              </tr>
              <tr className="gm-mini-sum">
                <th scope="row">합계 (참고 계산)</th>
                <td>
                  {won(g.total)}
                  <small>
                    매체 실비 {won(d.mediaTotal)} + 운영수수료 {won(d.feeTotal)} + 초기 세팅 {won(g.setup)}
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="gm-micro">
            수수료 {g.overseas.feeRate}% · {g.domestic.feeRate}%는 각 광고비 항목 금액({won(g.overseas.total)}) 대비 표기율입니다. 매체 실비에 같은 비율을 더하는 계산이 아닙니다.
          </p>
          <p className="gm-micro">
            월 매체 실비 합계 <b>{won(d.monthlyMedia)}</b> = 국내 {won(g.domestic.monthly)} + 해외 {won(g.overseas.monthly)} (참고 계산)
          </p>
          <p className="gm-micro">
            노출 위치(견적서 표기): {g.placement}. 과금: {g.billing}.
          </p>
        </article>

        <article className="gm-card">
          <h4>LinkedIn 마케팅 {won(q.linkedin.total)} · {q.linkedin.months}개월</h4>
          <div className="gm-li-ad">
            <span>광고비 책정</span>
            <b>{won(q.linkedin.adSpend)}</b>
            <small>(1회) · {q.linkedin.adNote}</small>
          </div>
          <ul className="gm-check-list">
            {q.linkedin.included.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="gm-micro">
            광고비 {won(q.linkedin.adSpend)} 외의 항목별 금액은 견적서에 없어서 나누어 표시하지 않았고, 이를 광고 실비로 보지 않습니다. 광고 1회의 정의 · 집행일 · 포맷은 확인이 필요합니다.
          </p>
        </article>
      </div>

      <h4 className="gm-h4">견적상 광고비 풀과 전략 타깃의 대응</h4>
      <div className="gm-table-wrap">
        <table className="gm-table gm-table-plain">
          <thead>
            <tr>
              <th scope="col">견적 항목</th>
              <th scope="col">금액</th>
              <th scope="col">전략 대상</th>
              <th scope="col">확정된 것</th>
              <th scope="col">미확정</th>
            </tr>
          </thead>
          <tbody>
            {gmPools.map((p) => (
              <tr key={p.pool}>
                <td data-label="견적 항목">
                  <b>{p.pool}</b>
                </td>
                <td data-label="금액">{p.amount}</td>
                <td data-label="전략 대상">{p.target}</td>
                <td data-label="확정">{p.known}</td>
                <td data-label="미확정">
                  <span className="gm-state gm-state-toverify">To Verify</span> {p.open}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="gm-alert" role="note">
        <b>꼭 읽어 주세요.</b> {gmShareNote}
      </p>

      <h4 className="gm-h4">계약 범위와 바우처 일정은 서로 다른 타임라인입니다</h4>
      <div className="gm-time" role="img" aria-label="Google 4개월, LinkedIn 1개월, 바우처 IMC 2개월의 기간 비교">
        {gmTimelineBars.map((b) => (
          <div key={b.label} className="gm-time-row">
            <p>
              {b.label} <State v={b.state} />
            </p>
            <div className="gm-time-track">
              <i className={`gm-time-bar gm-time-${b.state}`} style={{ width: `${(b.months / 4) * 100}%` }}>
                {b.months}개월
              </i>
            </div>
            <small>{b.sub}</small>
          </div>
        ))}
        <div className="gm-time-scale" aria-hidden="true">
          {[1, 2, 3, 4].map((m) => (
            <span key={m}>{m}개월</span>
          ))}
        </div>
      </div>
      <p className="gm-micro">
        {gmVoucher.label}: {gmVoucher.range} ({gmVoucher.months}개월). {gmVoucher.source} 막대 길이는 기간의 비율만 보여 주며, 시작일은 아직 정해지지 않아 같은 출발선에서 겹치지 않습니다.
      </p>
      <ul className="gm-notes-list">
        {gmToVerifyBudget.map((n) => (
          <li key={n}>
            <span className="gm-state gm-state-toverify">To Verify</span> {n}
          </li>
        ))}
      </ul>

      <h4 className="gm-h4">견적 포함 범위 vs 전략 제언</h4>
      <div className="gm-grid-2">
        <article className="gm-card">
          <h4>
            <ScopeBadge s="quote" /> 견적서에 포함된 수행물
          </h4>
          <p className="gm-scope-sub">Google 검색광고</p>
          <ul className="gm-check-list">
            {g.included.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="gm-scope-sub">LinkedIn 마케팅</p>
          <p className="gm-micro">위 LinkedIn 카드의 포함 항목을 따릅니다. 주 1회 발행, 기업 페이지 활성화, 브랜드 배너, 정책 모니터링이 포함입니다.</p>
        </article>
        <article className="gm-card">
          <h4>
            <ScopeBadge s="strategy" /> 이 플레이북의 추가 제언
          </h4>
          <ul className="gm-check-list gm-check-warn">
            {gmScopeExtras.map((i) => (
              <li key={i}>
                {i} <ScopeBadge s="confirm" />
              </li>
            ))}
          </ul>
          <p className="gm-micro">{gmScopeNote}</p>
        </article>
      </div>
    </div>
  );
}
