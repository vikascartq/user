import "./input-field.css";

export default function InputField({
    id,
    label,
    placeholder,
    onChange,
    type
}: InputFieldProp) {
    return (
        <div className="input-field-wrap">
            <label htmlFor={id} className="input-field-label-text">{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="input-field"
                onChange={onChange}
            />
        </div>
    )
}


interface InputFieldProp {
    id: string;
    placeholder: string;
    label: string;
    onChange: () => void;
    type: "text" | "email" | "number";
}