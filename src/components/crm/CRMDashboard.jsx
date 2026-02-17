import { useState, useEffect } from "react";
import { Users, DollarSign, TrendingUp, Target, BarChart3 } from "lucide-react";
import MetricCard from "../shared/MetricCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import ContactsList from "./ContactsList";
import DealsPipeline from "./DealsPipeline";
import ActivityFeed from "./ActivityFeed";
import {
  getContacts,
  getDeals,
  getActivities,
  getCRMMetrics,
} from "../../services/crmService";

/**
 * CRMDashboard - Main container for CRM integration
 * Demonstrates HubSpot/Salesforce-style API integration with contact management,
 * deal pipeline visualization, and activity tracking
 */
const CRMDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [activities, setActivities] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState("pipeline");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactData, dealData, activityData, metricsData] =
          await Promise.all([
            getContacts(),
            getDeals(),
            getActivities(),
            getCRMMetrics(),
          ]);
        setContacts(contactData);
        setDeals(dealData);
        setActivities(activityData);
        setMetrics(metricsData);
      } catch (err) {
        console.error("Failed to fetch CRM data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Connecting to CRM API..." />;

  const views = [
    { id: "pipeline", label: "Pipeline" },
    { id: "contacts", label: "Contacts" },
    { id: "activity", label: "Activity" },
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">CRM Dashboard</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            HubSpot / Salesforce API Integration
          </p>
        </div>
        <div className="flex bg-slate-100 rounded-lg p-1">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-md transition-all ${
                activeView === view.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
        <MetricCard
          title="Pipeline Value"
          value={metrics.pipelineValue}
          format="currency"
          change={12.4}
          changeLabel="vs last quarter"
          icon={DollarSign}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />
        <MetricCard
          title="Active Deals"
          value={metrics.activeDeals}
          change={8.3}
          changeLabel="vs last month"
          icon={Target}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />
        <MetricCard
          title="Conversion Rate"
          value={metrics.conversionRate}
          suffix="%"
          change={3.2}
          changeLabel="vs last quarter"
          icon={TrendingUp}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />
        <MetricCard
          title="Avg. Deal Size"
          value={metrics.avgDealSize}
          format="currency"
          change={-2.1}
          changeLabel="vs last quarter"
          icon={BarChart3}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />
      </div>

      {/* Dynamic Content Area */}
      <div className="animate-fade-in">
        {activeView === "pipeline" && <DealsPipeline deals={deals} />}
        {activeView === "contacts" && <ContactsList contacts={contacts} />}
        {activeView === "activity" && <ActivityFeed activities={activities} />}
      </div>
    </div>
  );
};

export default CRMDashboard;
