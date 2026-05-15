import "./button-action.css";

export default function ButtonAction({
    text,
    type,
    onClick,
    isDisabled
}: ButtonActionProp) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            className={`button-action ${type}-cta`}
        >
            <span>{text}</span>
        </button>
    )
}

interface ButtonActionProp {
    text: string;
    type: "primary" | "outline" | "dark";
    onClick: () => void;
    isDisabled?: boolean;
}
