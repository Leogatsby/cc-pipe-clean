import Link from 'next/link';
import Header from '@/components/Main/1.Header/Header';
import Footer from '@/components/Main/6.Footer/Footer';
import { 리뷰데이터들, 리뷰데이터타입 } from './_data/reviews-data';
import './page.scss';

export const metadata = {
    title: '고객 후기 - 청정배관',
    description: '청정배관 서비스를 이용하신 고객님들의 생생한 후기를 확인하세요.',
};

export default function ReviewsPage() {
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
                        <h2 className="title">고객 후기</h2>
                        <p className="subtitle">청정배관을 이용해주신 고객님들의 소중한 이야기입니다.</p>
                    </div>

                    <div className="reviewCardContainer_grid">
                        {리뷰데이터들.map((리뷰데이터각) => (
                            <ReviewCard key={리뷰데이터각.id} 리뷰데이터추상={리뷰데이터각} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

// 별도 파일이 아닌 내부 컴포넌트로 분리
function ReviewCard({ 리뷰데이터추상 }: { 리뷰데이터추상: 리뷰데이터타입 }) {
    return (
        <Link href={`/Reviews/${리뷰데이터추상.slug}-${리뷰데이터추상.id}`} className="reviewCardLink">
            <article className="reviewCard">
                <div className="reviewHeader">
                    <div className="stars">
                        {"★".repeat(리뷰데이터추상.rating)}
                    </div>
                    <span className="date">{리뷰데이터추상.date}</span>
                </div>
                <p className="content">{리뷰데이터추상.content}</p>
                <div className="reviewer">
                    <div className="avatar">
                        {리뷰데이터추상.name[0]}
                    </div>
                    <div>
                        <div className="name">{리뷰데이터추상.name}</div>
                        <div className="location">{리뷰데이터추상.location}</div>
                    </div>
                </div>
            </article>
        </Link>
    );
}