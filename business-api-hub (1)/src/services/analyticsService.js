/**
 * Analytics Service
 * Mock data simulating Google Analytics / Mixpanel API integration
 * Demonstrates traffic tracking, user behavior analytics, and conversion reporting
 */

const trafficData = [
  { date: "Feb 1", views: 1200, visitors: 850, sessions: 920 },
  { date: "Feb 2", views: 1350, visitors: 920, sessions: 1010 },
  { date: "Feb 3", views: 980, visitors: 710, sessions: 780 },
  { date: "Feb 4", views: 1540, visitors: 1080, sessions: 1200 },
  { date: "Feb 5", views: 1680, visitors: 1190, sessions: 1320 },
  { date: "Feb 6", views: 1420, visitors: 990, sessions: 1100 },
  { date: "Feb 7", views: 1100, visitors: 780, sessions: 860 },
  { date: "Feb 8", views: 1890, visitors: 1340, sessions: 1480 },
  { date: "Feb 9", views: 2100, visitors: 1520, sessions: 1650 },
  { date: "Feb 10", views: 1760, visitors: 1240, sessions: 1380 },
  { date: "Feb 11", views: 1950, visitors: 1380, sessions: 1510 },
  { date: "Feb 12", views: 2240, visitors: 1590, sessions: 1740 },
  { date: "Feb 13", views: 2080, visitors: 1470, sessions: 1610 },
  { date: "Feb 14", views: 2450, visitors: 1720, sessions: 1890 },
];

const topPages = [
  { page: "/home", title: "Homepage", views: 5420, uniqueViews: 4210, conversions: 234, conversionRate: 5.6, avgTimeOnPage: "2:45" },
  { page: "/products", title: "Products", views: 3210, uniqueViews: 2680, conversions: 156, conversionRate: 5.8, avgTimeOnPage: "3:12" },
  { page: "/pricing", title: "Pricing", views: 2890, uniqueViews: 2340, conversions: 189, conversionRate: 8.1, avgTimeOnPage: "4:05" },
  { page: "/blog", title: "Blog", views: 2150, uniqueViews: 1820, conversions: 67, conversionRate: 3.7, avgTimeOnPage: "5:30" },
  { page: "/about", title: "About Us", views: 1340, uniqueViews: 1120, conversions: 28, conversionRate: 2.5, avgTimeOnPage: "1:55" },
  { page: "/contact", title: "Contact", views: 980, uniqueViews: 870, conversions: 142, conversionRate: 16.3, avgTimeOnPage: "3:40" },
  { page: "/docs", title: "Documentation", views: 870, uniqueViews: 650, conversions: 15, conversionRate: 2.3, avgTimeOnPage: "7:15" },
  { page: "/case-studies", title: "Case Studies", views: 720, uniqueViews: 590, conversions: 45, conversionRate: 7.6, avgTimeOnPage: "6:20" },
];

const deviceBreakdown = [
  { device: "Desktop", sessions: 5840, percentage: 52.3, color: "#1e40af" },
  { device: "Mobile", sessions: 3920, percentage: 35.1, color: "#0ea5e9" },
  { device: "Tablet", sessions: 1400, percentage: 12.6, color: "#6366f1" },
];

const trafficSources = [
  { source: "Organic Search", sessions: 4200, percentage: 37.6, trend: "up" },
  { source: "Direct", sessions: 2800, percentage: 25.1, trend: "stable" },
  { source: "Social Media", sessions: 1960, percentage: 17.5, trend: "up" },
  { source: "Referral", sessions: 1340, percentage: 12.0, trend: "down" },
  { source: "Email", sessions: 860, percentage: 7.7, trend: "up" },
];

const analyticsMetrics = {
  totalPageViews: 24170,
  pageViewGrowth: 18.4,
  uniqueVisitors: 8950,
  visitorGrowth: 22.1,
  avgSessionDuration: "3:24",
  durationChange: 8.2,
  bounceRate: 38.2,
  bounceChange: -4.5,
  totalConversions: 876,
  conversionRate: 6.2,
  pagesPerSession: 2.7,
  returningVisitors: 42.3,
};

const realtimeData = {
  activeUsers: 47,
  topActivePages: [
    { page: "/pricing", users: 12 },
    { page: "/home", users: 9 },
    { page: "/products", users: 8 },
    { page: "/blog", users: 7 },
  ],
};

export const getTrafficData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...trafficData]), 300);
  });
};

export const getTopPages = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...topPages]), 250);
  });
};

export const getDeviceBreakdown = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...deviceBreakdown]), 200);
  });
};

export const getTrafficSources = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...trafficSources]), 200);
  });
};

export const getAnalyticsMetrics = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...analyticsMetrics }), 150);
  });
};

export const getRealtimeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...realtimeData }), 100);
  });
};
