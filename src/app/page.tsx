/* eslint-disable @next/next/no-img-element */
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import IcpTabs from "@/components/IcpTabs";
import Checklist from "@/components/Checklist";
import Faq from "@/components/Faq";
import FloatingButton from "@/components/FloatingButton";
import {
  allowed,
  banned,
  brand,
  brandQuestion,
  funnelGaps,
  funnelNote,
  funnels,
  intro,
  landings,
  b2b,
  brandUsps,
  budget,
  channelRoles,
  characterPairs,
  conclusion,
  copyOrders,
  ecozen,
  finalLines,
  history,
  icps,
  matrix,
  matrixCols,
  messageOrder,
  neverDefault,
  officialLinks,
  openItems,
  productLook,
  products,
  season,
  stats,
  targetFrame,
  visualByGroup,
  visualRoles,
  visualRules,
  worries,
} from "@/content/foodle";

const NAV = [
  { href: "#lineup", label: "제품" },
  { href: "#icp", label: "타겟" },
  { href: "#usp", label: "USP" },
  { href: "#funnel", label: "퍼널·집행" },
  { href: "#worry", label: "고민" },
  { href: "#visual", label: "비주얼" },
  { href: "#guide", label: "가이드" },
  { href: "#check", label: "검수" },
  { href: "#faq", label: "FAQ" },
  { href: "#b2b", label: "부록 B2B" },
];

