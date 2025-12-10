export interface 서비스데이터타입 {
    icon: string;
    title: string;
    desc: string;
}

export const 서비스데이터들: 서비스데이터타입[] = [
    { icon: "plumbing", title: "배관 고압세척", desc: "강력한 고압수로 배관 내부의 찌든 때를 완벽하게 제거합니다." },
    { icon: "search", title: "내시경 정밀탐지", desc: "최신 내시경 장비로 문제의 원인을 정확하게 파악합니다." },
    { icon: "build", title: "배관 수리/교체", desc: "노후된 배관을 신속하고 안전하게 수리 및 교체해드립니다." },
    { icon: "opacity", title: "누수 탐지", desc: "눈에 보이지 않는 미세한 누수까지 정밀하게 찾아냅니다." },
    { icon: "kitchen", title: "싱크대 막힘", desc: "음식물 찌꺼기와 기름으로 막힌 싱크대를 시원하게 뚫어드립니다." },
    { icon: "wc", title: "변기/하수구 막힘", desc: "자주 막히는 화장실 변기와 바닥 하수구를 해결해드립니다." },
];
