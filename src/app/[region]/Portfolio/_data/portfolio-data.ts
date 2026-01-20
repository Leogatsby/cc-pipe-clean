export interface 포트폴리오데이터타입 {
    id: number;
    slug: string;
    title: string;
    location: string;
    date: string;
    description: string;
    imageUrl?: string; // 나중에 이미지 추가 가능
}

export const 포트폴리오데이터들: 포트폴리오데이터타입[] = [
    {
        id: 1,
        slug: "residential-complex-pipe-cleaning",
        title: "대단지 아파트 배관 종합 세척",
        location: "서울 강남구 압구정동",
        date: "2023.11.10",
        description: "30년 된 아파트 단지의 노후 배관 전체 세척 프로젝트를 성공적으로 완료했습니다. 최신 고압 세척 장비를 투입하여 배관 수명을 연장시켰습니다.",
    },
    {
        id: 2,
        slug: "restaurant-franchise-maintenance",
        title: "프랜차이즈 식당 주방 배관 관리",
        location: "경기 성남시 판교",
        date: "2023.12.01",
        description: "대형 프랜차이즈 식당의 주방 배관 유지보수 계약을 체결하고, 정기적인 기름때 제거 작업을 진행하여 막힘 사고를 사전에 예방하고 있습니다.",
    },
    {
        id: 3,
        slug: "commercial-building-emergency-repair",
        title: "상업 빌딩 긴급 하수구 뚫기",
        location: "서울 영등포구 여의도",
        date: "2023.12.15",
        description: "여의도 오피스 빌딩 화장실 전체가 역류하는 긴급 상황에서, 내시경 카메라로 원인을 정확히 파악하고 1시간 만에 통수 작업을 완료했습니다.",
    },
    {
        id: 4,
        slug: "school-cafeteria-drain-cleaning",
        title: "초등학교 급식실 배수구 청소",
        location: "서울 노원구",
        date: "2024.01.05",
        description: "겨울방학 기간을 이용하여 초등학교 급식실의 메인 배수관을 대대적으로 청소했습니다. 위생적인 급식 환경 조성을 위해 친환경 약품을 사용했습니다.",
    }
];
