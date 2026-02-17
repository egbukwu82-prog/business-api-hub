import { Mail, Eye, MousePointerClick, Calendar } from "lucide-react";
import Card from "../shared/Card";
import StatusBadge from "../shared/StatusBadge";

/**
 * CampaignList - Displays email campaigns with engagement metrics
 */
const CampaignList = ({ campaigns }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getOpenRate = (campaign) => {
    if (campaign.recipients === 0) return "—";
    return ((campaign.opens / campaign.recipients) * 100).toFixed(1) + "%";
  };

  const getClickRate = (campaign) => {
    if (campaign.recipients === 0) return "—";
    return ((campaign.clicks / campaign.recipients) * 100).toFixed(1) + "%";
  };

  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Recent Campaigns</h3>
          <span className="text-xs text-slate-400">{campaigns.length} campaigns</span>
        </div>
      </div>
      <div className="divide-y divide-slate-50">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="px-6 py-4 hover:bg-slate-50/50 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {campaign.name}
                  </p>
                  <StatusBadge status={campaign.status} />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  {campaign.sentDate && (
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {formatDate(campaign.sentDate)}
                    </span>
                  )}
                  {campaign.recipients > 0 && (
                    <span>{campaign.recipients.toLocaleString()} recipients</span>
                  )}
                </div>
              </div>

              {campaign.status === "Sent" && (
                <div className="flex items-center gap-6 text-sm shrink-0">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Eye size={14} className="text-slate-400" />
                    <span className="font-medium text-slate-700">{getOpenRate(campaign)}</span>
                    <span className="text-xs text-slate-400 hidden md:inline">opens</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MousePointerClick size={14} className="text-slate-400" />
                    <span className="font-medium text-slate-700">{getClickRate(campaign)}</span>
                    <span className="text-xs text-slate-400 hidden md:inline">clicks</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CampaignList;
