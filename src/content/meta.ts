// META 운영 구조. 출처: 노션 [AMPM X Foodle] 페이지 (광고시트 · 예산분배 · 소재 이름 정의 · 주차별 DB · 3월 운영목적)
// 규칙: 이름·숫자는 노션에 적힌 값만 쓴다. "관찰"로 표시한 항목은 노션 DB를 집계한 것이다.

export const NOTION_URL = "https://lake-search-e97.notion.site/AMPM-X-Foodle-31261d4502798051a5e4ca400bd68643";

export const metaIntro = {
  eyebrow: "META · 노션 운영 구조",
  title: "메타는 노션 문서로 운영합니다. 매주 필요한 부분을 링크로 지정해 전달드립니다.",
  lede: "메타는 아직 A1~B2 단위로 세팅이 나뉘어 있지 않고, 목적 × 랜딩 × 타겟 스타일 × 제품으로 소재를 관리합니다. 아래는 그 관통 프레임과 현재 구조, 앞으로 사람 기준으로 정렬해야 할 지점입니다.",
  linkLabel: "노션 원문 열기",
  linkNote: "광고시트(예산 분배·소재 이름 규칙)와 주차별 소재 DB가 들어 있습니다. 매주 이 문서에서 확인이 필요한 부분을 지정해 링크로 보내드립니다.",
};

// 소재 1개를 정의하는 5개 축
export const metaAxes = [
  { axis: "목적", values: "전환 · 트래픽" },
  { axis: "랜딩", values: "스마트스토어 · 자사몰 · 프로필" },
  { axis: "타겟 스타일", values: "A 기능형 · B 브랜드형" },
  { axis: "제품", values: "Oval Dome · Plate07 · Plate05" },
  { axis: "형식", values: "릴스 · 캐러셀 · 단일이미지" },
];
export const metaAxesNote = "이 다섯 칸이 모두 정해지면 소재 1개(광고 1개)가 됩니다. 소재 이름에도 이 순서가 그대로 들어갑니다.";

// 노션의 A/B 구분과 현재 A1~B2의 관계
export const metaAbMap = [
  {
    notion: "A 타겟 · 기능형",
    mind: "실용성 · 안정성 중심 (약간의 페인킬러형)",
    msg: "안전한 소재, 반찬 분리, 가볍고 깨지지 않음처럼 기능·안전 메시지가 반드시 들어갑니다.",
    now: ["A1", "A2", "A3"],
  },
  {
    notion: "B 타겟 · 브랜드형",
    mind: "심미성 · 디자인 중시 (비타민형)",
    msg: "집들이 선물, 테이블 오브제, 감성 비주얼처럼 분위기가 먼저이고 기능 설명은 과하게 강조하지 않습니다.",
    now: ["B1", "B2"],
  },
];
export const metaAbNote = "노션의 이전 2분할(A/B)이 지금은 5개 타겟(A1~B2)으로 세분화되는 중입니다. 메타 광고세트 이름도 아직 '타겟_A', '타겟_B' 2개 기준입니다.";

// 소재 이름 규칙: [캠페인/목적]_[소재형식]_[제품종류]_[소재컨셉트]_[버전/번호]
export const metaNaming = {
  pattern: "[캠페인/목적]_[소재형식]_[제품종류]_[소재컨셉트]_[버전/번호]",
  example: "WC_1_돔사용법ver.3",
  purpose: [
    { code: "NC", label: "네이버(스마트스토어) 전환" },
    { code: "WC", label: "자사몰 전환" },
    { code: "WT", label: "자사몰 트래픽" },
    { code: "PT", label: "프로필 트래픽" },
  ],
  format: [
    { code: "1", label: "릴스" },
    { code: "2", label: "캐러셀" },
    { code: "3", label: "단일이미지" },
  ],
  marks: [
    { icon: "🔴", label: "효율 낮음, 종료" },
    { icon: "🟡", label: "신규 소재" },
    { icon: "⚫", label: "자사몰 캠페인" },
    { icon: "🟢", label: "스마트스토어 전환" },
  ],
};

// 캠페인 구조 (노션 '현재 광고 게재 소재' 표 + 10/1 예산분배)
export const metaCampaigns = [
  { code: "NC", purpose: "스마트스토어 전환", name: "26.02_스마트스토어_전환", adset: "260323_타겟_A", budget: 35, note: "기존 ROAS 방어 역할", tone: "mid" },
  { code: "WC", purpose: "자사몰 전환", name: "26.08_자사몰_전환", adset: "26.09_자사몰 전환_추가소재", budget: 50, note: "핵심 집중. 픽셀 구매 데이터를 모아 머신러닝 최적화를 앞당김", tone: "key" },
  { code: "WT", purpose: "자사몰 트래픽", name: "26.08_자사몰_트래픽", adset: "26.08_자사몰", budget: 30, note: "방문 유입. 구매는 집계하지 않음", tone: "mid" },
  { code: "PT", purpose: "프로필 트래픽", name: "26.03_프로필_트래픽", adset: "260323_타겟_B", budget: 25, note: "팔로우 · 브랜드 방문. 구매는 집계하지 않음", tone: "mid" },
];
export const metaBudget = {
  unit: "월 예산, 만원",
  before: [
    { code: "WC", v: 60 },
    { code: "WT", v: 30 },
    { code: "PT", v: 25 },
    { code: "NC", v: 25 },
  ],
  after: [
    { code: "WC", v: 50 },
    { code: "WT", v: 30 },
    { code: "PT", v: 25 },
    { code: "NC", v: 35 },
  ],
  note: "스마트스토어 전환 예산을 10만원 늘리고 자사몰 전환에서 옮겼습니다. 합계는 같습니다. 소재 하나에 하루 1만원 정도가 돌도록 소재 수를 제한하는 것이 분배의 기준입니다.",
};

