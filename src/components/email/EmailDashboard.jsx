import { useState, useEffect } from "react";
import { Mail, Users, MousePointerClick, AlertCircle, Send, TrendingUp } from "lucide-react";
import MetricCard from "../shared/MetricCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorState from "../shared/ErrorState";
import CampaignList from "./CampaignList";
import SubscriberStats from "./SubscriberStats";
import SendCampaign from "./SendCampaign";
import {
  getEmailCampaigns,
  getSubscriberGrowth,
  getEmailMetrics,
} from "../../services/emailService";

/**
 * EmailDashboard - Main container for email marketing integration
 * Demonstrates Mailchimp/SendGrid-style API integration with campaign management,
 * subscriber analytics, and engagement tracking
 */
const EmailDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [subscriberData, setSubscriberData] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showSendForm, setShowSendForm] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const [campaignData, subData, metricsData] = await Promise.all([
        getEmailCampaigns(),
        getSubscriberGrowth(),
        getEmailMetrics(),
      ]);
      setCampaigns(campaignData);
      setSubscriberData(subData);
      setMetrics(metricsData);
    } catch (err) {
      console.error("Failed to fetch email data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Connecting to Email API..." />;
  if (error) return <ErrorState title="Email API Connection Failed" message="Unable to fetch campaign data from the email marketing service. Check API credentials and try again." onRetry={fetchData} />;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Email Marketing</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Mailchimp / SendGrid API Integration
          </p>
        </div>
        <button
          onClick={() => setShowSendForm(!showSendForm)}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20"
        >
          <Send size={16} />
          {showSendForm ? "View Dashboard" : "Send Campaign"}
        </button>
      </div>

      {/* Send Campaign Form */}
      {showSendForm && (
        <div className="animate-fade-in">
          <SendCampaign onClose={() => setShowSendForm(false)} />
        </div>
      )}

      {/* Metrics Grid */}
      {!showSendForm && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
            <MetricCard
              title="Total Subscribers"
              value={metrics.totalSubscribers}
              change={metrics.subscriberGrowth}
              changeLabel="vs last month"
              icon={Users}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />
            <MetricCard
              title="Avg. Open Rate"
              value={metrics.avgOpenRate}
              suffix="%"
              change={5.2}
              changeLabel="vs industry avg"
              icon={Mail}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />
            <MetricCard
              title="Avg. Click Rate"
              value={metrics.avgClickRate}
              suffix="%"
              change={2.8}
              changeLabel="vs last month"
              icon={MousePointerClick}
              iconBg="bg-violet-50"
              iconColor="text-violet-600"
            />
            <MetricCard
              title="List Health Score"
              value={metrics.listHealthScore}
              suffix="/100"
              icon={TrendingUp}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
            />
          </div>

          {/* Charts + Campaign List */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 animate-fade-in animate-fade-in-delay-1">
              <SubscriberStats data={subscriberData} />
            </div>
            <div className="lg:col-span-3 animate-fade-in animate-fade-in-delay-2">
              <CampaignList campaigns={campaigns} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailDashboard;
