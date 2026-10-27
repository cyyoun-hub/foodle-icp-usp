// 출처: [ICP 타겟고객_AI용] (주)푸들_2026.10.22.md (Final)
// 규칙: 이 파일의 사실(수치·소재·근거)은 원문 2·3장에 있는 것만 쓴다. 표에 없는 내용은 만들지 않는다.

export type Status = "ok" | "conditional" | "careful";

export const STATUS_LABEL: Record<Status, string> = {
  ok: "사용 가능",
  conditional: "조건부 *",
  careful: "표현 주의",
};

// ── 독자: AMPM 신규 마케터님 ──
export const intro = {
  eyebrow: "AMPM 신규 마케터님께 · 푸들 브랜드 이해 가이드",
  purpose:
    "이 페이지는 AMPM 신규 마케터님께 푸들의 제품, 핵심 타겟(잠재 타겟)의 특징, 그리고 앞으로의 방향을 설명드리기 위해 만들었습니다.",
  order: ["제품", "타겟 · USP", "퍼널 · 집행", "현재 고민"],
  checkTitle: "특히 이것만은 꼭 확인해 주세요",
  check:
    "네이버 검색광고와 메타 모두, 캠페인의 축이 제품이 아니라 사람(A1~B2)이 되어 있는지, 아직 제품 중심으로 남아 있는 곳은 없는지 봐 주세요.",
};

export const brand = {
  promise: "Beautifully Everyday.",
  positioning:
    "취향은 분명하지만, 생활은 가벼워지고 싶은 사람을 위한 데일리 프리미엄 테이블웨어",
  definition:
    "유리 테이블웨어의 맑고 정제된 아름다움을, 더 가볍고 편한 사용성으로",
  version: "Final · 2026.10.22",
};

// ── 제품 Fact Registry (원문 2장) ──
export const products = [
  {
    name: "Oval Dome",
    url: "https://www.foodle.biz/OvalDome",
    tagline: "플레이트, 보울, 때론 덮어두는 용도까지. 하나로 여러 순간을 채우는 양방향 플레이트",
    image: "/images/oval-salad.jpg",
    ko: "오벌돔",
    price: "38,000원",
    material: "ECOZEN™",
    spec: "Plate 500ml / Bowl 1,500ml",
    colors: "딥그린 · 옐로우 · 크리스탈",
    fact: "접시·볼·돔 커버 3in1 리버시블, 주방 오브제 라운드 형태, 선물용 고급 패키지 기본",
    lead: "A3 · B1 · B2",
  },
  {
    name: "Plate07",
    url: "https://www.foodle.biz/Plate07",
    tagline: "아이부터 어른까지 모두에게 딱 맞게. 모양을 자유롭게 바꾸는 모듈형 플레이트",
    image: "/images/plate07-plate.jpg",
    ko: "플레이트07",
    price: "43,000원",
    material: "ECOZEN™",
    spec: "1,250ml",
    colors: "웜그레이 · 화이트",
    fact: "원하는 모듈만 조합하는 모듈 시스템, 넉넉한 10p 구성, 전자레인지 OK",
    lead: "A1 · A3",
  },
  {
    name: "Plate05",
    url: "https://www.foodle.biz/Plate05",
    tagline: "매일의 한 끼부터 아이를 위한 식사까지. 딱 좋은 크기로 자꾸 손이 가는 플레이트",
    image: "/images/plate05-hero.jpg",
    ko: "플레이트05",
    price: "35,000원",
    material: "ECOZEN™",
    spec: "1,000ml",
    colors: "웜그레이 · 로즈핑크 · 올리브그린",
    fact: "1인분 사이즈(여성·아이 식사 크기), 모듈 구성, 원플레이트 한 끼, 전자레인지 OK",
    lead: "A2 · A3",
  },
  {
    name: "Cactus Cup",
    url: "https://www.foodle.biz/CactusCup",
    tagline: "선인장을 닮은 디자인으로 따뜻한 음료도 가볍게, 걱정 없이 즐길 수 있는 컵",
    image: "/images/cactus-coffee.jpg",
    ko: "선인장 컵",
    price: "10,000원",
    material: "PP (BPA-Free)",
    spec: "473ml · ECOZEN 아님",
    colors: "세이지 · 라이트그린 · 핑크",
    fact: "선인장 곡선 실루엣, 슬리브 없이 잡기 편함, 뜨거운 음료·식기세척기 OK",
    lead: "B2",
  },
];

// ── 핵심 제품 4종 첫 화면용: 형태 한 줄 + 색 견본 (색 견본은 사진 기준 근사값, 제품 Fact의 colors와 같은 순서) ──
export const productLook: Record<string, { form: string; swatches: { name: string; hex: string }[] }> = {
  "Oval Dome": {
    form: "라운드 오브제 형태 · 접시·볼·돔 커버 3in1",
    swatches: [
      { name: "딥그린", hex: "#1f4d3a" },
      { name: "옐로우", hex: "#f2c230" },
      { name: "크리스탈", hex: "#dfe9ea" },
    ],
  },
  Plate07: {
    form: "모듈형 · 원하는 모양으로 조합하는 10p",
    swatches: [
      { name: "웜그레이", hex: "#b8b2a8" },
      { name: "화이트", hex: "#f7f6f3" },
    ],
  },
  Plate05: {
    form: "1인분 사이즈 · 모듈 구성 원플레이트",
    swatches: [
      { name: "웜그레이", hex: "#b8b2a8" },
      { name: "로즈핑크", hex: "#d9a3a3" },
      { name: "올리브그린", hex: "#7a7a3c" },
    ],
  },
  "Cactus Cup": {
    form: "선인장 곡선 실루엣 · 슬리브 없이 잡기 편한 컵",
    swatches: [
      { name: "세이지", hex: "#a9b8a0" },
      { name: "라이트그린", hex: "#bfe0a8" },
      { name: "핑크", hex: "#f2b6c4" },
    ],
  },
};

export const ecozen =
  "식물 원료 기반 바이오 소재 · BPA-Free · 내열·내한 −30℃~110℃ (전자레인지·식기세척기·냉장고 가능, 오븐·직화 불가)";

// ── 제품 × ICP 매트릭스 (원문 5장) ● 주력 ○ 보조 — 없음 ──
export const matrixCols = ["A1", "A2", "A3", "B1", "B2"] as const;
export const matrix: { product: string; cells: ("●" | "○" | "—" | "?")[] }[] = [
  { product: "Oval Dome", cells: ["—", "—", "●", "●", "●"] },
  { product: "Plate07", cells: ["?", "?", "●", "○", "○"] },
  { product: "Plate05", cells: ["?", "?", "●", "○", "○"] },
  { product: "Cactus Cup", cells: ["—", "—", "—", "○", "●"] },
];

