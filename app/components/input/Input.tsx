"use client"

import clsx from "clsx"
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled }) => {
    return (
        <div>
            <label className="block text-sm font-medium leading-6" htmlFor={id}>
                {label}

                <input type={type} id={id} autoComplete={id} disabled={disabled} {...register(id, {required })} className={clsx(`form-input w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus: focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`, errors[id] && "focus:ring-red-600", disabled && "opacity-50 cursor-default")}/>
            </label>
        </div>
    )
}

export default Input