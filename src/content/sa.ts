// 네이버 SA(쇼핑검색) 위계. 출처: 네이버 SA 소재 세트 v2 (2026-10-15), 네이버 SA 10월 2주차 공유 (2026-10-21)
// 규칙: 숫자와 그룹명은 원본 문서에 있는 값만 쓴다.

export const saSummary = [
  { value: "5", label: "캠페인", sub: "A1 · A2 · A3 · B1 · B2 (+ C1 구분 요청 예정)" },
  { value: "19", label: "광고그룹", sub: "검색어 묶음 단위" },
  { value: "32", label: "소재명", sub: "그룹 × 제품 단위" },
];

export const saLevels = [
  { level: "캠페인", desc: "타겟(A1~B2) 단위. 제품이 아니라 사람으로 나눕니다." },
  { level: "광고그룹", desc: "그 타겟이 찾는 검색어(용도·상황) 묶음입니다." },
  { level: "소재", desc: "그룹 × 제품별 소재명 · 홍보문구 · 노출용 이미지입니다." },
];

// flag: 개선이 필요한 그룹 표시 (warn = 선행 필요, new = 신규, edit = 문구 수정 예정)
export const saCampaigns: {
  code: string;
  name: string;
  products: string;
  role: string;
  note: string;
  groups: { name: string; flag?: "warn" | "new" | "edit"; flagText?: string }[];
}[] = [
  {
    code: "A1",
    name: "아이 키우는 엄마",
    products: "Plate07 단독",
    role: "운영",
    note: "썸네일 · 노출 이미지 모두 기존 유지",
    groups: [{ name: "뚜껑 식판 · 보관" }, { name: "에코젠 소재 · 안전한 식기" }, { name: "아이 식판 · 아이 식사" }],
  },
  {
    code: "A2",
    name: "웰니스 건강식단",
    products: "Plate05 단독",
    role: "운영",
    note: "썸네일 · 노출 이미지 모두 기존 유지",
    groups: [
      { name: "1인 · 혼밥 식판", flag: "edit", flagText: "문구 차주 수정" },
      { name: "관리 · 다이어트 식판" },
      { name: "모듈 식판 · 조립형" },
      { name: "한끼 · 원플레이트" },
    ],
  },
  {
    code: "A3",
    name: "다용도 실용 라이프스타일",
    products: "Plate07 · Plate05 · Oval Dome",
    role: "확장",
    note: "과일 · 보관 · 서빙처럼 기존 용도를 넓히는 확장 캠페인. 노출 이미지는 소재별 개별 등록",
    groups: [
      { name: "과일 접시 · 과일 그릇" },
      { name: "보관 · 음식 덮개" },
      { name: "서빙 볼 · 다용도 접시" },
    ],
  },
  {
    code: "B1",
    name: "홈데코 · 홈카페 리빙",
    products: "Oval Dome 단독",
    role: "운영",
    note: "Plate05를 빼고 Oval Dome 단독으로 정리. 썸네일 · 노출 이미지 기존 유지",
    groups: [
      { name: "디자인 그릇 · 감성 식기", flag: "warn", flagText: "제외 해제 선행" },
      { name: "디저트 접시 · 디저트 그릇", flag: "warn", flagText: "제외 해제 선행" },
      { name: "오발 형태 · 오벌 그릇" },
      { name: "홈카페 · 케이크 접시" },
    ],
  },
  {
    code: "B2",
    name: "기프트 (집들이 · 신혼부부 · 명절 등)",
    products: "Plate07 · Plate05 · Oval Dome",
    role: "탐색",
    note: "선물 수요에 맞는 제품을 관찰하는 탐색 캠페인. 노출 이미지는 소재별 개별 등록",
    groups: [{ name: "그릇 선물 · 접시 선물세트" }, { name: "손님용 접시 · 손님 대접" }, { name: "집들이 선물 · 집들이 접시" }],
  },
  {
    code: "C1",
    name: "탐색 키워드 캠페인",
    products: "Plate07 · Plate05",
    role: "탐색",
    note: "네이버 검색광고에서 A3와 분리해 구분을 요청할 예정입니다. 전환 이력이 없는 키워드를 탐색하는 캠페인이라 전환보다 노출 · 클릭 반응을 먼저 봅니다",
    groups: [
      { name: "캠핑 식판 · 트레이", flag: "new", flagText: "신규 · 요청 예정" },
      { name: "혼술 · 안주 접시", flag: "new", flagText: "신규 · 요청 예정" },
    ],
  },
];

