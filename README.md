# 🤖 AI Agent Persona Marketplace

A Next.js 15 marketplace website for buying, selling, and monetizing AI agent personas. This is a **local-only, client-side demo** with mocked payment processing and real-time revenue simulation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at **http://localhost:3000**

### Build for Production (Local Testing Only)
```bash
npm run build
npm start
```

## 📦 Project Structure

```
aiagentpersona-website/
├── app/
│   ├── layout.tsx           # Root layout with nav & footer
│   ├── page.tsx             # Home page (hero + value prop + ticker)
│   ├── globals.css          # Tailwind + custom styles
│   ├── personas/
│   │   ├── page.tsx         # Personas grid (6-card layout)
│   │   └── [slug]/
│   │       └── page.tsx     # Individual persona details
│   ├── dashboard/
│   │   └── page.tsx         # Public dashboard (Polar + $PERSONA data)
│   └── creator-api/
│       └── page.tsx         # Creator API documentation
├── lib/
│   └── personas.ts          # Persona data & utilities
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind CSS config
└── postcss.config.js        # PostCSS config
```

## 🎨 Pages Built

### 1. **Home** (`/`)
- Hero section with value prop
- Live revenue ticker (mocked data, updates every 2 seconds)
- Featured personas preview
- How it works section
- Call-to-action buttons

### 2. **Personas** (`/personas`)
- 6-card grid of all personas
- Filter by tier (Basic, Standard, Premium, Premium+)
- Quick feature preview on each card
- Link to individual persona details

### 3. **Persona Details** (`/personas/:slug`)
- Full persona overview
- All features & capabilities
- Use cases & best for section
- Setup guide (code example)
- Technical specs
- Pricing options (monthly, annual, one-time)
- Related personas suggestions
- Mock "Buy Now" buttons

### 4. **Dashboard** (`/dashboard`)
- Real-time platform statistics (mocked)
- Monthly revenue chart
- Persona performance breakdown
- Recent transaction history
- $PERSONA token info & transparency notice

### 5. **Creator API** (`/creator-api`)
- Overview & key features
- 5-step quick start guide
- Full API reference
- Code examples (Python, JavaScript, cURL)
- FAQ section

## 🤖 The 6 Personas

All personas are loaded from the Phase 1 project files:

1. **X Growth Agent** ($49/month) 🐦
   - Twitter growth strategy, content optimization, engagement tracking

2. **Security Hardener** ($39/month) 🔒
   - Config auditing, vulnerability scanning, compliance checking

3. **Claude Code Orchestrator** ($59/month) 💻
   - Full-stack code generation, debugging, testing via Claude Code

4. **Research Swarm** ($29/month) 🔍
   - 5-agent research team, fact-checking, comprehensive briefings

5. **Content Flywheel** ($69/month) 📝
   - Research → draft → optimize → schedule across platforms

6. **Ops & Memory Manager** ($39/month) ⚙️
   - Daily standups, task routing, persistent memory management

## 🎯 Features

✅ **Mobile-first responsive design** — Works on all screen sizes
✅ **Live revenue ticker** — Simulated real-time updates
✅ **Dynamic routing** — Individual pages for each persona
✅ **Mocked payment UI** — "Buy Now" buttons (no real payments)
✅ **Dashboard analytics** — Revenue chart, transaction history, persona stats
✅ **Creator API docs** — Full API reference with code examples
✅ **Tailwind CSS** — Modern, utility-first styling
✅ **TypeScript** — Type-safe components

## 🚫 Important: LOCAL ONLY

This demo is **strictly local**:

- ❌ **No production deployment** — Not deployed to Vercel or any cloud service
- ❌ **No live payments** — All Polar integration is UI only (mocked buttons)
- ❌ **No URL sharing** — This is localhost:3000 only
- ❌ **No real revenue processing** — All dashboard numbers are simulated

### Future Integration (Not Implemented)
In a production version, these would be connected:
- **Polar** — Real payment processing & revenue tracking
- **Supabase** — Persistent database for personas, transactions, and token supply
- **Authentication** — Creator login & dashboard access control

## 📊 Data Flow

1. **Personas** are loaded from `lib/personas.ts` (extracted from Phase 1 .claw files)
2. **Dashboard metrics** are simulated with `setInterval()` in React components
3. **Page navigation** uses Next.js dynamic routing `[slug]` pattern
4. **Styling** is handled by Tailwind CSS with custom animations

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server (local only!)
npm start

# TypeScript check
npx tsc --noEmit
```

## 📝 Customization

### Change Persona Data
Edit `lib/personas.ts` to modify persona info, pricing, features, etc.

### Update Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Add New Pages
Create new files in `app/` following Next.js App Router conventions:
```
app/new-page/page.tsx → /new-page
app/new-page/layout.tsx → Layout for /new-page and children
```

## 🎬 Screenshots

See `screenshots/` directory for evidence of:
- Home page hero section
- Personas grid with 6 cards
- Individual persona detail page
- Dashboard with live metrics
- Creator API documentation

## 📚 Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first CSS framework
- **React 19** — Latest React features

## 🤝 Contributing

This is a demo marketplace. To extend it:

1. Add real Polar integration in payment buttons
2. Connect to Supabase for persistent data
3. Add authentication with NextAuth.js
4. Implement actual persona deployment logic

## ⚖️ License

This demo is provided as-is for evaluation and testing purposes.

---

**Built for**: Phase 2 AI Agent Persona Marketplace (Local Demo)
**Status**: ✅ Ready to run locally with `npm run dev`
**Next Steps**: Integrate Polar + Supabase for production deployment
