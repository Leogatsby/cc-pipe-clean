import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Main/1.Header/Header';
import Footer from '@/components/Main/6.Footer/Footer';
import { 정보데이터들 } from '../_data/info-data';
import './page.scss';

// Generate static params if needed, but for now dynamic
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop(); // Get ID from end
    const info = 정보데이터들.find((r) => r.id === Number(id));

    if (!info) {
        return {
            title: 'Info Not Found',
        };
    }

    return {
        title: `${info.title} - 청정배관 정보`,
        description: info.content.substring(0, 100),
    };
}

export default async function InfoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.split('-').pop();
    const info = 정보데이터들.find((r) => r.id === Number(id));

    if (!info) {
        return notFound();
    }

    return (
        <main>
            <Header />
            <section className="reviewDetailSection">
                <div className="container">
                    <div className="headerContainer">
                        <Link href="/Info" className="backButton">
                            <span className="material-icons-round" style={{ fontSize: '20px' }}>arrow_back</span>
                            목록으로 돌아가기
                        </Link>
                        <h2 className="title">{info.title}</h2>
                        <p className="subtitle">
                            <span className="categoryBadge" style={{
                                backgroundColor: '#e3f2fd',
                                color: '#1565c0',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                marginRight: '8px',
                                verticalAlign: 'middle',
                                fontWeight: 'bold'
                            }}>
                                {info.category}
                            </span>
                            {info.date}
                        </p>
                    </div>

                    <article className="detailCard">
                        {/*  <div className="reviewHeader">
                             
                        </div> */}
                        <p className="content" style={{ lineHeight: '1.8', minHeight: '200px' }}>
                            "{info.content}"
                        </p>
                        <div className="reviewer">
                            <div className="avatar" style={{ backgroundColor: '#1565c0' }}>
                                i
                            </div>
                            <div>
                                <div className="name">청정배관</div>
                                <div className="location">공식 블로그</div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    );
}
