export interface RegionData {
    name: string;        // 예: 관악구, 00동
    title: string;       // 헤더/메타타이틀용 (예: 관악구 변기막힘)
    description: string; // 메타설명용
    keyword?: string;    // Footer 및 SEO 강조용 키워드 (예: 관악구 변기/하수구 막힘)
    isDefault?: boolean; // 기본값 여부
}

export const regions: Record<string, RegionData> = {
    'home': { // 기본 홈페이지 (localhost:3000)
        name: '서울/경기',
        title: '청정배관 - 전문 하수구 뚫기 서비스',
        description: '관악구 변기막힘 , 하수구 막힘 , 하수구 뚫기 ,확실하고 깨끗한 하수구 뚫기, 배관 청소 전문 서비스. 24시간 상담 가능.',
        keyword: '전문 배관설비', // 기본값
        isDefault: true,
    },
    'gwanak': {
        name: '관악구',
        title: '관악구 변기막힘 - 청정배관',
        description: '관악구 전지역 30분내 출동! 변기 역류, 하수구 막힘 24시간 긴급 출동 서비스.',
        keyword: '관악구 변기막힘/하수구 뚫음',
    },
    'gangnam': {
        name: '강남구',
        title: '강남구 하수구막힘 - 청정배관',
        description: '강남구 식당, 상가, 가정집 하수구 고압세척 전문. 확실하게 뚫어드립니다.',
        keyword: '강남구 변기막힘 하수구 막힘 고압세척',
    },
    'gangseo': {
        name: '강서구',
        title: '강서구 변기/하수구 - 청정배관',
        description: '강서구 최저가 변기 뚫는 업체. 마곡, 발산, 화곡 전지역 빠른 방문.',
        keyword: '강서구 변기/싱크대 막힘 해결',
    }
};
