import { useState } from "react";
import {
  Mail,
  Users,
  BarChart3,
  Layers,
  Github,
  ExternalLink,
  Zap,
  ChevronRight,
} from "lucide-react";
import EmailDashboard from "./components/email/EmailDashboard";
import CRMDashboard from "./components/crm/CRMDashboard";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";

const tabs = [
  {
    id: "email",
    label: "Email Marketing",
    shortLabel: "Email",
    icon: Mail,
    description: "Mailchimp / SendGrid",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "crm",
    label: "CRM",
    shortLabel: "CRM",
    icon: Users,
    description: "HubSpot / Salesforce",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    id: "analytics",
    label: "Analytics",
    shortLabel: "Analytics",
    icon: BarChart3,
    description: "GA / Mixpanel",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("email");

  const renderContent = () => {
    switch (activeTab) {
      case "email":
        return <EmailDashboard />;
      case "crm":
        return <CRMDashboard />;
      case "analytics":
        return <AnalyticsDashboard />;
      default:
        return <EmailDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-grid">
      {/* Header */}
      <header className="gradient-header text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                <Layers size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight">
                  Business API Hub
                </h1>
                <p className="text-[10px] text-blue-200 tracking-wide uppercase hidden sm:block">
                  Athena Studio · Integration Showcase
                </p>
              </div>
            </div>

            {/* Nav Tabs */}
            <nav className="flex items-center gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                      transition-all duration-200
                      ${isActive
                        ? "bg-white/15 text-white shadow-sm"
                        : "text-blue-200 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                    <span className="hidden sm:inline">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </nav>

            {/* GitHub Link */}
            <a
              href="https://github.com/athena-studio/business-api-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-200 hover:text-white text-sm transition-colors"
            >
              <Github size={16} />
              <span className="hidden md:inline">Source</span>
            </a>
          </div>
        </div>
      </header>

      {/* Integration Status Bar */}
      <div className="bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 py-2.5 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <div key={tab.id} className="flex items-center gap-2 text-xs whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <Icon size={12} className="text-slate-400" />
                  <span className="text-slate-500">{tab.label}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-600 font-medium">Connected</span>
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-xs whitespace-nowrap ml-auto">
              <Zap size={12} className="text-amber-500" />
              <span className="text-slate-400">Mock API · No keys required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Layers size={14} />
              <span>
                Built by{" "}
                <a
                  href="https://athena.studio"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Athena Studio
                </a>
              </span>
              <span className="text-slate-200">·</span>
              <span>Portfolio Project #2</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>React 18 + Vite</span>
              <span className="text-slate-200">·</span>
              <span>Tailwind CSS</span>
              <span className="text-slate-200">·</span>
              <span>Recharts</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
