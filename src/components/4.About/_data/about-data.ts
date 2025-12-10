export interface 체크리스트데이터타입 {
    icon: string;
    title: string;
    desc: string;
}

export const 체크리스트데이터들: 체크리스트데이터타입[] = [
    { icon: 'verified_user', title: '책임 시공 보증', desc: '문제 재발 시 1년 무상 A/S 보장' },
    { icon: 'savings', title: '투명한 정찰제', desc: '추가 비용 없는 정직한 견적' },
    { icon: 'engineering', title: '최첨단 장비 보유', desc: '배관 내시경, 고압 세척기 완비' }
];
