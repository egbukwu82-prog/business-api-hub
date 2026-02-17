import { DollarSign, Clock, Percent } from "lucide-react";
import Card from "../shared/Card";

/**
 * DealsPipeline - Visual sales pipeline with kanban-style stages
 * Demonstrates CRM deal tracking and pipeline management
 */
const stages = [
  { name: "Prospect", color: "border-amber-400", bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400" },
  { name: "Qualified", color: "border-blue-400", bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-400" },
  { name: "Proposal", color: "border-violet-400", bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-400" },
  { name: "Closed Won", color: "border-emerald-400", bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-400" },
];

const DealsPipeline = ({ deals }) => {
  const getDealsByStage = (stageName) => deals.filter((d) => d.stage === stageName);

  const getStageTotal = (stageName) => {
    return getDealsByStage(stageName).reduce((sum, d) => sum + d.value, 0);
  };

  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Sales Pipeline</h3>
          <span className="text-xs text-slate-400">
            {deals.length} deals · ${deals.reduce((s, d) => s + d.value, 0).toLocaleString()} total
          </span>
        </div>
      </div>

      {/* Pipeline Progress Bar */}
      <div className="px-6 py-4 border-b border-slate-50">
        <div className="flex h-2 rounded-full overflow-hidden bg-slate-100">
          {stages.map((stage) => {
            const stageDeals = getDealsByStage(stage.name);
            const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
            const totalValue = deals.reduce((s, d) => s + d.value, 0);
            const width = totalValue > 0 ? (stageValue / totalValue) * 100 : 0;
            return (
              <div
                key={stage.name}
                className={`${stage.dot} transition-all duration-500`}
                style={{ width: `${width}%` }}
                title={`${stage.name}: $${stageValue.toLocaleString()}`}
              />
            );
          })}
        </div>
        <div className="flex justify-between mt-2">
          {stages.map((stage) => (
            <div key={stage.name} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${stage.dot}`} />
              <span className="text-[10px] text-slate-400 hidden sm:inline">{stage.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {stages.map((stage) => {
          const stageDeals = getDealsByStage(stage.name);
          const total = getStageTotal(stage.name);

          return (
            <div key={stage.name} className="p-4">
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stage.dot}`} />
                  <span className="text-xs font-semibold text-slate-700">{stage.name}</span>
                </div>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${stage.bg} ${stage.text}`}>
                  {stageDeals.length}
                </span>
              </div>

              {/* Stage Value */}
              <p className="text-sm font-bold text-slate-900 mb-3">
                ${total.toLocaleString()}
              </p>

              {/* Deal Cards */}
              <div className="space-y-2">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className={`p-3 rounded-lg border-l-2 ${stage.color} bg-white border border-slate-100 hover:border-slate-200 transition-colors group cursor-pointer`}
                  >
                    <p className="text-xs font-medium text-slate-800 truncate">{deal.company}</p>
                    <p className="text-[10px] text-slate-400 mb-2">{deal.contact}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                        <DollarSign size={11} className="text-slate-400" />
                        {deal.value.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2">
                        {deal.daysInStage > 0 && (
                          <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                            <Clock size={9} />
                            {deal.daysInStage}d
                          </span>
                        )}
                        <span className="flex items-center gap-0.5 text-[10px] text-slate-400">
                          <Percent size={9} />
                          {deal.probability}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {stageDeals.length === 0 && (
                  <div className="text-center py-6 text-xs text-slate-300">
                    No deals
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50">
        <p className="text-xs text-slate-400">
          <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
          <code className="font-mono text-xs">GET /api/v1/deals?include=contacts&group_by=stage</code>
        </p>
      </div>
    </Card>
  );
};

export default DealsPipeline;
