import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "hugeicons-react";
import { cn } from "@/lib/utils";

interface AuthFormFieldProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
}

export function AuthFormField({
    label,
    id,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required,
    disabled,
}: AuthFormFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-medium text-slate-600">
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={cn(
                        "w-full h-12 px-4 rounded-xl bg-white border border-transparent text-sm text-slate-900 placeholder:text-slate-400",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all",
                        isPassword && "pr-12",
                        error && "border-destructive/50 bg-destructive/5 focus:ring-destructive/20 focus:border-destructive/30",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                        tabIndex={-1}
                    >
                        {showPassword ? <ViewOffIcon size={18} /> : <ViewIcon size={18} />}
                    </button>
                )}
            </div>
            {error && (
                <p className="text-xs text-destructive font-medium">{error}</p>
            )}
        </div>
    );
}