// ── 근거 띠 (원문 3장 Proof Registry) ──
export const stats = [
  { to: 4500, suffix: "개", label: "현대홈쇼핑 TV라이브 30분 완판", sub: "약 1억 3,000만 원 · 2026.07" },
  { to: 1000, suffix: "건+", label: "리빙 인플루언서 공동구매 5일", sub: "4,000만 원 · 2026.02" },
  { to: 14, suffix: "건", label: "특허·실용신안", sub: "ISO 9001 · 14001 · 45001" },
];

// 공식 사이트(foodle.biz/History)에 공개된 연혁 중 발췌
export const history = [
  { year: "2026", items: ["삼성전자·카카오 × 풀무원푸드앤컬처 테이블웨어 공급", "현대백화점 판교점·마켓컬리 입점", "도쿄 츠타야 팝업스토어", "현대홈쇼핑 완판"] },
  { year: "2025", items: ["대한민국 교과서 수록", "넷플릭스 드라마 「당신의 맛」 테이블웨어 협찬", "서울특별시장 표창", "한국환경공단 다회용기 납품"] },
  { year: "2024", items: ["프랑스 파리 Maison&Objet 전시 참가", "한국디자인진흥원 산업디자인전문회사 등록", "롯데월드 × SM엔터테인먼트 디자인 협업"] },
  { year: "2023", items: ["서울디자인페스티벌 제로웨이스트 카페테리아", "서울푸드페스티벌 미쉐린 스타 셰프 콜라보", "청와대 행사 공식 답례품"] },
  { year: "2022", items: ["DDP 디자인스토어 입점", "신세계푸드 × 신라호텔 F&B Plate07 공급", "HD현대 × 현대그린푸드 사내 카페테리아 Plate07 공급"] },
  { year: "2021", items: ["홍익대학교 미술대학에서 산업디자인 기반 Foodle 브랜드 설립"] },
];

export const brandQuestion = {
  lines: ["예쁜 그릇은 왜 특별한 날에만 써야 할까요?", "편한 그릇은 왜 감각을 포기해야 할까요?"],
  answer: "Foodle은 그 질문에서 시작했습니다.",
  signature: "Enjoy New Eat'xperience",
  tagline: "일상은 가볍게, 아름다움은 오래도록 남는 테이블웨어",
};

// ── 퍼널: 광고 채널 → 랜딩 (owner = 운영 주체). 출처: 마케팅 현황 브리프 2026-10-23 ──
export const funnels: {
  from: string;
  role: string;
  owner: string;
  ads?: string[];
  to: { name: string }[];
}[] = [
  {
    from: "인스타그램 (Meta)",
    role: "발견 · 관심",
    owner: "내부 콘텐츠팀 운영",
    to: [{ name: "자사몰 상세" }, { name: "스마트스토어 상세" }, { name: "인스타 홈" }],
  },
  {
    from: "네이버",
    role: "구매 의도 검색",
    owner: "AMPM 운영",
    ads: ["키워드 광고", "쇼핑광고", "애드부스트"],
    to: [{ name: "스마트스토어" }],
  },
];

// 랜딩별 현재 상태. 전환율은 같은 메타 소재 · 같은 제품(Plate07) 기준 클릭 대비 구매 (9월 말)
export const landings: { name: string; href: string; inflow: string[]; conv?: string; note: string; tone: "weak" | "strong" | "plain" }[] = [
  { name: "자사몰 (아임웹)", href: "https://www.foodle.biz/", inflow: ["Meta"], conv: "0.8%", note: "유입이 메타 하나. SEO가 약해 검색 유입이 거의 없음", tone: "weak" },
  { name: "스마트스토어", href: "https://smartstore.naver.com/foodle-seoul", inflow: ["Meta", "네이버 키워드", "쇼핑광고", "애드부스트"], conv: "3.8%", note: "기존 중심 채널. 네이버 검색광고는 여기로만 연결", tone: "strong" },
  { name: "인스타 홈", href: "https://www.instagram.com/foodle_official/", inflow: ["Meta"], note: "구매보다 브랜드 탐색용 랜딩", tone: "plain" },
];

// 아직 이어지지 않은 길 (해결하고 싶은 문제 2·3·4번과 연결)
export const funnelGaps = [
  { from: "네이버 검색광고", to: "자사몰", note: "연결된 길 없음. 파워링크 등 소액 테스트 가능 여부를 AMPM과 확인" },
  { from: "검색 · SEO", to: "자사몰", note: "자사몰의 검색 입구가 없음" },
  { from: "고객(A1~B2)별 길", to: "광고 → 썸네일·상세 → 채널", note: "네이버는 고객별 정렬이 진행됐고, 메타는 아직 나누지 못함" },
];
export const funnelNote = "네이버는 키워드 광고 · 쇼핑광고 · 애드부스트를 함께 운영 중이며, 디스플레이(DA)는 운영하지 않습니다.";

// ── 타겟 구분 기준 ──
export const targetFrame = {
  lede: "초기에는 더 넓은 타겟을 보았고, 최근 광고 효율을 위해 좁히는 중입니다. 30~60대 여성이라는 공통점 안에서, 제품별로 선호와 구매 이유가 다르다고 추정해 다섯 타겟으로 나눴습니다.",
  common: "30~60대 여성",
  commonNote: "다섯 타겟 모두에 공통입니다.",
  groups: [
    {
      key: "A",
      title: "실용성 중심 · 약간의 페인킬러형",
      desc: "실용성과 안정성이 먼저이고 디자인은 한 스푼. 불편을 해결해 주는 그릇을 찾습니다.",
      codes: "A1 가족의 식탁 · A2 나의 한 끼 · A3 매일의 살림",
    },
    {
      key: "B",
      title: "비타민형 · 심미성과 디자인 중시",
      desc: "Foodle을 있으면 기분이 좋아지는 브랜드로 바라봅니다. 형태와 색, 취향이 구매 이유입니다.",
      codes: "B1 식탁 위 오브제 · B2 건네는 마음",
    },
  ],
  notes: [
    "구분 근거는 지금까지 온·오프라인에서 분석한 고객 라이프스타일입니다.",
    "콘텐츠와 퍼포먼스 모두 소통할 때 이 타겟명(A1~B2)을 씁니다.",
  ],
};

