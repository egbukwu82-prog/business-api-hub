# Business API Integration Hub

A professional dashboard demonstrating clean API integration patterns for marketing automation and business intelligence systems. Built to showcase practical business system integration capabilities across email marketing, CRM, and analytics domains.

**[Live Demo](https://business-api-hub.vercel.app)** · **[Athena Studio](https://athena.studio)**

![React](https://img.shields.io/badge/React_18-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=flat)

---

## What This Demonstrates

Most businesses run 5-15 different SaaS tools that don't talk to each other. Marketing data lives in Mailchimp, contacts in HubSpot, analytics in Google Analytics — and someone has to manually reconcile everything.

This project demonstrates how unified API integration solves that problem:

- **Email Marketing** (Mailchimp / SendGrid pattern) — Campaign management, subscriber analytics, engagement tracking
- **CRM** (HubSpot / Salesforce pattern) — Contact management, visual deal pipeline, activity timeline
- **Analytics** (Google Analytics / Mixpanel pattern) — Traffic visualization, page performance, device & source breakdown

Each integration follows real-world API patterns with proper service abstraction, async data fetching, loading states, error handling, and responsive UI.

## Key Technical Decisions

**Service Layer Architecture** — All API logic is isolated in `/src/services/`. Each service simulates real API response shapes and async behavior. Swapping mock data for live API calls requires changing only the service files — zero component modifications needed.

**Mock-First Development** — No API keys required. The app runs entirely on structured mock data that mirrors actual API response formats from Mailchimp, HubSpot, and Google Analytics. This means anyone can clone, run, and evaluate the code instantly.

**Component Reusability** — Shared components (`Card`, `MetricCard`, `Button`, `StatusBadge`, `Table`, `ErrorState`, `LoadingSpinner`) are used across all three integrations, demonstrating DRY principles and consistent design language.

**Responsive Design** — Mobile-first layouts with progressive enhancement. The CRM contacts view switches from a data table on desktop to card-based layout on mobile. All charts resize properly.

**Error Boundaries** — Each dashboard handles API failures gracefully with retry functionality, not just console.error() calls.

## Screenshots

### Email Marketing Dashboard
Campaign performance tracking with subscriber growth visualization, engagement metrics, and a working campaign creation form.

### CRM Pipeline View
Kanban-style deal pipeline with Prospect → Qualified → Proposal → Closed Won stages. Includes probability scoring, days-in-stage tracking, and pipeline value distribution.

### Analytics Overview
Multi-metric traffic charts, top pages with conversion rate analysis, device breakdown pie chart, and traffic source attribution with trend indicators.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts |
| Icons | Lucide React |
| HTTP Client | Axios (configured for production use) |

## Project Structure

```
src/
├── components/
│   ├── email/           # Email marketing integration
│   │   ├── EmailDashboard.jsx
│   │   ├── CampaignList.jsx
│   │   ├── SubscriberStats.jsx
│   │   └── SendCampaign.jsx
│   ├── crm/             # CRM integration
│   │   ├── CRMDashboard.jsx
│   │   ├── ContactsList.jsx
│   │   ├── DealsPipeline.jsx
│   │   └── ActivityFeed.jsx
│   ├── analytics/       # Analytics integration
│   │   ├── AnalyticsDashboard.jsx
│   │   ├── TrafficChart.jsx
│   │   ├── TopPages.jsx
│   │   └── MetricsCards.jsx
│   └── shared/          # Reusable components
│       ├── Card.jsx
│       ├── MetricCard.jsx
│       ├── Table.jsx
│       ├── Button.jsx
│       ├── StatusBadge.jsx
│       ├── ErrorState.jsx
│       └── LoadingSpinner.jsx
├── services/            # API service layer (mock data)
│   ├── emailService.js
│   ├── crmService.js
│   └── analyticsService.js
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/athena-studio/business-api-hub.git
cd business-api-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Business Context

This is Portfolio Project #2 for [Athena Studio](https://athena.studio), a Calgary-based digital agency specializing in AI services, workflow automation, and business system integration.

### The Problem We Solve

Small and mid-size businesses typically spend 15-20 hours per week manually moving data between disconnected tools. A marketing manager checks Mailchimp for campaign results, then cross-references HubSpot for which leads engaged, then pulls Google Analytics to see what those leads did on the website. This workflow is fragmented, error-prone, and expensive.

### Our Approach

We build unified dashboards and API integrations that consolidate business data into single-pane-of-glass views. This project demonstrates the core pattern: connect to multiple business APIs, normalize the data, and present it through a clean, actionable interface.

### Related Work

- **[RV Analytics Dashboard](https://github.com/athena-studio/rv-analytics-dashboard)** — Data visualization project identifying $200K+ in operational waste for a national RV rental company

## Connecting Live APIs

To replace mock data with real API integrations, modify the service files:

```javascript
// src/services/emailService.js — Example: Mailchimp integration
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_MAILCHIMP_API_URL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_MAILCHIMP_API_KEY}` }
});

export const getEmailCampaigns = async () => {
  const { data } = await api.get('/campaigns?sort_field=send_time&sort_dir=DESC');
  return data.campaigns.map(campaign => ({
    id: campaign.id,
    name: campaign.settings.title,
    status: campaign.status,
    sentDate: campaign.send_time,
    opens: campaign.report_summary?.opens || 0,
    clicks: campaign.report_summary?.clicks || 0,
    recipients: campaign.recipients?.recipient_count || 0,
  }));
};
```

The component layer requires zero changes — this is the value of proper service abstraction.

## License

MIT

---

Built by [Athena Studio](https://athena.studio) · Calgary, AB
