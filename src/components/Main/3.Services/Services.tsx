import './Services.scss';

import { 서비스데이터들, 서비스데이터타입 } from './_data/services-data';

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="sectionHeader">
                    <h3>전문 서비스</h3>
                    <p>청정배관만의 차별화된 기술력으로 배관 문제를 해결합니다.</p>
                </div>
                <div className="serviceCardContainer_grid">
                    {서비스데이터들.map((서비스데이터각, index) => (
                        <ServiceCard key={index} 서비스데이터추상={서비스데이터각} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ 서비스데이터추상 }: { 서비스데이터추상: 서비스데이터타입 }) {
    return (
        <div className="serviceCard">
            <div className="iconBox">
                <span className="material-icons-round">{서비스데이터추상.icon}</span>
            </div>
            <h4>{서비스데이터추상.title}</h4>
            <p>{서비스데이터추상.desc}</p>
        </div>
    );
}