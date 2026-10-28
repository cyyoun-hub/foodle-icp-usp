// Foodle Global Marketing Playbook 데이터. 화면(page.tsx · components/global)은 이 파일만 읽는다.
// 규칙
//  - 제품 · ICP(A1~B2) · 매트릭스 · 레퍼런스는 foodle.ts의 확인된 사실을 가져다 쓴다(복제하지 않는다).
//  - 새로 만든 정의(G1~G5, 키워드 우선순위, 광고 문구 초안)는 모두 "제안(가설)"이다. 검증된 성과로 쓰지 않는다.
//  - 검색량 · CPC · 경쟁도 · 광고비 · 성과는 자료가 있을 때만 값을 넣는다. 지금은 비어 있다.
//  - 금지 표현은 foodle.ts의 banned를 따른다(식약처 인증, 절대 안 깨지는, Cactus Cup 에코젠, 할인·최저가 등).

export const GM_UPDATED = "2026.10.28";

// 상태: verified 확인됨 · quote 견적서에 명시 · proposed 가설 · strategy 전략 제언 · toverify 확인 필요
export type Verify = "verified" | "quote" | "proposed" | "strategy" | "toverify";
export const VERIFY_LABEL: Record<Verify, string> = {
  verified: "Verified · 확인됨",
  quote: "Confirmed in Quote · 견적 확정",
  proposed: "Hypothesis · 가설",
  strategy: "Strategic Proposal · 전략 제언",
  toverify: "To Verify · 확인 필요",
};
// 계약 범위 표시: 견적 포함 / 협의 필요 / 전략 제언
export type Scope = "quote" | "confirm" | "strategy";
export const SCOPE_LABEL: Record<Scope, string> = { quote: "견적 포함", confirm: "협의 필요", strategy: "전략 제언" };

export const gmMeta = {
  title: "Foodle Global Marketing Playbook",
  subtitle: "Google Ads & LinkedIn | Market · Audience · Keywords · Conversion",
  audience: "김초은 대리님 및 글로벌 IMC 마케팅 수행팀",
  principle:
    "견적서에 명시된 사실, 전략 제언(가설), 확인 필요를 구분해서 표시합니다. 견적 금액은 견적서 표기 그대로이며, 국가·고객군별 세부 배분과 검색량 · CPC · 성과 수치는 자료가 생기기 전까지 비워 둡니다.",
};

// ── 섹션 (고정 목차) ──
export const gmSections = [
  { id: "overview", no: "01", label: "Overview · Budget" },
  { id: "brand", no: "02", label: "Brand · Product" },
  { id: "audience", no: "03", label: "Audience · ICP" },
  { id: "keywords", no: "04", label: "Keywords" },
  { id: "google", no: "05", label: "Google Ads" },
  { id: "linkedin", no: "06", label: "LinkedIn" },
  { id: "content", no: "07", label: "Content" },
  { id: "funnel", no: "08", label: "Landing · Funnel" },
  { id: "kpi", no: "09", label: "KPI" },
  { id: "actions", no: "10", label: "Action Items" },
];

// ── 01. Overview ──
export const gmOverview = {
  message: "Design makes sustainable choices desirable.",
  body: "푸들은 지속가능성을 의무로 강조하지 않습니다. 사람들이 디자인과 사용성 때문에 자발적으로 고르고 오래 쓰는 제품을 만듭니다.",
  roles: [
    { channel: "Google Ads", text: "구매와 납품 의도를 이미 가진 사람을 검색 순간에 만납니다." },
    { channel: "LinkedIn", text: "기업 구매 담당자와 글로벌 유통 바이어에게 신뢰와 파트너십 기회를 만듭니다." },
  ],
  order: "국내 시장을 먼저 공략하고, 일본과 미국 B2B 시장으로 넓혀 갑니다.",
  goals: [
    "푸들의 브랜드 · 제품 · 시장 현황 이해",
    "타깃별 고객 문제와 구매 동기 이해",
    "국내 Google Ads 구매 전환 확대",
    "한국인 글로벌 바이어 발굴",
    "일본 · 미국 바이어 발굴",
    "LinkedIn으로 기업 신뢰와 파트너십 개발",
    "집행 후 성과 측정과 개선",
  ],
};

// ── 01-B. 협의 견적서 (㈜글로벌써클, 2026-10-22). 금액 · 기간 · 산출물은 견적서 표기 그대로 보존한다 ──
// 출처: 푸들_온라인마케팅 견적서_261022.pdf (2026.10.28 원문 대조 완료). 견적서 하단: "사업 기간 및 견적은 기업예산에 따라 협의 및 조율 후 진행 가능"
export const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
export const man = (n: number) => `${n / 10000}만원`;

export const gmQuote = {
  vendor: "㈜글로벌써클",
  date: "2026.10.22",
  vat: "부가세 별도",
  negotiable: "견적서에 “사업 기간 및 견적은 기업예산에 따라 협의 및 조율 후 진행 가능”, “광고비의 경우 운영수수료가 발생”이라고 적혀 있습니다. 최종 계약 문서가 다르면 그쪽이 기준입니다.",
  google: {
    months: 4,
    total: 4_300_000,
    setup: 300_000,
    overseas: { total: 2_000_000, media: 1_600_000, monthly: 400_000, fee: 400_000, feeRate: 20 },
    domestic: { total: 2_000_000, media: 1_500_000, monthly: 375_000, fee: 500_000, feeRate: 25 },
    placement: "구글 검색 결과, 유튜브, 구글 네트워크 등",
    billing: "클릭당 과금 방식, PC/모바일 동시 노출",
    included: ["키워드 분석 · 서칭 · 제안", "초기 세팅", "수행 완료 보고서", "구글 검색광고 운영 (클릭당 과금)"],
  },
  linkedin: {
    months: 1,
    total: 1_200_000,
    adSpend: 120_000,
    adNote: "링크드인 사업비 10% 광고비 책정 (₩120,000/1회)",
    included: [
      "프로젝트 관리",
      "채널 운영 전략 · 분석",
      "기업 페이지 계정 활성화",
      "기업 페이지 브랜드 배너 제작 반영",
      "기획안 · 콘텐츠 제작 (주 1회 발행)",
      "콘텐츠 포스팅 · 캡션 작성 · 모니터링 · 플랫폼 활동",
      "광고 캠페인 세팅 (목표 · 일일예산 · 일정)",
      "정책 문제 모니터링 (광고 비승인 시 조치)",
      "광고비 집행 (₩120,000/1회)",
    ],
  },
};
// 파생값(견적 금액을 더하거나 나눈 참고 계산. 견적서 원문 표기가 아니다)
export const gmQuoteDerived = {
  mediaTotal: gmQuote.google.overseas.media + gmQuote.google.domestic.media,
  feeTotal: gmQuote.google.overseas.fee + gmQuote.google.domestic.fee,
  monthlyMedia: gmQuote.google.overseas.monthly + gmQuote.google.domestic.monthly,
  grandTotal: gmQuote.google.total + gmQuote.linkedin.total,
};

// 견적상 광고비 풀과 전략 타깃의 대응 (세부 배분은 미확정)
export const gmPools: { pool: string; amount: string; target: string; known: string; open: string }[] = [
  {
    pool: "Google 국내 실비",
    amount: `${won(gmQuote.google.domestic.media)} (월 ${won(gmQuote.google.domestic.monthly)} × 4개월)`,
    target: "KR B2C 일반 소비자 + 한국어 B2B · 글로벌 바이어",
    known: "국내 광고 총액만 명시되어 있습니다.",
    open: "B2C 60%와 한국어 바이어 20%를 이 풀에서 얼마씩 나눌지 미확정",
  },
  {
    pool: "Google 해외 실비",
    amount: `${won(gmQuote.google.overseas.media)} (월 ${won(gmQuote.google.overseas.monthly)} × 4개월)`,
    target: "JP B2B + US B2B",
    known: "해외 광고 총액만 명시되어 있습니다.",
    open: "일본 · 미국 간 예산, 지역, 언어, 계정 · 랜딩, 집행 순서 미확정",
  },
  {
    pool: "LinkedIn 광고",
    amount: `${won(gmQuote.linkedin.adSpend)} (1회)`,
    target: "국내 · 일본 · 미국 B2B에 우선 활용",
    known: "1회 광고비만 명시되어 있습니다.",
    open: "한 국가 집중인지, 게시물 부스팅인지, 리드 광고인지, 기대 성과 미확정",
  },
];

// 계약 범위 기준선: 이 페이지의 모든 요청에 "견적 포함 / 협의 필요 / 전략 제언" 중 하나를 붙인다
export const gmScopeExtras = [
  "신규 영문 B2B 랜딩페이지 제작",
  "GA4 · CRM 연동 개발",
  "다국어 번역 · 현지화 전면 제공",
  "A/B 테스트",
  "추가 디자인 소스",
  "별도의 주간 · 월간 분석 보고서",
  "LinkedIn 대표 개인 계정 콘텐츠 운영",
  "국가별 고급 리드폼",
  "추가 광고비",
];
export const gmScopeNote = "위 항목은 이 플레이북의 전략 제언이며 견적서에 없습니다. 무료로 제공해야 하는 의무로 단정하지 않고, 협의 후 범위를 확정합니다.";

// 집행 기간 vs 바우처 행정 일정 (서로 다른 타임라인. 불일치는 확인 필요)
export const gmVoucher = {
  label: "수출바우처 IMC 마케팅 일정",
  range: "2026.10.26 ~ 2026.12.26",
  months: 2,
  source: "명세서에 기재된 일정입니다. 일정표 원본은 이 작업 환경에서 확인하지 못했습니다.",
};
export const gmTimelineBars: { label: string; months: number; state: Verify; sub: string }[] = [
  { label: "Google 검색광고 (견적)", months: 4, state: "quote", sub: "4개월 · 시작일 미확정" },
  { label: "LinkedIn 마케팅 (견적)", months: 1, state: "quote", sub: "1개월 · 시작일 미확정" },
  { label: "바우처 IMC 일정", months: 2, state: "toverify", sub: "2026.10.26 ~ 12.26" },
];
export const gmToVerifyBudget = [
  "Google 4개월의 시작 · 종료일, 광고비를 실제로 쓸 수 있는 기한, 사업 종료 후 집행이 인정되는지",
  "LinkedIn 1개월의 시작일, 주 1회 게시의 총 횟수와 콘텐츠 검수일",
  "수출바우처 승인 · 보고서 · 만족도조사 시점과 실제 집행 · 정산 시점의 관계",
  "LinkedIn 광고 “1회”의 정의, 집행일, 광고 포맷, 별도 플랫폼 수수료 유무. 사업비 1,200,000원 안의 10%인지 별도인지도 견적서만으로는 판단하기 어렵습니다",
  "Google 견적서에 노출 위치가 검색 결과, 유튜브, 구글 네트워크로 적혀 있습니다. 이 플레이북은 검색 의도 기반 Google Search를 1차로 권고하고, 다른 네트워크 집행은 사전 협의와 분리 보고 대상으로 둡니다",
];

// ── 타깃 구성 (비중 = 전체 마케팅의 전략적 우선순위. 채널별 광고비 배분이 아니다) ──
export type AudienceId = "kr-b2c" | "kr-b2b" | "jp-b2b" | "us-b2b";
export type Audience = {
  id: AudienceId;
  no: number;
  lang: "한국어" | "일본어" | "영어";
  who: string;
  type: "B2C" | "B2B";
  market: string;
  share: number;
  color: string;
  icps: string[];
  products: string;
  channels: string;
  campaign: string;
  landing: string[];
  landingState: Verify;
  message: string;
  kpi: string[];
  caution: string;
};

