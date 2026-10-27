import Reveal from "@/components/Reveal";
import {
  BEP_ROAS,
  latestWeek,
  metaAge,
  metaAgeNote,
  metaCreativeNote,
  metaCreatives,
  mall,
  mallWeeks,
  otherMalls,
  perfSources,
  perfTakeaways,
  roasSeries,
  roasWeeks,
  saBefore,
  saOwn,
} from "@/content/perf";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
const man = (n: number) => `${Math.round(n / 1000).toLocaleString("ko-KR")}천`;

// 끝점 라벨이 겹치지 않도록 세로로 살짝 벌린다 (통합 266% 위, META 243% 아래)
const LABEL_DY: Record<string, number> = { 통합: -8, META: 10 };

// ── ROAS 추이 라인 차트 (SVG) ──
function RoasLines() {
  const W = 720;
  const H = 300;
  const pad = { l: 48, r: 64, t: 16, b: 34 };
  const max = 1100;
  const x = (i: number) => pad.l + (i * (W - pad.l - pad.r)) / (roasWeeks.length - 1);
  const y = (v: number) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const ticks = [0, 350, 700, 1050];
  return (
    <figure className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="매체별 ROAS 6주 추이 라인 차트. 표는 아래에 있습니다.">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} className={t === BEP_ROAS ? "bep-line" : "grid-line"} />
            <text x={pad.l - 8} y={y(t) + 4} textAnchor="end" className="axis-text">
              {t}%
            </text>
          </g>
        ))}
        <text x={W - pad.r} y={y(BEP_ROAS) - 6} textAnchor="end" className="bep-text">
          손익분기 350%
        </text>
        {roasWeeks.map((w, i) => (
          <text key={w} x={x(i)} y={H - 10} textAnchor="middle" className="axis-text">
            {w}
          </text>
        ))}
        {roasSeries.map((s) => (
          <g key={s.name}>
            <polyline
              fill="none"
              stroke={s.color}
              strokeWidth={s.dash ? 2 : 3}
              strokeDasharray={s.dash ? "6 5" : undefined}
              points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
            />
            {s.values.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r={i === s.values.length - 1 ? 5 : 3} fill={s.color} />
            ))}
            <text
              x={x(s.values.length - 1) + 12}
              y={y(s.values[s.values.length - 1]) + 4 + (LABEL_DY[s.name] ?? 0)}
              className="end-label"
              fill={s.color}
              textAnchor="start"
            >
              {s.values[s.values.length - 1].toLocaleString("ko-KR")}%
            </text>
          </g>
        ))}
      </svg>
      <ul className="legend">
        {roasSeries.map((s) => (
          <li key={s.name}>
            <i style={{ background: s.color }} aria-hidden="true" />
            <b>{s.name}</b>
            <span>{s.note}</span>
          </li>
        ))}
      </ul>
      <details className="chart-table">
        <summary>표로 보기</summary>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">매체</th>
              {roasWeeks.map((w) => (
                <th key={w} scope="col">
                  {w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roasSeries.map((s) => (
              <tr key={s.name}>
                <th scope="row">{s.name}</th>
                {s.values.map((v, i) => (
                  <td key={i}>{v.toLocaleString("ko-KR")}%</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

// ── 자사몰 vs 스마트스토어 주간 매출 (묶음 막대) ──
function MallBars() {
  const W = 720;
  const H = 280;
  const pad = { l: 56, r: 16, t: 16, b: 34 };
  const max = 2000000;
  const gw = (W - pad.l - pad.r) / mallWeeks.length;
  const bw = gw * 0.32;
  const y = (v: number) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const h = (v: number) => (v / max) * (H - pad.t - pad.b);
  return (
    <figure className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="자사몰과 스마트스토어 주간 매출 비교 막대 차트. 표는 아래에 있습니다.">
        {[0, 500000, 1000000, 1500000, 2000000].map((t) => (
          <g key={t}>
            <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} className="grid-line" />
            <text x={pad.l - 8} y={y(t) + 4} textAnchor="end" className="axis-text">
              {t / 10000}만
            </text>
          </g>
        ))}
        {mallWeeks.map((w, i) => {
          const cx = pad.l + gw * i + gw / 2;
          return (
            <g key={w}>
              <rect x={cx - bw - 2} y={y(mall.own.sales[i])} width={bw} height={h(mall.own.sales[i])} fill={mall.own.color} rx={3} />
              <rect x={cx + 2} y={y(mall.smart.sales[i])} width={bw} height={h(mall.smart.sales[i])} fill={mall.smart.color} rx={3} />
              <text x={cx - bw / 2 - 2} y={y(mall.own.sales[i]) - 5} textAnchor="middle" className="bar-text">
                {man(mall.own.sales[i])}
              </text>
              <text x={cx + bw / 2 + 2} y={y(mall.smart.sales[i]) - 5} textAnchor="middle" className="bar-text">
                {man(mall.smart.sales[i])}
              </text>
              <text x={cx} y={H - 10} textAnchor="middle" className="axis-text">
                {w}
              </text>
            </g>
          );
        })}
      </svg>
      <ul className="legend inline">
        <li>
          <i style={{ background: mall.own.color }} aria-hidden="true" />
          <b>자사몰</b>
        </li>
        <li>
          <i style={{ background: mall.smart.color }} aria-hidden="true" />
          <b>스마트스토어</b>
        </li>
        <li>
          <span>단위: 원 (천 단위 표기)</span>
        </li>
      </ul>
      <div className="table-wrap">
        <table className="table compact">
          <thead>
            <tr>
              <th scope="col">지표</th>
              {mallWeeks.map((w) => (
                <th key={w} scope="col">
                  {w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">자사몰 ROAS</th>
              {mall.own.roas.map((v, i) => (
                <td key={i} className={v < 100 ? "cell-bad" : v >= BEP_ROAS ? "cell-good" : undefined}>
                  {v}%
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">스마트스토어 ROAS</th>
              {mall.smart.roas.map((v, i) => (
                <td key={i} className={v < 100 ? "cell-bad" : v >= BEP_ROAS ? "cell-good" : undefined}>
                  {v}%
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">자사몰 방문자</th>
              {mall.own.visitors.map((v, i) => (
                <td key={i}>{v.toLocaleString("ko-KR")}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">스마트스토어 방문자</th>
              {mall.smart.visitors.map((v, i) => (
                <td key={i}>{v.toLocaleString("ko-KR")}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </figure>
  );
}

// ── 가로 막대 (ROAS) ──
function HBars({ rows, max }: { rows: { label: string; roas: number; sub: string; tone?: string }[]; max: number }) {
  return (
    <ul className="hbars">
      {rows.map((r) => (
        <li key={r.label}>
          <div className="hbar-head">
            <b>{r.label}</b>
            <span>{r.sub}</span>
          </div>
          <div className="hbar-track">
            <i
              className={r.roas >= BEP_ROAS ? "good" : r.roas < 100 ? "bad" : "mid"}
              style={{ width: `${Math.max((r.roas / max) * 100, r.roas === 0 ? 0 : 1)}%` }}
            />
            <em className="hbar-bep" style={{ left: `${(BEP_ROAS / max) * 100}%` }} aria-hidden="true" />
          </div>
          <strong>{r.roas.toLocaleString("ko-KR")}%</strong>
        </li>
      ))}
    </ul>
  );
}

function StackedShare({ title, items }: { title: string; items: { name: string; pct: number }[] }) {
  const tones = ["s1", "s2", "s3"];
  return (
    <div className="stack">
      <h4>{title}</h4>
      <div className="stack-bar" role="img" aria-label={`${title}: ${items.map((i) => `${i.name} ${i.pct}%`).join(", ")}`}>
        {items.map((it, i) => (
          <span key={it.name} className={tones[i]} style={{ flexGrow: it.pct }}>
            {it.name} {it.pct}%
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PerfSection() {
  return (
    <section id="perf" className="section bg-cream">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Performance · 9~10월</p>
          <h2 className="h-lg">9~10월 퍼포먼스, 마케터님이 먼저 보실 지표.</h2>
          <p className="lede">
            AMPM과 함께 운영한 9/1~10/18 데이터를 한 화면으로 정리했습니다. 손익분기 ROAS는 350%이고, 이 선을 넘는 구간만 초록으로 표시합니다.
          </p>
        </Reveal>

        <h3 className="sub-head">먼저 볼 다섯 가지</h3>
        <Reveal>
          <ol className="takeaways">
            {perfTakeaways.map((t) => (
              <li key={t.title}>
                <b>{t.title}</b>
                <span>{t.body}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <h3 className="sub-head">이번 주 한눈에 · {latestWeek.label}</h3>
        <Reveal>
          <div className="numbers four">
            {latestWeek.kpis.map((k) => (
              <div key={k.label} className={`number${k.warn ? " warn" : ""}`}>
                <span className="number-label">{k.label}</span>
                <b>{k.value}</b>
                <span>{k.sub}</span>
              </div>
            ))}
          </div>
          <div className="stacks">
            <StackedShare title="광고비 비중" items={latestWeek.share.spend} />
            <StackedShare title="매출 비중" items={latestWeek.share.revenue} />
          </div>
          <p className="micro">애드부스트는 광고비 29%를 쓰고 매출은 9%, 쇼핑검색은 광고비 9%로 매출 34%를 만들었습니다.</p>
        </Reveal>

        <h3 className="sub-head">매체별 ROAS 6주 추이</h3>
        <Reveal>
          <RoasLines />
        </Reveal>

        <h3 className="sub-head">자사몰 vs 스마트스토어 · 7주</h3>
        <Reveal>
          <MallBars />
          <p className="micro">{mall.note}</p>
        </Reveal>

        <h3 className="sub-head">META · 같은 소재, 다른 랜딩</h3>
        <Reveal>
          <HBars
            max={1800}
            rows={metaCreatives.map((c) => ({ label: c.name, roas: c.roas, sub: `광고비 ${won(c.spend)} · ${c.buys}` }))}
          />
          <p className="micro">점선은 손익분기 350%입니다. {metaCreativeNote}</p>
        </Reveal>

        <h3 className="sub-head">META · 연령별 ROAS</h3>
        <Reveal>
          <HBars max={600} rows={metaAge.map((a) => ({ label: `${a.age}세`, roas: a.roas, sub: a.note }))} />
          <p className="micro">{metaAgeNote}</p>
        </Reveal>

        <h3 className="sub-head">네이버 쇼핑검색 · 키워드 정비 전후</h3>
        <Reveal>
          <div className="ba">
            {saBefore.map((r) => (
              <div key={r.label} className="ba-card">
                <span className="ba-label">{r.label}</span>
                <span className="ba-from">{r.from}</span>
                <span className="ba-arrow" aria-hidden="true">
                  ↓
                </span>
                <b className="ba-to">{r.to}</b>
                <span className={`ba-change${r.good ? " good" : ""}`}>{r.change}</span>
              </div>
            ))}
          </div>
          <p className="micro first">10/5~11 → 10/12~18. 10/12에 구문 제외와 B2B 캠페인 OFF를 처리한 효과입니다.</p>

          <div className="own-split">
            <div className="own-card good">
              <span>자사 검색어</span>
              <b>전환 {saOwn.own.conv}건</b>
              <span>광고비 {won(saOwn.own.spend)} · 매출 {won(saOwn.own.revenue)}</span>
              <strong>ROAS {saOwn.own.roas.toLocaleString("ko-KR")}%</strong>
            </div>
            <div className="own-card bad">
              <span>비자사 검색어</span>
              <b>전환 {saOwn.other.conv}건</b>
              <span>광고비 {won(saOwn.other.spend)} · 매출 0원</span>
              <strong>ROAS 0%</strong>
            </div>
          </div>
          <p className="micro">{saOwn.note}</p>
        </Reveal>

        <h3 className="sub-head">참고 · 쿠팡 · 컬리 ROAS</h3>
        <Reveal>
          <div className="table-wrap">
            <table className="table compact">
              <thead>
                <tr>
                  <th scope="col">채널</th>
                  {otherMalls.weeks.map((w) => (
                    <th key={w} scope="col">
                      {w}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[otherMalls.coupang, otherMalls.kurly].map((r) => (
                  <tr key={r.name}>
                    <th scope="row">{r.name}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={v < 100 ? "cell-bad" : v >= BEP_ROAS ? "cell-good" : undefined}>
                        {v}%
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="micro">{otherMalls.note}</p>
        </Reveal>

        <p className="micro sources">{perfSources}</p>
      </div>
    </section>
  );
}
