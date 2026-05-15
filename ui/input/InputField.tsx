import { ChangeEventHandler } from "react";
import "./input-field.css";

export default function InputField({
    id,
    label,
    placeholder,
    onChange,
    type,
    value
}: InputFieldProp) {
    return (
        <div className="input-field-wrap">
            <label htmlFor={id} className="input-field-label-text">{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
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
    onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined;
    type: "text" | "email" | "number";
    value: string;
}