export const gmAudiences: Audience[] = [
  {
    id: "kr-b2c",
    no: 1,
    lang: "한국어",
    who: "일반 소비자",
    type: "B2C",
    market: "대한민국",
    share: 60,
    color: "#00754a",
    icps: ["A1", "A2", "A3", "B1", "B2"],
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    channels: "Google Ads (구매 전환 중심)",
    campaign: "Campaign 1 · KR B2C",
    landing: ["foodle.biz 제품 상세페이지"],
    landingState: "verified",
    message: "타겟(A1~B2)별로 장면을 나눠, 제품이 아니라 그 사람의 하루에서 시작합니다.",
    kpi: ["Purchases", "Revenue", "ROAS", "Conversion Rate"],
    caution: "A1 · A2의 Plate07 · Plate05는 메인 후보로 테스트 중입니다. 확정된 성과가 아닙니다.",
  },
  {
    id: "kr-b2b",
    no: 2,
    lang: "한국어",
    who: "한국인 글로벌 바이어",
    type: "B2B",
    market: "한국 및 해외",
    share: 20,
    color: "#cba258",
    icps: ["G1", "G2", "G3"],
    products: "Plate07 · Oval Dome (공급 · 답례품 맥락)",
    channels: "Google Ads · LinkedIn",
    campaign: "Campaign 2 · KR B2B",
    landing: ["foodle.biz/partnership", "foodle.biz/gift"],
    landingState: "verified",
    message: "기존 공급 레퍼런스로 신뢰를 만들고, 견적 · 파트너십 문의로 연결합니다.",
    kpi: ["Leads", "Qualified Leads", "Cost Per Lead", "Meetings"],
    caution: "핵심은 G1(해외 소싱 · 유통)이고, G2 · G3는 캠페인 포함 여부를 확인하는 시험 대상입니다. 성과는 매출이나 ROAS가 아니라 문의 여부로 보며 B2C와 섞지 않습니다.",
  },
  {
    id: "jp-b2b",
    no: 3,
    lang: "일본어",
    who: "일본인 바이어",
    type: "B2B",
    market: "일본",
    share: 10,
    color: "#1e3932",
    icps: ["G4"],
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    channels: "Google Ads · LinkedIn",
    campaign: "Campaign 3 · JP B2B",
    landing: ["jp.foodle.biz"],
    landingState: "toverify",
    message: "도쿄 츠타야 팝업과 디자인 레퍼런스로 일본 유통 바이어에게 먼저 얼굴을 알립니다.",
    kpi: ["Leads", "Sample Requests", "Partnership Opportunities"],
    caution: "jp.foodle.biz의 B2B 문의 경로가 실제로 작동하는지는 아직 확인 전입니다.",
  },
  {
    id: "us-b2b",
    no: 4,
    lang: "영어",
    who: "미국인 바이어",
    type: "B2B",
    market: "미국",
    share: 10,
    color: "#b9b4aa",
    icps: ["G5"],
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    channels: "Google Ads · LinkedIn",
    campaign: "Campaign 4 · US B2B",
    landing: ["영문 B2B 랜딩 (TBD)"],
    landingState: "toverify",
    message: "미국 레퍼런스가 아직 없으므로, 한국 공급 사례와 파리 전시 참가를 근거로 신뢰를 설명합니다.",
    kpi: ["Leads", "Qualified Leads", "Partnership Opportunities"],
    caution: "영문 B2B 랜딩이 준비되기 전에는 광고를 켜지 않는 것을 권장합니다.",
  },
];

export const gmShareNote =
  "60/20/10/10은 전체 타깃 전략 비중입니다. 광고비 계약은 국내/해외 두 항목으로 확정되어 있으며, 세부 고객군 및 국가별 실제 예산은 대행사 협의가 필요합니다. 견적 총액이나 서비스 기간을 이 비율로 기계적으로 나누지 않습니다. LinkedIn은 이 비율이 아니라 별도로 국내 60 · 글로벌 40 기준을 씁니다(06 참고).";

// ── 02. 제품: 사실은 foodle.ts의 products · matrix를 쓰고, 여기에는 B2B 시나리오 상태만 둔다 ──
// type: record = 공급 실적이 자료에 있음 / proposal = 제안(가설), 실적 확인 전
export const productB2b: Record<string, { type: "record" | "proposal"; text: string }> = {
  "Oval Dome": { type: "proposal", text: "선물 · 답례품 패키지 제안. 선물용 고급 패키지가 기본 구성이라는 점이 근거입니다. 제품별 납품 실적은 확인 전입니다." },
  Plate07: { type: "record", text: "2022년 신세계푸드 × 신라호텔 F&B, HD현대 × 현대그린푸드 사내 카페테리아에 Plate07이 공급된 기록이 있습니다." },
  Plate05: { type: "proposal", text: "1인분 사이즈를 살린 식당 · 급식 1인 식기 제안. 납품 실적은 확인 전입니다." },
  "Cactus Cup": { type: "proposal", text: "카페 · 프로모션 컵 제안. PP 소재라 ECOZEN 제품과 구분해서 설명합니다. 납품 실적은 확인 전입니다." },
};

// 제품별 권장 첫 메시지와 검증 유의 (통합 명세서 4.2)
export const productMsg: Record<string, { first: string; check: string }> = {
  "Oval Dome": { first: "덮개와 플레이팅을 함께 활용", check: "‘밀폐’ · ‘누수방지’ 등 확인되지 않은 성능을 단정하지 않습니다." },
  Plate07: { first: "조합형 · 모듈형 테이블웨어", check: "실제 모듈 결합 · 구성 이미지를 씁니다. “26가지 조합”은 근거 확인 전이라 “10p 모듈”까지만 말합니다." },
  Plate05: { first: "한 끼를 보기 좋고 편하게 담는 식기", check: "기능 · 칸별 용량은 원본 자료로 확인한 뒤 씁니다." },
  "Cactus Cup": { first: "감각적인 데일리 컵", check: "PP 소재입니다. ECOZEN이라고 쓰지 않습니다." },
};

export const productNotes = [
  "Cactus Cup은 ECOZEN이 아니라 PP(BPA-Free) 소재입니다. 광고와 문서 어디에서도 ECOZEN으로 쓰지 않습니다.",
  "전자레인지 · 식기세척기 · 냉장고 사용은 ECOZEN 제품 기준입니다. 오븐 · 직화는 불가합니다.",
  "친환경 인증이나 환경 효능은 근거 자료가 없으므로 쓰지 않습니다. “식물 원료 기반 바이오 소재”와 “BPA-Free”까지만 말합니다.",
];

// ── 03. B2C ICP별 글로벌 광고용 보강 (원문 ICP 필드는 foodle.ts의 icps · matrix를 그대로 쓴다) ──
export const b2cGoogle: Record<string, { intent: string; message: string; landing: string; landingUrl: string; kpi: string }> = {
  A1: {
    intent: "식판 졸업 시점에 다음 식기를 비교한다 (제품 비교)",
    message: "오늘 메뉴대로 조합하는 10p 모듈 플레이트. BPA-Free ECOZEN™.",
    landing: "Plate07 상세",
    landingUrl: "https://www.foodle.biz/Plate07",
    kpi: "Purchases · ROAS · 상세 페이지 전환율",
  },
  A2: {
    intent: "식단 · 한 끼 식기를 찾는다 (정보 탐색 → 제품 비교)",
    message: "1인분 사이즈 원플레이트. 칸에 담으면 탄·단·지가 한눈에.",
    landing: "Plate05 상세",
    landingUrl: "https://www.foodle.biz/Plate05",
    kpi: "Purchases · ROAS · 상세 페이지 전환율",
  },
  A3: {
    intent: "쓰임이 많은 그릇을 찾는다 (제품 비교)",
    message: "접시 · 볼 · 돔 커버 3in1. 하나로 여러 순간을 채웁니다.",
    landing: "Oval Dome 상세",
    landingUrl: "https://www.foodle.biz/OvalDome",
    kpi: "Purchases · ROAS · 상세 페이지 전환율",
  },
  B1: {
    intent: "식탁 · 홈카페 분위기를 위한 식기를 찾는다 (정보 탐색)",
    message: "주방 오브제 같은 라운드 형태. 딥그린 · 옐로우 · 크리스탈.",
    landing: "Oval Dome 상세",
    landingUrl: "https://www.foodle.biz/OvalDome",
    kpi: "상세 페이지 조회 · Add to Cart · Purchases",
  },
  B2: {
    intent: "집들이 · 신혼 · 명절 선물을 찾는다 (구매)",
    message: "선물용 고급 패키지가 기본인 Oval Dome. 받는 사람의 식탁에 오래 남는 선물.",
    landing: "Oval Dome 상세",
    landingUrl: "https://www.foodle.biz/OvalDome",
    kpi: "Purchases · 선물 시즌 전환율",
  },
};

export const b2cGoogleNote =
  "위 문구 · 검색 의도 · KPI는 원문 ICP를 Google 검색 환경에 맞게 옮긴 제안입니다. 성과가 검증된 문구가 아닙니다.";

// ── 03-B. B2B 바이어 ICP (G1~G5는 이번에 새로 정의한 제안) ──
export type B2bIcp = {
  code: string;
  market: string;
  who: string;
  role: string;
  pain: string;
  trigger: string;
  need: string;
  products: string;
  proof: string;
  proofType: "record" | "partial" | "none";
  landing: string;
  channel: string;
  kpi: string;
  caution?: string;
  cta: string;
  scopeNote?: string;
};

