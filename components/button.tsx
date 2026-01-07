import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary"
// type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  // size?: ButtonSize;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-black/40 hover:scale-90",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  // outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  // ghost: "text-gray-600 hover:bg-gray-100",
};

// const sizeStyles: Record<ButtonSize, string> = {
//   sm: "px-3 py-1 text-sm",
//   md: "px-5 py-2 text-base",
//   lg: "px-6 py-3 text-lg",
// };

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  // size = "md",
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "rounded-lg font-semibold px-6 py-3 border transition-all duration-300",
        variantStyles[variant],
        // sizeStyles[size],
        className
      )}
      {...rest}
    />
  );
};

export default Button;
