import Link from 'next/link';
import Header from '@/components/Main/1.Header/Header';
import Footer from '@/components/Main/6.Footer/Footer';
import { 정보데이터들, 정보데이터타입 } from './_data/info-data';
import './page.scss';

export const metadata = {
    title: '정보 게시판 - 청정배관',
    description: '배관 관리 꿀팁과 유용한 정보들을 공유합니다.',
};

export default function InfoPage() {
    return (
        <main>
            <Header />
            <section className="reviewsSection">
                <div className="container">
                    <div className="headerContainer">
                        <Link href="/" className="backButton">
                            <span className="material-icons-round" style={{ fontSize: '20px' }}>arrow_back</span>
                            홈으로 돌아가기
                        </Link>
                        <h2 className="title">유용한 정보</h2>
                        <p className="subtitle">알아두면 쓸모있는 배관 상식과 팁을 공유합니다.</p>
                    </div>

                    <div className="reviewCardContainer_grid">
                        {정보데이터들.map((정보데이터각) => (
                            <InfoCard key={정보데이터각.id} 정보데이터추상={정보데이터각} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

function InfoCard({ 정보데이터추상 }: { 정보데이터추상: 정보데이터타입 }) {
    return (
        <Link href={`/Info/${정보데이터추상.slug}-${정보데이터추상.id}`} className="reviewCardLink">
            <article className="reviewCard">
                <div className="reviewHeader">
                    <div className="stars">
                        <span className="categoryBadge" style={{
                            backgroundColor: '#e3f2fd',
                            color: '#1565c0',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            {정보데이터추상.category}
                        </span>
                    </div>
                    <span className="date">{정보데이터추상.date}</span>
                </div>
                <h3 className="content" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{정보데이터추상.title}</h3>
                <p className="content" style={{ fontSize: '0.95rem', color: '#666' }}>{정보데이터추상.content.substring(0, 60)}...</p>
                <div className="reviewer">
                    <div className="avatar" style={{ backgroundColor: '#1565c0' }}>
                        i
                    </div>
                    <div>
                        <div className="name">관리자</div>
                        <div className="location">청정배관</div>
                    </div>
                </div>
            </article>
        </Link>
    );
}