export const gmB2bIcps: B2bIcp[] = [
  {
    code: "G1",
    cta: "도매·유통 제휴 문의",
    market: "KR · 해외",
    who: "한국인 글로벌 유통 · 수출입 바이어",
    role: "해외 판매처에 소개할 한국 디자인 브랜드를 찾는 사람",
    pain: "믿고 소개할 한국 브랜드의 납품 실적과 디자인 차별점을 한 번에 확인하기 어렵다.",
    trigger: "새 시즌 상품 소싱 · 해외 바이어 요청 · 박람회 이후 후속 검토",
    need: "실적이 확인되는 한국 디자인 테이블웨어 브랜드, 도매 조건 문의 창구",
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    proof: "2024 파리 Maison&Objet 전시 참가 · 2026 도쿄 츠타야 팝업 · 현대백화점 판교점 · 마켓컬리 입점",
    proofType: "partial",
    landing: "foodle.biz/partnership",
    channel: "Google (KR B2B) · LinkedIn",
    kpi: "Leads · Qualified Leads · Meetings",
  },
  {
    code: "G2",
    scopeNote: "‘한국인 글로벌 바이어 20%’와 같은 범주인지 확인 전입니다. 잠재 타깃으로 두고 캠페인 포함 여부는 To Verify입니다.",
    cta: "단체구매 견적 문의",
    market: "KR",
    who: "기업 구매 · 총무 · ESG · 답례품 담당자",
    role: "행사 · 기념일 · 임직원 선물용으로 대량 구매를 검토하는 사람",
    pain: "받는 사람 취향에 맞고 격이 있는 답례품을 단기간에 찾아야 하는데, 대량 구매 문의 창구가 불분명하다.",
    trigger: "연말 · 명절 · 창립기념일 · 행사 준비 · ESG 캠페인",
    need: "디자인이 있는 답례품, 패키지, 대량 구매 상담",
    products: "Oval Dome (선물용 고급 패키지 기본) · Cactus Cup",
    proof: "2023 청와대 행사 공식 답례품 · 2025 한국환경공단 다회용기 납품",
    proofType: "record",
    landing: "foodle.biz/gift",
    channel: "Google (KR B2B) · LinkedIn",
    kpi: "Leads · Email Inquiry · Qualified Leads",
    caution: "청와대 답례품의 제품명은 자료에 없습니다. 제품과 연결해서 쓰지 않습니다.",
  },
  {
    code: "G3",
    scopeNote: "‘한국인 글로벌 바이어 20%’와 같은 범주인지 확인 전입니다. 잠재 타깃으로 두고 캠페인 포함 여부는 To Verify입니다.",
    cta: "샘플 · 납품 상담",
    market: "KR",
    who: "F&B · 호텔 · 카페테리아 · 급식 구매 담당자",
    role: "매일 쓰는 식기를 교체하거나 새 매장 · 식당에 납품받는 사람",
    pain: "세척 · 보관 · 파손 부담을 줄이면서 식기 분위기도 챙길 수 있는 납품처가 필요하다.",
    trigger: "리뉴얼 · 신규 오픈 · 다회용기 전환 · 구내식당 계약 갱신",
    need: "대량 납품 상담, 견적, 현장 사용성이 확인된 식기",
    products: "Plate07 (공급 기록 있음) · Plate05",
    proof: "2022 신세계푸드 × 신라호텔 F&B · HD현대 × 현대그린푸드 사내 카페테리아 · 2026 삼성전자 · 카카오 × 풀무원푸드앤컬처 테이블웨어 공급",
    proofType: "record",
    landing: "foodle.biz/partnership",
    channel: "Google (KR B2B)",
    kpi: "Leads · Qualified Leads · Meetings",
    caution: "영양사 직무는 LinkedIn 도달이 제한적일 수 있습니다. 영양사 단독보다 총무팀 · 구매 의사결정권자와 기업(회사) 단위로 타기팅하고, 도달 규모는 확인 후 정합니다(Google 검색과 병행).",
  },
  {
    code: "G4",
    cta: "卸売・取引のお問い合わせ",
    market: "JP",
    who: "일본 라이프스타일 유통 · 편집숍 · 수입 바이어",
    role: "일본 매장에 들일 한국 디자인 생활용품을 찾는 사람",
    pain: "한국 브랜드의 디자인은 보지만, 일본어로 문의할 수 있는 창구와 일본 시장 레퍼런스를 알기 어렵다.",
    trigger: "시즌 바잉 · 팝업 기획 · 편집숍 신규 브랜드 발굴",
    need: "일본어 소개 · 샘플 · 도매 조건 · 일본 내 노출 사례",
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    proof: "2026 도쿄 츠타야 팝업스토어 (팝업 사례이며 도매 계약 실적은 아닙니다)",
    proofType: "partial",
    landing: "jp.foodle.biz",
    channel: "Google (JP B2B) · LinkedIn",
    kpi: "Leads · Sample Requests · Partnership Opportunities",
    caution: "일본어 문구 · 키워드는 현지 검수 후 집행합니다.",
  },
  {
    code: "G5",
    cta: "Wholesale partnership inquiry",
    market: "US",
    who: "미국 홈웨어 · 테이블웨어 유통 · 도매 바이어",
    role: "미국 소매점 · 온라인 몰에 들일 디자인 테이블웨어를 찾는 사람",
    pain: "새로운 한국 브랜드를 믿고 문의하려면 영문 자료와 실적 · 문의 창구가 필요하다.",
    trigger: "신규 라인업 소싱 · 박람회 · 소비자 트렌드 변화",
    need: "영문 라인시트 · 가격 · MOQ · 샘플",
    products: "Oval Dome · Plate07 · Plate05 · Cactus Cup",
    proof: "미국 내 공급 · 협업 실적은 자료에 없습니다. 2024 파리 Maison&Objet 전시 참가가 해외 근거입니다.",
    proofType: "none",
    landing: "영문 B2B 랜딩 (TBD)",
    channel: "Google (US B2B) · LinkedIn",
    kpi: "Leads · Qualified Leads · Partnership Opportunities",
    caution: "MOQ · 가격 · 샘플 정책은 자료에 없습니다. 푸들 확인 전에는 광고 문구에 쓰지 않습니다.",
  },
];

export const gmB2bNote =
  "G1~G5는 기존 B2B 부록(B2B 1 영양사 · 총무, B2B 2 답례품)을 확장한 제안입니다. G3는 B2B 1, G2는 B2B 2에 가장 가깝습니다. 실적(공급 · 납품 기록)과 제안은 구분해서 표시했습니다.";

// ── 04. 키워드 ──
export type Market = "KR" | "JP" | "US";
export type Lang = "ko" | "en" | "ja";
export type Intent = "정보 탐색" | "제품 비교" | "구매" | "도매·납품 문의" | "파트너십";
export type Priority = "P1" | "P2" | "P3";
export type Stage = "Awareness" | "Consideration" | "Conversion";
export type Evidence = "hypothesis" | "to_verify";
export const EVIDENCE_LABEL: Record<Evidence, string> = { hypothesis: "가설", to_verify: "확인 필요" };

export type KeywordRow = {
  id: string;
  market: Market;
  audience: "B2C" | "B2B";
  icp: string; // A1~B2, G1~G5, ALL(브랜드)
  theme: string; // 키워드 그룹
  cluster: string;
  lang: Lang; // 이 줄의 실제 검색 언어(nativeQuery). 다른 언어 칸은 의미 대응용 참고 번역이다.
  ko: string;
  en: string;
  ja: string;
  intent: Intent;
  stage: Stage;
  priority: Priority;
  product: string;
  landing: LandingKey;
  evidence: Evidence;
  src: "요청 초기안" | "명세 v2";
  notes: string;
  // 자료가 있을 때만 채운다. 비어 있으면 화면에 "미검증"으로 보인다.
  metrics?: { volume?: number; cpc?: number; competition?: string };
};

export type LandingKey = "home" | "plate07" | "plate05" | "oval" | "partnership" | "gift" | "jp" | "en";

export const landingMap: Record<LandingKey, { label: string; url: string; state: Verify; note: string }> = {
  home: { label: "foodle.biz (메인)", url: "https://www.foodle.biz/", state: "verified", note: "2026.10.28 접속 확인(200)" },
  plate07: { label: "Plate07 상세", url: "https://www.foodle.biz/Plate07", state: "verified", note: "2026.10.28 접속 확인(200)" },
  plate05: { label: "Plate05 상세", url: "https://www.foodle.biz/Plate05", state: "verified", note: "2026.10.28 접속 확인(200)" },
  oval: { label: "Oval Dome 상세", url: "https://www.foodle.biz/OvalDome", state: "verified", note: "2026.10.28 접속 확인(200)" },
  partnership: { label: "foodle.biz/partnership (납품 · 제휴 문의)", url: "https://www.foodle.biz/partnership", state: "verified", note: "페이지는 열립니다. 문의 폼 작동은 확인 전입니다." },
  gift: { label: "foodle.biz/gift (기프트 · 대량구매)", url: "https://www.foodle.biz/gift", state: "verified", note: "페이지는 열립니다. 문의 폼 작동은 확인 전입니다." },
  jp: { label: "jp.foodle.biz (일본어)", url: "https://jp.foodle.biz/", state: "toverify", note: "열립니다. 메뉴에 法人・団体のお客様 · パートナー · お問い合わせ가 보이나 문의 경로 작동은 확인 전입니다." },
  en: { label: "en.foodle.biz (영문 B2B 랜딩 TBD)", url: "https://en.foodle.biz/", state: "toverify", note: "열리지만 메뉴가 한국어로 남아 있습니다. 영문 B2B 문의 랜딩은 준비가 필요합니다." },
};

// 키워드 그룹 (필터용)
export const KW_THEMES = ["브랜드", "식판·아이", "식단·1인", "다용도·보관", "홈카페·디저트", "선물", "도매·소싱", "수출·수입", "파트너십", "법인 선물", "ESG", "호스피탈리티·F&B"];
export const KW_PRODUCTS = ["Oval Dome", "Plate07", "Plate05", "Cactus Cup"];

type KwTuple = [Market, "B2C" | "B2B", string, string, string, Lang, string, string, string, Intent, Stage, Priority, string, LandingKey, Evidence, "요청 초기안" | "명세 v2", string];
const row = (t: KwTuple): Omit<KeywordRow, "id"> => {
  const [market, audience, icp, theme, cluster, lang, ko, en, ja, intent, stage, priority, product, landing, evidence, src, notes] = t;
  return { market, audience, icp, theme, cluster, lang, ko, en, ja, intent, stage, priority, product, landing, evidence, src, notes };
};

const P_ALL = "Oval Dome · Plate07 · Plate05";
// 국내 B2C (한국어 집행 기준. 영어 · 일본어 칸은 의미 대응용)
const B2C: KwTuple[] = [
  ["KR", "B2C", "ALL", "브랜드", "브랜드 검색", "ko", "푸들 오벌돔", "Foodle Oval Dome", "Foodle オーバルドーム", "구매", "Conversion", "P1", "Oval Dome", "oval", "hypothesis", "명세 v2", "브랜드 검색은 기존 수요를 잡는 용도라 비브랜드와 분리 추적. ‘푸들’ 단독은 강아지 품종 검색과 겹쳐서 제품명과 함께 쓰고 제외 키워드가 필요"],
  ["KR", "B2C", "ALL", "브랜드", "브랜드 검색", "ko", "푸들 플레이트", "Foodle Plate", "Foodle プレート", "구매", "Conversion", "P1", "Plate07 · Plate05", "home", "hypothesis", "명세 v2", "Plate07 · Plate05 중 어느 상세로 보낼지 확인. 우선 메인 연결"],
  ["KR", "B2C", "A1", "식판·아이", "초등학생 식판", "ko", "초등학생 식판", "school-age kids divided plate", "小学生向け仕切り皿", "제품 비교", "Consideration", "P2", "Plate07 · Plate05", "plate07", "hypothesis", "명세 v2", "A1의 Plate07 · Plate05는 메인 후보로 테스트 중(AMPM 가설)"],
  ["KR", "B2C", "A1", "식판·아이", "모듈형 식판", "ko", "모듈형 식판", "modular divided plate", "組み合わせ式仕切りプレート", "제품 비교", "Consideration", "P1", "Plate07", "plate07", "hypothesis", "명세 v2", "10p 모듈 구조와 직접 맞는 표현"],
  ["KR", "B2C", "A1", "식판·아이", "어린이 식기", "ko", "어린이 식기", "kids tableware", "子ども用食器", "정보 탐색", "Awareness", "P3", "Plate07 · Plate05", "plate07", "to_verify", "명세 v2", "폭넓은 후보. 검색 의도 확인 전에는 후순위"],
  ["KR", "B2C", "A1", "식판·아이", "아이 식판", "ko", "아이 식판", "kids meal plate", "子ども用プレート", "정보 탐색", "Awareness", "P2", "Plate07", "plate07", "hypothesis", "요청 초기안", "범위가 넓은 상위어. 경쟁이 높을 수 있어 확장어로 다룸"],
  ["KR", "B2C", "A2", "식단·1인", "식단관리 식판", "ko", "식단관리 식판", "meal planning plate", "食事管理プレート", "제품 비교", "Consideration", "P1", "Plate05", "plate05", "hypothesis", "명세 v2", "체중 감량 · 다이어트 효과 등 효능 표현 금지. A2 제품은 Plate07 · Plate05 테스트 중"],
  ["KR", "B2C", "A2", "식단·1인", "한끼 식판", "ko", "한끼 식판", "single-meal plate", "ワンプレート皿", "제품 비교", "Consideration", "P2", "Plate05", "plate05", "hypothesis", "명세 v2", "1인분 사이즈와 연결"],
  ["KR", "B2C", "A2", "식단·1인", "원플레이트", "ko", "원플레이트", "one plate meal", "ワンプレート", "제품 비교", "Consideration", "P2", "Plate05", "plate05", "hypothesis", "요청 초기안", "원플레이트 한 끼"],
  ["KR", "B2C", "A2", "식단·1인", "혼밥 식기", "ko", "혼밥 식기", "tableware for solo dining", "一人ごはん 食器", "정보 탐색", "Awareness", "P3", "Plate05", "plate05", "hypothesis", "명세 v2", "일상 사용 장면 중심"],
  ["KR", "B2C", "A3", "다용도·보관", "다용도 접시", "ko", "다용도 접시", "multipurpose plate", "多用途プレート", "제품 비교", "Consideration", "P2", "Oval Dome · Plate07", "oval", "hypothesis", "명세 v2", "접시 · 볼 · 돔 커버 3in1과 연결"],
  ["KR", "B2C", "A3", "다용도·보관", "음식 덮개 접시", "ko", "음식 덮개 접시", "serving plate with cover", "フタ付きプレート", "제품 비교", "Consideration", "P2", "Oval Dome", "oval", "hypothesis", "명세 v2", "제품 형태 적합성 확인. ‘덮어 두는’까지만 쓰고 밀폐 · 보관용기 대체 표현은 금지"],
  ["KR", "B2C", "A3", "다용도·보관", "음식 덮개", "ko", "음식 덮개", "food cover dome", "フードカバー", "제품 비교", "Consideration", "P3", "Oval Dome", "oval", "hypothesis", "요청 초기안", "다른 용품(덮개 · 커버) 검색과 섞일 수 있음"],
  ["KR", "B2C", "A3", "다용도·보관", "냉장고 정리 용기", "ko", "냉장고 정리 용기", "fridge organizing container", "冷蔵庫 収納容器", "정보 탐색", "Awareness", "P3", "Oval Dome", "oval", "to_verify", "명세 v2", "경쟁 범위가 넓어 후순위. 보관용기 대체로 오해되지 않게 주의"],
  ["KR", "B2C", "B1", "홈카페·디저트", "홈카페 그릇", "ko", "홈카페 그릇", "home cafe tableware", "おうちカフェ 食器", "정보 탐색", "Awareness", "P2", "Oval Dome", "oval", "hypothesis", "명세 v2", "Cactus Cup은 보조 제품. ECOZEN으로 쓰지 않음"],
  ["KR", "B2C", "B1", "홈카페·디저트", "디저트 접시", "ko", "디저트 접시", "dessert plate", "デザート皿", "제품 비교", "Consideration", "P1", "Oval Dome", "oval", "hypothesis", "명세 v2", "플레이팅 · 미감이 첫 입구인 타겟"],
  ["KR", "B2C", "B1", "홈카페·디저트", "오벌 접시", "ko", "오벌 접시", "oval serving plate", "オーバルプレート", "제품 비교", "Consideration", "P1", "Oval Dome", "oval", "hypothesis", "명세 v2", "제품 형태와 직접 연결"],
  ["KR", "B2C", "B1", "홈카페·디저트", "디자인 식기", "ko", "디자인 식기", "designer tableware", "デザイン食器", "제품 비교", "Consideration", "P2", "Oval Dome", "oval", "hypothesis", "요청 초기안", "브랜드 · 디자인 탐색 수요"],
  ["KR", "B2C", "B1", "홈카페·디저트", "예쁜 그릇", "ko", "예쁜 그릇", "pretty bowls", "おしゃれな器", "정보 탐색", "Awareness", "P3", "Oval Dome", "oval", "to_verify", "요청 초기안", "탐색 단계의 넓은 단어. 전환 효율을 확인한 뒤 사용"],
  ["KR", "B2C", "B2", "선물", "집들이 선물 그릇", "ko", "집들이 선물 그릇", "housewarming tableware gift", "引っ越し祝い 食器", "구매", "Conversion", "P1", "Oval Dome · Cactus Cup", "oval", "hypothesis", "명세 v2", "선물 시즌성 확인. 배송 · 포장 옵션은 운영 확인 후 표기"],
  ["KR", "B2C", "B2", "선물", "신혼부부 식기 선물", "ko", "신혼부부 식기 선물", "newlywed tableware gift", "新婚祝い 食器", "구매", "Conversion", "P2", "Oval Dome · Cactus Cup", "oval", "hypothesis", "명세 v2", "할인 · 최저가 · 가성비 표현 금지"],
  ["KR", "B2C", "B2", "선물", "센스있는 집들이 선물", "ko", "센스있는 집들이 선물", "thoughtful housewarming gift", "センスのいい引っ越し祝い", "정보 탐색", "Consideration", "P3", "Oval Dome · Cactus Cup", "oval", "to_verify", "명세 v2", "폭넓은 후보. 식기가 아닌 선물 전반이 섞일 수 있음"],
];