// ── 현재의 고민. 출처: 푸들 마케팅 현황 브리프 (2026-10-23) ──
export const worries = {
  summary:
    "푸들은 10월부터 광고를 ‘제품 중심’에서 ‘고객 중심’으로 바꾸고 있고, 10/22에 고객 5그룹(ICP)과 실행 플레이북을 확정했습니다. 가장 큰 문제는 자사몰이 같은 광고로도 네이버보다 훨씬 덜 팔리고, 자사몰 유입이 메타 하나에 기대고 있다는 점입니다.",
  status: [
    { k: "판매 채널", v: "네이버 스마트스토어(기존 중심) + 자사몰 아임웹(2026년 8월 오픈)" },
    { k: "메타(인스타) 광고", v: "랜딩 3곳: 자사몰 상세 · 스마트스토어 상세 · 인스타 홈. 내부 콘텐츠팀 운영" },
    { k: "네이버 검색광고", v: "스마트스토어로만 연결. AMPM 운영" },
    { k: "캠페인 방향", v: "10월부터 ‘제품 중심’에서 ‘고객 중심(A1~B2)’으로 전환 중. 콘텐츠 · 퍼포먼스 모두 해당" },
  ],
  statusNote:
    "고객 중심 전환은 네이버 검색광고가 가장 많이 진행됐습니다. 캠페인을 제품이 아니라 고객 그룹 기준으로 정렬했습니다. 메타는 아직 고객별로 세팅을 나누지 못했습니다.",
  numbers: [
    { big: "3.8% vs 0.8%", label: "같은 메타 소재 · 같은 제품(Plate07)의 클릭 대비 구매, 스마트스토어 vs 자사몰 (9월 말)" },
    { big: "9건 중 8건", label: "9월 메타 구매 중 ‘아이밥’ 소재 하나에서 나온 건수" },
    { big: "87.6%", label: "네이버 매출 중 자사(브랜드) 키워드 비중" },
    { big: "350%", label: "손익분기 ROAS" },
    { big: "135,579원", label: "중복 키워드 15개에서 구매 없이 쓴 비용" },
  ],
  problems: [
    { no: 1, title: "자사몰 전환율이 낮음", seen: "같은 메타 소재 · 같은 제품(Plate07)인데 클릭 대비 구매가 스마트스토어 3.8%, 자사몰 0.8% (9월 말)", who: "내부 (결제 · 픽셀 · 혜택 점검)", main: true },
    { no: 2, title: "자사몰 유입이 메타 하나", seen: "검색광고는 스마트스토어로만 가고, 자사몰은 SEO가 약해 검색 유입이 거의 없음", who: "AMPM과 함께" },
    { no: 3, title: "고객별 퍼널(길)이 정리 안 됨", seen: "A1~B2 구분은 생겼지만 ‘어떤 고객 → 어떤 광고 → 어떤 썸네일 · 상세 → 어느 채널’로 이어지는 길이 아직 없음", who: "AMPM과 함께(네이버), 내부(메타)" },
    { no: 4, title: "자사몰 랜딩을 정하지 못함", seen: "어떤 광고를 어느 페이지로 보내야 자사몰이 나아질지 고민 중", who: "AMPM과 함께" },
    { no: 5, title: "리텐션이 낮음", seen: "재방문 · 재구매 흐름이 약함", who: "내부" },
    { no: 6, title: "Cactus Cup 멈춤", seen: "가격 정책, 콘텐츠 · 광고 모두 멈춘 상태", who: "내부 (재개 시 공유)" },
  ],
  problemNote: "가장 큰 문제는 1번입니다. 2~4번은 AMPM과 함께 풀고 싶고, 5·6번은 내부 과제입니다.",
  metaNote:
    "메타를 고객별로 나누지 못한 이유: 메타는 광고 세트마다 7일에 약 50건의 전환이 쌓여야 학습 단계를 벗어납니다. 지금 구매 수로는 세트를 나눌수록 학습이 더 어렵습니다. 그래도 최적화가 의미를 가지려면 고객별 길(예산 · 시간 · 타겟 · 썸네일)이 먼저 잡혀 있어야 한다고 봅니다.",
  metaSource: { label: "What Is the Meta Ads Learning Phase? (Jetfuel, 2026)", href: "https://jetfuel.agency/what-is-the-meta-ads-learning-phase-how-to-exit-it-faster-in-2026/" },
  directionLead: "고객별 ‘길’을 먼저 정리하고, 그 길에 맞춰 예산 · 타겟 · 썸네일을 맞추는 것이 목표입니다. 입구(유입)는 넓게 열고, 매출이 나는 출구(전환)에서 좁혀 갑니다.",
  directions: [
    { title: "길을 기록 단위로", body: "길 = 고객 → 유입 광고(소재 · 검색어) → 썸네일 · 상세 → 제품 → 채널. 다섯 칸이 모두 그 고객에게 맞춰진 길끼리 비교하고, 효율 좋은 길에 예산을 늘립니다." },
    { title: "자사몰은 출구부터", body: "네이버페이 결제의 픽셀 집계, 결제 단계, 스마트스토어 대비 혜택, 리뷰 노출을 먼저 점검합니다. 출구가 막힌 채 유입을 늘리면 광고비만 늘어납니다." },
    { title: "그다음 자사몰 입구를 하나 더", body: "메타 외에 검색(SEO · 검색광고)으로 자사몰에 들어오는 길을 만듭니다." },
    { title: "메타는 학습 조건을 감안", body: "전환이 적은 동안에는 광고 세트를 잘게 나누지 않고, 고객 구분은 소재(썸네일 · 문구)로 먼저 표현합니다." },
  ],
  asksLead: "네이버 검색광고 운영은 지금처럼 맡기고, 아래 다섯 가지를 함께 보고 싶습니다. 범위 밖인 항목은 그렇다고 알려주세요.",
  asks: [
    { title: "고객별 리포트", body: "고객 그룹(A1~B2) 캠페인별로 노출 · 클릭 · 전환 · ROAS를 나눠 주간으로 보기" },
    { title: "검색어가 고객별로 나뉘는지 확인", body: "검색어 보고서에서 같은 상품이 여러 캠페인에서 같은 검색어에 노출되는지 (중복 키워드 15개에서 구매 없이 135,579원을 쓴 사례)" },
    { title: "자사몰로 가는 검색 길", body: "파워링크 등으로 자사몰에 소액 연결하는 테스트가 가능한지, 방식과 예상 비용" },
    { title: "자사몰 SEO 진단", body: "아임웹 자사몰의 네이버 검색 노출에서 고칠 점 (AMPM 지원 범위인지 확인)" },
    { title: "상세안 v2 인계 확인", body: "10/1 전달한 상세안의 탐색 키워드 그룹을 어떻게 구현했는지 (쇼핑검색은 키워드 등록이 안 되므로)" },
  ],
};

