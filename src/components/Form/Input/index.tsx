import { ForwardedRef, forwardRef } from "react";
import { UseFormRegisterReturn, FieldErrors } from "react-hook-form"


export const FormInput = forwardRef(({ label, register, errors }: InputItemProps, ref: ForwardedRef<HTMLInputElement>) => {
  const erroMessage = errors[register.name]?.message as string 
  return (
    <>
      <label className={erroMessage ? 'text-danger' : ''}>{label}</label>
      <input  {...register} ref={ref}  className={`flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300`} />
      {erroMessage && <div className="form-control-feedback error-message">{erroMessage}</div>}
    </>
  )
})

export interface InputItemProps {
  label: string;
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
}