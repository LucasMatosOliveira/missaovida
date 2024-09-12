import { useMemo, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FormLabel } from "../FormLabel";
import { FormInfo } from "../FormInfo";
import { FormError } from "../FormError";
import { cloneAndAddClass } from "..";

export const FormCheckbox = <TModel,>({ name, label, help, disabled, className }: FormCheckboxProps<TModel>) => {
    const context = useFormContext();
    const { control } = context;

    const checkboxRef = useRef(null);

    const id = useMemo(() => name as string + new Date().getTime().toString(), [name]);

    return (
        <>
            <Controller
                control={control}
                name={name as string}
                render={({ field: { value, onChange } }) => {

                    return (
                        <Checkbox
                            id={id}
                            className={className}
                            checked={value}
                            onChange={(e) => { onChange(e.target.checked) }}
                            disabled={disabled}
                            ref={checkboxRef}
                        />
                    );
                }}
            />

            <FormLabel name={name as string} className={disabled ? 'text-gray-400' : ''} htmlFor={id}>{label}</FormLabel>
            {help && <FormInfo content={help} />}
            <FormError name={name as string} />
        </>

    );
}

export interface FormCheckboxProps<TModel> {
    name: keyof TModel;
    label: string;
    help?: string;
    disabled?: boolean;
    className?: string;
}
