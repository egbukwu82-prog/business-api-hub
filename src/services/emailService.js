/**
 * Email Marketing Service
 * Mock data simulating Mailchimp/SendGrid API integration
 * Demonstrates email campaign management, subscriber analytics, and engagement tracking
 */

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2026",
    status: "Sent",
    sentDate: "2026-02-01",
    opens: 450,
    clicks: 89,
    recipients: 1000,
    bounces: 12,
    unsubscribes: 3,
  },
  {
    id: 2,
    name: "Product Launch - AI Suite",
    status: "Sent",
    sentDate: "2026-01-28",
    opens: 620,
    clicks: 145,
    recipients: 1200,
    bounces: 8,
    unsubscribes: 5,
  },
  {
    id: 3,
    name: "Weekly Newsletter #42",
    status: "Sent",
    sentDate: "2026-01-25",
    opens: 380,
    clicks: 67,
    recipients: 950,
    bounces: 15,
    unsubscribes: 2,
  },
  {
    id: 4,
    name: "Valentine's Day Promo",
    status: "Scheduled",
    sentDate: "2026-02-14",
    opens: 0,
    clicks: 0,
    recipients: 1350,
    bounces: 0,
    unsubscribes: 0,
  },
  {
    id: 5,
    name: "Customer Onboarding Series",
    status: "Sent",
    sentDate: "2026-01-20",
    opens: 290,
    clicks: 112,
    recipients: 500,
    bounces: 4,
    unsubscribes: 1,
  },
  {
    id: 6,
    name: "Q1 Business Update",
    status: "Draft",
    sentDate: null,
    opens: 0,
    clicks: 0,
    recipients: 0,
    bounces: 0,
    unsubscribes: 0,
  },
  {
    id: 7,
    name: "Feature Announcement - Dashboard v2",
    status: "Sent",
    sentDate: "2026-01-15",
    opens: 510,
    clicks: 198,
    recipients: 1100,
    bounces: 6,
    unsubscribes: 4,
  },
  {
    id: 8,
    name: "Re-engagement Campaign",
    status: "Sent",
    sentDate: "2026-01-10",
    opens: 180,
    clicks: 34,
    recipients: 800,
    bounces: 45,
    unsubscribes: 12,
  },
];

const subscriberGrowth = [
  { month: "Aug", subscribers: 620, newSubscribers: 45 },
  { month: "Sep", subscribers: 710, newSubscribers: 90 },
  { month: "Oct", subscribers: 780, newSubscribers: 70 },
  { month: "Nov", subscribers: 850, newSubscribers: 70 },
  { month: "Dec", subscribers: 940, newSubscribers: 90 },
  { month: "Jan", subscribers: 1020, newSubscribers: 80 },
  { month: "Feb", subscribers: 1350, newSubscribers: 330 },
];

const emailMetrics = {
  totalSubscribers: 1350,
  subscriberGrowth: 32.4,
  avgOpenRate: 42.8,
  avgClickRate: 9.6,
  avgBounceRate: 1.6,
  totalCampaignsSent: 6,
  totalEmailsSent: 5550,
  listHealthScore: 94,
};

// Simulated async API calls
export const getEmailCampaigns = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...campaigns]), 300);
  });
};

export const getSubscriberGrowth = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...subscriberGrowth]), 200);
  });
};

export const getEmailMetrics = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...emailMetrics }), 150);
  });
};

export const sendCampaign = (campaignData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: `Campaign "${campaignData.name}" queued for delivery to ${campaignData.recipients || 1350} recipients.`,
        campaignId: campaigns.length + 1,
        estimatedDelivery: "2-5 minutes",
      });
    }, 800);
  });
};