const pct = (day: number) => `${(day / season.days) * 100}%`;

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a href="#top" className="brandmark" aria-label="Foodle 맨 위로">
            Foodle
          </a>
          <nav className="nav-links" aria-label="주요 섹션">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav-link">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#check" className="btn btn-filled">
            소재 검수
          </a>
        </div>
      </header>

      <main id="top">
        {/* 1. Hero — Photography first */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <Reveal>
                <p className="eyebrow">{intro.eyebrow}</p>
                <h1 className="h-xl">{brand.promise}</h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="lede">
                  Foodle은 {brand.positioning}입니다. {brand.definition}.
                </p>
                <blockquote className="origin">
                  {brandQuestion.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                  <footer>{brandQuestion.answer}</footer>
                </blockquote>
              </Reveal>
              <Reveal delay={240}>
                <div className="purpose">
                  <b>이 페이지의 목적</b>
                  <span>{intro.purpose}</span>
                  <span className="purpose-order">
                    읽는 순서: {intro.order.join(" → ")}
                  </span>
                </div>
                <div className="purpose check">
                  <b>{intro.checkTitle}</b>
                  <span>{intro.check}</span>
                </div>
                <div className="hero-actions">
                  <a href="#lineup" className="btn btn-filled btn-lg">
                    제품부터 보기
                  </a>
                  <a href="#ask" className="btn btn-outline btn-lg">
                    부탁드리는 점 보기
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <figure className="hero-photo">
                <img
                  src="/images/oval-hero.jpg"
                  alt="돔 커버를 덮은 옐로우 Oval Dome과 딥그린 Oval Dome이 놓인 모습"
                  width={1800}
                  height={1013}
                  fetchPriority="high"
                />
                <figcaption>Oval Dome — 접시, 볼, 돔 커버 3in1</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* 핵심 제품 4종 — ICP 이전에 컬러와 형태를 먼저 */}
        <section id="lineup" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Core Products</p>
              <h2 className="h-lg">핵심 제품 4종, 색과 형태부터.</h2>
            </Reveal>
            <div className="lineup">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <article className="lineup-card">
                    <img src={p.image} alt={`${p.name} 제품 사진`} width={900} height={675} loading="lazy" />
                    <h3>{p.name}</h3>
                    <p className="lineup-price">
                      {p.price} · {p.spec}
                    </p>
                    <p className="lineup-form">{productLook[p.name].form}</p>
                    <p className="lineup-tag">{p.tagline}</p>
                    <ul className="swatches" aria-label={`${p.name} 컬러`}>
                      {productLook[p.name].swatches.map((s) => (
                        <li key={s.name}>
                          <i style={{ background: s.hex }} aria-hidden="true" />
                          {s.name}
                        </li>
                      ))}
                    </ul>
                    <a href={p.url} className="lineup-link" target="_blank" rel="noopener noreferrer">
                      {p.name} 상세페이지 보기 ↗
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ICP */}
        <section id="icp" className="section bg-cream">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Ideal Customer Profile</p>
              <h2 className="h-lg">누구에게 말하는가: 30~60대 여성, 다섯 타겟</h2>
              <p className="lede">{targetFrame.lede}</p>
            </Reveal>

            <Reveal>
              <div className="frame">
                <div className="frame-common">
                  <span className="frame-tag">공통 타겟</span>
                  <b>{targetFrame.common}</b>
                  <p>{targetFrame.commonNote}</p>
                </div>
                {targetFrame.groups.map((g) => (
                  <div key={g.key} className="frame-group">
                    <span className="frame-tag">{g.key}그룹</span>
                    <b>{g.title}</b>
                    <p>{g.desc}</p>
                    <small>{g.codes}</small>
                  </div>
                ))}
              </div>
              <ul className="frame-notes">
                {targetFrame.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="matrix">
                <h3>제품 × ICP 매트릭스</h3>
                <div className="matrix-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="sr-only">제품</span>
                        </th>
                        {matrixCols.map((c) => (
                          <th key={c} scope="col">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {matrix.map((row) => (
                        <tr key={row.product}>
                          <td>{row.product}</td>
                          {row.cells.map((c, i) => (
                            <td
                              key={i}
                              aria-label={c === "●" ? "주력" : c === "○" ? "보조" : c === "?" ? "유력, 테스트 중" : "운영 안 함"}
                            >
                              {c === "?" ? (
                                <span className="dot-test">
                                  <span className="dot-lead">●</span>
                                  <small>(테스트 ing)</small>
                                </span>
                              ) : (
                                <span className={c === "●" ? "dot-lead" : c === "○" ? "dot-sub" : "dot-none"}>{c}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="matrix-legend">
                  ● 주력 (예산 집중) · ○ 보조 (세트·조합 장면에만) ● (테스트 ing) 유력하게 검증 중 · — 운영 안 함. 타겟명(A1~B2)은 콘텐츠·퍼포먼스 소통에서 함께 쓰는 이름입니다.
                </p>
                <p className="matrix-alert">
                  <b>테스트 ing:</b> Plate07·Plate05 × A1·A2 네 칸은 모두 유력한 매칭으로 보고 광고 데이터로 테스트 중입니다. 결과를 보고 주력을 확정해 갑니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <IcpTabs />
            </Reveal>
          </div>
        </section>

        {/* 4. USP — Charcoal band */}
        <section id="usp" className="section band-dark">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Unique Selling Proposition</p>
              <h2 className="h-lg">무엇으로 말하는가: 세 가지 차별점</h2>
              <p className="lede">
                예뻐서 고르고, 실용성에 반하고, 가치에 끌립니다. 아래 세 가지가 모든 ICP의 USP 뿌리이고, ICP마다 다른 말로 풀어 씁니다.
              </p>
            </Reveal>

            {brandUsps.map((u, i) => (
              <div key={u.no} className={`usp-block${i % 2 ? " flip" : ""}`}>
                <Reveal className="usp-text">
                  <span className="usp-no">{u.no}</span>
                  <h3 className="usp-title">{u.title}</h3>
                  <p className="usp-lead">{u.lead}</p>
                  <p className="usp-body">{u.body}</p>
                </Reveal>
                <Reveal delay={120}>
                  {"image" in u && u.image ? (
                    <figure className="usp-figure">
                      <img src={u.image as string} alt="" width={900} height={600} loading="lazy" />
                      <ul className="usp-facts">
                        {u.facts.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </figure>
                  ) : (
                    <div className="fact-card">
                      <h4>Fact · 증명</h4>
                      <ul>
                        {u.facts.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>
              </div>
            ))}

            <Reveal>
              <div className="map">
                <h3>ICP별 USP 풀이</h3>
                {icps.map((icp) => (
                  <div key={icp.code} className="map-row">
                    <div className="map-scene">
                      {icp.scene}
                      <small>
                        {icp.code} · {icp.product}
                      </small>
                    </div>
                    {icp.usps.map((u) => (
                      <div key={u.name} className="map-usp">
                        {u.name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 퍼널 구조 */}
        <section id="funnel" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Funnel</p>
              <h2 className="h-lg">고객은 어디서 들어와 어디서 구매하나요.</h2>
              <p className="lede">광고 채널별 유입 경로와 랜딩, 운영 주체입니다. 자사몰로 오는 유입은 메타 하나이고, 네이버 검색광고는 스마트스토어로만 갑니다.</p>
            </Reveal>
            <div className="funnels">
              {funnels.map((f, i) => (
                <Reveal key={f.from} delay={i * 100}>
                  <div className="funnel">
                    <div className="funnel-from">
                      <b>{f.from}</b>
                      <small>{f.role}</small>
                      <small className="funnel-owner">{f.owner}</small>
                      {f.ads && (
                        <ul className="funnel-ads" aria-label="운영 광고 유형">
                          {f.ads.map((a) => (
                            <li key={a}>{a}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span className="funnel-arrow" aria-hidden="true">
                      →
                    </span>
                    <div className="funnel-to">
                      {f.to.map((t) => (
                        <div key={t.name} className="funnel-dest">
                          <b>{t.name}</b>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="micro">{funnelNote}</p>

            <h3 className="sub-head">랜딩별 현재 상태</h3>
            <div className="landings">
              {landings.map((l, i) => (
                <Reveal key={l.name} delay={i * 80}>
                  <article className={`landing ${l.tone}`}>
                    <h4>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-link">
                        {l.name} ↗
                      </a>
                    </h4>
                    {l.conv && (
                      <p className="landing-conv">
                        <b>{l.conv}</b> 클릭 대비 구매
                      </p>
                    )}
                    <ul className="landing-in" aria-label="들어오는 유입">
                      {l.inflow.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <p>{l.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="micro">전환율은 같은 메타 소재 · 같은 제품(Plate07) 기준, 9월 말 수치입니다.</p>

            <h3 className="sub-head">아직 이어지지 않은 길</h3>
            <Reveal>
              <ul className="gaps">
                {funnelGaps.map((g) => (
                  <li key={g.from + g.to}>
                    <span className="gap-path">
                      {g.from} <i aria-hidden="true">⇢</i> {g.to}
                    </span>
                    <span>{g.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 6. 집행 구조 */}
        <section id="exec" className="section bg-cream">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Execution</p>
              <h2 className="h-lg">신뢰는 이미 있습니다. 부족한 건 “내 식탁의 장면”입니다.</h2>
              <p className="lede">
                광고는 발견 엔진이 아닙니다. 오가닉·크리에이터·검색 의도가 발견을 맡고, 광고는 반응이 증명된 콘텐츠와 구매 의도가 높은 순간에만 씁니다.
              </p>
            </Reveal>

            <h3 className="sub-head">시즌 로드맵 · 2026.10.20 ~ 2027.01.17</h3>
            <Reveal>
              <div className="season" role="img" aria-label="시즌 로드맵: 11/16~12/20 선물 피크, 12/26 건강한 한 끼로 전환, 1월 신학기">
                <div className="season-axis">
                  {season.months.map((m) => (
                    <span key={m.label} style={{ left: pct(m.at) }}>
                      {m.label}
                    </span>
                  ))}
                </div>
                {season.lanes.map((l) => (
                  <div key={l.label} className="season-lane">
                    <div className="season-label">
                      {l.label}
                      <small>{l.note}</small>
                    </div>
                    <div className="season-track">
                      <i
                        className={`season-bar ${l.tone}`}
                        style={{ left: pct(l.start), width: `calc(${pct(l.end)} - ${pct(l.start)})` }}
                      >
                        {"peakFrom" in l && l.peakFrom !== undefined && (
                          <b style={{ left: `calc(${((l.peakFrom - l.start) / (l.end - l.start)) * 100}%)` }} />
                        )}
                      </i>
                    </div>
                  </div>
                ))}
                <div className="season-lane marks">
                  <div className="season-label">
                    기준일
                    <small>테스트 · 판정 · 전환</small>
                  </div>
                  <div className="season-track">
                    {season.marks.map((m) => (
                      <span key={m.label} className="season-mark" style={{ left: pct(m.at) }}>
                        <i />
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <h3 className="sub-head">광고비 배분 · 전체 대비 비중</h3>
            <Reveal>
              <div className="budget">
                <div className="budget-legend">
                  <span>
                    <i className="b-meta" />
                    Meta {budget.split.meta / 2}%
                  </span>
                  <span>
                    <i className="b-sa" />
                    Naver SA {budget.split.sa / 2}%
                  </span>
                  <span>
                    <i className="b-da" />
                    Naver DA {budget.split.da / 2}% (계획 · 현재 미운영)
                  </span>
                  <span className="unit">전체 광고비 = 100%</span>
                </div>
                {budget.rows.map((r) => {
                  const total = r.meta + r.sa + r.da;
                  const share = (v: number) => `${v / 2}`;
                  return (
                    <div key={r.label} className="budget-row">
                      <div className="budget-label">{r.label}</div>
                      <div className="budget-bar" style={{ width: `${(total / 52) * 100}%` }}>
                        {r.meta > 0 && (
                          <span className="b-meta" style={{ flexGrow: r.meta }}>
                            {share(r.meta)}
                          </span>
                        )}
                        {r.sa > 0 && (
                          <span className="b-sa" style={{ flexGrow: r.sa }}>
                            {share(r.sa)}
                          </span>
                        )}
                        {r.da > 0 && (
                          <span className="b-da" style={{ flexGrow: r.da }}>
                            {share(r.da)}
                          </span>
                        )}
                      </div>
                      <div className="budget-total">{share(total)}%</div>
                    </div>
                  );
                })}
                <p className="micro">{budget.note}. 절대 금액은 공유 범위에서 제외했습니다.</p>
              </div>
            </Reveal>

            <h3 className="sub-head">채널별 역할</h3>
            <Reveal>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">채널</th>
                      <th scope="col">주 역할</th>
                      <th scope="col">주 ICP</th>
                      <th scope="col">발행 · 운영</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelRoles.map((c) => (
                      <tr key={c.channel}>
                        <th scope="row">{c.channel}</th>
                        <td>{c.role}</td>
                        <td>{c.icp}</td>
                        <td>{c.ops}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 현재의 고민 */}
        <section id="worry" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Current Challenges</p>
              <h2 className="h-lg">지금 Foodle이 집중하는 고민.</h2>
              <p className="lede">{worries.summary}</p>
            </Reveal>

            <Reveal>
              <div className="numbers">
                {worries.numbers.map((n) => (
                  <div key={n.big} className="number">
                    <b>{n.big}</b>
                    <span>{n.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <h3 className="sub-head">현황</h3>
            <Reveal>
              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    {worries.status.map((r) => (
                      <tr key={r.k}>
                        <th scope="row">{r.k}</th>
                        <td>{r.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="micro">{worries.statusNote}</p>
            </Reveal>

            <h3 className="sub-head">해결하고 싶은 문제</h3>
            <Reveal>
              <p className="micro first">{worries.problemNote}</p>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">문제</th>
                      <th scope="col">지금 보이는 것</th>
                      <th scope="col">함께 풀 곳</th>
                    </tr>
                  </thead>
                  <tbody>
                    {worries.problems.map((r) => (
                      <tr key={r.no} className={r.main ? "row-main" : undefined}>
                        <th scope="row">{r.no}</th>
                        <td>
                          <b>{r.title}</b>
                        </td>
                        <td>{r.seen}</td>
                        <td>{r.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="micro">
                {worries.metaNote}{" "}
                <a href={worries.metaSource.href} target="_blank" rel="noopener noreferrer" className="inline-link">
                  출처: {worries.metaSource.label}
                </a>
              </p>
            </Reveal>

            <h3 className="sub-head">바라는 방향</h3>
            <Reveal>
              <p className="lede">{worries.directionLead}</p>
              <ol className="directions">
                {worries.directions.map((d) => (
                  <li key={d.title}>
                    <b>{d.title}</b>
                    <span>{d.body}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <h3 className="sub-head">AMPM과 함께 하고 싶은 것</h3>
            <Reveal>
              <p className="lede">{worries.asksLead}</p>
              <ul className="asks">
                {worries.asks.map((a) => (
                  <li key={a.title}>
                    <b>{a.title}</b>
                    <span>{a.body}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 5. 비주얼 디렉션 */}
        <section id="visual" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Visual Direction</p>
              <h2 className="h-lg">따뜻한 생활의 장면을, 산업디자인의 정제된 시선으로.</h2>
              <p className="lede">
                사진이 먼저이고 그래픽은 그다음입니다. 사진은 세 가지 역할을 맡고, 한 컷은 한 가지 반응만 노립니다.
              </p>
            </Reveal>

            <div className="roles">
              {visualRoles.map((r, i) => (
                <Reveal key={r.role} delay={i * 100}>
                  <figure className="role">
                    <div className={`role-imgs n${r.images.length}`}>
                      {r.images.map((src) => (
                        <img key={src} src={src} alt={r.alt} width={900} height={675} loading="lazy" />
                      ))}
                    </div>
                    <figcaption>
                      <span className="role-name">{r.role}</span>
                      <span className="role-reaction">{r.reaction}</span>
                      <span className="role-show">{r.show}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="visual-cols">
                <div>
                  <h3 className="mini-head">기본 규칙</h3>
                  <ul className="plain-list">
                    {visualRules.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                  <h3 className="mini-head">입구별 순서</h3>
                  <ul className="plain-list">
                    {visualByGroup.map((v) => (
                      <li key={v.group}>
                        <b>{v.group}</b> {v.rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mini-head">기본값으로 쓰지 않는 것</h3>
                  <ul className="plain-list never">
                    {neverDefault.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                  <p className="micro">
                    <b>지속가능성은 초록 잎이나 지구 심볼이 아니라, 매일 반복되는 장면으로 보여줍니다.</b>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. 대행사 가이드 */}
        <section id="guide" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Agency Guide</p>
              <h2 className="h-lg">소재를 만들기 전에 알아둘 것</h2>
              <p className="lede">
                사실은 아래 제품 정보에 있는 것만 씁니다. 표에 없는 수치·효능·인증은 만들지 않습니다.
              </p>
            </Reveal>

            <h3 className="sub-head">제품 Fact</h3>
            <div className="products">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <article className="product">
                    <img src={p.image} alt={`${p.name} 제품 사진`} width={900} height={675} loading="lazy" />
                    <h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        {p.name} ↗
                      </a>
                    </h3>
                    <span className="price">{p.price}</span>
                    <span className="small">
                      {p.material} · {p.spec}
                    </span>
                    <span className="small">{p.colors}</span>
                    <p className="fact">{p.fact}</p>
                    <p className="shop-line">공식몰 소개 · {p.tagline}</p>
                    <span className="lead">주력 ICP · {p.lead}</span>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="ecozen">ECOZEN™ (Oval · Plate07 · Plate05): {ecozen}</p>

            <h3 className="sub-head">메시지 순서와 톤</h3>
            <Reveal>
              <div className="steps" aria-label="메시지 순서">
                {messageOrder.map((s, i) => (
                  <span key={s} style={{ display: "contents" }}>
                    <span className="step">
                      <i>{i + 1}</i>
                      {s}
                    </span>
                    {i < messageOrder.length - 1 && (
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <div className="pairs" aria-label="브랜드 성격">
                {characterPairs.map((p) => (
                  <span key={p.is} className="pair">
                    <b>{p.is}</b>
                    <s>{p.not}</s>
                  </span>
                ))}
              </div>
              <p className="micro">Quiet Confidence — 정제된 · 다정한 · 실용적인 · 자신감 있는. 조용하지만 분명하게 말합니다.</p>
            </Reveal>

            <h3 className="sub-head">채널별 문장 순서</h3>
            <Reveal>
              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    {copyOrders.map((c) => (
                      <tr key={c.channel}>
                        <th scope="row">{c.channel}</th>
                        <td>{c.order}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <h3 className="sub-head">표현 가이드</h3>
            <Reveal>
              <div className="dd">
                <div className="dd-col no">
                  <h3>쓰지 않는 말 → 대신 쓰는 말</h3>
                  {banned.map((b) => (
                    <div key={b.say} className="ban-row">
                      <span className="ban-say">{b.say}</span>
                      <span className="ban-instead">{b.instead}</span>
                    </div>
                  ))}
                </div>
                <div className="dd-col yes">
                  <h3>사용 가능한 사실</h3>
                  <ul className="yes-list">
                    {allowed.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="micro">
                <b>조건부(*) 표현</b>은 근거 확인 전에는 대체 문구와 함께 씁니다. 친환경은 첫 문장에 두지 않습니다.
              </p>
              <h3 className="mini-head">근거 확인 전까지 쓰지 않는 표현</h3>
              <ul className="plain-list never">
                {openItems.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 8. 검수 체크리스트 */}
        <section id="check" className="section bg-cream">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Final Checklist</p>
              <h2 className="h-lg">소재를 내보내기 전에, 열 가지를 확인하세요.</h2>
              <p className="lede">하나라도 “아니오”면 수정한 뒤에 집행합니다.</p>
            </Reveal>
            <Reveal>
              <Checklist />
            </Reveal>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="section bg-white">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">FAQ</p>
              <h2 className="h-lg">자주 묻는 질문</h2>
            </Reveal>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* 근거 띠 — 서브 히스토리는 뒤쪽 */}
        <section className="proof" aria-label="판매 및 신뢰 근거">
          <div className="wrap">
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <CountUp to={s.to} suffix={s.suffix} />
                  <p className="stat-label">{s.label}</p>
                  <p className="stat-sub">{s.sub}</p>
                </Reveal>
              ))}
            </div>
            <div className="history" aria-label="연혁 (공식 사이트 발췌)">
              {history.map((h) => (
                <div key={h.year} className="history-col">
                  <h3>{h.year}</h3>
                  <ul>
                    {h.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. 최종 */}
        <section id="ask" className="section band-green final">
          <div className="wrap final-grid">
            <Reveal>
              <p className="eyebrow">{conclusion.eyebrow}</p>
              <h2 className="h-lg">{conclusion.title}</h2>
              <p className="final-lede">{conclusion.lede}</p>
              <ol className="final-points">
                {conclusion.points.map((p) => (
                  <li key={p.title}>
                    <b>{p.title}</b>
                    <span>{p.body}</span>
                  </li>
                ))}
              </ol>
              <div className="final-actions">
                <a href={officialLinks[0].href} className="btn btn-white btn-lg" target="_blank" rel="noopener noreferrer">
                  공식몰 보기
                </a>
                <a href={officialLinks[1].href} className="btn btn-ghost-dark btn-lg" target="_blank" rel="noopener noreferrer">
                  스마트스토어
                </a>
                <a href={officialLinks[2].href} className="btn btn-ghost-dark btn-lg" target="_blank" rel="noopener noreferrer">
                  인스타그램
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">{conclusion.linesTitle}</p>
              <ul className="final-lines">
                {finalLines.map((f) => (
                  <li key={f.code}>
                    <span>{f.code}</span>
                    {f.line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 부록: B2B 퍼널 */}
        <section id="b2b" className="section bg-cream">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">Appendix · B2B</p>
              <h2 className="h-lg">부록. B2B 퍼널</h2>
              <p className="lede">{b2b.lede}</p>
            </Reveal>

            <h3 className="sub-head">타겟 2명 · 랜딩</h3>
            <div className="b2b-targets">
              {b2b.targets.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <a href={t.url} className="b2b-target" target="_blank" rel="noopener noreferrer">
                    <b>{t.name}</b>
                    <span>{t.path} ↗</span>
                  </a>
                </Reveal>
              ))}
            </div>

            <h3 className="sub-head">흐름</h3>
            <Reveal>
              <div className="b2b-flow">
                {b2b.flow.map((f, i) => (
                  <span key={f.step} style={{ display: "contents" }}>
                    <div className="b2b-step">
                      <b>{f.step}</b>
                      <small>{f.sub}</small>
                    </div>
                    {i < b2b.flow.length - 1 && (
                      <span className="funnel-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <ul className="plain-list">
                {b2b.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="micro">{b2b.status}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            <b>Foodle</b> · 주식회사 푸들 (Foodle Inc.)
          </p>
          <p>B2C ICP &amp; 실행 플레이북 {brand.version} · 광고 대행사 공유용</p>
          <p>제품 사진·연혁 출처: (주)푸들 브랜드소개서 2026.10 및 foodle.biz. 페르소나는 가상 인물이며 가설입니다.</p>
          <p className="footer-links">
            {officialLinks.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </p>
          <p>© 2026 Foodle Inc.</p>
        </div>
      </footer>

      <FloatingButton />
    </>
  );
}
