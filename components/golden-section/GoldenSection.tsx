import ButtonAction from "@/ui/buttons/ButtonAction";
import "./golden-section.css";
export default function GoldenSection({
    title,
    para,
    buttonText,
    onButtonClick
}: GoldenSectionProp) {
    return (
        <div className="golden-section-base">
            <div className="section-frame">
                <div className="golden-section-container">
                    <h4>{title}</h4>
                    <p>{para}</p>
                    <ButtonAction
                        text={buttonText}
                        type={"dark"}
                        onClick={onButtonClick}
                    />
                </div>
            </div>
        </div>
    )
}

interface GoldenSectionProp {
    title: string;
    para: string;
    buttonText: string;
    onButtonClick: () => void;
}