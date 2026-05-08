import ButtonAction from "@/ui/buttons/ButtonAction";
import "./golden-section.css";
export default function GoldenSection({
    title,
    para,
    para2,
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
                    {
                        para2 &&
                        <p>{para2}</p>
                    }
                </div>
            </div>
        </div>
    )
}

interface GoldenSectionProp {
    title: string;
    para: string;
    para2?: string;
    buttonText: string;
    onButtonClick: () => void;
}