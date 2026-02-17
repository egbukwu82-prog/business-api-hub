import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../shared/Card";

/**
 * SubscriberStats - Subscriber growth line/area chart
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg text-xs">
        <p className="font-medium mb-1">{label}</p>
        <p className="text-blue-300">
          Subscribers: {payload[0].value.toLocaleString()}
        </p>
        {payload[1] && (
          <p className="text-emerald-300">
            New: +{payload[1].value.toLocaleString()}
          </p>
        )}
      </div>
    );
  }
  return null;
};

const SubscriberStats = ({ data }) => {
  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">Subscriber Growth</h3>
        <p className="text-xs text-slate-400 mt-0.5">Last 7 months</p>
      </div>
      <div className="px-4 py-4">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="subGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="newSubGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              dx={-8}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="subscribers"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#subGradient)"
              dot={{ r: 3, fill: "#3b82f6", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="newSubscribers"
              stroke="#10b981"
              strokeWidth={1.5}
              fill="url(#newSubGradient)"
              dot={false}
              strokeDasharray="4 4"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-2 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-blue-500 rounded-full" />
            Total Subscribers
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-emerald-500 rounded-full opacity-60" style={{ borderTop: "1px dashed" }} />
            New Subscribers
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SubscriberStats;