// B2B 구매 의도(명세 6.3). 한 개념을 시장별 실제 검색어로 펼친다: KR(한국어 · G1~G3) / JP(일본어 · G4) / US(영어 · G5)
type Concept = {
  theme: string;
  cluster: string;
  ko: string;
  en: string;
  ja: string;
  intent: Intent;
  stage: Stage;
  product: string;
  kr?: { icp: string; pri: Priority; landing: LandingKey };
  jp?: Priority;
  us?: Priority;
  evidence?: Evidence;
  notes: string;
};
const CONCEPTS: Concept[] = [
  { theme: "도매·소싱", cluster: "유통 소싱", ko: "한국 디자인 식기 도매", en: "Korean designer tableware wholesale", ja: "韓国デザイン食器 卸", intent: "도매·납품 문의", stage: "Conversion", product: "Oval Dome · Plate07", kr: { icp: "G1", pri: "P1", landing: "partnership" }, jp: "P1", us: "P1", notes: "유통 · 수입 바이어의 직접 문의 의도" },
  { theme: "수출·수입", cluster: "해외 유통", ko: "한국 식기 수출업체", en: "Korean tableware exporter", ja: "韓国食器 輸入", intent: "도매·납품 문의", stage: "Consideration", product: "Oval Dome · Plate07", kr: { icp: "G1", pri: "P1", landing: "partnership" }, jp: "P1", us: "P2", notes: "‘수출업체’는 제조사 · 무역상 · 브랜드가 섞일 수 있어 검색어 보고서로 의도 확인" },
  { theme: "도매·소싱", cluster: "상품 소싱", ko: "테이블웨어 도매 업체", en: "wholesale tableware supplier", ja: "テーブルウェア 仕入れ", intent: "도매·납품 문의", stage: "Conversion", product: P_ALL, kr: { icp: "G1", pri: "P1", landing: "partnership" }, jp: "P1", us: "P1", notes: "소매점 · 유통사 매입 의도" },
  { theme: "도매·소싱", cluster: "제조·소싱", ko: "한국 리빙 브랜드 소싱", en: "Korean homeware supplier", ja: "韓国生活雑貨 仕入れ", intent: "도매·납품 문의", stage: "Consideration", product: P_ALL, kr: { icp: "G1", pri: "P1", landing: "partnership" }, jp: "P2", us: "P1", evidence: "to_verify", notes: "‘homeware’는 영국식 표현일 수 있어 미국 검색어 보고서로 확인(‘homegoods’ 대안). ‘제조’ 검색이 OEM · ODM 공장 수요만인지도 확인" },
  { theme: "도매·소싱", cluster: "편집숍", ko: "디자인 식기 브랜드 입점", en: "lifestyle store tableware brands", ja: "セレクトショップ 食器 仕入れ", intent: "제품 비교", stage: "Consideration", product: "Oval Dome · Cactus Cup", kr: { icp: "G1", pri: "P2", landing: "partnership" }, jp: "P2", us: "P2", notes: "편집숍 · 라이프스타일 매장 바이어" },
  { theme: "파트너십", cluster: "파트너십", ko: "테이블웨어 유통 파트너", en: "tableware distribution partner", ja: "食器 販売代理店", intent: "파트너십", stage: "Consideration", product: P_ALL, kr: { icp: "G1", pri: "P2", landing: "partnership" }, jp: "P2", us: "P2", notes: "유통 · 판매대행 제휴 의도" },
  { theme: "법인 선물", cluster: "법인 선물", ko: "기업 답례품", en: "corporate appreciation gifts", ja: "法人向けギフト", intent: "도매·납품 문의", stage: "Consideration", product: "Oval Dome · Cactus Cup", kr: { icp: "G2", pri: "P2", landing: "gift" }, evidence: "to_verify", notes: "G2는 ‘한국인 글로벌 바이어 20%’와 같은 범주인지 확인 전. 캠페인 포함 여부 To Verify. 영어 · 일본어 칸은 의미 대응용" },
  { theme: "법인 선물", cluster: "대량 구매", ko: "기업 선물 대량 구매", en: "bulk corporate gifts", ja: "法人ギフト 大量注文", intent: "도매·납품 문의", stage: "Conversion", product: "Oval Dome · Cactus Cup", kr: { icp: "G2", pri: "P2", landing: "gift" }, evidence: "to_verify", notes: "G2. 대량 주문 수량 · 납기 · 가격 정책은 자료에 없음" },
  { theme: "ESG", cluster: "ESG 선물", ko: "친환경 기업 선물", en: "sustainable corporate gifts", ja: "サステナブル 法人ギフト", intent: "제품 비교", stage: "Consideration", product: "Oval Dome", kr: { icp: "G2", pri: "P3", landing: "gift" }, evidence: "to_verify", notes: "‘친환경’은 고객 검색어로만 사용. 광고 문구에 인증 · 환경 효능 표현 금지" },
  { theme: "호스피탈리티·F&B", cluster: "호스피탈리티", ko: "호텔 식기 납품", en: "hospitality tableware supplier", ja: "ホテル向け食器 卸", intent: "도매·납품 문의", stage: "Conversion", product: "Plate07 · Plate05", kr: { icp: "G3", pri: "P2", landing: "partnership" }, evidence: "to_verify", notes: "시험 광고그룹. Plate07 공급 기록(2022 신세계푸드 × 신라호텔 F&B)이 근거. 고객사명 노출은 사전 허락 확인" },
  { theme: "호스피탈리티·F&B", cluster: "F&B", ko: "업소용 테이블웨어", en: "commercial tableware supplier", ja: "業務用食器 卸", intent: "도매·납품 문의", stage: "Conversion", product: "Plate07 · Plate05", kr: { icp: "G3", pri: "P2", landing: "partnership" }, evidence: "to_verify", notes: "시험 광고그룹. 업소용 사양(내구 · 세척 횟수)은 자료에 없어 확인 후 표기" },
  { theme: "도매·소싱", cluster: "미국 바이어", ko: "한국 홈웨어 도매", en: "Korean homeware wholesale", ja: "韓国生活雑貨 卸", intent: "도매·납품 문의", stage: "Conversion", product: P_ALL, us: "P2", notes: "미국 바이어(G5) 전용. 한국어 · 일본어 칸은 의미 대응용" },
];

