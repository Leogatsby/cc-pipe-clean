import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/1.Header/Header';
import Footer from '@/components/6.Footer/Footer';
import { 리뷰데이터들 } from '../_data/reviews-data';
import './page.scss';

// Generate static params if needed, but for now dynamic
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop(); // Get ID from end
    const review = 리뷰데이터들.find((r) => r.id === Number(id));

    if (!review) {
        return {
            title: 'Review Not Found',
        };
    }

    return {
        title: `${review.name}님의 후기 - 청정배관`,
        description: review.content.substring(0, 100),
    };
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop();
    const review = 리뷰데이터들.find((r) => r.id === Number(id));

    if (!review) {
        return notFound();
    }

    return (
        <main>
            <Header />
            <section className="reviewDetailSection">
                <div className="container">
                    <div className="headerContainer">
                        <Link href="/reviews" className="backButton">
                            <span className="material-icons-round" style={{ fontSize: '20px' }}>arrow_back</span>
                            목록으로 돌아가기
                        </Link>
                        <h2 className="title">{review.name}님의 소중한 후기</h2>
                        <p className="subtitle">{review.location} | {review.date}</p>
                    </div>

                    <article className="detailCard">
                        <div className="reviewHeader">
                            <div className="stars">
                                {"★".repeat(review.rating)}
                            </div>
                        </div>
                        <p className="content">
                            "{review.content}"
                        </p>
                        <div className="reviewer">
                            <div className="avatar">
                                {review.name[0]}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
}
