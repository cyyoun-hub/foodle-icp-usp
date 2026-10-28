/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./gm.css";
import GmNav from "@/components/global/GmNav";
import GlobalFilterBar from "@/components/global/GlobalFilterBar";
import AudienceExplorer from "@/components/global/AudienceExplorer";
import BudgetScope, { ScopeBadge } from "@/components/global/BudgetScope";
import KeywordExplorer from "@/components/global/KeywordExplorer";
import ActionBoard from "@/components/global/ActionBoard";
import { brand, ecozen, icpMeta, icpNames, icps, matrix, matrixCols, products, STATUS_LABEL } from "@/content/foodle";
import {
  b2cGoogle,
  b2cGoogleNote,
  GM_UPDATED,
  gmAdCopy,
  gmAudiences,
  gmB2bIcps,
  gmB2bNote,
  gmCampaignRules,
  gmCampaigns,
  gmCardExamples,
  gmCardFormat,
  gmCardNote,
  gmContent,
  gmDataSources,
  gmExclusions,
  gmFunnelNote,
  gmFunnels,
  gmKeywordNotes,
  gmKeywords,
  gmKpi,
  gmKpiNotes,
  gmKpiTable,
  gmLandingCheckDate,
  gmLandingChecks,
  gmLinkedin,
  gmMeta,
  gmOverview,
  gmPhaseNote,
  gmPhases,
  gmReferenceNote,
  gmReferences,
  gmReporting,
  gmSources,
  landingMap,
  productB2b,
  productMsg,
  productNotes,
  REF_KIND,
  VERIFY_LABEL,
  type Verify,
} from "@/content/global";

export const metadata: Metadata = {
  title: "Foodle Global Marketing Playbook | Google Ads & LinkedIn",
  description: "Foodle의 글로벌 Google Ads · LinkedIn 마케팅 대행사 공유용 플레이북. 타깃, 키워드, 캠페인 구조, 랜딩, KPI, 실행 체크리스트.",
  // 대행사 공유용이므로 검색 노출은 막는다.
  robots: { index: false, follow: false },
};

const State = ({ v }: { v: Verify }) => <span className={`gm-state gm-state-${v}`}>{VERIFY_LABEL[v]}</span>;

const Head = ({ no, eyebrow, title, lede }: { no: string; eyebrow: string; title: string; lede?: string }) => (
  <div className="section-head gm-head">
    <p className="eyebrow">
      {no} · {eyebrow}
    </p>
    <h2 className="h-lg">{title}</h2>
    {lede && <p className="lede">{lede}</p>}
  </div>
);

// 매트릭스(foodle.ts)에서 타겟별 메인 · 후보 · 서브 제품을 읽는다. 확정되지 않은 칸(?)은 후보로 둔다.
const roles = (code: string) => {
  const j = (matrixCols as readonly string[]).indexOf(code);
  const pick = (sym: string) => matrix.filter((r) => r.cells[j] === sym).map((r) => r.product);
  return { main: pick("●"), cand: pick("?"), sub: pick("○") };
};