// 요청 초기안 중 명세 표에 없는 B2B 후보 (그대로 보존)
const B2B_BRIEF: KwTuple[] = [
  ["KR", "B2B", "G1", "도매·소싱", "친환경 식기 도매", "ko", "친환경 식기 도매", "eco-friendly tableware wholesale", "", "도매·납품 문의", "Consideration", "P2", "Plate07 · Oval Dome", "partnership", "hypothesis", "요청 초기안", "‘친환경’은 고객 검색어로만 사용. 광고 문구에는 인증 · 환경 효능 표현 금지"],
  ["KR", "B2B", "G1", "도매·소싱", "한국 디자인 식기 제조사", "ko", "한국 디자인 식기 제조사", "Korean design tableware manufacturer", "", "제품 비교", "Consideration", "P2", "Oval Dome · Plate07", "partnership", "to_verify", "요청 초기안", "푸들은 디자인 브랜드이며 제조 방식(자체 · 위탁) 표기는 확인 후. 제조사 검색이 OEM · ODM 공장 수요인지 확인"],
  ["KR", "B2B", "G1", "수출·수입", "테이블웨어 수출", "ko", "테이블웨어 수출", "tableware export Korea", "", "정보 탐색", "Awareness", "P3", "Oval Dome · Plate07", "partnership", "to_verify", "요청 초기안", "수출 지원 방식은 자료에 없음. 검색 의도를 확인한 뒤 사용"],
  ["KR", "B2B", "G2", "법인 선물", "기업 답례품 대량 구매", "ko", "기업 답례품 대량 구매", "corporate gift bulk order", "", "도매·납품 문의", "Conversion", "P2", "Oval Dome", "gift", "to_verify", "요청 초기안", "G2. 청와대 행사 답례품 사례는 제품명이 확인되지 않아 제품과 연결하지 않음"],
  ["KR", "B2B", "G3", "호스피탈리티·F&B", "식기 납품 업체", "ko", "식기 납품 업체", "tableware supplier for food service", "", "도매·납품 문의", "Conversion", "P2", "Plate07 · Plate05", "partnership", "to_verify", "요청 초기안", "Plate07 공급 기록(2022)이 근거. 고객사명 광고 노출은 사전 허락 확인"],
  ["KR", "B2B", "G1", "파트너십", "디자인 리빙 브랜드 유통", "ko", "디자인 리빙 브랜드 유통", "design living brand distribution", "", "정보 탐색", "Awareness", "P3", "Oval Dome · Plate07", "partnership", "hypothesis", "요청 초기안", "유통 조건은 자료에 없음"],
  ["JP", "B2B", "G4", "도매·소싱", "韓国 食器 卸", "ja", "한국 식기 도매", "Korean tableware wholesale", "韓国 食器 卸", "도매·납품 문의", "Conversion", "P1", "Oval Dome · Plate07", "jp", "hypothesis", "요청 초기안", "일본어 현지 검수 필요. 도쿄 츠타야 팝업은 팝업 사례이며 도매 실적이 아님"],
  ["JP", "B2B", "G4", "도매·소싱", "デザイン食器 卸", "ja", "디자인 식기 도매", "designer tableware wholesale", "デザイン食器 卸", "도매·납품 문의", "Conversion", "P1", "Oval Dome · Plate07", "jp", "hypothesis", "요청 초기안", "디자인 중심 바이어 대상"],
  ["JP", "B2B", "G4", "도매·소싱", "ライフスタイル雑貨 卸", "ja", "라이프스타일 잡화 도매", "lifestyle goods wholesale", "ライフスタイル雑貨 卸", "제품 비교", "Consideration", "P2", "Oval Dome · Cactus Cup", "jp", "hypothesis", "요청 초기안", "편집숍 · 잡화점 바이어. 상위 개념이라 경쟁 폭이 클 수 있음"],
  ["JP", "B2B", "G4", "수출·수입", "食器 輸入", "ja", "식기 수입", "tableware import", "食器 輸入", "정보 탐색", "Awareness", "P2", "Oval Dome · Plate07", "jp", "hypothesis", "요청 초기안", "수입 절차 문의 비중이 높을 수 있어 검색어 보고서로 확인"],
  ["JP", "B2B", "G4", "법인 선물", "法人向けギフト", "ja", "법인용 선물", "corporate gifts", "法人向けギフト", "제품 비교", "Consideration", "P3", "Oval Dome", "jp", "to_verify", "요청 초기안", "일본 기업 판촉 · 총무 수요. 일본 대상 답례품 랜딩이 없어 G4 확장 후보로만 둠"],
  ["US", "B2B", "G5", "도매·소싱", "Korean tableware wholesale", "en", "한국 식기 도매", "Korean tableware wholesale", "韓国 食器 卸", "도매·납품 문의", "Conversion", "P1", "Oval Dome · Plate07", "en", "hypothesis", "요청 초기안", "영문 B2B 랜딩 준비 전 집행 보류 권장"],
  ["US", "B2B", "G5", "도매·소싱", "Designer tableware distributor", "en", "디자이너 식기 유통사", "Designer tableware distributor", "デザイン食器 ディストリビューター", "도매·납품 문의", "Conversion", "P1", "Oval Dome · Plate07", "en", "hypothesis", "요청 초기안", "유통사 대상 직접 문의 의도"],
  ["US", "B2B", "G5", "ESG", "Sustainable tableware wholesale", "en", "지속가능 식기 도매", "Sustainable tableware wholesale", "サステナブル 食器 卸", "도매·납품 문의", "Consideration", "P2", "Oval Dome · Plate07", "en", "hypothesis", "요청 초기안", "‘sustainable’은 검색어일 뿐. 광고 문구에서 인증 · 환경 효능을 주장하지 않음"],
  ["US", "B2B", "G5", "도매·소싱", "Wholesale dining accessories", "en", "도매 식탁 소품", "Wholesale dining accessories", "ダイニング雑貨 卸", "정보 탐색", "Awareness", "P3", "Cactus Cup · Oval Dome", "en", "to_verify", "요청 초기안", "범위가 넓은 탐색어. 무관한 검색을 걸러 낼 제외 키워드 필요"],
  ["US", "B2B", "G5", "도매·소싱", "Korean lifestyle brand distributor", "en", "한국 라이프스타일 브랜드 유통사", "Korean lifestyle brand distributor", "韓国 ライフスタイル ブランド 卸", "파트너십", "Consideration", "P2", "Oval Dome · Plate07", "en", "hypothesis", "요청 초기안", "브랜드 유통 의도. 미국 레퍼런스는 아직 없음"],
];

const expand = (cs: Concept[]): Omit<KeywordRow, "id">[] =>
  cs.flatMap((c) => {
    const base = { theme: c.theme, cluster: c.cluster, ko: c.ko, en: c.en, ja: c.ja, intent: c.intent, stage: c.stage, product: c.product, audience: "B2B" as const, evidence: c.evidence ?? "hypothesis", src: "명세 v2" as const, notes: c.notes };
    const out: Omit<KeywordRow, "id">[] = [];
    if (c.kr) out.push({ ...base, market: "KR", lang: "ko", icp: c.kr.icp, priority: c.kr.pri, landing: c.kr.landing });
    if (c.jp) out.push({ ...base, market: "JP", lang: "ja", icp: "G4", priority: c.jp, landing: "jp" });
    if (c.us) out.push({ ...base, market: "US", lang: "en", icp: "G5", priority: c.us, landing: "en" });
    return out;
  });

export const gmKeywords: KeywordRow[] = [...B2C.map(row), ...expand(CONCEPTS), ...B2B_BRIEF.map(row)].map((r, i) => ({ ...r, id: `K${String(i + 1).padStart(3, "0")}` }));

export const gmKeywordNotes = [
  "이 키워드는 초기 후보입니다. 검증된 검색량이나 전환 성과를 뜻하지 않습니다. P1도 실적 보장이 아닌 ‘우선 검토’ 목록입니다.",
  "우선순위(P1~P3) · 퍼널 단계 · 검색 의도 · 근거 상태는 가설입니다. Keyword Planner와 검색어 보고서로 국가 · 언어별 검색량, 의도, CPC, 경쟁, 광고 정책을 확인한 뒤 조정합니다.",
  "표의 굵은 칸이 실제 검색 언어(원어 검색어)이고, 나머지 언어 칸은 의미 비교용 참고 번역입니다. B2C의 영어 · 일본어는 JP/US 소비자 광고 집행을 뜻하지 않습니다. 일본어 · 영어는 현지 검수 후 사용합니다.",
  "출처는 ‘요청 초기안’(푸들 요청 키워드)과 ‘명세 v2’(통합 명세서의 대표 키워드)로 나눴습니다. 명세서가 가리키는 국내 B2C 후보 65개 · 다국어 후보 원본(xlsx · docx)은 이 작업 환경에서 열람하지 못해, 대표 키워드만 반영했습니다. 파일이 확보되면 같은 형식으로 확장합니다.",
  "월간 검색량 · CPC · 경쟁도는 자료가 없어 비워 두었습니다. 값이 확인되면 표의 “검색량 · CPC · 경쟁도” 칸에 함께 표시합니다. 지금은 모두 “미검증”입니다.",
  "LinkedIn의 직무 · 산업 타기팅은 Google 검색 키워드와 용도가 다릅니다. 같은 목록으로 쓰지 않습니다.",
];

// ── 05. Google Ads 캠페인 구조 ──
export const gmCampaigns = [
  {
    code: "Campaign 1",
    id: "KR-B2C-Search",
    name: "KR B2C",
    audienceId: "kr-b2c" as AudienceId,
    pool: "국내 실비",
    who: "국내 일반 소비자",
    language: "한국어 검색",
    goal: "구매 전환 · ROAS",
    adGroups: ["Brand", "A1", "A2", "A3", "B1", "B2"],
    steps: [
      { k: "Audience", v: "A1 · A2 · A3 · B1 · B2" },
      { k: "Search Intent", v: "제품 비교 · 구매" },
      { k: "Keyword Group", v: "브랜드와 비브랜드를 분리. 타겟(A1~B2)별 메시지는 광고그룹 · 에셋으로 테스트" },
      { k: "Ad Copy", v: "“매일 쓰고 싶은 디자인 식기” · “보관부터 플레이팅까지”" },
      { k: "Landing", v: "foodle.biz 개별 상품 상세 (사용 상황과 랜딩 내용 일치 검토)" },
      { k: "Conversion", v: "add_to_cart · purchase (측정 가능 여부 확인)" },
    ],
    metricGroup: "Google B2C",
    note: "예산이 작으면 5개 ICP를 모두 개별 캠페인으로 쪼개지 말고, 학습 가능한 규모의 캠페인 안에서 광고그룹 · 에셋으로 테스트합니다.",
    state: "strategy" as Verify,
  },
  {
    code: "Campaign 2",
    id: "KR-B2B-Search",
    name: "KR B2B",
    audienceId: "kr-b2b" as AudienceId,
    pool: "국내 실비",
    who: "한국인 기업 구매 담당자 · 글로벌 바이어",
    language: "한국어 검색",
    goal: "견적 · 파트너십 문의",
    adGroups: ["Export Sourcing", "Distributor", "Corporate Purchase (시험)", "Hospitality (시험)"],
    steps: [
      { k: "Audience", v: "G1 (핵심) · G2 · G3 (캠페인 포함 여부 확인)" },
      { k: "Search Intent", v: "도매·납품 문의 · 제품 비교 · 파트너십" },
      { k: "Keyword Group", v: "소싱 · 유통은 G1, 기업 선물은 G2, 호텔 · 업소용은 G3. G2 · G3는 시험 그룹" },
      { k: "Ad Copy", v: "“한국 디자인 테이블웨어 브랜드 Foodle” · “리빙·테이블웨어 유통 파트너 문의”" },
      { k: "Landing", v: "foodle.biz/partnership · foodle.biz/gift (문의 폼 작동 확인 전)" },
      { k: "Conversion", v: "inquiry_form_submit · email_click · sample_request · meeting_booked" },
    ],
    metricGroup: "Google B2B",
    note: "성과는 문의 여부와 유효 리드로 봅니다. 유효 리드 기준(사업자 · 담당 직무 · 국가 · 도매 또는 실제 구매 의향)을 먼저 정합니다.",
    state: "strategy" as Verify,
  },
  {
    code: "Campaign 3",
    id: "JP-B2B-Search",
    name: "JP B2B",
    audienceId: "jp-b2b" as AudienceId,
    pool: "해외 실비",
    who: "일본인 유통 · 수입 바이어",
    language: "일본어 검색",
    goal: "파트너십 문의 · 샘플 요청",
    adGroups: ["Korean Tableware Import", "Design Wholesale", "Retail Sourcing"],
    steps: [
      { k: "Audience", v: "G4" },
      { k: "Search Intent", v: "도매·납품 문의 · 파트너십" },
      { k: "Keyword Group", v: "卸 · 輸入 · 仕入れ · セレクトショップ" },
      { k: "Ad Copy", v: "“韓国発デザインテーブルウェア Foodle” · “食器の卸売・お取引のご相談”" },
      { k: "Landing", v: "jp.foodle.biz 내 실제 문의 페이지 (확인 필요)" },
      { k: "Conversion", v: "inquiry_form_submit · sample_request" },
    ],
    metricGroup: "Google B2B",
    note: "일본어 표현은 현지 검수가 필요하고, jp.foodle.biz의 문의 경로 작동을 먼저 확인합니다.",
    state: "toverify" as Verify,
  },
  {
    code: "Campaign 4",
    id: "US-B2B-Search",
    name: "US B2B",
    audienceId: "us-b2b" as AudienceId,
    pool: "해외 실비",
    who: "미국 수입 · 유통 · 도매 바이어",
    language: "영어 검색",
    goal: "바이어 문의",
    adGroups: ["Korean Tableware Wholesale", "Lifestyle Distributor", "Homeware Supplier"],
    steps: [
      { k: "Audience", v: "G5" },
      { k: "Search Intent", v: "도매·납품 문의 · 파트너십" },
      { k: "Keyword Group", v: "wholesale · supplier · distributor" },
      { k: "Ad Copy", v: "“Design-Led Tableware from Korea” · “Explore Foodle Wholesale Partnerships”" },
      { k: "Landing", v: "영문 B2B 랜딩 (TBD). jp.foodle.biz를 연결하지 않음" },
      { k: "Conversion", v: "inquiry_form_submit · email_click" },
    ],
    metricGroup: "Google B2B",
    note: "영문 B2B 랜딩이 준비되기 전에는 집행을 보류하는 것을 권장합니다. MOQ · 가격 · 샘플 정책은 푸들 확인 후 문구에 반영합니다.",
    state: "toverify" as Verify,
  },
];

