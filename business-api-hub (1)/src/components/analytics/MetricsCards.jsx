import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Monitor, Smartphone, Tablet, TrendingUp, TrendingDown, Minus, ArrowUpRight } from "lucide-react";
import Card from "../shared/Card";

const deviceIcons = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Tablet: Tablet,
};

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg text-xs">
        <p className="font-medium">{payload[0].name}</p>
        <p style={{ color: payload[0].payload.color }}>
          {payload[0].value.toLocaleString()} sessions ({payload[0].payload.percentage}%)
        </p>
      </div>
    );
  }
  return null;
};

const MetricsCards = ({ devices, sources }) => {
  const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus,
  };

  const trendColors = {
    up: "text-emerald-600",
    down: "text-red-500",
    stable: "text-slate-400",
  };

  return (
    <div className="space-y-6">
      {/* Device Breakdown */}
      <Card padding="p-0">
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">Device Breakdown</h3>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center gap-6">
            {/* Pie Chart */}
            <div className="w-28 h-28 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={devices}
                    dataKey="sessions"
                    nameKey="device"
                    cx="50%"
                    cy="50%"
                    innerRadius={28}
                    outerRadius={48}
                    strokeWidth={2}
                    stroke="#fff"
                  >
                    {devices.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex-1 space-y-3">
              {devices.map((device) => {
                const Icon = deviceIcons[device.device] || Monitor;
                return (
                  <div key={device.device} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: device.color }}
                      />
                      <Icon size={14} className="text-slate-400" />
                      <span className="text-sm text-slate-700">{device.device}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-slate-900 tabular-nums">
                        {device.percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      {/* Traffic Sources */}
      <Card padding="p-0">
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">Traffic Sources</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {sources.map((source) => {
            const TrendIcon = trendIcons[source.trend] || Minus;
            return (
              <div key={source.source} className="px-6 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${source.percentage * 2.5}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-700">{source.source}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-900 tabular-nums">
                    {source.sessions.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 tabular-nums w-10 text-right">
                    {source.percentage}%
                  </span>
                  <TrendIcon size={12} className={trendColors[source.trend]} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50">
          <p className="text-xs text-slate-400">
            <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
            <code className="font-mono text-xs">GET /api/v1/analytics/sources</code>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MetricsCards;