// 그룹을 구분하는 수단 (쇼핑검색은 상품 1개 = 소재 1개)
export const saLevers = [
  { element: "썸네일 · 랜딩", unit: "제품 1개", can: false, work: "제품 3컷 (별도 준비)" },
  { element: "노출용 이미지", unit: "그룹 × 제품", can: true, work: "A1·A2·B1 기존 유지 / A3·B2 21개 소재 개별 등록" },
  { element: "소재명", unit: "그룹 × 제품", can: true, work: "32개" },
  { element: "홍보문구 (그룹01)", unit: "그룹 × 제품", can: true, work: "32개" },
  { element: "홍보문구 (그룹02)", unit: "공통", can: false, work: "기존 유지" },
];
export const saLeverNote = "쇼핑검색은 스마트스토어 상품 1개가 소재 1개라서 썸네일과 랜딩은 제품당 하나로 고정됩니다. 그룹 간 차이는 소재명 · 홍보문구 · 노출용 이미지로 만듭니다.";

export const saPrinciples = [
  { title: "전환 이력 키워드를 소재명에 심기", body: "쇼핑검색은 소재명이 매칭의 핵심 소스입니다. 실제 전환이 났던 검색어를 해당 그룹 소재명 안에 그대로 넣습니다." },
  { title: "제품별 소재명을 완전히 다르게", body: "기존에는 P05와 P07이 같은 소재명(푸들 가정용 식판 식세기 전자레인지)으로 같은 검색어에 서로 입찰했습니다. 캠페인만 나누고 소재명이 같으면 중복은 그대로입니다." },
  { title: "글자 수는 20~25자", body: "기존 운영 소재명과 비슷한 길이대로 맞춥니다." },
];

export const saAssign = [
  { product: "Plate07", to: "A1 전용" },
  { product: "Plate05", to: "A2 전용" },
  { product: "Oval Dome", to: "B1 전용" },
  { product: "A3 · B2", to: "다제품 유지 (A3 확장 · B2 탐색)" },
  { product: "캠핑 · 혼술", to: "C1 탐색 키워드 캠페인 (구분 요청 예정)" },
];
export const saAssignNote = "B1에서 Plate05를 뺀 이유: Plate05 썸네일을 A2 기준(성인 한 끼·식단)으로 찍으면 B1 수요(취향·플레이팅)와 어긋나기 때문입니다. Oval Dome은 B1에서 이미 전환 3건이 있습니다.";

// 최근 현황
export const saStatus = {
  title: "최근 현황",
  lines: [
    "10/12~18 기준 쇼핑검색 데이터에는 A1~B2 신규 위계 그룹이 아직 없습니다. 지금 보이는 성과는 구 구조에서 비효율 키워드를 정비한 결과이고, 신규 위계의 효과는 오픈 이후부터 측정합니다.",
    "푸들 쪽 전달은 마쳤습니다: 소재명·홍보문구 전달 완료, 제품별 대표 썸네일(Plate07 · Plate05 · Oval Dome) 교체 완료. 신규 위계 ON 일정은 AMPM과 확인 중입니다.",
  ],
  steps: [
    { when: "이번 주", what: "이 문서 내용으로 세팅", sub: "현재 소재명 · 홍보문구 그대로 등록" },
    { when: "차주부터", what: "겹치는 문구부터 수정", sub: "그룹 간 의미가 비슷한 문구를 우선 교체해 순차 전달" },
    { when: "이후 상시", what: "성과 기반 보완", sub: "그룹별 노출 · 클릭 반응을 보고 계속 다듬음" },
  ],
};

// 네이버 예산: 현재와 중기 지향점 (푸들 내부 계획, 2026.10.27 기준)
export const saBudget = {
  title: "네이버 예산: 현재와 중기 지향점",
  now: {
    label: "현재",
    total: "총예산 100만원",
    lines: [
      { name: "애드부스트", budget: "월 60~80만원", roas: "ROAS 200%", roasVal: 200 },
      { name: "쇼핑검색", budget: "월 10만원", roas: "ROAS 300~400%", roasVal: 350 },
    ],
  },
  next: {
    label: "중기 지향점",
    total: "총예산 130만원 · ROAS 350% 이상",
    lines: [
      { name: "쇼핑검색", budget: "비중 50~70%", note: "핵심. ROAS 350% 이상을 쇼핑검색에서 만든다" },
      { name: "애드부스트", budget: "비중 조율", note: "ROAS 증액에 한계가 있어 쇼핑검색을 키우며 줄여 간다" },
      { name: "B2B 파워링크", budget: "월 30만원", note: "ROAS는 따로 보지 않고, 담당자 연결이 목적" },
    ],
    b2b: [
      { name: "B2B 1 (영양사)", budget: "15만원" },
      { name: "B2B 2 (답례품)", budget: "15만원" },
    ],
  },
  direction:
    "애드부스트는 ROAS를 더 올리는 데 한계가 있어서, 쇼핑검색을 최적화해 ROAS 350%에 도달하는 것이 목표입니다. 점차 쇼핑검색의 비중을 늘리고 싶습니다.",
  core: "핵심은 퍼널 설계를 잘해서, 네이버 전반에서 ROAS 350% 이상이 나오도록 실력으로 키우는 것입니다.",
  roasNote: "손익분기 ROAS 350%. 쇼핑검색 300~400%는 범위의 가운데로 표시했습니다.",
};

