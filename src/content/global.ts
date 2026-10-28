// Foodle Global Marketing Playbook 데이터. 화면(page.tsx · components/global)은 이 파일만 읽는다.
// 규칙
//  - 제품 · ICP(A1~B2) · 매트릭스 · 레퍼런스는 foodle.ts의 확인된 사실을 가져다 쓴다(복제하지 않는다).
//  - 새로 만든 정의(G1~G5, 키워드 우선순위, 광고 문구 초안)는 모두 "제안(가설)"이다. 검증된 성과로 쓰지 않는다.
//  - 검색량 · CPC · 경쟁도 · 광고비 · 성과는 자료가 있을 때만 값을 넣는다. 지금은 비어 있다.
//  - 금지 표현은 foodle.ts의 banned를 따른다(식약처 인증, 절대 안 깨지는, Cactus Cup 에코젠, 할인·최저가 등).

export const GM_UPDATED = "2026.10.28";

// 사실 상태: verified 확인됨 · proposed 제안(가설) · toverify 확인 필요
export type Verify = "verified" | "proposed" | "toverify";
export const VERIFY_LABEL: Record<Verify, string> = {
  verified: "확인됨",
  proposed: "Proposed · 제안",
  toverify: "To Verify · 확인 필요",
};

export const gmMeta = {
  title: "Foodle Global Marketing Playbook",
  subtitle: "Google Ads & LinkedIn | Market · Audience · Keywords · Conversion",
  audience: "김초은 대리님 및 글로벌 IMC 마케팅 수행팀",
  principle:
    "확인된 사실, 제안(가설), 확인 필요를 구분해서 표시합니다. 검색량 · CPC · 광고비 · 성과 수치는 자료가 생기기 전까지 비워 둡니다.",
};

