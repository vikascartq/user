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
                <div className="golden-section-container flex flex-between align-center m-10 ">
                    <div className="golden-section-header mb-10">
                        <h4 className="md:text-nowrap" >{title}</h4>
                    </div>
                    <div className="golden-section-content mb-10 leading-normal ">
                        <p className="leading-normal">{para}</p>
                        {
                            para2 &&
                            <p>{para2}</p>
                        }
                    </div>
                    <div className="golden-section-footer">
                        <ButtonAction
                            text={buttonText}
                            type={"dark"}
                            onClick={onButtonClick}
                        />
                    </div>
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
