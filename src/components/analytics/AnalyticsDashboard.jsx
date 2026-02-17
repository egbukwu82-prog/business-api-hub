import { useState, useEffect } from "react";
import { Eye, Users, Clock, ArrowDownRight } from "lucide-react";
import MetricCard from "../shared/MetricCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import TrafficChart from "./TrafficChart";
import MetricsCards from "./MetricsCards";
import TopPages from "./TopPages";
import {
  getTrafficData,
  getTopPages,
  getDeviceBreakdown,
  getTrafficSources,
  getAnalyticsMetrics,
  getRealtimeData,
} from "../../services/analyticsService";

const AnalyticsDashboard = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [topPagesData, setTopPagesData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [realtimeData, setRealtimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [traffic, pages, devices, sources, metricsData, realtime] =
          await Promise.all([
            getTrafficData(),
            getTopPages(),
            getDeviceBreakdown(),
            getTrafficSources(),
            getAnalyticsMetrics(),
            getRealtimeData(),
          ]);
        setTrafficData(traffic);
        setTopPagesData(pages);
        setDeviceData(devices);
        setSourceData(sources);
        setMetrics(metricsData);
        setRealtimeData(realtime);
      } catch (err) {
        console.error("Failed to fetch analytics data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Connecting to Analytics API..." />;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Analytics</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Google Analytics / Mixpanel API Integration
          </p>
        </div>
        {realtimeData && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3.5 py-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-sm font-medium text-emerald-700">
              {realtimeData.activeUsers} active now
            </span>
          </div>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
        <MetricCard
          title="Total Page Views"
          value={metrics.totalPageViews}
          change={metrics.pageViewGrowth}
          changeLabel="vs last period"
          icon={Eye}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />
        <MetricCard
          title="Unique Visitors"
          value={metrics.uniqueVisitors}
          change={metrics.visitorGrowth}
          changeLabel="vs last period"
          icon={Users}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />
        <MetricCard
          title="Avg. Session Duration"
          value={metrics.avgSessionDuration}
          format="time"
          change={metrics.durationChange}
          changeLabel="vs last period"
          icon={Clock}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />
        <MetricCard
          title="Bounce Rate"
          value={metrics.bounceRate}
          suffix="%"
          change={metrics.bounceChange}
          changeLabel="vs last period"
          icon={ArrowDownRight}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />
      </div>

      {/* Traffic Chart */}
      <div className="animate-fade-in animate-fade-in-delay-1">
        <TrafficChart data={trafficData} />
      </div>

      {/* Bottom Grid: Top Pages + Devices/Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 animate-fade-in animate-fade-in-delay-2">
          <TopPages pages={topPagesData} />
        </div>
        <div className="lg:col-span-2 animate-fade-in animate-fade-in-delay-3">
          <MetricsCards devices={deviceData} sources={sourceData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