// 추가 개선이 필요한 부분
export const saImprove = [
  {
    tag: "선행 필수",
    tone: "warn",
    title: "구문 제외가 그룹을 꺼 두고 있습니다",
    body: "'디자인'과 '디저트'가 구문검색어로 제외돼 있어, B1의 '디자인그릇'·'디저트접시세트' 그룹은 소재명을 잘 써도 노출되지 않습니다. 제외 검색어는 그룹 단위로 등록되므로 기존 그룹은 유지하고 B1 두 그룹에만 해제하면 됩니다. 해제가 어려우면 핵심 검색어를 포기하고 대체 소재명으로 운영해야 합니다.",
  },
  {
    tag: "선행 필수",
    tone: "warn",
    title: "'식판' · '오발접시'는 구문 제외 금지",
    body: "'오발접시' 단독은 30일 6,364원에 전환 0이지만, 롱테일 '오발접시에그쉘'·'오발플레이돔'에서 전환 2건이 났습니다. 일치검색어 제외로만 유지합니다.",
  },
  {
    tag: "개선",
    tone: "mid",
    title: "그룹 간 비슷한 문구 정리",
    body: "A2의 '혼밥도 한 상처럼'과 '한 접시로 정돈되는 한 끼'는 같은 의미입니다(한끼는 유지, 1인은 1인 가구·혼자 식사로 차별화해 차주 교체). A1 뚜껑과 A3 보관(Plate07)도 비슷한 말이라 A1은 아이 식사, A3는 일반 음식 보관 맥락으로 거리를 벌립니다.",
  },
  {
    tag: "개선",
    tone: "mid",
    title: "제외 검색어 구조 일원화",
    body: "제외는 그룹 단위라 신규 19개 그룹에 승계되지 않습니다. 그룹별로 따로 짜면 같은 검색어가 옆 그룹으로 이동하므로, 전 그룹 공통 제외 세트 구조로 운영하길 요청합니다. 실제로 B2B에서 끊은 예산이 전환 0인 다른 그룹으로 옮겨 간 사례가 있습니다.",
  },
  {
    tag: "합의",
    tone: "mid",
    title: "확장(A3) · 탐색(B2, C1)의 판정 기준 분리",
    body: "캠핑·혼술은 A3에 넣지 않고 C1(탐색 키워드 캠페인)로 분리해 요청할 예정입니다. 전환 이력이 없는 키워드라 전환보다 노출·클릭 반응을 먼저 봅니다. 11/6 판정회의 전에 기준 합의가 필요합니다.",
  },
];

// AMPM 확인 요청 (우선순위 순)
export const saAsks: { no: number; item: string; status: string }[] = [
  { no: 1, item: "B1 '디자인' · '디저트' 그룹의 구문 제외 해제 (기존 그룹은 유지)", status: "선행 필수" },
  { no: 2, item: "'식판' · '오발접시' 구문 제외 금지, 일치검색어 제외로만 유지", status: "선행 필수" },
  { no: 3, item: "B1에서 Plate05 제외, Oval Dome 단독으로 변경", status: "요청" },
  { no: 4, item: "A3 · B2 소재별 노출용 이미지 개별 등록 (21개). A1 · A2 · B1은 기존 이미지 유지", status: "요청" },
  { no: 5, item: "캠핑 · 혼술 그룹을 A3가 아닌 C1(탐색 키워드 캠페인)로 구분 (키워드 검색량 확인 후 확정). 푸들이 곧 요청 예정", status: "요청 예정" },
  { no: 6, item: "전환 이력 키워드 6개 명시 등록: 성인모듈식판 · 오발접시에그쉘 · 오발플레이돔 · 식판전자레인지 · 식판접시 · 과일그릇", status: "요청" },
  { no: 7, item: "신규 19개 그룹에 기존 제외 세트가 등록됐는지 확인 (제외는 그룹 단위라 승계되지 않음)", status: "확인" },
  { no: 8, item: "전 그룹 공통 제외 세트 구조로 운영", status: "요청" },
  { no: 9, item: "A3(확장) · B2/C1(탐색) 판정 기준 분리 (11/6 판정회의 전 합의)", status: "협의" },
  { no: 10, item: "소재명 · 홍보문구는 우선 세팅하고, 차주부터 수정본 순차 전달", status: "안내" },
];

export const saSources = "출처: 네이버 SA 소재 세트 v2 (2026.10.15, AMPM 전달용), 네이버 SA 10월 2주차 공유 (2026.10.21). 푸들 쪽 잔여 작업: A3 · B2 노출용 이미지 21개 전달 예정, A2 1인 그룹 문구 수정본 차주 전달.";