// 광고 문구 샘플 (검토용, 확정 문안이 아님)
export const gmAdCopy = [
  { lang: "KR B2C · 디자인 / 사용성", headlines: ["매일 쓰고 싶은 디자인 식기", "식탁 위의 새로운 즐거움", "보관부터 플레이팅까지"], desc: "보기 좋은 디자인과 일상의 쓰임을 함께 생각한 푸들의 테이블웨어를 만나보세요." },
  { lang: "KR B2B · 소싱", headlines: ["한국 디자인 테이블웨어 브랜드 Foodle", "리빙·테이블웨어 유통 파트너 문의"], desc: "차별화된 디자인과 실용성을 갖춘 제품군. 도매 및 유통 협업을 문의해 주세요." },
  { lang: "JP B2B", headlines: ["韓国発デザインテーブルウェア Foodle", "食器の卸売・お取引のご相談"], desc: "デザインと使いやすさを大切にしたテーブルウェア。日本でのお取引・仕入れについてお問い合わせください。" },
  { lang: "US B2B", headlines: ["Design-Led Tableware from Korea", "Explore Foodle Wholesale Partnerships"], desc: "Discover thoughtful Korean tableware designed for everyday use. Contact Foodle to discuss distribution opportunities." },
];

export const gmCampaignRules = [
  "B2C ROAS와 B2B 리드 성과를 한 지표로 합치지 않습니다. 캠페인 단위로 분리해서 봅니다.",
  "브랜드 검색과 일반 검색을 분리 추적해, 기존 수요 포획과 신규 고객 획득을 구분합니다.",
  "해외 바이어의 사용 언어와 활동 국가는 같지 않을 수 있어서, 위치 · 언어 설정과 검색 의도를 함께 확인합니다.",
  "광고 문구는 각국 표현으로 현지화하되, 실제 주문 가능 국가와 배송 · 거래 조건을 확인한 뒤 씁니다. 글자 수 제한과 정책은 게시 전 Google Ads 편집기에서 검수합니다.",
  "광고 문구에는 푸들 브랜드 가이드의 금지 표현을 쓰지 않습니다(식약처 인증, 절대 안 깨지는, 밀폐 · 누수방지, 할인 · 최저가, Cactus Cup 에코젠 등).",
];

export const gmExclusions = {
  start: ["무료", "중고", "DIY", "만들기", "채용", "알바", "도안"],
  added: ["강아지", "반려견"],
  addedNote: "‘푸들’이 강아지 품종과 겹쳐서 제가 추가한 제안입니다. 검색어 보고서로 확인합니다.",
  hold: [
    { k: "일회용", v: "일괄 제외할지는 실제 유입 검색어를 보고 판단" },
    { k: "제조사", v: "B2B에서 OEM · ODM 공장만 찾는 수요인지 확인" },
  ],
};

// 집행 활성화 순서 (전략 제언: 월 매체 실비가 작아 4개 캠페인을 동시에 상시 집행하지 않고 단계적으로 켠다. 금액 · 건수는 정하지 않음)
export const gmPhases: { step: string; what: string; gate: string }[] = [
  { step: "준비", what: "계정 · 결제 · 전환 추적 · 랜딩 점검, 키워드 검증(검색량 · 의도 · CPC)", gate: "견적 포함: 키워드 분석 · 초기 세팅" },
  { step: "1단계", what: "KR B2C 브랜드 + P1 광고그룹, KR B2B P1 소량 시험", gate: "문의 폼과 구매 전환이 잡히는지 확인 후" },
  { step: "2단계", what: "JP B2B P1 (韓国 食器 卸 · デザイン食器 卸 · テーブルウェア 仕入れ)", gate: "jp.foodle.biz 문의 경로와 일본어 문안 검수 후" },
  { step: "3단계", what: "US B2B P1 (wholesale · supplier · distributor)", gate: "영문 B2B 랜딩이 확정된 후" },
  { step: "상시", what: "검색어 보고서로 제외 키워드 · 문구 · 랜딩 개선", gate: "유효 리드 기준 합의 후 비교" },
];
export const gmPhaseNote = "집행 순서는 전략 제언이며, 합의 전에는 확정이 아닙니다. 월 매체 실비 합계는 국내 + 해외를 더한 값이고(참고 계산), 이 범위에서 최적 예산이나 리드 건수를 보장하지 않습니다.";

// ── 06. LinkedIn ──
// LinkedIn 메인 타겟 (푸들 지정 기준, 2026.10.28). 국내 60% · 글로벌 40%는 타깃 · 콘텐츠 우선순위이며 광고비 분할이 아니다.
export const gmLiMain = {
  stamp: "푸들 지정 기준 · 2026.10.28",
  split: [
    { label: "국내", pct: 60, color: "#cba258" },
    { label: "글로벌", pct: 40, color: "#b9b4aa" },
  ],
  groups: [
    {
      region: "국내",
      pct: 60,
      mk: "KR",
      items: [
        { who: "소비재 유통사 MD", sub: "온 · 오프라인 유통사", examples: ["카카오톡 선물하기", "현대백화점", "홈쇼핑", "신세계프라퍼티"], icp: "G1 (유통 · 소싱)", note: "G1은 해외 소싱 바이어 중심이라 국내 유통 MD와 완전히 같지는 않습니다. ICP 정의를 맞춰야 합니다." },
        { who: "식품 · 컨세션 · 단체급식 기업의 B2B 영양사 · 의사결정권자 (총무팀)", sub: "단체급식 · 컨세션 운영 기업", examples: ["아워홈", "CJ프레시웨이", "현대그린푸드", "풀무원푸드앤컬처", "삼성웰스토리"], icp: "G3", note: "영양사 직무는 LinkedIn 도달이 제한적일 수 있어, 총무팀 · 구매 의사결정권자와 기업 단위로 확인합니다." },
        { who: "호텔 · 리조트 구매 담당자", sub: "호스피탈리티 구매", examples: [] as string[], icp: "G3", note: "근거: 2022 신세계푸드 × 신라호텔 F&B Plate07 공급 기록." },
        { who: "기프트 · 답례품 구매 담당자", sub: "기업 · 행사 선물", examples: [] as string[], icp: "G2", note: "청와대 답례품 사례는 제품명이 확인되지 않아 제품과 연결하지 않습니다." },
      ],
    },
    {
      region: "글로벌",
      pct: 40,
      mk: "JP US",
      items: [
        { who: "B2C 소비재 유통사 MD", sub: "디자이너가 만든 테이블웨어 · 식기 부문 바이어 및 리테일러", examples: [] as string[], icp: "G4 · G5", note: "근거: 2024 파리 Maison&Objet 전시 참가, 2026 도쿄 츠타야 팝업. 해외 도매 계약 실적은 아닙니다." },
        { who: "B2B 부문 바이어", sub: "기업 내부용 식기 · 식판, 호텔 · 리조트 룸서비스용 용기", examples: [] as string[], icp: "신규 정의 필요 (G3의 해외 확장)", note: "룸서비스용 용기는 제품 적합성 자료가 없어 푸들 확인 후에만 약속합니다." },
      ],
    },
  ],
  existing: "예시 기업 중 풀무원푸드앤컬처(2026 공급), 현대그린푸드(2022 사내 카페테리아 Plate07 공급), 현대백화점(2026 판교점 입점)은 이미 기록이 있어 신규 발굴이 아니라 관계 확장 · 레퍼런스 대상으로 구분합니다.",
  note: "예시 기업은 타기팅 후보이며 거래나 계약 관계를 뜻하지 않습니다. 국내 60% · 글로벌 40%는 LinkedIn 타깃 · 콘텐츠의 우선순위이고, 광고비 120,000원(1회)을 이 비율로 나누지 않습니다. 글로벌에 일본 · 미국 중 어느 국가를 먼저 둘지는 대행사와 협의합니다.",
};

export const gmLinkedin = {
  roles: [
    "기업 신뢰 형성",
    "디자인 및 지속가능성 철학 전달",
    "실제 납품 사례 소개",
    "글로벌 시장 진출 스토리",
    "신규 바이어와 파트너십 기회 확보",
  ],
  buyers: [
    "Purchasing Manager",
    "Procurement Manager",
    "Retail Buyer",
    "Merchandiser",
    "Category Manager",
    "Business Development Manager",
    "ESG / CSR Manager",
    "Hospitality Procurement",
    "Distributor / Importer",
  ],
  countries: [
    {
      code: "KR",
      label: "한국",
      icps: "G1 · G2 · G3",
      titles: ["Purchasing Manager", "Procurement", "Merchandiser", "Business Development"],
      local: ["구매 담당자", "MD · 상품기획", "해외영업 · BD", "ESG · CSR 담당", "총무 · 복리후생"],
      companies: "무역 · 유통 · 리빙 편집숍 · 기업 구매팀",
      offer: "한국 디자인 식기 소싱 · 대량 주문",
      note: "영양사 직무는 도달이 제한적일 수 있어, 총무팀 · 구매 의사결정권자와 기업(회사) 단위 타기팅으로 확인합니다.",
    },
    {
      code: "JP",
      label: "일본",
      icps: "G4",
      titles: ["Buyer", "Category Manager", "Merchandiser", "Import Manager", "Business Development"],
      local: ["バイヤー", "購買担当", "商品企画 · MD", "輸入担当", "事業開発"],
      companies: "리빙 편집숍 · 백화점 · 도매 · 수입사",
      offer: "日本国内取引・仕入れ相談",
      note: "일본어 직무명과 게시물은 현지 검수 · 현지화가 필요합니다.",
    },
    {
      code: "US",
      label: "미국",
      icps: "G5",
      titles: ["Retail Buyer", "Purchasing Manager", "Category Manager", "Distributor", "Import Manager"],
      local: [] as string[],
      companies: "Home & Living · Tableware · Wholesale · Lifestyle Retail",
      offer: "Wholesale / Distribution Partnership",
      note: "미국 레퍼런스가 없으므로 한국 공급 사례와 전시 참가 중심으로 소개합니다.",
    },
  ],
  profiles: [
    { title: "기업 페이지", role: "제안의 객관적 증거", items: ["제품", "납품 사례", "디자인 차별점", "파트너십 안내 · 문의 CTA"] },
    { title: "대표 개인 프로필", role: "관계와 신뢰 형성", items: ["창업 스토리", "디자인 철학", "지속가능성에 대한 관점", "글로벌 비즈니스 경험"] },
  ],
  profileScope: "대표 개인 계정 콘텐츠 운영은 견적서에 없어 협의가 필요합니다. 견적서는 기업 페이지 운영을 기준으로 합니다.",
  targeting: [
    { k: "Job Title · Job Function", v: "구매 · Business Development · Merchandising 계열" },
    { k: "Industry", v: "Retail · Consumer Goods · Wholesale · Hospitality · Food & Beverage Services · Import and Export" },
    { k: "Seniority", v: "매니저급 이상을 우선 검토" },
    { k: "Company Size", v: "확정하지 않음. 대행사와 협의" },
  ],
  caution: [
    "직무명은 LinkedIn 광고 플랫폼에 실제로 존재하는 타기팅 옵션과 같다고 보장하지 않습니다. 대행사가 실사용 직함 · 직무 · 기업 필터로 다시 매핑합니다.",
    "업종 · 규모 · 계정 목록은 실제 사용 가능성과 도달 인원을 보고 정합니다.",
    "LinkedIn 직무 · 산업 타기팅은 Google 검색 키워드와 용도가 다릅니다. 두 목록을 섞지 않습니다.",
    "푸들 LinkedIn 기업 페이지와 대표 프로필의 URL은 자료에 없어 확인이 필요합니다.",
  ],
  shareNote: "LinkedIn은 B2B(G1~G5)에 집중하고, 메인 타깃은 국내 60% · 글로벌 40%입니다. 이 비율은 LinkedIn 타깃 · 콘텐츠 우선순위이며 전체 60/20/10/10과는 별개입니다. 일반 소비자를 유료 타깃으로 강제하지 않고, 제한된 예산에서는 대규모 인지도 광고보다 담당자 신뢰 구축, 리드 확보 가능성 검증, 영업 연계를 우선합니다.",
  leads: [
    { k: "Lead", v: "관련 문의 또는 연결 요청" },
    { k: "Qualified Lead", v: "대상 국가 · 기업 · 업종 · 담당자의 의도가 확인된 문의" },
    { k: "Sales Opportunity", v: "제품 · 수량 · 도입 일정 등 구체적인 후속 논의" },
    { k: "수주 · 매출", v: "별도 기록 (리드 지표와 섞지 않음)" },
  ],
  leadNote: "메시지 · 콘텐츠별 UTM과 CRM 연동 방법을 정하고, 제공되지 않은 CRM이 있다고 가정하지 않습니다.",
  quoteScope: "견적서(1개월 · 1,200,000원)의 LinkedIn 범위: 프로젝트 관리, 채널 전략 · 분석, 기업 페이지 활성화, 브랜드 배너, 주 1회 콘텐츠 발행, 모니터링, 광고 캠페인 세팅 · 정책 모니터링, 광고비 120,000원(1회).",
};

