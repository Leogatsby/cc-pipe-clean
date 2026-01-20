import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Main/1.Header/Header';
import Footer from '@/components/Main/6.Footer/Footer';
import { 포트폴리오데이터들 } from '../_data/portfolio-data';
import './page.scss';

// Generate static params if needed, but for now dynamic
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop(); // Get ID from end
    const portfolio = 포트폴리오데이터들.find((r) => r.id === Number(id));

    if (!portfolio) {
        return {
            title: 'Portfolio Not Found',
        };
    }

    return {
        title: `${portfolio.title} - 청정배관 포트폴리오`,
        description: portfolio.description.substring(0, 100),
    };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop();
    const portfolio = 포트폴리오데이터들.find((r) => r.id === Number(id));

    if (!portfolio) {
        return notFound();
    }

    return (
        <main>
            <Header />
            <section className="reviewDetailSection">
                <div className="container">
                    <div className="headerContainer">
                        <Link href="/Portfolio" className="backButton">
                            <span className="material-icons-round" style={{ fontSize: '20px' }}>arrow_back</span>
                            목록으로 돌아가기
                        </Link>
                        <h2 className="title">{portfolio.title}</h2>
                        <p className="subtitle">{portfolio.location} | {portfolio.date}</p>
                    </div>

                    <article className="detailCard">
                        <div className="reviewHeader">
                            <div className="stars">
                                <span className="material-icons-round" style={{ color: '#4a90e2', fontSize: '24px' }}>work</span>
                                <span style={{ marginLeft: '8px', fontWeight: 'bold', color: '#4a90e2' }}>시공 완료</span>
                            </div>
                        </div>
                        <p className="content">
                            "{portfolio.description}"
                        </p>
                        <div className="reviewer">
                            <div className="avatar" style={{ backgroundColor: '#4a90e2' }}>
                                P
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
}
