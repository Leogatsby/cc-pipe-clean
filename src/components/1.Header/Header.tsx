import Link from 'next/link';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    <span className="material-icons-round logo-icon">plumbing</span>
                    <h1>청정배관</h1>
                </Link>
                <nav className="nav">
                    {/* <Link href="/">홈</Link> */}
                    <Link href="/reviews">고객후기</Link>
                    <Link href="/#contact">문의하기</Link>
                </nav>
            </div>
        </header>
    );
}
