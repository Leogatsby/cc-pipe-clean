import { RegionData } from '@/app/[region]/_RegionData/regions'; // 데이터 위치 변경됨
import './Footer.scss';

interface FooterProps {
    regionData?: {
        name: string;
        keyword?: string; // 키워드 추가
    };
}

export default function Footer({ regionData }: FooterProps) {
    const regionName = regionData?.name || '서울/경기';
    // 키워드가 있으면 그것을 쓰고, 없으면 기존 방식(이름 + 점) 사용
    const displayKeyword = regionData?.keyword || `${regionName}점`;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footerContent">
                    <div className="footerLogo">
                        청정배관 <span style={{ fontSize: '0.8em', opacity: 0.8 }}>- {displayKeyword}</span>
                    </div>
                    <div className="copyright">© 2024 Clean Pipe Service {regionName}. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
