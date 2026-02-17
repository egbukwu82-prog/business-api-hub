import { Mail, Phone, Calendar } from "lucide-react";
import Card from "../shared/Card";
import StatusBadge from "../shared/StatusBadge";

/**
 * ContactsList - CRM contacts table with status and deal information
 */
const ContactsList = ({ contacts }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getInitialsBg = (name) => {
    const colors = [
      "bg-blue-100 text-blue-700",
      "bg-emerald-100 text-emerald-700",
      "bg-violet-100 text-violet-700",
      "bg-amber-100 text-amber-700",
      "bg-rose-100 text-rose-700",
      "bg-cyan-100 text-cyan-700",
      "bg-indigo-100 text-indigo-700",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Card padding="p-0">
      <div className="px-6 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">All Contacts</h3>
          <span className="text-xs text-slate-400">{contacts.length} contacts</span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-6">Contact</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4">Company</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4">Status</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-4">Deal Value</th>
              <th className="text-right text-xs font-semibold text-slate-400 uppercase tracking-wider py-3 px-6">Last Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="py-3.5 px-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${getInitialsBg(contact.name)}`}>
                      {contact.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{contact.name}</p>
                      <p className="text-xs text-slate-400">{contact.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-sm text-slate-600">{contact.company}</td>
                <td className="py-3.5 px-4">
                  <StatusBadge status={contact.status} />
                </td>
                <td className="py-3.5 px-4 text-sm text-right font-medium text-slate-700">
                  {contact.dealValue > 0 ? `$${contact.dealValue.toLocaleString()}` : "—"}
                </td>
                <td className="py-3.5 px-6 text-sm text-right text-slate-500">
                  {formatDate(contact.lastContact)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-slate-50">
        {contacts.map((contact) => (
          <div key={contact.id} className="px-6 py-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${getInitialsBg(contact.name)}`}>
                {contact.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{contact.name}</p>
                <p className="text-xs text-slate-400">{contact.company}</p>
              </div>
              <StatusBadge status={contact.status} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 ml-12">
              <span>{contact.email}</span>
              {contact.dealValue > 0 && (
                <span className="font-medium text-slate-600">${contact.dealValue.toLocaleString()}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50">
        <p className="text-xs text-slate-400">
          <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
          <code className="font-mono text-xs">GET /api/v1/contacts?include=deals,activities</code>
        </p>
      </div>
    </Card>
  );
};

export default ContactsList;