// 소재 운영 원칙
export const metaRules = [
  { title: "캠페인당 소재는 최대 3개", body: "소재 하나에 하루 1만원쯤 확보되어야 학습이 됩니다. 자사몰 전환(일 약 1.7만원)은 2개, 자사몰 트래픽(일 약 1만원)은 1개가 현실적입니다." },
  { title: "검증된 소재와 신규 소재를 함께", body: "신규 소재의 전환율은 아직 검증 전이므로, 고효율 기존 소재를 같이 쓰고 신규 소재는 3개를 넘기지 않습니다." },
  { title: "소재를 수정하면 학습이 초기화", body: "랜딩 URL이나 캡션 같은 주요 데이터를 바꾸면 기존 댓글과 반응이 초기화되고 신규 학습으로 들어갑니다. 고효율 소재는 그대로 둡니다." },
  { title: "검증된 소재는 전환 캠페인에 2종", body: "전환율이 검증된 소재는 전환 캠페인에 2종 모두 배치합니다. 소재의 트래픽 효율만 빠르게 보려는 경우에는 트래픽·전환에 동일하게 세팅합니다." },
];

// 매주 운영 사이클
export const metaCycle = [
  { step: "주차별 소재 DB 기록", sub: "콘텐츠 이름 · 제품 · 스타일(A/B) · 유형 · 랜딩 · 광고세팅일 · 진행여부 · 정리" },
  { step: "소재 상태 갱신", sub: "신규진행 → 진행 중 → 종료. 종료는 사유를 '정리'에 남김" },
  { step: "노션 링크로 확인 요청", sub: "그 주에 필요한 부분만 지정해 AMPM에 전달" },
  { step: "리포트와 대조", sub: "AMPM 주간 리포트와 원데이터를 맞춰 다음 주에 반영" },
];
export const metaEndReasons = ["효율 정체", "소재 피로도 증가", "프로모션 종료"];

// 최근 주 (10/19~10/25) 소재 현황. 노션 DB 기준
export const metaWeek = {
  label: "10/19~10/25 소재 현황 (노션 DB)",
  items: [
    { name: "NC_1_아이밥", camp: "NC", style: "A", product: "Plate07", type: "릴스", state: "진행 중" },
    { name: "NC_1_돔사용법 ver.2", camp: "NC", style: "A", product: "오벌돔", type: "릴스", state: "진행 중" },
    { name: "NC_1_돔사용법 ver.3", camp: "NC", style: "A", product: "오벌돔", type: "릴스", state: "진행 중" },
    { name: "WC_1_아이밥", camp: "WC", style: "A", product: "Plate07", type: "릴스", state: "진행 중" },
    { name: "WC_2_리얼리뷰식단", camp: "WC", style: "A", product: "Plate05", type: "게시물", state: "진행 중" },
    { name: "WC_1_돔사용법 ver.3", camp: "WC", style: "A", product: "오벌돔", type: "릴스", state: "종료" },
    { name: "WT_2_오벌돔전자레인지", camp: "WT", style: "A", product: "오벌돔", type: "게시물", state: "진행 중" },
    { name: "PT_2_오벌돔전자레인지", camp: "PT", style: "A", product: "오벌돔", type: "게시물", state: "신규진행", note: "자사몰 트래픽에서 프로필 트래픽으로 이관" },
    { name: "PT_1_서포터즈", camp: "PT", style: "B", product: "기타", type: "릴스", state: "진행 중" },
  ],
};

// 관찰: 사람 기준 정렬이 필요한 지점 (위 DB를 집계)
export const metaObserve = {
  title: "관찰: 소재가 아직 사람(A1~B2)이 아니라 A/B 두 덩어리로만 나뉘어 있습니다",
  facts: [
    { big: "5개 중 5개", label: "구매 전환 소재(NC·WC)는 모두 A 타겟 · 기능형" },
    { big: "A 7 · B 1", label: "진행 중 소재의 스타일 분포 (B는 서포터즈 프로필 트래픽 1개)" },
    { big: "Plate05 1개", label: "A2(웰니스)의 주력 제품 소재는 리얼리뷰식단 1개뿐" },
  ],
  body: [
    "구매 전환 소재가 모두 기능형이고 제품은 오벌돔 소재가 가장 많지만, 오벌돔의 주력 타겟에는 B1·B2(취향·선물)도 들어 있습니다. 제품 배치와 타겟 메시지가 아직 어긋나 있습니다.",
    "광고세트도 '타겟_A / 타겟_B' 2개라서 A1·A2·A3·B1·B2별 노출·구매시간대·성과를 비교할 기준이 없습니다. 길(고객 → 소재 → 랜딩 → 채널)을 A1~B2 단위로 정렬하는 것이 다음 과제입니다.",
  ],
};

export const metaSources = "출처: 노션 [AMPM X Foodle] (예산분배 261001 update, 소재 이름 정의, 10월 1~4주차 DB, 3월 운영목적). 소재별 성과는 위 '퍼포먼스 지표' 섹션과 AMPM 주간 리포트를 참고해 주세요.";
