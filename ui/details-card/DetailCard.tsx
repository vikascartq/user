import "./detail-card.css";

export default function DetailCard({
    icon,
    title,
    description1,
    description2
}: DetailCardProp) {
    return (
        <div className="detail-card">
            {icon}
            <h4 className="detail-card-title">{title}</h4>
            <p className="detail-card-description">{description1}</p>
            <p className="detail-card-description">{description2}</p>
        </div>
    )
}

interface DetailCardProp {
    icon?: React.ReactNode;
    title: string;
    description1: string;
    description2: string;
}