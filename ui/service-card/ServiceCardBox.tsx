import GoldenListDotIcon from "@/svg/GoldenListDotIcon";
import "./service-card-box.css";
export default function ServiceCardBox({ title, description, supportTitle, support }: ServiceCardBoxProps) {
    return (
        <div className="service-card-box">
            <h4>{title}</h4>
            <p>{description}</p>
            <div>{supportTitle}</div>
            <ul>
                {support.map((item, index) => (
                    <li key={index}>
                        <GoldenListDotIcon />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

interface ServiceCardBoxProps {
    title: string;
    description: string;
    supportTitle: string;
    support: string[];
}