// ── 부록: B2B 퍼널 (구상 단계) ──
export const b2b = {
  lede: "B2B는 크게 두 명의 타겟을 생각하고 있습니다. 검색광고 예산은 배분하되, ROAS나 매출을 기대하지 않고 인바운드 연락(문의)을 얻는 것이 목적입니다.",
  targets: [
    { name: "답례품 · 기념품 담당자", url: "https://www.foodle.biz/gift", path: "foodle.biz/gift" },
    { name: "카페테리아 · 구내식당 담당자", url: "https://www.foodle.biz/partnership", path: "foodle.biz/partnership" },
  ],
  flow: [
    { step: "검색광고", sub: "예산 배분은 하되 매출 기대 없음" },
    { step: "자사몰 B2B 페이지", sub: "타겟별 랜딩: gift · partnership" },
    { step: "인바운드 연락", sub: "문의가 목표" },
  ],
  rules: [
    "B2C 성과(ROAS · 실적)와 섞지 않고 따로 봅니다.",
    "성과는 매출이 아니라 인바운드 연락 여부로 판단합니다.",
    "랜딩은 모두 자사몰의 B2B 페이지입니다. 스마트스토어로 보내지 않습니다.",
  ],
  status: "구상 중인 단계입니다. 예산 비중과 키워드는 아직 정해지지 않았습니다.",
};

export const officialLinks = [
  { label: "공식몰", href: "https://www.foodle.biz/" },
  { label: "네이버 스마트스토어", href: "https://smartstore.naver.com/foodle-seoul" },
  { label: "인스타그램", href: "https://www.instagram.com/foodle_official/" },
  { label: "블로그", href: "https://blog.naver.com/official_foodle" },
];

// ── ICP (원문 6·7장) ──
export type Usp = { name: string; copy: string; status: Status; note: string };

export type Icp = {
  code: string;
  scene: string;
  sceneEn: string;
  who: string;
  age: string;
  product: string;
  productSub?: string;
  job: string;
  entry: { problem: number; aesthetic: number };
  definition: string;
  tension: string;
  ubp: string;
  copy: string;
  cta: string;
  persona: { name: string; quote: string };
  triggers: string[];
  usps: Usp[];
};

