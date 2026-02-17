import { useState } from "react";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import { sendCampaign } from "../../services/emailService";

/**
 * SendCampaign - Mock campaign sending form
 * Demonstrates API interaction for creating and sending email campaigns
 */
const SendCampaign = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    previewText: "",
    recipients: "all",
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    if (!formData.name || !formData.subject) return;
    
    setSending(true);
    try {
      const response = await sendCampaign(formData);
      setResult(response);
    } catch (err) {
      console.error("Failed to send campaign:", err);
    } finally {
      setSending(false);
    }
  };

  if (result) {
    return (
      <Card className="text-center">
        <div className="py-6">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-emerald-600" size={28} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Campaign Queued!</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-1">
            {result.message}
          </p>
          <p className="text-xs text-slate-400">
            Estimated delivery: {result.estimatedDelivery}
          </p>
          <div className="mt-6">
            <Button
              variant="secondary"
              icon={ArrowLeft}
              onClick={() => {
                setResult(null);
                onClose();
              }}
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-base font-semibold text-slate-900 mb-5">Create New Campaign</h3>
      <div className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Campaign Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Spring Product Launch"
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Subject Line
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g., Introducing our new AI-powered tools"
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Preview Text
          </label>
          <input
            type="text"
            name="previewText"
            value={formData.previewText}
            onChange={handleChange}
            placeholder="Brief text shown in email client preview"
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Recipients
          </label>
          <select
            name="recipients"
            value={formData.recipients}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 bg-white"
          >
            <option value="all">All Subscribers (1,350)</option>
            <option value="active">Active Subscribers (1,180)</option>
            <option value="new">New Subscribers — Last 30 Days (330)</option>
            <option value="engaged">Highly Engaged (520)</option>
          </select>
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            variant="primary"
            icon={Send}
            onClick={handleSend}
            loading={sending}
            disabled={!formData.name || !formData.subject}
          >
            Send Campaign
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
      <div className="mt-5 p-3 bg-slate-50 rounded-lg border border-slate-100">
        <p className="text-xs text-slate-400">
          <span className="font-medium text-slate-500">API Endpoint:</span>{" "}
          <code className="font-mono text-xs">POST /api/v1/campaigns/send</code>
        </p>
      </div>
    </Card>
  );
};

export default SendCampaign;