// ── 07. 콘텐츠 · 메시지 ──
export const gmContent = [
  {
    no: 1,
    theme: "Business Credibility",
    purpose: "푸들이 실제로 납품하는 회사라는 신뢰를 만든다",
    target: "G1 · G3 · G4",
    material: "공급 레퍼런스 타임라인 (카페테리아 · 호텔 F&B · 공공기관 다회용기)",
    headline: "Supplied to Korean corporate cafeterias and hotel F&B.",
    ko: "삼성전자 · 카카오 × 풀무원푸드앤컬처, HD현대 × 현대그린푸드 사내 카페테리아, 신세계푸드 × 신라호텔 F&B, 한국환경공단 다회용기 등 공급 기록을 시간순으로 보여줍니다.",
    ja: "韓国の企業食堂やホテルF&Bに納入実績のあるテーブルウェア。",
    cta: "Request a supply consultation",
    assets: "foodle.biz/partnership · 현장 사용 사진(확보 여부 확인)",
    caution: "고객사명 노출은 사전 허락을 확인합니다. 공급 규모와 금액은 쓰지 않습니다.",
  },
  {
    no: 2,
    theme: "Design-Driven Sustainability",
    purpose: "의무가 아니라 갖고 싶어서 고르는 지속가능한 선택이라는 철학을 전한다",
    target: "G2 · G4 · G5",
    material: "Oval Dome 3in1 사용 장면, 오래 쓰는 제품 이야기, 식물 원료 기반 바이오 소재",
    headline: "Design makes sustainable choices desirable.",
    ko: "디자인과 사용성으로 오래 쓰게 만드는 것이 지속가능성이라는 관점입니다. 소재 설명은 사용 경험 뒤에 둡니다.",
    ja: "デザインの力で、サステナブルな選択を“選びたい”ものに。",
    cta: "View the collection",
    assets: "Oval Dome · Plate07 사용 사진, 제품 영상",
    caution: "친환경 인증이나 환경 효능은 쓰지 않습니다. “식물 원료 기반 바이오 소재”, “BPA-Free”까지만 말합니다.",
  },
  {
    no: 3,
    theme: "Global Expansion",
    purpose: "푸들이 해외 시장에 나가고 있다는 사실로 바이어의 불안을 줄인다",
    target: "G1 · G4 · G5",
    material: "파리 Maison&Objet 전시 참가(2024), 도쿄 츠타야 팝업스토어(2026)",
    headline: "From Seoul to Paris and Tokyo.",
    ko: "서울에서 시작해 파리 전시와 도쿄 팝업까지 간 과정을 소개합니다.",
    ja: "ソウルからパリ、そして東京へ。",
    cta: "Talk to our team",
    assets: "전시 · 팝업 현장 사진(확보 여부 확인)",
    caution: "메종&오브제는 ‘선정 · 수상’이 아니라 ‘전시 참가(출품)’로 씁니다. 팝업은 도매 계약 실적이 아닙니다.",
  },
  {
    no: 4,
    theme: "Partnership Opportunities",
    purpose: "바이어가 바로 문의할 수 있는 창구를 만든다",
    target: "G1 · G2 · G3 · G4 · G5",
    material: "파트너십 안내, 기프트 · 대량구매 안내, 선물용 고급 패키지",
    headline: "Let’s build something together with Foodle.",
    ko: "납품, 답례품, 유통 파트너십 문의를 한곳에서 받는다는 점을 분명히 안내합니다.",
    ja: "Foodleとのお取り組みについて、お気軽にご相談ください。",
    cta: "Send an inquiry",
    assets: "foodle.biz/partnership · foodle.biz/gift · jp.foodle.biz",
    caution: "OEM · 맞춤 제작 · 샘플 정책은 자료에 없습니다. 푸들 확인 전에는 약속하지 않습니다.",
  },
];

export const gmReferences: { year: string; text: string; kind: "supply" | "listing" | "event" | "collab" | "award" }[] = [
  { year: "2026", text: "삼성전자 · 카카오 × 풀무원푸드앤컬처 테이블웨어 공급", kind: "supply" },
  { year: "2026", text: "현대백화점 판교점 · 마켓컬리 입점", kind: "listing" },
  { year: "2026", text: "도쿄 츠타야 팝업스토어", kind: "event" },
  { year: "2025", text: "한국환경공단 다회용기 납품", kind: "supply" },
  { year: "2024", text: "프랑스 파리 Maison&Objet 전시 참가", kind: "event" },
  { year: "2024", text: "롯데월드 × SM엔터테인먼트 디자인 협업", kind: "collab" },
  { year: "2023", text: "청와대 행사 공식 답례품", kind: "supply" },
  { year: "2022", text: "신세계푸드 × 신라호텔 F&B Plate07 공급", kind: "supply" },
  { year: "2022", text: "HD현대 × 현대그린푸드 사내 카페테리아 Plate07 공급", kind: "supply" },
  { year: "2022", text: "DDP 디자인스토어 입점", kind: "listing" },
];
export const REF_KIND: Record<string, string> = {
  supply: "공급 · 납품",
  listing: "입점",
  event: "전시 · 팝업",
  collab: "협업",
  award: "수상",
};
export const gmReferenceNote =
  "기존 자료(ICP 원문 2026.10.22)에 적힌 사실만 옮겼습니다. 공급 · 납품 기록과 입점 · 전시 · 협업은 종류를 구분해 표시했고, 계약 형태 · 규모는 자료에 없습니다. 제안이나 논의 단계의 사례는 포함하지 않았습니다.";

// LinkedIn 콘텐츠 카드 포맷과 예시 (명세 8.4)
export const gmCardFormat = ["Content Pillar", "Audience", "Country", "Main Proof", "Visual Asset", "Headline KO / EN / JA", "Body Draft", "CTA", "Approval Status", "Post URL", "Result"];
export const gmCardExamples = [
  { title: "브랜드 철학", pillar: "Design-Driven Sustainability", ko: "좋은 디자인은 지속가능한 선택을 자연스럽게 만듭니다.", en: "Great design makes sustainable choices feel natural.", ja: "優れたデザインは、サステナブルな選択をもっと自然にします。" },
  { title: "바이어 제휴", pillar: "Partnership Opportunities", ko: "푸들과 함께할 유통·기업 파트너를 찾습니다.", en: "Explore wholesale and distribution partnerships with Foodle.", ja: "Foodleとの卸売・販売パートナーシップをご検討ください。" },
];
export const gmCardNote = "예시는 검토용 초안입니다. 게시 전 사실 확인(납품 · 협업 표현)과 현지 검수를 거칩니다. 승인 상태 · 게시 URL · 결과는 게시 후 대행사가 기록합니다.";

// ── 08. 랜딩 · 전환 퍼널 ──
export type FlowNode = { label: string; state: Verify; note?: string };
export const gmFunnels: { market: string; name: string; nodes: FlowNode[]; events: { name: string; state: Verify }[] }[] = [
  {
    market: "KR B2C",
    name: "국내 소비자 구매",
    nodes: [
      { label: "Google Search", state: "strategy" },
      { label: "foodle.biz", state: "verified", note: "200" },
      { label: "Product Page", state: "verified", note: "4종 접속 확인" },
      { label: "Purchase", state: "toverify", note: "전환 추적 확인 필요" },
    ],
    events: [
      { name: "view_item", state: "toverify" },
      { name: "add_to_cart", state: "toverify" },
      { name: "begin_checkout", state: "toverify" },
      { name: "purchase", state: "toverify" },
    ],
  },
  {
    market: "KR B2B",
    name: "한국 기업 · 글로벌 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "strategy" },
      { label: "foodle.biz B2B Page", state: "verified", note: "/partnership · /gift" },
      { label: "Inquiry", state: "toverify", note: "문의 폼 작동 확인 필요" },
      { label: "Sales Follow-up", state: "strategy", note: "영업 대응 담당 · 기준 협의" },
    ],
    events: [
      { name: "inquiry_form_submit", state: "toverify" },
      { name: "email_click", state: "toverify" },
      { name: "sample_request", state: "toverify" },
      { name: "meeting_booked", state: "toverify" },
    ],
  },
  {
    market: "JP B2B",
    name: "일본 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "strategy" },
      { label: "jp.foodle.biz", state: "verified", note: "200 · 일본어 사이트" },
      { label: "Partnership Inquiry", state: "toverify", note: "お問い合わせ 경로 확인 필요" },
    ],
    events: [
      { name: "inquiry_form_submit", state: "toverify" },
      { name: "sample_request", state: "toverify" },
      { name: "meeting_booked", state: "toverify" },
    ],
  },
  {
    market: "US B2B",
    name: "미국 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "strategy" },
      { label: "English B2B Landing (TBD)", state: "toverify", note: "en.foodle.biz 메뉴가 한국어로 남아 있음" },
      { label: "Inquiry", state: "toverify" },
    ],
    events: [
      { name: "inquiry_form_submit", state: "toverify" },
      { name: "email_click", state: "toverify" },
      { name: "meeting_booked", state: "toverify" },
    ],
  },
];
export const gmFunnelNote = "이벤트 이름은 정의안입니다. 실제 사이트에서 측정되는지, 어떤 이름으로 잡히는지는 확인 전입니다. 보고는 KR B2C(브랜드 / 비브랜드), KR B2B, JP B2B, US B2B와 Google / LinkedIn을 나눠서 합니다.";