// ── 섹션 (고정 목차) ──
export const gmSections = [
  { id: "overview", no: "01", label: "Overview" },
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
    caution: "B2B 성과는 매출이나 ROAS가 아니라 문의 여부로 봅니다. B2C와 섞지 않습니다.",
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
  "이 비율은 전체 마케팅 타깃의 전략적 우선순위입니다. Google Ads와 LinkedIn 각각의 실제 광고비 배분이 확정되었다는 뜻이 아닙니다. LinkedIn은 B2B에 집중하므로 60/20/10/10으로 기계 배분하지 않습니다.";

// ── 02. 제품: 사실은 foodle.ts의 products · matrix를 쓰고, 여기에는 B2B 시나리오 상태만 둔다 ──
// type: record = 공급 실적이 자료에 있음 / proposal = 제안(가설), 실적 확인 전
export const productB2b: Record<string, { type: "record" | "proposal"; text: string }> = {
  "Oval Dome": { type: "proposal", text: "선물 · 답례품 패키지 제안. 선물용 고급 패키지가 기본 구성이라는 점이 근거입니다. 제품별 납품 실적은 확인 전입니다." },
  Plate07: { type: "record", text: "2022년 신세계푸드 × 신라호텔 F&B, HD현대 × 현대그린푸드 사내 카페테리아에 Plate07이 공급된 기록이 있습니다." },
  Plate05: { type: "proposal", text: "1인분 사이즈를 살린 식당 · 급식 1인 식기 제안. 납품 실적은 확인 전입니다." },
  "Cactus Cup": { type: "proposal", text: "카페 · 프로모션 컵 제안. PP 소재라 ECOZEN 제품과 구분해서 설명합니다. 납품 실적은 확인 전입니다." },
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
};

export const gmB2bIcps: B2bIcp[] = [
  {
    code: "G1",
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
    caution: "영양사 · 급식 담당자는 LinkedIn 도달이 제한적일 수 있어 Google 검색 중심으로 봅니다.",
  },
  {
    code: "G4",
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
export type Intent = "정보 탐색" | "제품 비교" | "구매" | "도매·납품 문의";
export type Priority = "P1" | "P2" | "P3";
export type Stage = "Awareness" | "Consideration" | "Decision";

export type KeywordRow = {
  id: number;
  market: Market;
  audience: "B2C" | "B2B";
  icp: string;
  cluster: string;
  lang: Lang; // 이 줄의 실제 검색 언어. 다른 언어 칸은 참고용 번역이다.
  ko: string;
  en: string;
  ja: string;
  intent: Intent;
  stage: Stage;
  priority: Priority;
  product: string;
  landing: LandingKey;
  notes: string;
  // 자료가 있을 때만 채운다. 비어 있으면 화면에 "미검증"으로 보인다.
  metrics?: { volume?: number; cpc?: number; competition?: string };
};

export type LandingKey = "plate07" | "plate05" | "oval" | "partnership" | "gift" | "jp" | "en";

export const landingMap: Record<LandingKey, { label: string; url: string; state: Verify; note: string }> = {
  plate07: { label: "Plate07 상세", url: "https://www.foodle.biz/Plate07", state: "verified", note: "2026.10.28 접속 확인(200)" },
  plate05: { label: "Plate05 상세", url: "https://www.foodle.biz/Plate05", state: "verified", note: "2026.10.28 접속 확인(200)" },
  oval: { label: "Oval Dome 상세", url: "https://www.foodle.biz/OvalDome", state: "verified", note: "2026.10.28 접속 확인(200)" },
  partnership: { label: "foodle.biz/partnership (납품 · 제휴 문의)", url: "https://www.foodle.biz/partnership", state: "verified", note: "페이지는 열립니다. 문의 폼 작동은 확인 전입니다." },
  gift: { label: "foodle.biz/gift (기프트 · 대량구매)", url: "https://www.foodle.biz/gift", state: "verified", note: "페이지는 열립니다. 문의 폼 작동은 확인 전입니다." },
  jp: { label: "jp.foodle.biz (일본어)", url: "https://jp.foodle.biz/", state: "toverify", note: "열립니다. 메뉴에 法人・団体のお客様 · パートナー · お問い合わせ가 보이나 문의 경로 작동은 확인 전입니다." },
  en: { label: "en.foodle.biz (영문 B2B 랜딩 TBD)", url: "https://en.foodle.biz/", state: "toverify", note: "열리지만 메뉴가 한국어로 남아 있습니다. 영문 B2B 문의 랜딩은 준비가 필요합니다." },
};

type KwTuple = [Market, "B2C" | "B2B", string, string, Lang, string, string, string, Intent, Stage, Priority, string, LandingKey, string];
const kw = (rows: KwTuple[]): KeywordRow[] =>
  rows.map(([market, audience, icp, cluster, lang, ko, en, ja, intent, stage, priority, product, landing, notes], i) => ({
    id: i + 1,
    market,
    audience,
    icp,
    cluster,
    lang,
    ko,
    en,
    ja,
    intent,
    stage,
    priority,
    product,
    landing,
    notes,
  }));

const AMBIG_EN = "영문 · 일문 칸은 참고용 번역입니다";
export const gmKeywords: KeywordRow[] = kw([
  // 국내 B2C
  ["KR", "B2C", "A1", "아이 식판 · 모듈형 식판", "ko", "아이 식판", "kids meal plate", "", "정보 탐색", "Awareness", "P2", "Plate07", "plate07", `범위가 넓은 상위어. 경쟁이 높을 수 있어 확장어로 다룹니다. ${AMBIG_EN}`],
  ["KR", "B2C", "A1", "아이 식판 · 모듈형 식판", "ko", "모듈형 식판", "modular kids plate", "", "제품 비교", "Consideration", "P1", "Plate07", "plate07", "10p 모듈이 직접 맞는 표현. A1 제품은 Plate07 · Plate05 테스트 중"],
  ["KR", "B2C", "A2", "식단관리 식기 · 원플레이트", "ko", "식단관리 식기", "meal prep plate", "", "정보 탐색", "Awareness", "P2", "Plate05", "plate05", "효능(체중 감량 등)으로 넘어가는 표현 금지. A2 제품은 Plate07 · Plate05 테스트 중"],
  ["KR", "B2C", "A2", "식단관리 식기 · 원플레이트", "ko", "원플레이트", "one plate meal", "", "제품 비교", "Consideration", "P1", "Plate05", "plate05", "1인분 사이즈 원플레이트와 직접 연결"],
  ["KR", "B2C", "A3", "다용도 접시 · 음식 덮개", "ko", "다용도 접시", "multi-purpose plate", "", "제품 비교", "Consideration", "P2", "Oval Dome", "oval", "접시 · 볼 · 돔 커버 3in1"],
  ["KR", "B2C", "A3", "다용도 접시 · 음식 덮개", "ko", "음식 덮개", "food cover dome", "", "제품 비교", "Consideration", "P2", "Oval Dome", "oval", "“덮어 두는”까지만. 밀폐 · 보관용기 대체 표현과 110℃ 초과 사용은 금지"],
  ["KR", "B2C", "B1", "디저트 접시 · 홈카페 식기", "ko", "디저트 접시", "dessert plate", "", "정보 탐색", "Awareness", "P2", "Oval Dome", "oval", "미감이 첫 입구인 타겟. 소재 설명보다 사진이 먼저"],
  ["KR", "B2C", "B1", "디저트 접시 · 홈카페 식기", "ko", "홈카페 식기", "home cafe tableware", "", "정보 탐색", "Awareness", "P2", "Oval Dome", "oval", "Cactus Cup은 보조 제품. ECOZEN으로 쓰지 않음"],
  ["KR", "B2C", "B2", "집들이 선물 · 신혼부부 선물", "ko", "집들이 선물", "housewarming gift", "", "구매", "Decision", "P1", "Oval Dome", "oval", "선물 시즌성 확인 필요. 배송 · 포장 옵션은 운영 확인 후 표기"],
  ["KR", "B2C", "B2", "집들이 선물 · 신혼부부 선물", "ko", "신혼부부 선물", "newlywed gift", "", "구매", "Decision", "P2", "Oval Dome", "oval", "할인 · 최저가 · 가성비 표현 금지"],
  ["KR", "B2C", "B1", "디자인 식기 · 예쁜 그릇", "ko", "디자인 식기", "designer tableware", "", "제품 비교", "Consideration", "P2", "Oval Dome", "oval", "브랜드 · 디자인 탐색 수요"],
  ["KR", "B2C", "B1", "디자인 식기 · 예쁜 그릇", "ko", "예쁜 그릇", "pretty bowls", "", "정보 탐색", "Awareness", "P3", "Oval Dome", "oval", "탐색 단계의 넓은 단어. 전환 효율이 낮을 수 있어 예산 확인 후 사용"],
  // 한국인 글로벌 바이어
  ["KR", "B2B", "G1", "친환경 식기 도매", "ko", "친환경 식기 도매", "eco-friendly tableware wholesale", "", "도매·납품 문의", "Decision", "P2", "Plate07 · Oval Dome", "partnership", "‘친환경’은 고객이 쓰는 검색어로만 씁니다. 광고 문구에는 인증 · 환경 효능을 쓰지 않습니다"],
  ["KR", "B2B", "G1", "한국 디자인 식기 제조사", "ko", "한국 디자인 식기 제조사", "Korean design tableware manufacturer", "", "제품 비교", "Consideration", "P1", "Oval Dome · Plate07", "partnership", "푸들은 디자인 브랜드이며 제조 방식(자체 · 위탁) 표기는 확인 후"],
  ["KR", "B2B", "G1", "테이블웨어 수출", "ko", "테이블웨어 수출", "tableware export Korea", "", "정보 탐색", "Awareness", "P3", "Oval Dome · Plate07", "partnership", "수출 지원 방식은 자료에 없음. 검색 의도를 확인한 뒤 사용"],
  ["KR", "B2B", "G2", "기업 답례품 대량 구매", "ko", "기업 답례품 대량 구매", "corporate gift bulk order", "", "도매·납품 문의", "Decision", "P1", "Oval Dome", "gift", "청와대 행사 답례품 사례는 제품명이 확인되지 않아 제품과 연결하지 않음"],
  ["KR", "B2B", "G3", "식기 납품 업체", "ko", "식기 납품 업체", "tableware supplier for food service", "", "도매·납품 문의", "Decision", "P1", "Plate07 · Plate05", "partnership", "Plate07 공급 기록(2022)이 근거. 고객사명 광고 노출은 사전 허락 확인"],
  ["KR", "B2B", "G1", "디자인 리빙 브랜드 유통", "ko", "디자인 리빙 브랜드 유통", "design living brand distribution", "", "정보 탐색", "Awareness", "P3", "Oval Dome · Plate07", "partnership", "유통 조건은 자료에 없음"],
  // 일본 바이어
  ["JP", "B2B", "G4", "韓国 食器 卸", "ja", "한국 식기 도매", "Korean tableware wholesale", "韓国 食器 卸", "도매·납품 문의", "Decision", "P1", "Oval Dome · Plate07", "jp", "일본어 현지 검수 필요. 도쿄 츠타야 팝업은 팝업 사례(도매 실적 아님)"],
  ["JP", "B2B", "G4", "デザイン食器 卸", "ja", "디자인 식기 도매", "designer tableware wholesale", "デザイン食器 卸", "도매·납품 문의", "Decision", "P1", "Oval Dome · Plate07", "jp", "디자인 중심 바이어 대상"],
  ["JP", "B2B", "G4", "韓国 テーブルウェア 仕入れ", "ja", "한국 테이블웨어 매입", "sourcing Korean tableware", "韓国 テーブルウェア 仕入れ", "도매·납품 문의", "Consideration", "P2", "Oval Dome · Plate07 · Plate05", "jp", "‘仕入れ’는 소매점 매입 의도"],
  ["JP", "B2B", "G4", "ライフスタイル雑貨 卸", "ja", "라이프스타일 잡화 도매", "lifestyle goods wholesale", "ライフスタイル雑貨 卸", "제품 비교", "Consideration", "P2", "Oval Dome · Cactus Cup", "jp", "편집숍 · 잡화점 바이어. 상위 개념이라 경쟁 폭이 클 수 있음"],
  ["JP", "B2B", "G4", "法人向けギフト", "ja", "법인용 선물", "corporate gifts", "法人向けギフト", "제품 비교", "Consideration", "P3", "Oval Dome", "jp", "일본 기업 판촉 · 총무 수요. 일본 대상 답례품 랜딩은 확인되지 않아 G4 확장 후보로만 둠"],
  ["JP", "B2B", "G4", "食器 輸入", "ja", "식기 수입", "tableware import", "食器 輸入", "정보 탐색", "Awareness", "P2", "Oval Dome · Plate07", "jp", "수입 절차 문의 비중이 높을 수 있어 검색어 보고서로 확인"],
  // 미국 바이어
  ["US", "B2B", "G5", "Korean tableware wholesale", "en", "한국 식기 도매", "Korean tableware wholesale", "韓国 食器 卸", "도매·납품 문의", "Decision", "P1", "Oval Dome · Plate07", "en", "영문 B2B 랜딩 준비 전 집행 보류 권장. 일문 칸은 참고용 번역"],
  ["US", "B2B", "G5", "Korean homeware supplier", "en", "한국 홈웨어 공급업체", "Korean homeware supplier", "韓国 ホームウェア サプライヤー", "도매·납품 문의", "Consideration", "P2", "Oval Dome · Plate07 · Plate05", "en", "‘homeware’는 영국식 표현일 수 있어 미국 검색어 보고서로 확인(‘homegoods’ 대안)"],
  ["US", "B2B", "G5", "Designer tableware distributor", "en", "디자이너 식기 유통사", "Designer tableware distributor", "デザイン食器 ディストリビューター", "도매·납품 문의", "Decision", "P1", "Oval Dome · Plate07", "en", "유통사 대상 직접 문의 의도"],
  ["US", "B2B", "G5", "Sustainable tableware wholesale", "en", "지속가능 식기 도매", "Sustainable tableware wholesale", "サステナブル 食器 卸", "도매·납품 문의", "Consideration", "P2", "Oval Dome · Plate07", "en", "‘sustainable’은 검색어일 뿐. 광고 문구에서 인증 · 환경 효능을 주장하지 않음"],
  ["US", "B2B", "G5", "Wholesale dining accessories", "en", "도매 식탁 소품", "Wholesale dining accessories", "ダイニング雑貨 卸", "정보 탐색", "Awareness", "P3", "Cactus Cup · Oval Dome", "en", "범위가 넓은 탐색어. 무관한 검색을 걸러 낼 제외 키워드 필요"],
  ["US", "B2B", "G5", "Korean lifestyle brand distributor", "en", "한국 라이프스타일 브랜드 유통사", "Korean lifestyle brand distributor", "韓国 ライフスタイル ブランド 卸", "도매·납품 문의", "Consideration", "P2", "Oval Dome · Plate07", "en", "브랜드 유통 의도. 미국 레퍼런스는 아직 없음"],
]);

export const gmKeywordNotes = [
  "이 키워드는 초기 후보입니다. 검증된 검색량이나 전환 성과를 뜻하지 않습니다.",
  "우선순위(P1~P3) · 퍼널 단계 · 검색 의도는 제안(가설)입니다. Keyword Planner와 검색어 보고서로 검증한 뒤 조정합니다.",
  "월간 검색량 · CPC · 경쟁도는 자료가 없어서 비워 두었습니다. 값이 확인되면 표의 “검색량 · CPC · 경쟁도” 칸에 함께 표시합니다. 지금은 모두 “미검증”입니다.",
  "표의 굵은 칸이 실제 검색 언어이고, 나머지 언어 칸은 이해를 돕는 참고 번역입니다. 일본어 · 영어 키워드는 현지 검수를 거쳐 사용합니다.",
  "LinkedIn의 직무 · 산업 타기팅은 Google 검색 키워드와 용도가 다릅니다. 같은 목록으로 쓰지 않습니다.",
];

// ── 05. Google Ads 캠페인 구조 ──
export const gmCampaigns = [
  {
    code: "Campaign 1",
    name: "KR B2C",
    audienceId: "kr-b2c" as AudienceId,
    who: "국내 일반 소비자",
    language: "한국어 검색",
    goal: "구매 전환 · ROAS",
    steps: [
      { k: "Audience", v: "A1 · A2 · A3 · B1 · B2" },
      { k: "Search Intent", v: "제품 비교 · 구매" },
      { k: "Keyword Group", v: "타겟(A1~B2)별로 광고그룹을 나눕니다. 키워드 12행 참고" },
      { k: "Ad Copy", v: "“오늘 메뉴대로 조합하는 10p 모듈 플레이트 | BPA-Free ECOZEN™”" },
      { k: "Landing", v: "foodle.biz 제품 상세페이지" },
      { k: "Conversion", v: "Add to Cart · Purchase" },
    ],
    metricGroup: "Google B2C",
    note: "광고그룹은 제품이 아니라 사람(A1~B2)을 기준으로 나눕니다. 네이버 검색광고의 구조와 같은 원칙입니다.",
    state: "proposed" as Verify,
  },
  {
    code: "Campaign 2",
    name: "KR B2B",
    audienceId: "kr-b2b" as AudienceId,
    who: "한국인 기업 구매 담당자 · 글로벌 바이어",
    language: "한국어 검색",
    goal: "견적 · 파트너십 문의",
    steps: [
      { k: "Audience", v: "G1 · G2 · G3" },
      { k: "Search Intent", v: "도매·납품 문의 · 제품 비교" },
      { k: "Keyword Group", v: "납품(G3) · 답례품(G2) · 유통(G1)으로 광고그룹 분리" },
      { k: "Ad Copy", v: "“식기 납품 상담 | 호텔 F&B · 사내 카페테리아 공급 사례”" },
      { k: "Landing", v: "foodle.biz/partnership · foodle.biz/gift" },
      { k: "Conversion", v: "B2B Form Submission · Email Inquiry · Qualified Lead" },
    ],
    metricGroup: "Google B2B",
    note: "고객사 이름을 광고 문구에 쓰려면 사전 허락을 확인합니다. 성과는 문의 여부로 보고 ROAS는 보지 않습니다.",
    state: "proposed" as Verify,
  },
  {
    code: "Campaign 3",
    name: "JP B2B",
    audienceId: "jp-b2b" as AudienceId,
    who: "일본인 유통 · 수입 바이어",
    language: "일본어 검색",
    goal: "파트너십 문의 · 샘플 요청",
    steps: [
      { k: "Audience", v: "G4" },
      { k: "Search Intent", v: "도매·납품 문의" },
      { k: "Keyword Group", v: "卸 · 仕入れ · 輸入 · 法人向けギフト" },
      { k: "Ad Copy", v: "“韓国デザインテーブルウェア Foodle | 卸のご相談”" },
      { k: "Landing", v: "jp.foodle.biz" },
      { k: "Conversion", v: "Partnership Inquiry · Sample Request" },
    ],
    metricGroup: "Google B2B",
    note: "일본어 문구는 현지 검수가 필요합니다. jp.foodle.biz의 문의 경로 작동을 먼저 확인합니다.",
    state: "toverify" as Verify,
  },
  {
    code: "Campaign 4",
    name: "US B2B",
    audienceId: "us-b2b" as AudienceId,
    who: "미국 수입 · 유통 · 도매 바이어",
    language: "영어 검색",
    goal: "바이어 문의",
    steps: [
      { k: "Audience", v: "G5" },
      { k: "Search Intent", v: "도매·납품 문의" },
      { k: "Keyword Group", v: "wholesale · supplier · distributor" },
      { k: "Ad Copy", v: "“Korean Design Tableware | Wholesale & distribution inquiries”" },
      { k: "Landing", v: "영문 B2B 랜딩 (TBD)" },
      { k: "Conversion", v: "Inquiry · Qualified Lead" },
    ],
    metricGroup: "Google B2B",
    note: "영문 B2B 랜딩이 준비되기 전에는 집행을 보류하는 것을 권장합니다. MOQ · 가격 · 샘플 정책은 푸들 확인 후 문구에 반영합니다.",
    state: "toverify" as Verify,
  },
];

export const gmCampaignRules = [
  "B2C ROAS와 B2B 리드 성과를 한 지표로 합치지 않습니다. 캠페인 단위로 분리해서 봅니다.",
  "광고 문구 초안은 제안입니다. 글자 수 제한과 표기는 Google Ads 편집기에서 확인합니다.",
  "광고비 배분은 아직 확정되지 않았습니다. 대행사와 협의해서 정합니다.",
  "광고 문구에는 푸들 브랜드 가이드의 금지 표현을 쓰지 않습니다(식약처 인증, 절대 안 깨지는, 할인 · 최저가, Cactus Cup 에코젠 등).",
];

// ── 06. LinkedIn ──
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
      titles: ["구매 담당자 (Purchasing)", "MD · 상품기획", "해외영업 · BD", "ESG · CSR 담당", "총무 · 복리후생"],
      note: "영양사 · 급식 담당은 LinkedIn 도달이 제한적일 수 있어 Google 검색을 우선합니다.",
    },
    {
      code: "JP",
      label: "일본",
      icps: "G4",
      titles: ["バイヤー", "購買担当", "商品企画 · MD", "輸入担当", "事業開発"],
      note: "일본어 직무명은 현지 검수 후 사용합니다. 일본어 게시물은 별도 현지화가 필요합니다.",
    },
    {
      code: "US",
      label: "미국",
      icps: "G5",
      titles: ["Retail Buyer", "Category Manager", "Merchandiser", "Procurement Manager", "Distributor / Importer"],
      note: "미국 레퍼런스가 없으므로 한국 공급 사례와 전시 참가 중심으로 소개합니다.",
    },
  ],
  profiles: [
    {
      title: "기업 페이지",
      items: ["제품", "납품 사례", "디자인 차별점", "파트너십 안내"],
    },
    {
      title: "대표 개인 프로필",
      items: ["창업 스토리", "디자인 철학", "지속가능성에 대한 관점", "글로벌 비즈니스 경험"],
    },
  ],
  targeting: [
    { k: "Job Title · Job Function", v: "구매 · Business Development · Merchandising 계열" },
    { k: "Industry", v: "Retail · Consumer Goods · Wholesale · Hospitality · Food & Beverage Services · Import and Export" },
    { k: "Seniority", v: "매니저급 이상을 우선 검토" },
    { k: "Company Size", v: "확정하지 않음. 대행사와 협의" },
  ],
  caution: [
    "위 타기팅 항목은 후보입니다. 실제 항목명과 도달 규모는 LinkedIn Campaign Manager에서 확인합니다.",
    "LinkedIn 직무 · 산업 타기팅은 Google 검색 키워드와 용도가 다릅니다. 두 목록을 섞지 않습니다.",
    "푸들 LinkedIn 기업 페이지와 대표 프로필의 URL은 자료에 없어 확인이 필요합니다.",
  ],
  shareNote: "LinkedIn 타깃 비중을 60/20/10/10으로 나누지 않습니다. 이 채널은 B2B에 집중하고, 국가별 비중은 대행사와 협의합니다.",
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

// ── 08. 랜딩 · 전환 퍼널 ──
export type FlowNode = { label: string; state: Verify; note?: string };
export const gmFunnels: { market: string; name: string; nodes: FlowNode[]; events: { name: string; state: Verify }[] }[] = [
  {
    market: "KR B2C",
    name: "국내 소비자 구매",
    nodes: [
      { label: "Google Search", state: "proposed" },
      { label: "foodle.biz", state: "verified", note: "200" },
      { label: "Product Page", state: "verified", note: "4종 접속 확인" },
      { label: "Purchase", state: "toverify", note: "전환 추적 확인 필요" },
    ],
    events: [
      { name: "Add to Cart", state: "toverify" },
      { name: "Purchase", state: "toverify" },
    ],
  },
  {
    market: "KR B2B",
    name: "한국 기업 · 글로벌 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "proposed" },
      { label: "foodle.biz B2B Page", state: "verified", note: "/partnership · /gift" },
      { label: "Inquiry", state: "toverify", note: "문의 폼 작동 확인 필요" },
      { label: "Sales Follow-up", state: "proposed", note: "영업 대응 담당 · 기준 협의" },
    ],
    events: [
      { name: "B2B Form Submission", state: "toverify" },
      { name: "Email Inquiry", state: "toverify" },
      { name: "Qualified Lead", state: "proposed" },
    ],
  },
  {
    market: "JP B2B",
    name: "일본 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "proposed" },
      { label: "jp.foodle.biz", state: "verified", note: "200 · 일본어 사이트" },
      { label: "Partnership Inquiry", state: "toverify", note: "お問い合わせ 경로 확인 필요" },
    ],
    events: [
      { name: "B2B Form Submission", state: "toverify" },
      { name: "Sample Request", state: "toverify" },
      { name: "Qualified Lead", state: "proposed" },
    ],
  },
  {
    market: "US B2B",
    name: "미국 바이어",
    nodes: [
      { label: "Google / LinkedIn", state: "proposed" },
      { label: "English B2B Landing (TBD)", state: "toverify", note: "en.foodle.biz 메뉴가 한국어로 남아 있음" },
      { label: "Inquiry", state: "toverify" },
    ],
    events: [
      { name: "B2B Form Submission", state: "toverify" },
      { name: "Email Inquiry", state: "toverify" },
      { name: "Qualified Lead", state: "proposed" },
    ],
  },
];

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
export const gmKpiNotes = [
  "아직 집행 전이라 모든 값이 비어 있습니다. 임의의 숫자를 넣지 않았습니다.",
  "B2C는 ROAS, B2B는 문의 품질(Qualified Lead)로 봅니다. 두 성과를 한 지표로 합치지 않습니다.",
  "참고: 푸들의 손익분기 ROAS는 350%입니다(네이버 검색광고 운영 자료 기준). Google 목표 ROAS는 대행사와 협의해서 정합니다.",
  "Qualified Lead의 판정 기준(어떤 문의를 ‘자격 있는 문의’로 볼지)은 아직 정하지 않았습니다. 푸들과 대행사가 함께 정합니다.",
];

