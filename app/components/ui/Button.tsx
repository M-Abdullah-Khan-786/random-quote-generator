import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 cursor-pointer text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl shadow-lg hover:from-orange-500 hover:to-pink-500 transition-transform transform hover:scale-110 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}