export const gmLandingChecks = [
  { path: "foodle.biz/gift", result: "열림 (HTTP 200, 제목 foodle.bulk)", state: "verified" as Verify },
  { path: "foodle.biz/partnership", result: "열림 (HTTP 200, 제목 foodle.partnership)", state: "verified" as Verify },
  { path: "foodle.biz/OvalDome · Plate07 · Plate05 · CactusCup", result: "4곳 모두 열림 (HTTP 200)", state: "verified" as Verify },
  { path: "jp.foodle.biz", result: "열림. 메뉴에 法人・団体のお客様 · ギフト・まとめ買い · パートナー · お問い合わせ", state: "verified" as Verify },
  { path: "en.foodle.biz", result: "열리지만 메뉴가 한국어로 남아 있음. 영문 B2B 랜딩은 준비 필요", state: "toverify" as Verify },
  { path: "문의 폼 · 전환 이벤트(GA4)", result: "작동 여부는 이 페이지에서 확인하지 못했습니다", state: "toverify" as Verify },
];
export const gmLandingCheckDate = `${GM_UPDATED} 직접 접속해 확인한 결과입니다. 접속은 페이지가 열린다는 뜻이며 폼 · 추적이 작동한다는 뜻은 아닙니다.`;

// ── 09. KPI (값은 비어 있음. 실적 자료가 생기면 value에 넣는다) ──
export const gmKpi: { group: string; scope: string; metrics: { name: string; value?: string; hint: string }[] }[] = [
  {
    group: "Google B2C",
    scope: "Campaign 1 · KR B2C",
    metrics: [
      { name: "Impressions", hint: "노출수" },
      { name: "Clicks", hint: "클릭수" },
      { name: "CTR", hint: "클릭률" },
      { name: "CPC", hint: "클릭당 비용" },
      { name: "Conversion Rate", hint: "클릭 대비 구매" },
      { name: "Purchases", hint: "구매 건수" },
      { name: "Revenue", hint: "구매 금액" },
      { name: "ROAS", hint: "매출 ÷ 광고비" },
    ],
  },
  {
    group: "Google B2B / LinkedIn",
    scope: "Campaign 2 · 3 · 4, LinkedIn",
    metrics: [
      { name: "Impressions", hint: "노출수" },
      { name: "Clicks", hint: "클릭수" },
      { name: "CTR", hint: "클릭률" },
      { name: "Leads", hint: "문의 · 폼 제출" },
      { name: "Qualified Leads", hint: "구매 의사 · 자격이 확인된 문의" },
      { name: "Cost Per Lead", hint: "문의 1건당 비용" },
      { name: "Meetings", hint: "미팅 성사" },
      { name: "Sample Requests", hint: "샘플 요청" },
      { name: "Partnership Opportunities", hint: "파트너십 기회" },
    ],
  },
];
export const gmKpiTable: { area: string; core: string; support: string; decision: string }[] = [
  { area: "Google KR B2C", core: "구매 · 매출 · ROAS", support: "CTR, CPC, CVR, CPA", decision: "검색 의도 · 랜딩 적합도 · 제품별 성과 개선" },
  { area: "Google KR B2B", core: "유효 견적 · 파트너십 문의", support: "CPL, 샘플 요청, 미팅", decision: "기업 적합도와 실제 영업 진전 점검" },
  { area: "Google JP / US B2B", core: "국가별 유효 바이어 리드", support: "CTR, CPL, 미팅", decision: "현지 키워드 · 랜딩 · 언어 검증" },
  { area: "LinkedIn B2B", core: "유효 리드 · 미팅 · 관계 형성", support: "콘텐츠 반응, 프로필 방문, 클릭", decision: "업종 · 직무 · 콘텐츠 메시지 조정" },
];
export const gmReporting: { name: string; scope: Scope; note: string }[] = [
  { name: "Google 수행 완료 보고서", scope: "quote", note: "견적서에 포함되어 있습니다." },
  { name: "주간 리뷰 (지출 · 클릭 · 검색어 품질 · 유효 리드 · 소재 피드백 · 다음 실험)", scope: "strategy", note: "추가 운영 제언입니다. 계약상 주간 보고서 약정이 아닙니다." },
  { name: "월간 리뷰 (국가 · 채널별 성과, 바이어 파이프라인, 수주 연결, 예산 재배분 제안)", scope: "strategy", note: "추가 제언입니다. 정기 월간 보고서 제공 여부는 별도 확인합니다." },
  { name: "정기 월간 보고서 제공 여부", scope: "confirm", note: "견적서에 명시되어 있지 않습니다." },
];
export const gmKpiNotes = [
  "아직 집행 전이라 모든 값이 비어 있습니다. 임의의 숫자를 넣지 않았고, 샘플 그래프도 만들지 않았습니다.",
  "B2C는 ROAS, B2B는 문의 품질(Qualified Lead)로 봅니다. 두 성과를 한 지표로 합치지 않습니다.",
  "국내 B2C는 네이버 · 자사몰의 기존 지표와 매체별로 구분해서 비교합니다. 기존 구매전환율 · ROAS를 앞으로의 Google 성과로 적지 않습니다.",
  "참고: 푸들의 손익분기 ROAS는 350%입니다(네이버 검색광고 운영 자료 기준). Google 목표 ROAS는 대행사와 협의해서 정합니다.",
  "Qualified Lead의 판정 기준(어떤 문의를 ‘자격 있는 문의’로 볼지)은 아직 정하지 않았습니다. 푸들과 대행사가 함께 정합니다.",
];

// ── 10. 대행사 액션 체크리스트 (상태 · 메모 · 갱신일을 브라우저에 저장) ──
export type ActionStatus = "Not Started" | "In Progress" | "To Verify" | "Done";
export const ACTION_STATUSES: ActionStatus[] = ["Not Started", "In Progress", "To Verify", "Done"];

export const gmActionGroups = ["계약 · 예산 · 일정", "타깃 · 키워드", "랜딩 · 측정", "콘텐츠 · LinkedIn", "보고 · 운영"];
type Act = { id: string; group: number; title: string; scope: Scope; status?: ActionStatus };
const ACTS: Act[] = [
  { id: "account", group: 0, title: "Google Ads 계정 접근권한 및 결제 · 정산 확인", scope: "quote" },
  { id: "range", group: 0, title: "국내 · 일본 · 미국 광고 운영 범위 및 사업 집행 인정 범위 확인", scope: "confirm", status: "To Verify" },
  { id: "amount", group: 0, title: "견적서 Google 430만원(4개월) / LinkedIn 120만원(1개월), VAT 별도 최종 확인", scope: "quote", status: "To Verify" },
  { id: "breakdown", group: 0, title: "Google 국내 실비 150만원(월 37.5만), 해외 실비 160만원(월 40만), 수수료 25% · 20%, 세팅 30만원 확인", scope: "quote", status: "To Verify" },
  { id: "li-scope", group: 0, title: "LinkedIn 주 1회 게시 · 기업 배너 · 페이지 활성화 · 1회 광고 12만원 범위 확인", scope: "quote", status: "To Verify" },
  { id: "allocation", group: 0, title: "실제 월별 · 국가별 광고 배분, 캠페인 수 및 활성화 순서 협의", scope: "confirm" },
  { id: "schedule", group: 0, title: "Google 4개월과 바우처 IMC 2개월 일정 불일치 해결", scope: "confirm", status: "To Verify" },
  { id: "scope-split", group: 0, title: "견적 포함 기능과 별도 제언 · 추가 작업 범위 구분", scope: "confirm" },
  { id: "weights", group: 0, title: "60/20/10/10은 전략 비중이며 실제 광고비 배분은 협의라는 점 합의", scope: "confirm" },
  { id: "icp", group: 1, title: "AMPM의 A1~B2 ICP 현행 데이터 · 제품 매핑 확정", scope: "confirm" },
  { id: "kw-b2c", group: 1, title: "국내 B2C 키워드 실제 검색량 · 검색 의도 검증", scope: "quote" },
  { id: "buyer-kr", group: 1, title: "한국인 글로벌 바이어의 위치 · 언어 · 구매 유형 확인", scope: "confirm" },
  { id: "kw-global", group: 1, title: "일본어 · 영어 바이어 키워드 검색 수요 검증", scope: "quote" },
  { id: "land-kr", group: 2, title: "KR B2B 실제 랜딩 · 문의 폼 URL 검증", scope: "confirm", status: "To Verify" },
  { id: "land-jp", group: 2, title: "JP B2B 실제 랜딩 · 문의 폼 URL 검증", scope: "confirm", status: "To Verify" },
  { id: "land-us", group: 2, title: "US 영문 B2B 랜딩 URL 및 문의 방법 결정 (신규 제작은 견적 밖)", scope: "strategy", status: "To Verify" },
  { id: "b2c-measure", group: 2, title: "국내 B2C 구매 · ROAS 측정 점검", scope: "confirm" },
  { id: "ga4", group: 2, title: "GA4 · 광고 전환 · UTM 및 개인정보 수집 고지 확인 (CRM 연동 개발은 견적 밖)", scope: "strategy", status: "To Verify" },
  { id: "assets", group: 3, title: "회사 소개서 · 영문 카탈로그 · 원본 로고(AI) · 제품 사진 · 영상 수급", scope: "confirm" },
  { id: "proof", group: 3, title: "사업 · 제품 관련 실제 납품 · 전시 증빙 확인", scope: "confirm" },
  { id: "copy", group: 3, title: "검색광고 문안 · 현지어 표현 검토 및 승인", scope: "confirm" },
  { id: "li-admin", group: 3, title: "LinkedIn 기업 페이지 관리자 권한 확인", scope: "quote" },
  { id: "li-reach", group: 3, title: "LinkedIn 메인 타겟(국내 4 · 글로벌 2)의 직무 · 업종 · 기업별 실제 도달 규모 검증", scope: "quote" },
  { id: "lead-def", group: 4, title: "B2B 유효 리드 기준 및 후속 영업 담당 합의", scope: "confirm" },
  { id: "report", group: 4, title: "주간 보고 양식 · 정기 리뷰 일정 수립", scope: "strategy" },
];
export const gmActions = ACTS.map((a) => ({ ...a, status: (a.status ?? "Not Started") as ActionStatus }));

export const gmDataSources: { name: string; state: "used" | "missing"; note: string }[] = [
  { name: "푸들_온라인마케팅 견적서_261022.pdf (3개 파일, 내용 동일)", state: "used", note: "금액 · 기간 · 산출물을 2026.10.28 원문과 대조했습니다. 견적서 표기 그대로 보존했습니다." },
  { name: "Foodle Global Marketing Playbook 통합 명세서 v2 (2026.10.28)", state: "used", note: "시장 비중, 키워드 대표 후보, 캠페인 · LinkedIn 설계 기준입니다." },
  { name: "[ICP 타겟고객] (주)푸들 2026.10.22 Final · AMPM 가이드 페이지", state: "used", note: "제품 · A1~B2 · 매트릭스 · 레퍼런스의 원천입니다. 기존 페이지(/)는 변경하지 않았습니다." },
  { name: "랜딩 접속 확인 (2026.10.28)", state: "used", note: "foodle.biz 4개 제품, /gift, /partnership, jp.foodle.biz, en.foodle.biz가 열리는 것까지 확인했습니다." },
  { name: "Foodle_Google_Ads_ICP_USP_Domestic_Expanded.xlsx (국내 B2C 후보 65개)", state: "missing", note: "이 작업 환경에서 찾지 못해 읽지 않았습니다. 대표 키워드만 반영했습니다." },
  { name: "Foodle_Google_Ads_Multilingual_Advanced.xlsx · Target_60_20_10_10.xlsx · LinkedIn_Target_60_20_10_10.docx", state: "missing", note: "이 작업 환경에서 찾지 못해 읽지 않았습니다. 파일이 확보되면 같은 형식으로 확장합니다." },
  { name: "수출바우처 IMC 일정표 (2026.10.26 ~ 12.26)", state: "missing", note: "명세서에 적힌 일정만 사용했고 원본은 확인하지 못했습니다." },
];

export const gmSources =
  "출처: 글로벌써클 견적서 2026.10.22(원문 대조), 통합 명세서 v2 2026.10.28, [ICP 타겟고객_AI용] (주)푸들 2026.10.22 Final(제품 · ICP · 레퍼런스), 랜딩 접속 확인 2026.10.28. 새로 정의한 G1~G5 · 우선순위 · 광고 문구 · 집행 순서는 가설 또는 전략 제언입니다.";