export default function GlobalMarketingPage() {
  return (
    <>
      <GmNav />

      <main id="top" className="gm">
        <GlobalFilterBar />
        {/* HERO + 타깃 구성 그래프 */}
        <section className="gm-hero">
          <div className="wrap">
            <div className="gm-hero-grid">
              <div>
                <p className="eyebrow">Foodle · {brand.promise}</p>
                <h1 className="h-xl">{gmMeta.title}</h1>
                <p className="gm-sub">{gmMeta.subtitle}</p>
                <p className="lede">
                  {gmMeta.audience}을 위한 실무형 마케팅 플레이북입니다. 푸들의 고객과 제품을 이해하고, 국내 구매 전환과 해외 바이어 발굴 캠페인을 설계 · 집행 · 개선하는 데 쓰입니다.
                </p>
                <p className="gm-principle">{gmMeta.principle}</p>
              </div>
              <figure className="gm-hero-photo">
                <img src="/images/oval-hero.jpg" alt="딥그린 Oval Dome이 놓인 식탁" width={900} height={675} />
              </figure>
            </div>

            <h2 className="gm-h3">마케팅 타깃 구성 (합계 100%)</h2>
            <AudienceExplorer />
          </div>
        </section>

        {/* 01 */}
        <section id="overview" className="section bg-white">
          <div className="wrap">
            <Head no="01" eyebrow="Executive Overview & Budget" title="푸들의 글로벌 마케팅이 하려는 일과 계약 범위" />
            <blockquote className="gm-quote">
              “{gmOverview.message}”<p>{gmOverview.body}</p>
            </blockquote>
            <div className="gm-grid-2">
              {gmOverview.roles.map((r) => (
                <article key={r.channel} className="gm-card">
                  <h3>{r.channel}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
            <p className="gm-line">{gmOverview.order}</p>
            <ul className="gm-chips">
              {gmOverview.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>

            <BudgetScope />
          </div>
        </section>

        {/* 02 */}
        <section id="brand" className="section bg-cream">
          <div className="wrap">
            <Head
              no="02"
              eyebrow="Brand & Product Understanding"
              title="브랜드와 제품: 광고가 말해도 되는 사실"
              lede={`${brand.positioning}. 아래 제품 정보는 ICP 원문(${brand.version})에서 확인된 사실입니다.`}
            />
            <div className="gm-products">
              {products.map((p) => {
                const r = matrix.find((m) => m.product === p.name)!;
                const mainFor = matrixCols.filter((_, j) => r.cells[j] === "●");
                const candFor = matrixCols.filter((_, j) => r.cells[j] === "?");
                const subFor = matrixCols.filter((_, j) => r.cells[j] === "○");
                const leadCode = p.lead.split("·")[0].trim();
                const lead = icps.find((i) => i.code === leadCode);
                const b2b = productB2b[p.name];
                const isEco = p.material.includes("ECOZEN");
                return (
                  <article key={p.name} className="gm-prod">
                    <img src={p.image} alt={`${p.name} ${p.ko}`} loading="lazy" width={900} height={675} />
                    <div className="gm-prod-body">
                      <header>
                        <h3>
                          {p.name} <small>{p.ko}</small>
                        </h3>
                        <span className={`gm-mat ${isEco ? "eco" : "pp"}`}>{p.material}</span>
                      </header>
                      <p className="gm-tagline">{p.tagline}</p>
                      <dl className="gm-dl gm-dl-tight">
                        <div>
                          <dt>가격</dt>
                          <dd>{p.price}</dd>
                        </div>
                        <div>
                          <dt>규격 · 색상</dt>
                          <dd>
                            {p.spec} · {p.colors}
                          </dd>
                        </div>
                        <div>
                          <dt>소재 · 기능</dt>
                          <dd>{isEco ? ecozen : "PP (BPA-Free). ECOZEN이 아닙니다. 뜨거운 음료 · 식기세척기 OK"}</dd>
                        </div>
                        <div>
                          <dt>핵심 USP</dt>
                          <dd>{p.fact}</dd>
                        </div>
                        <div>
                          <dt>권장 첫 메시지</dt>
                          <dd>{productMsg[p.name].first}</dd>
                        </div>
                        <div>
                          <dt>검증 유의</dt>
                          <dd>{productMsg[p.name].check}</dd>
                        </div>
                        {lead && (
                          <div>
                            <dt>UBP ({lead.code})</dt>
                            <dd>{lead.ubp}</dd>
                          </div>
                        )}
                        <div>
                          <dt>소비자 ICP</dt>
                          <dd>
                            {mainFor.length > 0 && <span className="gm-role main">메인 {mainFor.join(" · ")}</span>}
                            {candFor.length > 0 && <span className="gm-role cand">메인 후보(테스트 중) {candFor.join(" · ")}</span>}
                            {subFor.length > 0 && <span className="gm-role sub">서브 {subFor.join(" · ")}</span>}
                          </dd>
                        </div>
                        <div>
                          <dt>B2B 시나리오</dt>
                          <dd>
                            <span className={`gm-state gm-state-${b2b.type === "record" ? "verified" : "proposed"}`}>
                              {b2b.type === "record" ? "공급 기록 있음" : "제안 · 실적 확인 전"}
                            </span>{" "}
                            {b2b.text}
                          </dd>
                        </div>
                      </dl>
                      <a className="btn btn-outline" href={p.url} target="_blank" rel="noopener noreferrer">
                        제품 상세페이지 ↗
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <ul className="gm-notes-list">
              {productNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 */}
        <section id="audience" className="section bg-white">
          <div className="wrap">
            <Head
              no="03"
              eyebrow="Target Audience & ICP"
              title="누구에게 말하는가: 소비자 5명, 바이어 5명"
              lede="B2C는 기존 AMPM 가이드의 다섯 고객군(A1~B2)을 그대로 쓰고, B2B는 이번에 바이어 다섯 군(G1~G5)을 새로 정의했습니다."
            />

            <h3 className="sub-head">A. B2C Consumer ICP</h3>
            <div className="gm-icps">
              {icps.map((ic, idx) => {
                const g = b2cGoogle[ic.code];
                const r = roles(ic.code);
                const meta = icpMeta[ic.code];
                const rowsOf = gmKeywords.filter((k) => k.icp === ic.code);
                const clusters = Array.from(new Set(rowsOf.map((k) => k.cluster)));
                const queries = rowsOf.filter((k) => k.priority !== "P3").map((k) => k.ko);
                return (
                  <details key={ic.code} className="gm-icp" open={idx === 0} data-gm-mk="KR" data-gm-ty="B2C" style={{ ["--c" as string]: meta.accent }}>
                    <summary>
                      <span className="gm-icp-code">{ic.code}</span>
                      <span className="gm-icp-name">{icpNames[ic.code].full}</span>
                      <span className="gm-icp-pers">{ic.persona.name}</span>
                    </summary>
                    <div className="gm-icp-body">
                      <img src={meta.image} alt={meta.alt} loading="lazy" width={900} height={675} style={{ objectPosition: meta.pos }} />
                      <dl className="gm-dl">
                        <div>
                          <dt>Persona</dt>
                          <dd>
                            {ic.persona.name} — “{ic.persona.quote}” <small className="gm-muted">(가상 페르소나 · 타겟 연령 {ic.age})</small>
                          </dd>
                        </div>
                        <div>
                          <dt>Job-to-be-Done</dt>
                          <dd>{ic.job}</dd>
                        </div>
                        <div>
                          <dt>Pain Point</dt>
                          <dd>{ic.tension}</dd>
                        </div>
                        <div>
                          <dt>Purchase Trigger</dt>
                          <dd>
                            {ic.triggers.map((t) => (
                              <span key={t} className="gm-tag">
                                {t}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt>UBP</dt>
                          <dd>{ic.ubp}</dd>
                        </div>
                        <div>
                          <dt>Main Product</dt>
                          <dd>
                            {r.main.length > 0 && <span className="gm-role main">메인 {r.main.join(" · ")}</span>}
                            {r.cand.length > 0 && <span className="gm-role cand">메인 후보 · 테스트 중 {r.cand.join(" · ")}</span>}
                            {r.sub.length > 0 && <span className="gm-role sub">서브 {r.sub.join(" · ")}</span>}
                            {r.cand.length > 0 && <small className="gm-muted"> 확정된 메인이 아직 없습니다.</small>}
                          </dd>
                        </div>
                        <div>
                          <dt>Search Intent</dt>
                          <dd>{g.intent}</dd>
                        </div>
                        <div>
                          <dt>Google Ads Keyword Cluster</dt>
                          <dd>
                            {clusters.map((c) => (
                              <span key={c} className="gm-tag">
                                {c}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt>Advertising Message</dt>
                          <dd>{g.message}</dd>
                        </div>
                        <div>
                          <dt>Landing Page</dt>
                          <dd>
                            <a className="gm-link" href={g.landingUrl} target="_blank" rel="noopener noreferrer">
                              {g.landing} ↗
                            </a>
                          </dd>
                        </div>
                        <div>
                          <dt>KPI</dt>
                          <dd>{g.kpi}</dd>
                        </div>
                        <div>
                          <dt>USP</dt>
                          <dd>
                            {ic.usps.map((u) => (
                              <span key={u.name} className="gm-usp">
                                <b>{u.name}</b> {u.copy} <span className={`gm-state ${u.status === "ok" ? "gm-state-verified" : "gm-state-toverify"}`}>{STATUS_LABEL[u.status]}</span>
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt>Query examples</dt>
                          <dd>
                            {queries.slice(0, 4).map((x) => (
                              <span key={x} className="gm-tag">
                                {x}
                              </span>
                            ))}
                          </dd>
                        </div>
                        <div>
                          <dt>Hypothesis status</dt>
                          <dd>
                            {r.cand.length > 0 ? (
                              <>
                                <span className="gm-state gm-state-proposed">Hypothesis · 가설</span> 메인 제품 매칭(Plate07 · Plate05)은 AMPM이 광고 데이터로 테스트 중이며 확정된 성과가 아닙니다.
                              </>
                            ) : (
                              <>
                                <span className="gm-state gm-state-verified">Verified · 확인됨</span> 원문 ICP · 매트릭스 기준입니다. 검색 키워드와 광고 문구는 가설입니다.
                              </>
                            )}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </details>
                );
              })}
            </div>
            <p className="gm-micro">{b2cGoogleNote}</p>

            <h3 className="sub-head">B. B2B Buyer ICP</h3>
            <div className="gm-b2b">
              {gmB2bIcps.map((b) => (
                <article key={b.code} className="gm-card gm-b2b-card" data-gm-mk={b.code === "G4" ? "JP" : b.code === "G5" ? "US" : "KR"} data-gm-ty="B2B">
                  <header>
                    <span className="gm-icp-code">{b.code}</span>
                    <span className="gm-chip">{b.market}</span>
                    <span className={`gm-state gm-state-${b.proofType === "record" ? "verified" : b.proofType === "partial" ? "proposed" : "toverify"}`}>
                      {b.proofType === "record" ? "공급 기록 있음" : b.proofType === "partial" ? "전시 · 팝업 · 입점 근거" : "해당 시장 실적 없음"}
                    </span>
                  </header>
                  <h4>{b.who}</h4>
                  <p className="gm-role-line">{b.role}</p>
                  <dl className="gm-dl gm-dl-tight">
                    <div>
                      <dt>Pain Point</dt>
                      <dd>{b.pain}</dd>
                    </div>
                    <div>
                      <dt>Trigger</dt>
                      <dd>{b.trigger}</dd>
                    </div>
                    <div>
                      <dt>원하는 것</dt>
                      <dd>{b.need}</dd>
                    </div>
                    <div>
                      <dt>관련 제품</dt>
                      <dd>{b.products}</dd>
                    </div>
                    <div>
                      <dt>신뢰 근거</dt>
                      <dd>{b.proof}</dd>
                    </div>
                    <div>
                      <dt>랜딩 · 채널</dt>
                      <dd>
                        {b.landing} · {b.channel}
                      </dd>
                    </div>
                    <div>
                      <dt>KPI</dt>
                      <dd>{b.kpi}</dd>
                    </div>
                    <div>
                      <dt>CTA</dt>
                      <dd lang={b.code === "G4" ? "ja" : b.code === "G5" ? "en" : "ko"}>{b.cta}</dd>
                    </div>
                  </dl>
                  {b.scopeNote && (
                    <p className="gm-caution">
                      <span className="gm-state gm-state-toverify">To Verify</span> {b.scopeNote}
                    </p>
                  )}
                  {b.caution && <p className="gm-caution">{b.caution}</p>}
                </article>
              ))}
            </div>
            <p className="gm-micro">{gmB2bNote}</p>
          </div>
        </section>

        {/* 04 */}
        <section id="keywords" className="section bg-cream">
          <div className="wrap">
            <Head
              no="04"
              eyebrow="Multilingual Keyword Intelligence"
              title="한국어 · 영어 · 일본어 키워드 후보"
              lede="고객별로 검색하는 표현을 나눠 담았습니다. 필터와 검색으로 좁힌 뒤, 키워드를 복사하거나 CSV로 내려받아 Google Ads 편집기에서 검증하세요."
            />
            <KeywordExplorer />
            <p className="gm-micro gm-scroll-hint">표가 넓어서 화면에 다 들어오지 않으면 좌우로 밀어서 보세요. 좁은 화면에서는 카드로 바뀝니다.</p>
            <ul className="gm-notes-list">
              {gmKeywordNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 */}
        <section id="google" className="section bg-white" data-gm-ch="google">
          <div className="wrap">
            <Head
              no="05"
              eyebrow="Google Ads Campaign Architecture"
              title="캠페인 4개: 시장과 고객이 다르면 캠페인을 나눕니다"
              lede="각 캠페인은 Audience에서 Conversion까지 한 줄로 설계합니다. B2C의 ROAS와 B2B의 리드 성과는 섞지 않습니다."
            />
            <div className="gm-camps">
              {gmCampaigns.map((c) => {
                const aud = gmAudiences.find((a) => a.id === c.audienceId)!;
                return (
                  <article key={c.code} className="gm-camp" data-gm-mk={c.id.slice(0, 2)} data-gm-ty={c.id.includes("B2C") ? "B2C" : "B2B"} style={{ ["--c" as string]: aud.color }}>
                    <header>
                      <div>
                        <p className="gm-camp-code">
                          {c.code} · {c.id}
                        </p>
                        <h3>{c.name}</h3>
                      </div>
                      <State v={c.state} />
                    </header>
                    <p className="gm-camp-who">
                      {c.who} · {c.language} · 목표: <b>{c.goal}</b>
                    </p>
                    <p className="gm-adgroups">
                      <span>광고그룹</span>
                      {c.adGroups.map((x) => (
                        <em key={x}>{x}</em>
                      ))}
                    </p>
                    <ol className="gm-flow">
                      {c.steps.map((s) => (
                        <li key={s.k}>
                          <span>{s.k}</span>
                          <p>{s.v}</p>
                        </li>
                      ))}
                    </ol>
                    <p className="gm-camp-note">{c.note}</p>
                    <p className="gm-micro">
                      성과 지표: {c.metricGroup} · 광고비 풀: {c.pool} (국가 · 고객군별 세부 배분은 미확정)
                    </p>
                  </article>
                );
              })}
            </div>
            <h3 className="sub-head">광고 문구 샘플 (검토용, 확정 문안이 아님)</h3>
            <div className="gm-copies">
              {gmAdCopy.map((c) => (
                <article key={c.lang} className="gm-copy-card" lang={c.lang.startsWith("JP") ? "ja" : c.lang.startsWith("US") ? "en" : "ko"}>
                  <p className="gm-camp-code">{c.lang}</p>
                  <ul>
                    {c.headlines.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <p>{c.desc}</p>
                </article>
              ))}
            </div>

            <h3 className="sub-head">제외 키워드 초기 후보</h3>
            <div className="gm-grid-2">
              <article className="gm-card">
                <h4>
                  <span className="gm-state gm-state-proposed">Hypothesis · 가설</span> 시작 후보
                </h4>
                <ul className="gm-chips">
                  {gmExclusions.start.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
                <p className="gm-micro" style={{ marginTop: 12 }}>
                  <b>제안 추가:</b> {gmExclusions.added.join(" · ")}. {gmExclusions.addedNote}
                </p>
              </article>
              <article className="gm-card">
                <h4>
                  <span className="gm-state gm-state-toverify">To Verify</span> 보류 · 확인 후 결정
                </h4>
                <ul className="gm-check-list">
                  {gmExclusions.hold.map((h) => (
                    <li key={h.k}>
                      <b>{h.k}</b>: {h.v}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <h3 className="sub-head">집행 활성화 순서</h3>
            <p className="gm-micro" style={{ marginTop: -4 }}>
              <span className="gm-state gm-state-strategy">Strategic Proposal · 전략 제언</span> 4개 캠페인 구조는 유지하되, 월 매체 실비가 작아서 한꺼번에 상시 집행하지 않고 단계적으로 켭니다.
            </p>
            <ol className="gm-phases">
              {gmPhases.map((p) => (
                <li key={p.step}>
                  <b>{p.step}</b>
                  <p>{p.what}</p>
                  <small>{p.gate}</small>
                </li>
              ))}
            </ol>
            <p className="gm-micro">{gmPhaseNote}</p>
            <p className="gm-alert" role="note">
              <b>노출 위치 확인:</b> Google 견적서의 노출 위치는 “구글 검색 결과, 유튜브, 구글 네트워크 등”으로 적혀 있습니다. 이 플레이북의 1차 권고는 검색 의도 기반 Google Search이며, 다른 네트워크 집행은 사전 협의와 분리 보고 대상입니다.
            </p>

            <ul className="gm-notes-list">
              {gmCampaignRules.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 */}
        <section id="linkedin" className="section band-dark" data-gm-ch="linkedin" data-gm-ty="B2B">
          <div className="wrap">
            <Head
              no="06"
              eyebrow="LinkedIn Marketing Strategy"
              title="LinkedIn: 바이어에게 신뢰를 만드는 B2B 채널"
              lede="구매와 납품 의도를 잡는 Google과 달리, LinkedIn은 사람과 회사를 보고 신뢰를 쌓는 데 씁니다."
            />
            <p className="gm-li-quote">
              <ScopeBadge s="quote" /> {gmLinkedin.quoteScope}
            </p>
            <div className="gm-li-grid">
              <article className="gm-li-card">
                <h3>LinkedIn의 역할</h3>
                <ol>
                  {gmLinkedin.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </article>
              <article className="gm-li-card">
                <h3>핵심 고객 직무</h3>
                <ul className="gm-chips gm-chips-dark">
                  {gmLinkedin.buyers.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </div>

            <h3 className="gm-h3 gm-on-dark">국가별 바이어 타깃</h3>
            <div className="gm-li-grid gm-li-3">
              {gmLinkedin.countries.map((c) => (
                <article key={c.code} className="gm-li-card" data-gm-mk={c.code} data-gm-ty="B2B">
                  <h4>
                    {c.code} {c.label} <small>{c.icps}</small>
                  </h4>
                  <p className="gm-li-lab">직무 (영문 검색 표현)</p>
                  <ul className="gm-chips gm-chips-dark">
                    {c.titles.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {c.local.length > 0 && (
                    <>
                      <p className="gm-li-lab">현지어 표현</p>
                      <ul className="gm-chips gm-chips-dark">
                        {c.local.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <p className="gm-li-lab">기업 유형</p>
                  <p className="gm-li-val">{c.companies}</p>
                  <p className="gm-li-lab">제안 내용</p>
                  <p className="gm-li-val" lang={c.code === "JP" ? "ja" : c.code === "US" ? "en" : "ko"}>
                    {c.offer}
                  </p>
                  <p>{c.note}</p>
                </article>
              ))}
            </div>

            <h3 className="gm-h3 gm-on-dark">기업 페이지와 대표 프로필의 역할</h3>
            <div className="gm-li-grid">
              {gmLinkedin.profiles.map((p) => (
                <article key={p.title} className="gm-li-card">
                  <h4>
                    {p.title} <small>{p.role}</small>
                  </h4>
                  <ul>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="gm-li-quote">
              <ScopeBadge s="confirm" /> {gmLinkedin.profileScope}
            </p>

            <h3 className="gm-h3 gm-on-dark">타기팅 설정 후보</h3>
            <dl className="gm-li-dl">
              {gmLinkedin.targeting.map((t) => (
                <div key={t.k}>
                  <dt>{t.k}</dt>
                  <dd>{t.v}</dd>
                </div>
              ))}
            </dl>
            <p className="gm-li-share">{gmLinkedin.shareNote}</p>
            <ul className="gm-notes-list gm-on-dark">
              {gmLinkedin.caution.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>

            <h3 className="gm-h3 gm-on-dark">B2B 리드 정의</h3>
            <dl className="gm-li-dl">
              {gmLinkedin.leads.map((l) => (
                <div key={l.k}>
                  <dt>{l.k}</dt>
                  <dd>{l.v}</dd>
                </div>
              ))}
            </dl>
            <p className="gm-micro gm-on-dark-soft">{gmLinkedin.leadNote}</p>
          </div>
        </section>

        {/* 07 */}
        <section id="content" className="section bg-white">
          <div className="wrap">
            <Head
              no="07"
              eyebrow="Content & Messaging Playbook"
              title="콘텐츠 4개 테마와 메시지"
              lede="영문 헤드라인을 기준으로, 한국어 설명과 일본어 현지화 문구를 함께 제안합니다. 자료에 있는 사실만 썼습니다."
            />
            <div className="gm-themes">
              {gmContent.map((c) => (
                <article key={c.no} className="gm-theme">
                  <p className="gm-theme-no">Theme {c.no}</p>
                  <h3>{c.theme}</h3>
                  <p className="gm-headline" lang="en">
                    {c.headline}
                  </p>
                  <dl className="gm-dl gm-dl-tight">
                    <div>
                      <dt>목적</dt>
                      <dd>{c.purpose}</dd>
                    </div>
                    <div>
                      <dt>핵심 타깃</dt>
                      <dd>{c.target}</dd>
                    </div>
                    <div>
                      <dt>콘텐츠 소재</dt>
                      <dd>{c.material}</dd>
                    </div>
                    <div>
                      <dt>한국어 설명</dt>
                      <dd>{c.ko}</dd>
                    </div>
                    <div>
                      <dt>일본어 메시지</dt>
                      <dd lang="ja">{c.ja}</dd>
                    </div>
                    <div>
                      <dt>CTA</dt>
                      <dd lang="en">{c.cta}</dd>
                    </div>
                    <div>
                      <dt>활용 자료</dt>
                      <dd>{c.assets}</dd>
                    </div>
                  </dl>
                  <p className="gm-caution">{c.caution}</p>
                </article>
              ))}
            </div>

            <h3 className="sub-head">콘텐츠에 쓸 수 있는 레퍼런스</h3>
            <ul className="gm-refs">
              {gmReferences.map((r) => (
                <li key={r.text}>
                  <b>{r.year}</b>
                  <span>{r.text}</span>
                  <em className={`gm-kind gm-kind-${r.kind}`}>{REF_KIND[r.kind]}</em>
                </li>
              ))}
            </ul>
            <p className="gm-micro">{gmReferenceNote}</p>

            <h3 className="sub-head">LinkedIn 콘텐츠 카드 포맷과 예시</h3>
            <p className="gm-micro" style={{ marginTop: -4 }}>
              게시물 하나를 이 항목으로 기록합니다: {gmCardFormat.join(" · ")}
            </p>
            <div className="gm-grid-2">
              {gmCardExamples.map((c) => (
                <article key={c.title} className="gm-card">
                  <p className="gm-camp-code">{c.pillar}</p>
                  <h4>{c.title}</h4>
                  <dl className="gm-dl gm-dl-tight">
                    <div>
                      <dt>KO</dt>
                      <dd>{c.ko}</dd>
                    </div>
                    <div>
                      <dt>EN</dt>
                      <dd lang="en">{c.en}</dd>
                    </div>
                    <div>
                      <dt>JA</dt>
                      <dd lang="ja">{c.ja}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="gm-micro">{gmCardNote}</p>
          </div>
        </section>

        {/* 08 */}
        <section id="funnel" className="section bg-cream">
          <div className="wrap">
            <Head
              no="08"
              eyebrow="Landing & Conversion Funnel"
              title="시장별 랜딩과 전환 이벤트"
              lede="구현 여부를 확인하지 못한 부분은 Proposed 또는 To Verify로 표시했습니다."
            />
            <div className="gm-funnels">
              {gmFunnels.map((f) => (
                <article key={f.market} className="gm-fun" data-gm-mk={f.market.split(" ")[0]} data-gm-ty={f.market.split(" ")[1]}>
                  <header>
                    <h3>{f.market}</h3>
                    <span>{f.name}</span>
                  </header>
                  <ol className="gm-nodes">
                    {f.nodes.map((n) => (
                      <li key={n.label}>
                        <b>{n.label}</b>
                        {n.note && <small>{n.note}</small>}
                        <State v={n.state} />
                      </li>
                    ))}
                  </ol>
                  <div className="gm-events">
                    <span>전환 이벤트</span>
                    {f.events.map((e) => (
                      <em key={e.name} className={`gm-state gm-state-${e.state}`}>
                        {e.name}
                      </em>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="gm-micro">{gmFunnelNote}</p>

            <h3 className="sub-head">랜딩 접속 확인</h3>
            <div className="gm-table-wrap">
              <table className="gm-table gm-table-plain">
                <thead>
                  <tr>
                    <th scope="col">경로</th>
                    <th scope="col">확인 결과</th>
                    <th scope="col">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {gmLandingChecks.map((c) => (
                    <tr key={c.path}>
                      <td data-label="경로">
                        <b>{c.path}</b>
                      </td>
                      <td data-label="결과">{c.result}</td>
                      <td data-label="상태">
                        <State v={c.state} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="gm-micro">{gmLandingCheckDate}</p>
            <ul className="gm-landing-links">
              {Object.values(landingMap).map((l) => (
                <li key={l.url}>
                  <a className="gm-link" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                  <small>{l.note}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 09 */}
        <section id="kpi" className="section bg-white">
          <div className="wrap">
            <Head
              no="09"
              eyebrow="KPI & Performance Dashboard"
              title="채널별 지표: 아직 비어 있는 대시보드"
              lede="B2C와 B2B 지표를 분리했습니다. 실제 실적이 생기면 값을 채웁니다."
            />
            <div className="gm-kpis">
              {gmKpi.map((g) => (
                <article key={g.group} className="gm-kpi-group">
                  <header>
                    <h3>{g.group}</h3>
                    <span>{g.scope}</span>
                  </header>
                  <ul>
                    {g.metrics.map((m) => (
                      <li key={m.name}>
                        <span className="gm-kpi-name">{m.name}</span>
                        <b className="gm-kpi-val">{m.value ?? "추후 입력"}</b>
                        <small>{m.hint}</small>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <h3 className="sub-head">영역별 지표와 운영 판단</h3>
            <div className="gm-table-wrap">
              <table className="gm-table gm-table-plain">
                <thead>
                  <tr>
                    <th scope="col">영역</th>
                    <th scope="col">핵심 지표</th>
                    <th scope="col">보조 지표</th>
                    <th scope="col">운영 의사결정</th>
                  </tr>
                </thead>
                <tbody>
                  {gmKpiTable.map((k) => (
                    <tr key={k.area}>
                      <td data-label="영역">
                        <b>{k.area}</b>
                      </td>
                      <td data-label="핵심">{k.core}</td>
                      <td data-label="보조">{k.support}</td>
                      <td data-label="판단">{k.decision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="sub-head">보고 · 리뷰 범위</h3>
            <ul className="gm-report">
              {gmReporting.map((r) => (
                <li key={r.name}>
                  <ScopeBadge s={r.scope} />
                  <span>
                    <b>{r.name}</b>
                    <small>{r.note}</small>
                  </span>
                </li>
              ))}
            </ul>

            <ul className="gm-notes-list">
              {gmKpiNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10 */}
        <section id="actions" className="section band-green">
          <div className="wrap">
            <Head no="10" eyebrow="Agency Action Items" title="바로 확인할 실행 체크리스트" lede="항목별로 상태를 바꿔 가며 진행 상황을 정리하세요." />
            <ActionBoard />
          </div>
        </section>

        <section id="sources" className="gm-sources">
          <div className="wrap">
            <h2 className="gm-h3">Data & Sources</h2>
            <p className="gm-micro">이 페이지가 읽은 자료와 읽지 못한 자료입니다. 읽지 못한 자료는 읽은 것으로 가정하지 않았습니다.</p>
            <ul className="gm-src-list">
              {gmDataSources.map((d) => (
                <li key={d.name} data-state={d.state}>
                  <span className={`gm-state ${d.state === "used" ? "gm-state-verified" : "gm-state-toverify"}`}>{d.state === "used" ? "반영" : "미확보"}</span>
                  <span>
                    <b>{d.name}</b>
                    <small>{d.note}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="gm-foot">
          <div className="wrap">
            <p>{gmSources}</p>
            <p>
              최종 업데이트 {GM_UPDATED} · 이 페이지는 대행사 공유용이며 검색 엔진에 노출되지 않도록 설정했습니다. 견적 금액은 견적서 표기 그대로이고, 국가 · 고객군별 세부 광고비 배분과 검색량 · CPC · 성과 수치는 포함하지 않았습니다.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
