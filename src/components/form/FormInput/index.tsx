import { HTMLInputTypeAttribute, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormInfo } from "../FormInfo";
import { obterValor } from "@/commom/primitives/object";
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { FormEye } from "../FormEye";

export const FormInput = <TModel,>({ label, name, disabled, help, step, transform, type }: FormInputProps<TModel>) => {
    const context = useFormContext();
    const { control, formState: { errors } } = context;
    const erro = obterValor(errors, name as string);
    const erroMessage = erro ? (Array.isArray(erro) ? erro[0].message : erro.message) : null;

    const [types, setTypes] = useState<HTMLInputTypeAttribute>(type || 'text');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (types === 'password') {
            setIcon(eye);
            setTypes('text');
        } else {
            setIcon(eyeOff);
            setTypes('password');
        }
    };

    const handleValue = (value: string) => {
        if (transform === "uppercase")
            value = value.toUpperCase();
        else if (transform === "lowercase")
            value = value.toLowerCase();
        return value;
    };

    return (
        <>
            <label className={erroMessage ? 'text-danger' : ''}>{label}</label>
            {help && <FormInfo content={help} />}
            <Controller
                name={name as string}
                control={control}
                render={({ field: { value, onChange } }) => (
                    <div className="relative">
                        <input
                            disabled={disabled}
                            type={types}
                            value={value}
                            step={step || "any"}
                            onChange={(event) => onChange(handleValue(event.target.value))}
                            className={`input-field ${erroMessage ? 'input-field-error' : ''}`}
                        />
                        {type === 'password' && (
                            <FormEye icon={icon} size={20} handleToggle={handleToggle}/>
                        )}
                    </div>
                )}
            />
            {erroMessage && <div className="error-message">{erroMessage}</div>}
        </>
    );
};

export interface FormInputProps<TModel> {
    label?: string;
    name: keyof TModel;
    type?: HTMLInputTypeAttribute;
    transform?: "uppercase" | "lowercase" | "none";
    help?: string;
    disabled?: boolean;
    step?: string;
}
