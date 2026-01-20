export interface 정보데이터타입 {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    content: string;
}

export const 정보데이터들: 정보데이터타입[] = [
    {
        id: 1,
        slug: "drain-maintenance-tips",
        title: "겨울철 동파 예방 및 배관 관리 꿀팁",
        category: "생활정보",
        date: "2023.11.01",
        content: "겨울철 기온이 급격히 떨어지면 배관 동파 사고가 빈번하게 발생합니다. 이를 예방하기 위해서는... (더미 데이터: 수도꼭지를 약하게 틀어두거나 보온재를 사용하는 것이 좋습니다.)",
    },
    {
        id: 2,
        slug: "kitchen-sink-clog-prevention",
        title: "주방 싱크대 막힘, 기름때가 주범?",
        category: "배관지식",
        date: "2023.11.15",
        content: "싱크대가 막히는 가장 큰 원인은 바로 기름때입니다. 요리 후 남은 기름을 하수구에 바로 버리지 말고 키친타월로 닦아내는 습관만 들여도 막힘을 크게 줄일 수 있습니다.",
    },
    {
        id: 3,
        slug: "bathroom-hair-clog",
        title: "욕실 배수구, 머리카락 청소의 중요성",
        category: "청소가이드",
        date: "2023.12.01",
        content: "욕실 배수구 막힘의 1등 공신은 머리카락입니다. 다이소에서 파는 거름망이나 배수구 스티커를 활용하면 청소가 훨씬 쉬워집니다.",
    },
    {
        id: 4,
        slug: "emergency-plumbing-contacts",
        title: "배관 긴급 상황 발생 시 대처 요령",
        category: "긴급대처",
        date: "2024.01.10",
        content: "갑자기 물이 역류하거나 터졌을 때 당황하지 마세요. 우선 수도 계량기 밸브를 잠그고 전문 업체에 연락하는 것이 피해를 최소화하는 방법입니다.",
    }
];