// ── 10. 대행사 액션 체크리스트 ──
export type ActionStatus = "Not Started" | "In Progress" | "To Verify" | "Done";
export const ACTION_STATUSES: ActionStatus[] = ["Not Started", "In Progress", "To Verify", "Done"];

export const gmActions: { id: string; title: string; detail: string; owner: string; status: ActionStatus }[] = [
  { id: "priority", title: "타깃 우선순위 확인", detail: "60 / 20 / 10 / 10 비중이 전략적 우선순위라는 점과 채널별 예산은 별개라는 점을 확인합니다.", owner: "푸들 · 대행사", status: "In Progress" },
  { id: "account", title: "Google Ads 계정 설정", detail: "계정 구조 · 결제 · 권한 · 국가별 캠페인 4개 틀을 확정합니다.", owner: "대행사", status: "Not Started" },
  { id: "keyword", title: "국가별 키워드 검증", detail: "Keyword Planner로 검색량 · CPC · 경쟁도를 확인하고, 일본어 · 영어 키워드를 현지 검수합니다.", owner: "대행사", status: "Not Started" },
  { id: "structure", title: "캠페인 구조 검토", detail: "KR B2C · KR B2B · JP B2B · US B2B 구조와 광고그룹 분리 기준을 검토합니다.", owner: "푸들 · 대행사", status: "Not Started" },
  { id: "budget", title: "광고비 배분 협의", detail: "Google Ads와 LinkedIn의 월 광고비와 캠페인별 배분은 아직 정해지지 않았습니다.", owner: "푸들 · 대행사", status: "Not Started" },
  { id: "linkedin", title: "LinkedIn 타깃 직무 · 기업 검토", detail: "국가별 직무 · 산업 후보와 기업 페이지 · 대표 프로필 역할을 검토합니다.", owner: "대행사", status: "Not Started" },
  { id: "creative", title: "광고 콘텐츠 제작", detail: "콘텐츠 4개 테마의 헤드라인 · 현지화 문구 · 사진 자료를 확정합니다.", owner: "푸들 · 대행사", status: "Not Started" },
  { id: "landing", title: "랜딩페이지 작동 확인", detail: "/gift · /partnership · jp.foodle.biz의 문의 폼 작동과 영문 B2B 랜딩 준비 여부를 확인합니다.", owner: "푸들", status: "To Verify" },
  { id: "ga4", title: "GA4 및 전환 추적 확인", detail: "Purchase · Add to Cart · 폼 제출 · 이메일 문의 · 샘플 요청 이벤트가 잡히는지 확인합니다.", owner: "푸들 · 대행사", status: "To Verify" },
  { id: "report", title: "주간 리포트 체계 협의", detail: "B2C와 B2B를 분리한 주간 리포트 양식과 Qualified Lead 판정 기준을 정합니다.", owner: "푸들 · 대행사", status: "Not Started" },
];

export const gmSources =
  "출처: [ICP 타겟고객_AI용] (주)푸들 2026.10.22 Final(제품 · ICP · 레퍼런스), 푸들 요청 사항 2026.10.28(타깃 비중 · 키워드 초기 후보 · 캠페인 구조), 랜딩 접속 확인 2026.10.28. 새로 정의한 G1~G5 · 우선순위 · 광고 문구는 제안(가설)입니다.";
