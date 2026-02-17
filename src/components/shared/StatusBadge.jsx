/**
 * StatusBadge - Color-coded status indicator
 */
const StatusBadge = ({ status }) => {
  const styles = {
    Sent: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    Scheduled: "bg-blue-50 text-blue-700 ring-blue-600/10",
    Draft: "bg-slate-50 text-slate-600 ring-slate-500/10",
    Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    Inactive: "bg-slate-50 text-slate-500 ring-slate-400/10",
    Prospect: "bg-amber-50 text-amber-700 ring-amber-600/10",
    "Closed Won": "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    "Closed Lost": "bg-red-50 text-red-700 ring-red-600/10",
    Qualified: "bg-blue-50 text-blue-700 ring-blue-600/10",
    Proposal: "bg-violet-50 text-violet-700 ring-violet-600/10",
  };

  const defaultStyle = "bg-slate-50 text-slate-600 ring-slate-500/10";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${
        styles[status] || defaultStyle
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
