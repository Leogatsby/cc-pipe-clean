import Link from 'next/link';
import './Hero.scss';

interface HeroProps {
    regionData?: {
        name: string;
        title: string;
        description: string;
    };
}

export default function Hero({ regionData }: HeroProps) {
    // regionData가 없으면 기본값 사용
    const displayTitle = regionData?.title || "막힌 배관, 냄새나는 하수구";
    const displayName = regionData?.name || "서울/경기";

    return (
        <section className="hero">
            <div className="container heroContent">
                <div className="heroText">
                    <span className="badge">24시간 긴급출동</span>
                    <h2 className="title">
                        {/* {displayName} 대표 배관 전문 업체<br /> */}{/* 디자인에 따라 수정 가능 */}
                        {displayTitle}<br />
                        <span style={{ color: 'var(--컬러-메인)' }}>청정배관</span>이 해결해드립니다
                    </h2>
                    <p className="description">
                        최신 장비와 숙련된 전문가가 여러분의 고민을<br />
                        시원하게 뚫어드립니다. 지금 바로 문의하세요!
                    </p>
                    <div className="heroActions">
                        <Link href="#contact" style={{
                            padding: '16px 32px',
                            background: 'var(--컬러-메인)',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            fontSize: '18px'
                        }}>
                            무료 견적 받기
                        </Link>
                    </div>
                </div>
                <div className="heroImageWrapper">
                    <img
                        src="/img/hero.png"
                        alt="배관 전문가 서비스"
                        className="heroImg"
                    />
                    <div className="floatingCard card1">
                        <span className="material-icons-round">schedule</span>
                        <div>
                            <p>30분 내</p>
                            <p>빠른 방문</p>
                        </div>
                    </div>
                    <div className="floatingCard card2">
                        <span className="material-icons-round">verified</span>
                        <div>
                            <p>100%</p>
                            <p>해결 보장</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
