import Reveal from "@/components/Reveal";
import {
  saAsks,
  saBudget,
  saAssign,
  saAssignNote,
  saCampaigns,
  saImprove,
  saLeverNote,
  saLevels,
  saLevers,
  saPrinciples,
  saSources,
  saStatus,
  saSummary,
} from "@/content/sa";

export default function SaSection() {
  return (
    <section id="sa" className="section bg-white">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Naver SA · 검색광고 위계</p>
          <h2 className="h-lg">네이버 검색광고는 사람(A1~B2) 기준으로 이렇게 짜여 있습니다.</h2>
          <p className="lede">
            캠페인은 타겟, 광고그룹은 그 타겟이 찾는 검색어 묶음, 소재는 제품별 소재명·문구·이미지입니다. 아래는 최근 구조와 현황, 그리고 더 개선이 필요한 부분입니다.
          </p>
        </Reveal>

        <Reveal>
          <div className="sa-summary">
            {saSummary.map((s) => (
              <div key={s.label} className="sa-sum">
                <b>{s.value}</b>
                <span>{s.label}</span>
                <small>{s.sub}</small>
              </div>
            ))}
          </div>
          <ol className="sa-levels" aria-label="위계 구조">
            {saLevels.map((l, i) => (
              <li key={l.level}>
                <b>
                  {i + 1}. {l.level}
                </b>
                <span>{l.desc}</span>
                {i < saLevels.length - 1 && <i aria-hidden="true">→</i>}
              </li>
            ))}
          </ol>
        </Reveal>

        <h3 className="sub-head">캠페인별 광고그룹 구성</h3>
        <div className="sa-camps">
          {saCampaigns.map((c, i) => (
            <Reveal key={c.code} delay={i * 60}>
              <article className="sa-camp">
                <header>
                  <span className="sa-code">{c.code}</span>
                  <span className={`sa-role ${c.role}`}>{c.role === "운영" ? "운영" : c.role}</span>
                </header>
                <h4>{c.name}</h4>
                <p className="sa-prod">{c.products}</p>
                <ul className="sa-groups">
                  {c.groups.map((g) => (
                    <li key={g.name} className={g.flag}>
                      <span>{g.name}</span>
                      {g.flagText && <em>{g.flagText}</em>}
                    </li>
                  ))}
                </ul>
                <small>{c.note}</small>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="micro">
          주황 표시는 개선이나 선행 조치가 필요한 그룹, 초록 표시는 신규 그룹입니다. 제품–캠페인 배정은 확정이며, 단독 캠페인(A1 Plate07, A2 Plate05, B1 Oval Dome)과 다제품 캠페인(A3 확장, B2 탐색)으로 나뉩니다.
        </p>

        <h3 className="sub-head">그룹을 구분하는 방법</h3>
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">요소</th>
                  <th scope="col">단위</th>
                  <th scope="col">그룹별 차별화</th>
                  <th scope="col">이번 작업</th>
                </tr>
              </thead>
              <tbody>
                {saLevers.map((r) => (
                  <tr key={r.element}>
                    <th scope="row">{r.element}</th>
                    <td>{r.unit}</td>
                    <td>
                      <span className={r.can ? "yes-chip" : "no-chip"}>{r.can ? "가능" : "불가"}</span>
                    </td>
                    <td>{r.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="micro">{saLeverNote}</p>
          <ol className="sa-principles">
            {saPrinciples.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.body}</span>
              </li>
            ))}
          </ol>
          <div className="sa-assign">
            {saAssign.map((a) => (
              <span key={a.product}>
                <b>{a.product}</b> → {a.to}
              </span>
            ))}
          </div>
          <p className="micro">{saAssignNote}</p>
        </Reveal>

        <h3 className="sub-head">{saStatus.title}</h3>
        <Reveal>
          {saStatus.lines.map((l) => (
            <p key={l} className="sa-line">
              {l}
            </p>
          ))}
          <ol className="sa-steps">
            {saStatus.steps.map((s) => (
              <li key={s.when}>
                <span className="sa-when">{s.when}</span>
                <b>{s.what}</b>
                <small>{s.sub}</small>
              </li>
            ))}
          </ol>
        </Reveal>

        <h3 className="sub-head">{saBudget.title}</h3>
        <Reveal>
          <div className="nb">
            <article className="nb-card now">
              <span className="nb-tag">{saBudget.now.label}</span>
              <h4>{saBudget.now.total}</h4>
              <ul>
                {saBudget.now.lines.map((l) => (
                  <li key={l.name}>
                    <div className="nb-row">
                      <b>{l.name}</b>
                      <span>{l.budget}</span>
                    </div>
                    <div className="nb-roas">
                      <div className="nb-track" aria-hidden="true">
                        <i className={l.roasVal >= 350 ? "ok" : "low"} style={{ width: `${(l.roasVal / 450) * 100}%` }} />
                        <em style={{ left: `${(350 / 450) * 100}%` }} />
                      </div>
                      <strong>{l.roas}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="micro">{saBudget.roasNote}</p>
            </article>
            <span className="nb-arrow" aria-hidden="true">
              →
            </span>
            <article className="nb-card next">
              <span className="nb-tag">{saBudget.next.label}</span>
              <h4>{saBudget.next.total}</h4>
              <ul>
                {saBudget.next.lines.map((l) => (
                  <li key={l.name}>
                    <div className="nb-row">
                      <b>{l.name}</b>
                      <span>{l.budget}</span>
                    </div>
                    <small>{l.note}</small>
                  </li>
                ))}
              </ul>
              <div className="nb-b2b">
                {saBudget.next.b2b.map((b) => (
                  <span key={b.name}>
                    {b.name} <b>{b.budget}</b>
                  </span>
                ))}
              </div>
            </article>
          </div>
          <p className="sa-line">{saBudget.direction}</p>
          <p className="goal-question">{saBudget.core}</p>
        </Reveal>

        <h3 className="sub-head">추가 개선이 필요한 부분</h3>
        <div className="sa-improve">
          {saImprove.map((x, i) => (
            <Reveal key={x.title} delay={i * 60}>
              <article className={`sa-imp ${x.tone}`}>
                <span className="sa-tag">{x.tag}</span>
                <h4>{x.title}</h4>
                <p>{x.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h3 className="sub-head">AMPM에 확인 요청드리는 것</h3>
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">순위</th>
                  <th scope="col">항목</th>
                  <th scope="col">상태</th>
                </tr>
              </thead>
              <tbody>
                {saAsks.map((a) => (
                  <tr key={a.no} className={a.status === "선행 필수" ? "row-main warnrow" : undefined}>
                    <th scope="row">{a.no}</th>
                    <td>{a.item}</td>
                    <td>
                      <span className={`ask-chip ${a.status === "선행 필수" ? "must" : ""}`}>{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="micro sources">{saSources}</p>
      </div>
    </section>
  );
}
