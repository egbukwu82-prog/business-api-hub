import { ExternalLink, ArrowUpRight } from "lucide-react";
import Card from "../shared/Card";

const TopPages = ({ pages }) => {
  const maxViews = Math.max(...pages.map((p) => p.views));

  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Top Pages</h3>
          <span className="text-xs text-slate-400">{pages.length} pages</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-6">Page</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4">Views</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4 hidden sm:table-cell">Uniques</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4 hidden md:table-cell">Conv. Rate</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-6 hidden lg:table-cell">Avg. Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {pages.map((page, index) => (
              <tr key={page.page} className="hover:bg-slate-50/50 transition-colors group">
                <td className="py-3.5 px-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-300 w-4">{index + 1}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium text-slate-900">{page.title}</p>
                        <ExternalLink size={11} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{page.page}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                      <div
                        className="h-full bg-blue-400 rounded-full transition-all duration-500"
                        style={{ width: `${(page.views / maxViews) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-700 tabular-nums">
                      {page.views.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-sm text-right text-slate-500 tabular-nums hidden sm:table-cell">
                  {page.uniqueViews.toLocaleString()}
                </td>
                <td className="py-3.5 px-4 text-right hidden md:table-cell">
                  <span className={`text-sm font-medium tabular-nums ${
                    page.conversionRate >= 8 ? "text-emerald-600" : 
                    page.conversionRate >= 5 ? "text-blue-600" : "text-slate-500"
                  }`}>
                    {page.conversionRate}%
                  </span>
                </td>
                <td className="py-3.5 px-6 text-sm text-right text-slate-500 tabular-nums hidden lg:table-cell">
                  {page.avgTimeOnPage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50">
        <p className="text-xs text-slate-400">
          <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
          <code className="font-mono text-xs">GET /api/v1/analytics/pages?sort=-views&limit=10</code>
        </p>
      </div>
    </Card>
  );
};

export default TopPages;