export const icps: Icp[] = [
  {
    code: "A1",
    scene: "가족의 식탁",
    sceneEn: "Family Table",
    who: "5~13세 아이를 키우는 엄마",
    age: "33~44세",
    product: "Plate07",
    productSub: "○ Plate05 아이 1인분",
    job: "아이 식사를 안심하고 유연하게",
    entry: { problem: 60, aesthetic: 40 },
    definition:
      "아이 식사를 매일 차리며 소재·세척·실용성을 꼼꼼히 따지지만, 식탁 분위기를 포기하고 싶지 않은 사람. 고정 칸 식판을 졸업할 시점에 “다음 식기”를 찾는다.",
    tension: "고정 칸 식판은 매일 바뀌는 메뉴를 담지 못하고, 아이용 식기는 몇 년 쓰고 버린다.",
    ubp: "아이 밥 차리는 아침이 덜 불안하고 덜 번거롭다. 그리고 아이가 자란 뒤에도 가족이 쓴다.",
    copy: "아이 입에 닿는 건 안심하게, 차리는 건 쉽게. 오늘 메뉴대로 조합하는 Plate07.",
    cta: "오늘의 구성 보기 → Plate07 상세",
    persona: { name: "서연 · 38세 · 경기 판교", quote: "애 키운다고 집이 전부 애 물건이 되는 건 싫어." },
    triggers: ["유아식판 졸업", "초등 입학 (2~3월)", "실리콘 식판 피로", "식기세척기 도입", "둘째 출산"],
    usps: [
      {
        name: "안전한 소재",
        copy: "젖병에도 쓰이는 BPA-Free ECOZEN™으로 만든 아이 식기*",
        status: "conditional",
        note: "원료사 용도 확인서 확보 전: “BPA-Free ECOZEN™ · 식약처 기준 자가품질검사 통과”",
      },
      {
        name: "모듈형 구조",
        copy: "끼우고 빼면 아이 밥 세팅 끝. 첫째는 밥, 둘째는 빵",
        status: "ok",
        note: "“10p 모듈”은 사실 표기. “26가지 조합”은 산정 근거 확인 후",
      },
      {
        name: "가볍고 깨질 걱정이 적다",
        copy: "아이 손에 가볍고, 떨어뜨려도 깨질 걱정을 줄인 식기",
        status: "careful",
        note: "“절대 안 깨지는” 금지. 낙하 시험이 있으면 “○○cm 낙하 시험 통과”",
      },
    ],
  },
  {
    code: "A2",
    scene: "나의 한 끼",
    sceneEn: "One Plate",
    who: "다이어트·건강식에 관심 있는 3050 여성",
    age: "33~50세",
    product: "Plate05",
    productSub: "○ Plate07 가족용",
    job: "건강한 한 끼를 어렵지 않게 지속",
    entry: { problem: 50, aesthetic: 50 },
    definition:
      "체중 감량만이 아니라 컨디션·운동·균형 잡힌 식사를 의식하는 사람. 식단관리를 참는 일이 아니라 오래 가는 생활 리듬으로 만들고 싶다.",
    tension: "다이어트 그릇은 통제처럼 느껴지고, 식단이 끝나면 서랍에 들어간다.",
    ubp: "참는 식단이 아니라, 접시가 균형을 도와주는 매일의 한 끼.",
    copy: "칸에 맞춰 담으면 탄·단·지가 한눈에. 오늘도 무리 없이, 잘 먹는 한 끼.",
    cta: "5분 메뉴 3개 보기 → Plate05 상세",
    persona: { name: "수진 · 43세 · 서울 성동", quote: "굶는 다이어트는 이제 안 해. 오래 가는 게 중요해." },
    triggers: ["연초 결심 (1월)", "운동 재시작", "건강검진", "여름 대비 (4~5월)", "배달 줄이기"],
    usps: [
      {
        name: "모듈이 잡는 균형",
        copy: "칸에 맞춰 담으면 탄·단·지 구성이 한눈에*",
        status: "conditional",
        note: "칸별 용량 수치는 확인 후. 체중 감량·건강 개선 효능은 금지, “보이게 한다”까지",
      },
      {
        name: "지속되는 루틴",
        copy: "5분이면 차리고, 한 장이면 치운다",
        status: "ok",
        note: "“5분”은 콘텐츠 시연 맥락으로만. 제품 성능 수치처럼 쓰지 않음",
      },
      {
        name: "기분 좋은 식사",
        copy: "관리하는 식사도 충분히 아름다울 수 있다",
        status: "ok",
        note: "“다이어트 식판”은 검색 입찰만. 문구는 “잘 먹는 한 끼”",
      },
    ],
  },
  {
    code: "A3",
    scene: "매일의 살림",
    sceneEn: "Daily Kitchen",
    who: "다용도·실용이 먼저, 디자인은 한 스푼",
    age: "35~55세",
    product: "Oval Dome",
    productSub: "Plate07·05 함께",
    job: "보관·데우기·서빙·세척 동선 줄이기",
    entry: { problem: 60, aesthetic: 40 },
    definition:
      "물건을 늘리기보다 하나로 여러 용도를 해결하고 싶은 사람. 반찬을 담아 냉장고에 넣고, 꺼내서 데우고, 그대로 식탁에 올리는 동선을 원한다.",
    tension:
      "보관 용기는 식탁에 올리기 민망하고, 예쁜 그릇은 냉장고·전자레인지에 넣기 불안하다. 옮겨 담느라 설거지가 두 배.",
    ubp: "그릇을 모셔두지 않는다. 매일 꺼내 쓰는데, 꺼낼 때마다 예쁘다.",
    copy: "담고, 덮고, 데우고, 차리고. 모셔두는 그릇 말고 매일 꺼내 쓰는 그릇.",
    cta: "3가지 쓰임 보기 → Oval Dome 상세",
    persona: { name: "미경 · 49세 · 경기 용인 수지", quote: "설거지 하나 줄이는 게 제일 큰 일이야." },
    triggers: ["냉장고 정리·살림 리셋", "반찬통 교체", "명절 후 남은 음식", "신혼·이사 살림 세팅", "연말 대청소"],
    usps: [
      {
        name: "하나로 여러 일",
        copy: "접시, 볼, 돔 커버. 하나로 세 가지",
        status: "ok",
        note: "“보관용기 대체” 금지. 돔 커버로 “덮어 두는”까지",
      },
      {
        name: "동선 그대로",
        copy: "냉장고에서 식탁까지, 그릇을 바꾸지 마세요",
        status: "ok",
        note: "오븐·직화 불가를 상세·FAQ에 함께 표기. 냉동 보관은 확인 후",
      },
      {
        name: "모셔두지 않는 디자인",
        copy: "예쁜 그릇을 아끼지 말고, 오늘 쓰세요",
        status: "conditional",
        note: "“유리 같은”은 ECOZEN™ 표기와 함께 (유리 소재 오인 방지)",
      },
    ],
  },
  {
    code: "B1",
    scene: "식탁 위 오브제",
    sceneEn: "Objet",
    who: "홈데코 — 인테리어 소품으로 사는 사람",
    age: "30~50세",
    product: "Oval Dome",
    productSub: "○ Plate07·05 · Cactus 조합 장면",
    job: "매일의 장면을 조금 더 아름답게",
    entry: { problem: 30, aesthetic: 70 },
    definition:
      "자기 집의 형태·색·소재 조화를 중요하게 본다. 식기를 수납장 속 물건이 아니라 식탁과 선반의 분위기를 바꾸는 오브제로 고른다.",
    tension: "예쁜 오브제는 장식장에만 있고, 매일 쓰는 그릇은 예쁘지 않다.",
    ubp: "놓아두면 오브제, 꺼내 쓰면 매일의 그릇.",
    copy: "예쁜 그릇은 많습니다. 매일 쓰고 싶은 그릇은 다릅니다.",
    cta: "컬러 보기 → Oval Dome 상세",
    persona: { name: "하나 · 34세 · 서울 성수", quote: "매일 쓰는 게 예뻐야 집이 예뻐져." },
    triggers: ["계절 전환", "연말 테이블 스타일링", "이사·인테리어 리프레시", "무거운 도자기 피로", "백화점·팝업 발견"],
    usps: [
      {
        name: "형태와 투명감",
        copy: "식탁 위에 놓였을 때 설명이 필요 없는 형태*",
        status: "conditional",
        note: "“유리 같은”은 ECOZEN™ 표기와 함께",
      },
      {
        name: "매일 쓰는 가벼움",
        copy: "아름다움을 특별한 날에만 아껴두지 마세요",
        status: "ok",
        note: "“가볍다”는 사실. 무게 수치는 확인 후",
      },
      {
        name: "디자인 근거",
        copy: "과시하지 않아도, 잘 고른 티가 나는 식탁",
        status: "ok",
        note: "“출품”·“입점” 사실 그대로. “선정·수상”으로 바꾸지 않음",
      },
    ],
  },
  {
    code: "B2",
    scene: "건네는 마음",
    sceneEn: "Gift",
    who: "선물하고 싶은 사람",
    age: "30~60세",
    product: "Oval Dome · Cactus Cup",
    productSub: "번들 48,000원",
    job: "취향이 보이면서 실제로 쓰는 선물",
    entry: { problem: 30, aesthetic: 70 },
    definition:
      "집들이·생일·결혼·연말·감사에 “무난하지만 흔한 것”보다 자기 취향이 보이면서 받는 사람이 실제로 자주 쓸 선물을 찾는다.",
    tension: "흔한 선물은 성의 없어 보이고, 취향 강한 선물은 안 쓰일까 걱정된다.",
    ubp: "고르는 사람은 센스를 보여주고, 받는 사람은 매일 쓴다.",
    copy: "받는 순간보다, 사용할수록 오래 기억되는 선물.",
    cta: "선물 세트 보기 → 선물 세트 페이지",
    persona: { name: "은정 · 46세 · 서울 송파", quote: "받는 사람이 진짜 쓸 걸 주고 싶어." },
    triggers: ["집들이·입주", "연말·크리스마스 (Q4 핵심)", "결혼·신혼", "생일·감사", "답례·팀 선물 (Cactus)"],
    usps: [
      {
        name: "설명할 스토리",
        copy: "“이거 어디 제품이야?”라는 질문까지 선물하세요",
        status: "ok",
        note: "명칭은 「당신의 맛」 그대로 (“흑백셰프” 아님)",
      },
      {
        name: "고급 패키지",
        copy: "포장을 열 때 한 번, 쓸 때마다 다시 좋아지는 선물*",
        status: "conditional",
        note: "메시지 카드·가격표 제외 배송·도착일은 운영 여부 확인 후 표기",
      },
      {
        name: "받은 뒤의 쓰임",
        copy: "예쁘기만 한 선물보다, 매일 식탁에 올라오는 선물",
        status: "ok",
        note: "할인·특가 문구 없이 패키지와 스토리로",
      },
    ],
  },
];

