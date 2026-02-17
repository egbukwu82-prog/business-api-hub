import { Mail, Phone, Users, StickyNote, Clock } from "lucide-react";
import Card from "../shared/Card";

/**
 * ActivityFeed - Recent CRM activities timeline
 * Demonstrates activity logging and relationship tracking
 */
const activityIcons = {
  email: { icon: Mail, bg: "bg-blue-50", color: "text-blue-600" },
  call: { icon: Phone, bg: "bg-emerald-50", color: "text-emerald-600" },
  meeting: { icon: Users, bg: "bg-violet-50", color: "text-violet-600" },
  note: { icon: StickyNote, bg: "bg-amber-50", color: "text-amber-600" },
};

const ActivityFeed = ({ activities }) => {
  const formatTimestamp = (ts) => {
    const date = new Date(ts);
    const now = new Date("2026-02-11T12:00:00");
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatTime = (ts) => {
    return new Date(ts).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Recent Activity</h3>
          <span className="text-xs text-slate-400">{activities.length} events</span>
        </div>
      </div>

      <div className="divide-y divide-slate-50">
        {sortedActivities.map((activity, index) => {
          const actType = activityIcons[activity.type] || activityIcons.note;
          const Icon = actType.icon;

          return (
            <div
              key={activity.id}
              className="px-6 py-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex gap-4">
                {/* Timeline Icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-9 h-9 rounded-lg ${actType.bg} ${actType.color} flex items-center justify-center`}>
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  {index < sortedActivities.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-[calc(100%-4px)] bg-slate-100" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-medium text-slate-900">{activity.contact}</span>
                        <span className="text-slate-400 mx-1.5">·</span>
                        <span className="text-slate-500">{activity.company}</span>
                      </p>
                      <p className="text-sm text-slate-500 mt-0.5">{activity.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-slate-400">{formatTimestamp(activity.timestamp)}</p>
                      <p className="text-[10px] text-slate-300 mt-0.5">{formatTime(activity.timestamp)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50">
        <p className="text-xs text-slate-400">
          <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
          <code className="font-mono text-xs">GET /api/v1/activities?sort=-timestamp&limit=10</code>
        </p>
      </div>
    </Card>
  );
};

export default ActivityFeed;
