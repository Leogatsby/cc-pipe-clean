import Link from 'next/link';
import Header from '@/components/Main/1.Header/Header';
import Footer from '@/components/Main/6.Footer/Footer';
import { 포트폴리오데이터들, 포트폴리오데이터타입 } from './_data/portfolio-data';
import './page.scss';

export const metadata = {
    title: '포트폴리오 - 청정배관',
    description: '청정배관의 다양한 시공 사례와 포트폴리오를 확인하세요.',
};

export default function PortfolioPage() {
    return (
        <main>
            <Header />
            <section className="reviewsSection"> {/* 스타일 재사용을 위해 클래스명 유지 혹은 portfolioSection으로 변경 후 scss 수정 필요, 일단 유지 */}
                <div className="container">
                    <div className="headerContainer">
                        <Link href="/" className="backButton">
                            <span className="material-icons-round" style={{ fontSize: '20px' }}>arrow_back</span>
                            홈으로 돌아가기
                        </Link>
                        <h2 className="title">포트폴리오</h2>
                        <p className="subtitle">청정배관의 전문적인 시공 사례들을 소개합니다.</p>
                    </div>

                    <div className="reviewCardContainer_grid">
                        {포트폴리오데이터들.map((포트폴리오데이터각) => (
                            <PortfolioCard key={포트폴리오데이터각.id} 포트폴리오데이터추상={포트폴리오데이터각} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

function PortfolioCard({ 포트폴리오데이터추상 }: { 포트폴리오데이터추상: 포트폴리오데이터타입 }) {
    return (
        <Link href={`/Portfolio/${포트폴리오데이터추상.slug}-${포트폴리오데이터추상.id}`} className="reviewCardLink">
            <article className="reviewCard">
                <div className="reviewHeader">
                    <div className="stars">
                        <span className="material-icons-round" style={{ color: '#4a90e2' }}>work</span>
                    </div>
                    <span className="date">{포트폴리오데이터추상.date}</span>
                </div>
                <h3 className="content" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{포트폴리오데이터추상.title}</h3>
                <p className="content" style={{ fontSize: '0.95rem', color: '#666' }}>{포트폴리오데이터추상.description.substring(0, 60)}...</p>
                <div className="reviewer">
                    <div className="avatar" style={{ backgroundColor: '#4a90e2' }}>
                        P
                    </div>
                    <div>
                        <div className="name">{포트폴리오데이터추상.location}</div>
                        <div className="location">시공 완료</div>
                    </div>
                </div>
            </article>
        </Link>
    );
}