// ── 브랜드 공통 USP 3가지 (원문 1·2·3장의 사실만 조합) ──
export const brandUsps = [
  {
    no: "01",
    title: "매일 쓰는 가벼움",
    image: "/images/oval-microwave.jpg",
    lead: "도자기보다 가볍고, 유리보다 견고하게.",
    body: "유리 같은 맑은 아름다움은 지키고, 무거움과 깨질 걱정은 줄였습니다. 냉장고에서 전자레인지, 식탁, 식기세척기까지 그릇을 바꾸지 않고 씁니다.",
    facts: [
      "내열·내한 −30℃ ~ 110℃",
      "전자레인지 · 식기세척기 · 냉장고 사용 가능",
      "오븐 · 직화 불가",
    ],
  },
  {
    no: "02",
    title: "하나의 그릇, 여러 장면",
    image: "/images/plate07-room.jpg",
    lead: "아이 저녁 → 엄마 브런치 → 반찬 보관 → 손님 테이블 → 선물.",
    body: "하나의 그릇이 여러 장면을 지나갑니다. Oval Dome은 접시·볼·돔 커버 3in1, Plate는 원하는 모듈만 조합하는 구조입니다.",
    facts: ["Oval Dome 3in1 리버시블", "Plate07 10p 모듈 조합", "Plate05 1인분 원플레이트"],
  },
  {
    no: "03",
    title: "믿을 수 있는 근거",
    lead: "소재는 정체성이 아니라, 매일 쓰는 경험을 가능하게 하는 증명입니다.",
    body: "BPA-Free, 중금속·비스페놀A 불검출. 사용 경험으로 먼저 설명하고, 소재 이야기는 그 결과로 뒤에 둡니다. 식물 원료 기반 바이오 소재 ECOZEN™이 이 가벼움과 투명감을 가능하게 합니다.",
    facts: [
      "식약처 기준 자가품질검사 통과",
      "SGS 내구성·무해성 검증",
      "ISO 9001 · 14001 · 45001 · 특허·실용신안 14건",
    ],
  },
];

// ── 대행사 가이드 (원문 0·4장) ──
export const messageOrder = ["긴장 (훅)", "UBP", "USP 증명", "브랜드 의미", "CTA"];

export const tone = ["정제된", "다정한", "실용적인", "자신감 있는"];

export const banned: { say: string; instead: string }[] = [
  { say: "절대 안 깨지는 · 깨지지 않는다", instead: "떨어뜨려도 깨질 걱정을 줄인 · 도자기보다 가볍고 유리보다 견고한" },
  { say: "밀폐 · 보관용기 대체 · 오븐·직화", instead: "“덮어 두는”까지. 110℃ 초과 사용 불가 명시" },
  { say: "살 빠지는 · 체중 감량 · 편식 개선", instead: "칸에 담으면 탄·단·지가 한눈에 · 잘 먹기 위한 한 끼" },
  { say: "할인 · 최저가 · 가성비 · 특가", instead: "세트 구성 · 패키지 · 스토리" },
  { say: "식약처 인증", instead: "식약처 기준 자가품질검사 통과" },
  { say: "메종&오브제 선정·수상", instead: "메종&오브제 출품" },
  { say: "Cactus Cup “에코젠”", instead: "Cactus Cup 소재는 PP (BPA-Free)" },
];

export const allowed = [
  "BPA-Free · 중금속·비스페놀A 불검출",
  "식약처 기준 자가품질검사 통과 · SGS · ISO · 특허 14건",
  "−30~110℃ · 전자레인지·식세기·냉장고 (ECOZEN 제품만)",
  "10p 모듈, 오늘 메뉴대로 조합 (Plate07)",
  "칸에 담으면 탄·단·지가 한눈에 (효능으로 넘어가지 않음)",
];

export const faqs = [
  {
    q: "한 소재에 ICP를 여러 개 섞어도 되나요?",
    a: "아니요. 한 결과물은 ICP 1개 × 주력(●) 제품 1개이고, 약속은 하나입니다. 보조(○) 제품은 세트·조합 장면·크로스셀에만 등장하며 광고 훅의 주인공으로 쓰지 않습니다.",
  },
  {
    q: "할인이나 가성비로 소구해도 되나요?",
    a: "쓰지 않습니다. 할인·최저가·가성비·특가 대신 세트 구성, 패키지, 스토리로 말합니다. 11월 대형 세일 기간에도 할인 없이 세트와 장바구니 리타게팅으로 운영합니다.",
  },
  {
    q: "“젖병에도 쓰이는 ECOZEN™”을 써도 되나요?",
    a: "조건부 표현입니다. 원료사 용도 확인서를 확보하기 전에는 “BPA-Free ECOZEN™ · 식약처 기준 자가품질검사 통과”로 대체해 주세요. 조건부 표현에는 * 표시를 붙입니다.",
  },
  {
    q: "페르소나를 실제 고객이나 후기처럼 써도 되나요?",
    a: "안 됩니다. 페르소나는 가상 인물이자 가설입니다.",
  },
  {
    q: "오븐·직화·밀폐 용도로 안내해도 되나요?",
    a: "안 됩니다. ECOZEN™은 110℃ 초과(오븐·직화) 사용이 불가하고, 밀폐 용기가 아닙니다. 돔 커버는 “덮어 두는” 용도까지만 말하고, 오븐·직화 불가를 상세 페이지와 FAQ에 함께 표기합니다.",
  },
  {
    q: "Cactus Cup도 ECOZEN™ 제품인가요?",
    a: "아닙니다. Cactus Cup은 PP(BPA-Free) 소재입니다. “에코젠”이라고 쓰지 마세요. 뜨거운 음료와 식기세척기 사용까지 안내할 수 있습니다.",
  },
  {
    q: "지금 시즌에는 어떤 ICP를 먼저 보나요?",
    a: "11/16~12/20은 선물(건네는 마음) 피크이고, 12/26부터 건강한 한 끼(나의 한 끼)로 전환해 1월 1~3주가 피크입니다. 1월에는 신학기 대비 가족의 식탁도 시작합니다.",
  },
];

