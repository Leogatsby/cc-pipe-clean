'use client'; // 클라이언트 컴포넌트로 전환 (useParams 사용 위해)

import Link from 'next/link';
import { useParams } from 'next/navigation'; // useParams 훅 임포트
import './Header.scss';

export default function Header() {
    const params = useParams();
    // params.region이 있으면 사용하고, 없으면(혹은 배열이면) 'home'으로 안전하게 처리
    const regionParam = params?.region as string;
    const isHome = !regionParam || regionParam === 'home';
    const regionPrefix = isHome ? '' : `/${regionParam}`; // home이면 빈 문자열, 아니면 /gwanak

    return (
        <header className="header">
            <div className="container">
                <Link href={isHome ? '/' : `/${regionParam}`} className="logo">
                    <span className="material-icons-round logo-icon">plumbing</span>
                    <h1>청정배관</h1>
                </Link>
                <nav className="nav">
                    {/* <Link href="/">홈</Link> */}
                    <Link href={`${regionPrefix}/Reviews`}>고객후기</Link>
                    <Link href={`${regionPrefix}/Portfolio`}>포트폴리오</Link>
                    <Link href={`${regionPrefix}/Info`}>정보게시판</Link>
                    <Link href={`${regionPrefix}/#contact`}>문의하기</Link>
                </nav>
            </div>
        </header>
    );
}
