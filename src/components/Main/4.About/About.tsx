import './About.scss';

import { 체크리스트데이터들, 체크리스트데이터타입 } from './_data/about-data';

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="aboutGrid">
                    <div className="aboutImage"></div>
                    <div>
                        <span className="badge">든든한 파트너</span>
                        <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>
                            <span className="textPrimary">10년 경력 베테랑</span>이<br />
                            직접 방문합니다
                        </h2>
                        <p style={{ fontSize: '18px', color: 'var(--텍스트-컬러-보조)', lineHeight: '1.6' }}>
                            저희는 단순한 배관 업체가 아닙니다. 고객님의 불편함을 내 일처럼 생각하며,
                            가장 빠르고 정확한 해결책을 제시해드립니다.
                        </p>
                        <ul className="checkCardContainer">
                            {체크리스트데이터들.map((체크리스트데이터각, index) => (
                                <CheckCard key={index} 체크리스트데이터추상={체크리스트데이터각} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckCard({ 체크리스트데이터추상 }: { 체크리스트데이터추상: 체크리스트데이터타입 }) {
    return (
        <li className="checkCard">
            <span className="material-icons-round checkIcon">{체크리스트데이터추상.icon}</span>
            <div>
                <strong>{체크리스트데이터추상.title}</strong>
                <p>{체크리스트데이터추상.desc}</p>
            </div>
        </li>
    );
}