export const openItems = [
  "“젖병에도 쓰이는” — 근거 서류 확인 전에는 쓰지 않습니다",
  "낙하 시험 수치 — “○○cm 낙하 시험 통과”는 확인 후 표기합니다",
  "Plate07 “26가지 조합”, Plate05 칸별 용량 — 확인 전에는 “10p 모듈”까지만",
  "선물 배송 옵션 (가격표 제외 · 메시지 카드 · 도착 보장일) — 운영 확인 후 표기합니다",
];

// ── ICP별 사진 · 제품 파생 색 · 콘텐츠 역할 배분 (원문 PDF: 브랜드소개서, ICP Strategy Final) ──
// accent는 Foodle 제품 색에서 가져온 내부용 구분색이다. 고객 접점에는 쓰지 않는다.
export const icpMeta: Record<
  string,
  { image: string; pos: string; alt: string; accent: string; mix: [number, number, number, number]; mixNote: string; shop: { title: string; lines: string[] } }
> = {
  A1: { image: "/images/plate07-plate.jpg", pos: "50% 50%", alt: "Plate07에 아침 메뉴를 나눠 담은 식탁", accent: "#b9b4aa", mix: [15, 35, 35, 15], mixNote: "기능·안심 Proof가 핵심", shop: { title: "온 가족을 위한 다양한 메뉴", lines: ["모듈형 구조로 골라담고 조립할 수 있는 Plate 시리즈"] } },
  A2: { image: "/images/plate05-toast.jpg", pos: "50% 50%", alt: "Plate05에 담은 프렌치토스트 한 끼", accent: "#d9a8aa", mix: [25, 30, 25, 20], mixNote: "실제 식사 루틴과 사용 빈도", shop: { title: "Plate 05", lines: ["매일의 한 끼부터 아이를 위한 식사까지", "딱 좋은 크기로 자꾸 손이 가는 플레이트"] } },
  A3: { image: "/images/oval-fridge.jpg", pos: "50% 50%", alt: "돔 커버를 덮은 Oval Dome이 냉장고에 들어 있는 모습", accent: "#1e3932", mix: [20, 40, 25, 15], mixNote: "쓰임 시연이 가장 많이 필요", shop: { title: "Oval Dome", lines: ["플레이트, 보울, 때론 덮어두는 용도까지", "하나로 여러 순간을 채우는 양방향 플레이트"] } },
  B1: { image: "/images/oval-wine.jpg", pos: "50% 55%", alt: "딥그린 Oval Dome 위에 과일을 올린 홈파티 테이블", accent: "#e3d57a", mix: [45, 25, 20, 10], mixNote: "첫 발견의 미감이 가장 중요", shop: { title: "파티같은 음식 준비하기", lines: ["오벌돔만의 투명한 돔으로 먼지 방어", "뒤집어서 와인칠링과 샐러드 볼까지"] } },
  B2: { image: "/images/gift-box.jpg", pos: "50% 35%", alt: "Foodle 선물 박스를 건네는 장면", accent: "#a9d5bd", mix: [35, 25, 20, 20], mixNote: "패키지·배송 FAQ가 전환을 좌우", shop: { title: "소중한 분에게 선물하세요", lines: ["취직 선물 · 캑터스컵 — 삭막한 사무실 속 생기 충전 + 수분 충전", "인테리어 선물 · 오벌돔 — 높은 활용도와 고급스러운 인테리어까지", "디저트 러버를 위한 Plate 05 — 뉴트럴한 핑크가 디저트와 잘 어울리는 플레이트"] } },
};
export const mixLabels = ["Desire", "Understand", "Trust", "Convert"];

// ── 비주얼 디렉션 (BIS 12·17·18) ──
export const visualRules = [
  "Photography first. Graphics second.",
  "Object is soft. Grid is rational.",
  "큰 이미지 + 짧은 문장 + 여백",
  "제품과 음식의 색이 주요 액센트",
];

export const visualRoles = [
  {
    role: "Lifestyle · Desire",
    reaction: "“저 식탁에 앉고 싶다.”",
    show: "자연광, 따뜻한 중성 공간, 실제 음식, 사람의 흔적",
    images: ["/images/plate05-hero.jpg"],
    alt: "Plate05와 샐러드, 빵이 놓인 식탁",
  },
  {
    role: "Product · Understand",
    reaction: "“아, 이렇게 쓰는 거구나.”",
    show: "flip, stack, module, nesting, size, scale",
    images: ["/images/oval-fridge.jpg", "/images/oval-microwave.jpg"],
    alt: "Oval Dome을 냉장고에 넣고, 전자레인지에 데우는 두 장면",
  },
  {
    role: "Detail · Trust",
    reaction: "“생각보다 정교하다.”",
    show: "투명감, edge, grip, surface, 소재와 음식의 접점",
    images: ["/images/cactus-hero.jpg"],
    alt: "Cactus Cup 컵 두 개가 트레이 위에 놓인 모습",
  },
];

export const visualByGroup = [
  { group: "A · 편한가?", rule: "손 · 실제 음식 · 사용 동선이 먼저. 제품 단독 컷은 증명 뒤로." },
  { group: "B · 예쁜가?", rule: "빛 · 형태 · 여백이 먼저. 2초 안에 실제 음식으로 사용을 증명." },
];

export const neverDefault = [
  "숲·잎·지구·재활용 마크를 친환경의 기본 배경으로 쓰기",
  "과도한 zero-waste 소품",
  "너무 멀고 긴장되는 fine-dining 연출",
  "키즈 식기 미학을 브랜드 전체로 확대",
  "과포화 단색 배경 · 소품을 쌓은 prop collage",
  "제품 실루엣이나 실제 색상을 왜곡하는 AI 이미지",
];

// ── 브랜드 성격: 이쪽에 가깝게, 저쪽은 아니게 (BIS 7) ──
export const characterPairs = [
  { is: "Refined", not: "Ornamental" },
  { is: "Warm", not: "Cute" },
  { is: "Quiet", not: "Loud" },
  { is: "Contemporary", not: "Trendy" },
  { is: "Everyday", not: "Ceremonial" },
  { is: "Premium", not: "Precious" },
];

// ── 채널별 문장 순서 (BIS 26) ──
export const copyOrders = [
  { channel: "홈페이지", order: "Desire → Scene → Use → Proof → Value" },
  { channel: "상세 페이지(PDP)", order: "Hero USP → Use scenes → Benefits → Verified proof → Sustainability" },
  { channel: "인스타그램", order: "Scene·emotion first → Product or philosophy second" },
  { channel: "유료 광고", order: "One hook → one proof → clear CTA" },
  { channel: "이메일 · CRM", order: "Reason to return → use idea → product / offer" },
];

