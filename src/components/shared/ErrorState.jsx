import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "./Button";

/**
 * ErrorState - Displays when an API integration fails to load
 * Demonstrates graceful error handling in production applications
 */
const ErrorState = ({ 
  title = "Failed to load data", 
  message = "Unable to connect to the API. Please check your connection and try again.",
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <AlertTriangle className="text-red-500" size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 text-center max-w-sm mb-5">{message}</p>
      {onRetry && (
        <Button variant="secondary" icon={RefreshCw} onClick={onRetry}>
          Retry Connection
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
