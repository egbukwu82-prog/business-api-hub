import { TrendingUp, TrendingDown, Minus } from "lucide-react";

/**
 * MetricCard - Displays a single KPI metric with icon, value, and trend
 */
const MetricCard = ({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBg = "bg-blue-50",
  format = "number",
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const isPositive = change > 0;
  const isNeutral = change === 0 || change === undefined;
  
  const formatValue = (val) => {
    if (format === "currency") return `$${Number(val).toLocaleString()}`;
    if (format === "percent") return `${val}%`;
    if (format === "time") return val;
    if (typeof val === "number") return val.toLocaleString();
    return val;
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200/60 shadow-sm p-5 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`${iconBg} ${iconColor} p-2.5 rounded-lg`}>
          <Icon size={20} strokeWidth={1.8} />
        </div>
        {!isNeutral && (
          <div
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
              isPositive
                ? "text-emerald-700 bg-emerald-50"
                : "text-red-700 bg-red-50"
            }`}
          >
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-slate-900 tracking-tight">
          {prefix}{formatValue(value)}{suffix}
        </p>
        <p className="text-sm text-slate-500">{title}</p>
      </div>
      {changeLabel && (
        <p className="text-xs text-slate-400 mt-2">{changeLabel}</p>
      )}
    </div>
  );
};

export default MetricCard;