// ── 집행 구조 (ICP Strategy Final 09, 원문 md 9·10장) ──
export const channelRoles = [
  { channel: "인스타 릴스", role: "Desire · Understand", icp: "B1 A2 A3 B2", ops: "주 3편 · 15초 이하 · 첫 3초 장면" },
  { channel: "인스타 캐러셀", role: "Understand · Trust", icp: "A1 A2 B2", ops: "주 2편 · 저장 유도형" },
  { channel: "인스타 스토리", role: "Trust · Convert", icp: "전체", ops: "주 10회+ · 리뷰 리포스트, FAQ, D-7" },
  { channel: "네이버 블로그", role: "Understand · Trust", icp: "A1 A3 B2", ops: "주 2편 · 검색광고 문제 키워드와 같은 제목" },
  { channel: "Naver 키워드·쇼핑광고 (SA) · 애드부스트", role: "Convert", icp: "A1 B2 A2 A3", ops: "상시 · 정확·구문검색 · 주간 검색어 마이닝" },
  { channel: "Naver DA", role: "Convert · 리타게팅", icp: "B2 A1", ops: "현재 미운영 (플레이북 계획)" },
  { channel: "리빙 크리에이터", role: "Desire · Trust", icp: "A3 B1", ops: "월 3~5명 · 성과작은 파트너십 광고" },
  { channel: "맘카페·커뮤니티", role: "Trust", icp: "A1", ops: "월 2~4건 실사용 후기 · 협찬 표기 필수" },
  { channel: "카카오 선물하기", role: "Convert · 리텐션", icp: "B2", ops: "시즌 세트 · 구매 후 메시지" },
  { channel: "스마트스토어·29CM·컬리", role: "Trust · Convert", icp: "전체", ops: "ICP별 랜딩 첫 화면 분기 · 포토리뷰 상단" },
];

// 외부 공유용: 절대 금액은 싣지 않고 전체 광고비 대비 비중(%)만 보여준다. 값은 내부 배분표(합계 200)의 원본 비율이다.
export const budget = {
  total: 200,
  split: { meta: 100, sa: 50, da: 50 },
  rows: [
    { label: "건네는 마음 (B2)", code: "B2", meta: 20, sa: 12, da: 20 },
    { label: "식탁 위 오브제 (B1)", code: "B1", meta: 30, sa: 5, da: 10 },
    { label: "가족의 식탁 (A1)", code: "A1", meta: 15, sa: 15, da: 10 },
    { label: "매일의 살림 (A3)", code: "A3", meta: 20, sa: 7, da: 5 },
    { label: "나의 한 끼 (A2)", code: "A2", meta: 15, sa: 8, da: 5 },
    { label: "브랜드 키워드 방어", code: "—", meta: 0, sa: 3, da: 0 },
  ],
  note: "12/26 이후 B2 비중 일부를 A2로 이동합니다 (A2의 Meta 비중을 2배로)",
};

// 시즌 로드맵 2026-10-20 ~ 2027-01-17 (90일). start/end는 시작일로부터의 일수.
export const season = {
  days: 90,
  months: [
    { label: "10월", at: 0 },
    { label: "11월", at: 12 },
    { label: "12월", at: 42 },
    { label: "1월", at: 73 },
  ],
  lanes: [
    { label: "건네는 마음 (B2)", start: 27, end: 61, tone: "peak", note: "11/16~12/20 선물 피크 · D-7 카운트다운" },
    { label: "나의 한 끼 (A2)", start: 67, end: 90, peakFrom: 73, tone: "peak", note: "12/26 전환 · 1월 1~3주 피크" },
    { label: "가족의 식탁 (A1)", start: 73, end: 90, tone: "mid", note: "1월 신학기" },
    { label: "매일의 살림 (A3) · 식탁 위 오브제 (B1)", start: 0, end: 90, tone: "low", note: "전 기간 저강도 · B1 오가닉 20%+" },
  ],
  marks: [
    { label: "P1 테스트 시작", at: 13 },
    { label: "1차 판정", at: 27 },
    { label: "A2 전환", at: 67 },
  ],
};

// ── 소재 검수 체크리스트 (ICP Strategy Final 14) ──
export const checklist = [
  "정확히 한 ICP를 위한 소재이고, 제품 × ICP 매트릭스의 주력 조합(●)인가?",
  "첫 3초에 제품을 모르는 사람도 “내 장면”이라고 느끼는가?",
  "제품 장점이 아니라 고객의 긴장 하나로 시작하는가?",
  "Proof가 제품 동작·사용 장면·후기·Facts 중 하나로 보이는가?",
  "광고 훅과 랜딩 첫 문장이 이어지는가?",
  "AVOID 표현이 없는가? (할인·가성비, 깨지지 않는다, 밀폐, 살 빠진다)",
  "VERIFY 표현은 근거 서류로 확인했는가? 브랜드소개서 수치와 명칭이 일치하는가?",
  "A에는 쓰임이, B에는 미감이 먼저 보이는가?",
  "Foodle이 키즈·다이어트·보관용기 브랜드 하나로 좁아 보이지 않는가?",
  "네이밍 규칙대로 이름을 붙였고, 이 소재로 무엇을 배울지 정했는가?",
];

// ── 최종 한 문장 ──
export const finalLines = [
  { code: "A1", line: "아이와 가족이 오래 쓰는 식탁" },
  { code: "A2", line: "잘 먹는 리듬" },
  { code: "A3", line: "덜 번거로운 살림" },
  { code: "B1", line: "매일 누리는 아름다움" },
  { code: "B2", line: "사용할수록 남는 선물" },
];
export const conclusion = {
  eyebrow: "마케터님께 부탁드립니다",
  title: "캠페인의 축은 제품이 아니라 사람입니다.",
  lede: "네이버 검색광고와 메타 모두, 앞으로 알고리즘 최적화를 하더라도 비교와 타겟 세밀화의 기준이 되는 축이 사람(A1~B2)이길 바랍니다.",
  points: [
    { title: "USP에서 UBP로", body: "콘텐츠도 퍼널도 제품 기능이 아니라 고객 중심으로 바꾸려고 시도 중입니다." },
    { title: "아직 제품 중심인 곳이 남아 있습니다", body: "타겟팅과 최적화 관점에서 제품 중심으로 움직이는 곳이 아직 있다고 느낍니다. 운영 중인 캠페인을 보시며 함께 짚어 주세요." },
    { title: "전체 길을 A1~B2 단위로", body: "적절한 길목, 적절한 내용, 퍼널 중심으로 전체 길을 설계하고 싶습니다." },
  ],
  linesTitle: "다섯 고객, 다섯 가지 약속",
};
