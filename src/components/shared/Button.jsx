import { Loader2 } from "lucide-react";

/**
 * Button - Reusable button component with variants
 */
const Button = ({
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  loading = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300",
    ghost: "text-slate-600 hover:bg-slate-100",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-600/20",
  };

  const sizes = {
    small: "text-xs px-3 py-1.5 rounded-lg",
    default: "text-sm px-4 py-2.5 rounded-lg",
    large: "text-base px-6 py-3 rounded-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : Icon ? (
        <Icon size={16} strokeWidth={2} />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
