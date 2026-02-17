/**
 * CRM Service
 * Mock data simulating HubSpot/Salesforce API integration
 * Demonstrates contact management, deal pipeline tracking, and activity logging
 */

const contacts = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechVista Solutions",
    email: "sarah@techvista.com",
    phone: "+1 (403) 555-0142",
    status: "Active",
    dealValue: 75000,
    lastContact: "2026-02-09",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Williams",
    company: "Prairie Digital Co",
    email: "marcus@prairiedigital.ca",
    phone: "+1 (403) 555-0198",
    status: "Active",
    dealValue: 45000,
    lastContact: "2026-02-08",
    avatar: "MW",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "MountainView Analytics",
    email: "elena@mvanalytics.com",
    phone: "+1 (587) 555-0267",
    status: "Active",
    dealValue: 120000,
    lastContact: "2026-02-07",
    avatar: "ER",
  },
  {
    id: 4,
    name: "James Park",
    company: "NorthStar Retail",
    email: "james@northstarretail.ca",
    phone: "+1 (403) 555-0331",
    status: "Prospect",
    dealValue: 35000,
    lastContact: "2026-02-05",
    avatar: "JP",
  },
  {
    id: 5,
    name: "Aisha Patel",
    company: "Bow Valley Health",
    email: "aisha@bowvalleyhealth.ca",
    phone: "+1 (587) 555-0415",
    status: "Active",
    dealValue: 90000,
    lastContact: "2026-02-04",
    avatar: "AP",
  },
  {
    id: 6,
    name: "David Thompson",
    company: "Stampede Media Group",
    email: "david@stampedemedia.ca",
    phone: "+1 (403) 555-0502",
    status: "Inactive",
    dealValue: 0,
    lastContact: "2026-01-15",
    avatar: "DT",
  },
  {
    id: 7,
    name: "Lisa Nguyen",
    company: "Rocky Mountain SaaS",
    email: "lisa@rmsaas.com",
    phone: "+1 (587) 555-0678",
    status: "Prospect",
    dealValue: 55000,
    lastContact: "2026-02-10",
    avatar: "LN",
  },
];

const deals = [
  { id: 1, company: "TechVista Solutions", contact: "Sarah Chen", value: 75000, stage: "Proposal", probability: 60, daysInStage: 5 },
  { id: 2, company: "MountainView Analytics", contact: "Elena Rodriguez", value: 120000, stage: "Qualified", probability: 40, daysInStage: 12 },
  { id: 3, company: "Bow Valley Health", contact: "Aisha Patel", value: 90000, stage: "Closed Won", probability: 100, daysInStage: 0 },
  { id: 4, company: "Prairie Digital Co", contact: "Marcus Williams", value: 45000, stage: "Proposal", probability: 75, daysInStage: 3 },
  { id: 5, company: "NorthStar Retail", contact: "James Park", value: 35000, stage: "Prospect", probability: 20, daysInStage: 8 },
  { id: 6, company: "Rocky Mountain SaaS", contact: "Lisa Nguyen", value: 55000, stage: "Qualified", probability: 45, daysInStage: 6 },
  { id: 7, company: "Foothills Engineering", contact: "Robert Kim", value: 68000, stage: "Prospect", probability: 15, daysInStage: 14 },
  { id: 8, company: "Calgary Fintech", contact: "Amy Liu", value: 95000, stage: "Closed Won", probability: 100, daysInStage: 0 },
];

const activities = [
  { id: 1, type: "email", contact: "Sarah Chen", company: "TechVista Solutions", description: "Sent revised proposal with AI integration add-on", timestamp: "2026-02-09T14:30:00" },
  { id: 2, type: "call", contact: "Lisa Nguyen", company: "Rocky Mountain SaaS", description: "Discovery call - discussed automation needs for Q2", timestamp: "2026-02-10T10:00:00" },
  { id: 3, type: "meeting", contact: "Elena Rodriguez", company: "MountainView Analytics", description: "Product demo - analytics dashboard walkthrough", timestamp: "2026-02-07T15:00:00" },
  { id: 4, type: "email", contact: "Marcus Williams", company: "Prairie Digital Co", description: "Follow-up on pricing discussion, attached case study", timestamp: "2026-02-08T09:15:00" },
  { id: 5, type: "call", contact: "Aisha Patel", company: "Bow Valley Health", description: "Closed deal - signed 12-month contract", timestamp: "2026-02-04T11:00:00" },
  { id: 6, type: "note", contact: "James Park", company: "NorthStar Retail", description: "Requested follow-up in 2 weeks after board meeting", timestamp: "2026-02-05T16:45:00" },
  { id: 7, type: "email", contact: "David Thompson", company: "Stampede Media Group", description: "Re-engagement email - new AI services announcement", timestamp: "2026-01-15T10:30:00" },
  { id: 8, type: "meeting", contact: "Amy Liu", company: "Calgary Fintech", description: "Kickoff meeting - project scope and timeline review", timestamp: "2026-02-03T13:00:00" },
];

const pipelineStages = ["Prospect", "Qualified", "Proposal", "Closed Won"];

const crmMetrics = {
  totalContacts: 7,
  activeDeals: 6,
  conversionRate: 28.5,
  totalRevenue: 185000,
  avgDealSize: 72875,
  pipelineValue: 398000,
  wonThisMonth: 2,
  lostThisMonth: 0,
};

export const getContacts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...contacts]), 300);
  });
};

export const getDeals = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...deals]), 250);
  });
};

export const getActivities = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...activities]), 200);
  });
};

export const getCRMMetrics = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...crmMetrics }), 150);
  });
};

export const getPipelineStages = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...pipelineStages]), 100);
  });
};
