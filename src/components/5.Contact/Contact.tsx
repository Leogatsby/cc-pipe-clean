import Link from 'next/link';
import './Contact.scss';

export default function Contact() {
    return (
        <section id="contact" className="cta">
            <div className="container">
                <div className="ctaBox">
                    <h2>배관 문제로 고민 중이신가요?</h2>
                    <p>지금 바로 전화주시면 친절하게 상담해드립니다.<br />365일 24시간 연중무휴 출동 대기 중!</p>
                    <Link href="tel:010-1234-5678" className="btnWhite">
                        <span className="material-icons-round" style={{ verticalAlign: 'middle', marginRight: '8px' }}>call</span>
                        010-1234-5678 문의하기
                    </Link>
                </div>
            </div>
        </section>
    );
}
