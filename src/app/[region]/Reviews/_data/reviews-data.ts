export interface 리뷰데이터타입 {
    id: number;
    slug: string;
    name: string;
    location: string;
    date: string;
    content: string;
    rating: number;
}

export const 리뷰데이터들: 리뷰데이터타입[] = [
    {
        id: 1,
        slug: "gangnam-gu-sewer-clogged",
        name: "김철수",
        location: "서울 강남구",
        date: "2023.10.15",
        content: "새벽에 갑자기 하수구가 막혀서 당황했는데, 24시간 상담해주시고 바로 와주셔서 정말 다행이었습니다. 작업도 깔끔하고 친절하셨어요!",
        rating: 5,
    },
    {
        id: 2,
        slug: "seongnam-drain-cleaning",
        name: "이영희",
        location: "경기 성남시",
        date: "2023.11.02",
        content: "다른 업체에서 못 뚫고 간 걸 여기서 해결해주셨습니다. 장비가 확실히 다른 것 같아요. 속이 다 시원합니다. 강력 추천해요.",
        rating: 5,
    },
    {
        id: 3,
        slug: "songpa-gu-sink-smell",
        name: "박민준",
        location: "서울 송파구",
        date: "2023.11.20",
        content: "싱크대 냄새 때문에 스트레스 받았는데 배관 청소 한번으로 싹 사라졌네요. 설명도 잘 해주시고 관리법도 알려주셔서 좋았습니다.",
        rating: 5,
    },
    {
        id: 4,
        slug: "yongin-si-plumbing-repair",
        name: "정수진",
        location: "경기 용인시",
        date: "2023.12.05",
        content: "가격도 합리적이고 무엇보다 기사님이 너무 친절하십니다. 뒷정리까지 완벽하게 해주시고 가셨어요. 다음에 또 이용할게요.",
        rating: 4,
    },
    {
        id: 5,
        slug: "mapo-gu-restaurant-drain",
        name: "최호성",
        location: "서울 마포구",
        date: "2023.12.08",
        content: "식당 주방 하수구가 자주 막혀서 고생했는데 정기 관리 받고나서는 문제 없습니다. 사업하시는 분들께 강추합니다.",
        rating: 5,
    },
    {
        id: 6,
        slug: "seocho-gu-emergency-plumbing",
        name: "강지현",
        location: "서울 서초구",
        date: "2023.12.10",
        content: "빠른 출동 감사합니다. 역시 전문가의 손길은 다르네요. 비용 아깝지 않을 만큼 확실하게 처리해주셨습니다.",
        rating: 5,
    }
];
