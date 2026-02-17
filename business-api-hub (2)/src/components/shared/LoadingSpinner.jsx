import { Loader2 } from "lucide-react";

/**
 * LoadingSpinner - Consistent loading state across all dashboard sections
 */
const LoadingSpinner = ({ message = "Loading data...", size = "default" }) => {
  const sizeClasses = {
    small: "py-4",
    default: "py-12",
    large: "py-20",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${sizeClasses[size]}`}>
      <Loader2 
        className="animate-spin text-blue-500 mb-3" 
        size={size === "small" ? 20 : 28} 
        strokeWidth={2}
      />
      <p className="text-sm text-slate-400">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
