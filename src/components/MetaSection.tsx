import Reveal from "@/components/Reveal";
import {
  NOTION_URL,
  metaAbMap,
  metaAbNote,
  metaAxes,
  metaAxesNote,
  metaBudget,
  metaCampaigns,
  metaCycle,
  metaEndReasons,
  metaIntro,
  metaNaming,
  metaObserve,
  metaRules,
  metaSources,
  metaWeek,
} from "@/content/meta";

export default function MetaSection() {
  const total = metaBudget.after.reduce((a, b) => a + b.v, 0);
  return (
    <section id="meta" className="section bg-white meta-sec">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">{metaIntro.eyebrow}</p>
          <h2 className="h-lg">{metaIntro.title}</h2>
          <p className="lede">{metaIntro.lede}</p>
          <a href={NOTION_URL} className="btn btn-filled btn-lg notion-btn" target="_blank" rel="noopener noreferrer">
            {metaIntro.linkLabel} ↗
          </a>
          <p className="micro">{metaIntro.linkNote}</p>
        </Reveal>

        <h3 className="sub-head">소재 1개를 정의하는 다섯 칸</h3>
        <Reveal>
          <ol className="meta-axes">
            {metaAxes.map((a, i) => (
              <li key={a.axis}>
                <small>{i + 1}</small>
                <b>{a.axis}</b>
                <span>{a.values}</span>
              </li>
            ))}
          </ol>
          <p className="micro">{metaAxesNote}</p>
        </Reveal>

        <h3 className="sub-head">노션의 A/B 구분과 A1~B2</h3>
        <Reveal>
          <div className="ab-map">
            {metaAbMap.map((m) => (
              <article key={m.notion} className="ab-card">
                <span className="ab-tag">노션 구분</span>
                <h4>{m.notion}</h4>
                <p className="ab-mind">{m.mind}</p>
                <p>{m.msg}</p>
                <div className="ab-now">
                  <span>현재 타겟</span>
                  {m.now.map((c) => (
                    <b key={c}>{c}</b>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="micro">{metaAbNote}</p>
        </Reveal>

        <h3 className="sub-head">캠페인 4개와 월 예산</h3>
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">코드</th>
                  <th scope="col">목적</th>
                  <th scope="col">캠페인 · 광고세트</th>
                  <th scope="col">월 예산</th>
                  <th scope="col">역할</th>
                </tr>
              </thead>
              <tbody>
                {metaCampaigns.map((c) => (
                  <tr key={c.code} className={c.tone === "key" ? "row-main" : undefined}>
                    <th scope="row">{c.code}</th>
                    <td>
                      <b>{c.purpose}</b>
                    </td>
                    <td>
                      {c.name}
                      <br />
                      <small className="muted-small">{c.adset}</small>
                    </td>
                    <td>
                      <b>{c.budget}만원</b>
                    </td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mbud" role="img" aria-label={`월 예산 ${total}만원 분배: ${metaBudget.after.map((b) => `${b.code} ${b.v}만원`).join(", ")}`}>
            {metaBudget.after.map((b) => (
              <span key={b.code} className={`mb-${b.code}`} style={{ flexGrow: b.v }}>
                {b.code} {b.v}
              </span>
            ))}
          </div>
          <p className="micro">
            10/1 업데이트 기준 ({metaBudget.unit}) 합계 {total}만원. 이전 분배는 자사몰 전환 {metaBudget.before[0].v} · 스마트스토어 전환 {metaBudget.before[3].v}이었습니다. {metaBudget.note}
          </p>
        </Reveal>

        <h3 className="sub-head">소재 이름 규칙</h3>
        <Reveal>
          <p className="naming-pattern">{metaNaming.pattern}</p>
          <p className="micro first">
            예: <b>{metaNaming.example}</b> = 자사몰 전환 · 릴스 · 돔사용법 · ver.3
          </p>
          <div className="naming-grid">
            <div>
              <h4>캠페인 / 목적</h4>
              <ul>
                {metaNaming.purpose.map((p) => (
                  <li key={p.code}>
                    <b>{p.code}</b> {p.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>소재 형식</h4>
              <ul>
                {metaNaming.format.map((p) => (
                  <li key={p.code}>
                    <b>{p.code}</b> {p.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>노션 표시</h4>
              <ul>
                {metaNaming.marks.map((p) => (
                  <li key={p.label}>
                    <span aria-hidden="true">{p.icon}</span> {p.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <h3 className="sub-head">소재 운영 원칙</h3>
        <Reveal>
          <ol className="sa-principles four">
            {metaRules.map((r) => (
              <li key={r.title}>
                <b>{r.title}</b>
                <span>{r.body}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <h3 className="sub-head">매주 이렇게 돌아갑니다</h3>
        <Reveal>
          <ol className="meta-cycle">
            {metaCycle.map((c, i) => (
              <li key={c.step}>
                <small>{i + 1}</small>
                <b>{c.step}</b>
                <span>{c.sub}</span>
              </li>
            ))}
          </ol>
          <p className="micro">
            소재 종료 사유 예시: {metaEndReasons.join(" · ")}. 사유는 노션 DB의 '정리' 칸에 남깁니다.
          </p>
        </Reveal>

        <h3 className="sub-head">{metaWeek.label}</h3>
        <Reveal>
          <div className="table-wrap">
            <table className="table compact">
              <thead>
                <tr>
                  <th scope="col">소재</th>
                  <th scope="col">캠페인</th>
                  <th scope="col">스타일</th>
                  <th scope="col">제품</th>
                  <th scope="col">형식</th>
                  <th scope="col">상태</th>
                </tr>
              </thead>
              <tbody>
                {metaWeek.items.map((it) => (
                  <tr key={it.name} className={it.state === "종료" ? "ended" : undefined}>
                    <th scope="row">
                      {it.name}
                      {it.note && <small className="muted-small"> · {it.note}</small>}
                    </th>
                    <td>{it.camp}</td>
                    <td>
                      <span className={`style-chip ${it.style}`}>{it.style === "A" ? "A 기능형" : "B 브랜드형"}</span>
                    </td>
                    <td>{it.product}</td>
                    <td>{it.type}</td>
                    <td>
                      <span className={`state-chip ${it.state === "종료" ? "end" : it.state === "신규진행" ? "new" : ""}`}>{it.state}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <aside className="observe">
            <h3>{metaObserve.title}</h3>
            <div className="observe-facts">
              {metaObserve.facts.map((f) => (
                <div key={f.big}>
                  <b>{f.big}</b>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            {metaObserve.body.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </aside>
        </Reveal>

        <p className="micro sources">
          {metaSources}{" "}
          <a href={NOTION_URL} className="inline-link" target="_blank" rel="noopener noreferrer">
            노션 원문 ↗
          </a>
        </p>
      </div>
    </section>
  );
}
