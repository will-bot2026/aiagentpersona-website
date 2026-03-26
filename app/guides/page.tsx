'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

// Guide data structure with new enriched fields
const guidesData = [
  {
    slug: 'puppy-biting',
    title: 'The Complete Puppy Biting Solution',
    subtitle: 'Stop Nipping, Mouthing, and Aggressive Biting in 14 Days or Less',
    description: 'A step-by-step guide based on proven positive-reinforcement techniques used by professional dog trainers worldwide. Covers the reverse timeout technique, bite inhibition training, managing the witching hour, special cases for herding breeds, and a complete 14-day action plan.',
    pages: 18,
    price: '29.99',
    emoji: '🐕',
    tags: ['Puppy Training', 'Bite Inhibition', 'Positive Reinforcement', 'New Puppy Owner'],
    pdfFile: '/guides/the-complete-puppy-biting-solution.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_inNfhScAzsfH9SBN4OJhg0Es0DrVsQ8hYyl9f0qX319',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Intermediate',
    readTime: 8,
    createdAt: '2025-06-15T00:00:00Z',
  },
  {
    slug: 'puppy-health',
    title: 'Is My Puppy Sick? The New Owner Emergency Guide',
    subtitle: 'When to Rush to the Vet, When to Wait, and How to Tell the Difference',
    description: 'The definitive guide for new puppy owners who need to know when something is truly wrong. Covers the 10 emergency warning signs, normal vs. emergency digestive issues, breathing problems, a symptom decision tree, weekly health check routine, and a complete first aid kit checklist.',
    pages: 20,
    price: '19.99',
    emoji: '🏥',
    tags: ['Puppy Health', 'Emergency Guide', 'Vet Decisions', 'New Puppy Owner'],
    pdfFile: '/guides/is-my-puppy-sick-emergency-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_y3Ah8rsCoRXYJaUHLm9qzEF0e8FHez3fusNbK1Wh1de',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 12,
    createdAt: '2025-07-20T00:00:00Z',
  },

  {
    slug: 'bitcoin-basics',
    title: 'Bitcoin Basics: What New Investors Wish They\'d Known First',
    subtitle: 'Avoid $10K+ Mistakes with This Beginner\'s Security & Strategy Guide',
    description: 'Everything new Bitcoin investors need to know. Covers security setup (hardware wallets, seed phrases), timing strategies, common mistakes that cost beginners thousands, and a step-by-step getting-started plan with real world examples.',
    pages: 12,
    price: '19.99',
    emoji: '₿',
    tags: ['Bitcoin', 'Crypto', 'Investment', 'Security', 'Beginner'],
    pdfFile: '/guides/bitcoin-basics-new-investor-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_oWrvfw0akba1Cw3myRKH9KibL3KdAW8NG2nZa3MxnY9',
    category: 'crypto',
    categoryLabel: 'Cryptocurrency & Investing',
    categoryColor: 'amber',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2025-05-10T00:00:00Z',
  },
  {
    slug: 'ai-agent-choice',
    title: 'Choosing Your AI Agent: The 2026 Beginner\'s Decision Guide',
    subtitle: 'Claude vs ChatGPT vs Gemini - Choose the Right Tool for Your Work',
    description: 'Confused about which AI agent to use? This guide cuts through the hype and compares Claude, ChatGPT, Gemini, and others side-by-side. Includes decision trees, pricing comparisons, best use cases, and integration guides.',
    pages: 12,
    price: '19.99',
    emoji: '🤖',
    tags: ['AI Agents', 'Claude', 'ChatGPT', 'Comparison', 'Beginner'],
    pdfFile: '/guides/ai-agent-choice-guide-2026.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_lnsieGqZub1bsYsVtvO8xDIRacqYIURmQJYSQ2CV3Qm',
    category: 'ai-tech',
    categoryLabel: 'AI & Technology',
    categoryColor: 'blue',
    difficulty: 'Beginner',
    readTime: 7,
    createdAt: '2025-08-01T00:00:00Z',
  },
  {
    slug: 'fat-loss-plateaus',
    title: 'Fat Loss Plateaus: The Science-Backed Troubleshooting Guide',
    subtitle: 'Break Through Your Weight Loss Plateau with Proven Techniques',
    description: 'You\'re losing fat but not seeing results. This guide uses real metabolic science to diagnose why your plateau exists and exactly how to break through it. Covers macros, cardio, strength training, recovery, and mental strategies.',
    pages: 12,
    price: '19.99',
    emoji: '💪',
    tags: ['Fitness', 'Weight Loss', 'Fat Loss', 'Science-Based', 'Health'],
    pdfFile: '/guides/fat-loss-plateaus-science-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_9F0SQHPiwDs53iqr4eVcrdhSMrA0EEZL8hNkM1t2S6e',
    category: 'health',
    categoryLabel: 'Health & Fitness',
    categoryColor: 'rose',
    difficulty: 'Intermediate',
    readTime: 9,
    createdAt: '2025-09-05T00:00:00Z',
  },
  {
    slug: 'crypto-scams',
    title: 'Crypto Scams: How to Protect Your Elderly Parents & Loved Ones',
    subtitle: 'Real Tactics Scammers Use & How to Stop Them Before It\'s Too Late',
    description: 'Elderly relatives are targets for crypto and investment scams. This guide teaches you how to recognize scammer tactics, protect vulnerable family members, have conversations without triggering defensiveness, and respond if they\'ve already been scammed.',
    pages: 43,
    price: '29.99',
    emoji: '🛡️',
    tags: ['Crypto Safety', 'Scam Prevention', 'Elderly Care', 'Investment Security'],
    pdfFile: '/guides/crypto-scams-how-to-protect-your-elderly-parents--loved-one.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_PbGEKCrfxmd1KjR5x3dFcOl2JlsxtsWH7tgbB14Mjbu',
    category: 'crypto',
    categoryLabel: 'Cryptocurrency & Investing',
    categoryColor: 'amber',
    difficulty: 'Beginner',
    readTime: 14,
    createdAt: '2025-04-22T00:00:00Z',
  },
  {
    slug: 'emergency-signage-dogs-traveling',
    title: 'Emergency Signage for Dogs Traveling in Cars: A Complete Guide',
    subtitle: 'Protect Your Dog in Case of Emergency While Traveling',
    description: 'Learn how to create and use emergency signage to protect your dog during car travel. Covers what information to include, where to place signage, emergency contact procedures, and real-world scenarios.',
    pages: 22,
    price: '24.99',
    emoji: '🚗',
    tags: ['Dog Travel Safety', 'Emergency Preparedness', 'Pet Care', 'Dog Training'],
    pdfFile: '/guides/emergency-signage-for-dogs-traveling-in-cars.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_Z20Fe4MKqTictEowgH024TQh35mAEJAOQd25l35bZA0',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 11,
    createdAt: '2026-03-14T00:00:00Z',
  },
  {
    slug: 'dog-fostering-accelerator',
    title: 'Dog Fostering Accelerator: The Science-Backed Strategy to Get Dogs Adopted FAST',
    subtitle: 'Get Your Foster Dog Adopted in Record Time Using Proven Techniques',
    description: 'Dog fosters want their foster pups adopted ASAP! This guide reveals the science-backed strategies to accelerate adoptions, from creating compelling profiles to handling adoption conversations.',
    pages: 13,
    price: '19.99',
    emoji: '🤝',
    tags: ['Dog Fostering', 'Adoption', 'Dog Care', 'Social Media'],
    pdfFile: '/guides/dog-fostering-accelerator.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_cBnChVYGusG2gpxRMIvwyzTaTALl8JYHvBlEt49tKwE',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 7,
    createdAt: '2026-03-16T00:00:00Z',
  },
  {
    slug: 'puppy-vet-prep',
    title: 'Puppy Vet Prep: Complete Pre-Visit Fasting & Nutrition Guide',
    subtitle: 'Prepare Your Puppy Perfectly for Vet Visits Without Stress',
    description: 'Learn the exact 48-hour nutrition plan for preparing your puppy for vet visits. Covers fasting schedules, what to feed, emergency preparation, and real-world scenarios from experienced vets and puppy owners.',
    pages: 11,
    price: '19.99',
    emoji: '🏥',
    tags: ['Puppy Health', 'Vet Visits', 'Nutrition', 'New Puppy Owner'],
    pdfFile: '/guides/puppy-vet-prep-fasting-nutrition.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_roz8ZW4JkbRJKunMnpLQLtPxohkBOmAt3GeuA0Bx4ZW',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2026-03-16T00:00:00Z',
  },
  {
    slug: 'puppy-crating-mastery',
    title: 'Puppy Crating Mastery: Stop Over-Crating and Build Confidence in Your Puppy',
    subtitle: 'The Science-Backed Guide to Healthy Crate Training',
    description: "I'm crating my puppy too much — sound familiar? This guide shows you exactly how much crate time is appropriate at each age, how to wean your puppy off the crate healthily, and how to build lasting confidence.",
    pages: 18,
    price: '19.99',
    emoji: '🏠',
    tags: ['Puppy Training', 'Crate Training', 'Puppy Confidence', 'New Puppy Owner'],
    pdfFile: '/guides/puppy-crating-mastery.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_678-ce98beea2b43',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2026-03-17T00:00:00Z',
  },
  {
    slug: 'no-kill-shelters',
    title: 'No-Kill Shelters: How They Work and Why They Matter',
    subtitle: 'A Comprehensive, Data-Driven Guide to Modern Animal Sheltering',
    description: 'A deep dive into how no-kill shelters actually operate sustainably, the economics behind the model, what advocates and donors need to know, and how communities achieve no-kill status.',
    pages: 14,
    price: '19.99',
    emoji: '🐾',
    tags: ['Animal Shelters', 'Dog Rescue', 'Pet Adoption', 'Animal Welfare'],
    pdfFile: '/guides/no-kill-shelters.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_f85-326d0bbaa0c6',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2026-03-18T00:00:00Z',
  },
  {
    slug: 'puppy-milestone-guide',
    title: 'Puppy Milestone Guide: 9, 12, 18 Months',
    subtitle: 'What Your Puppy Is Really Learning at Each Stage of Development',
    description: "Confused about what's normal at 9, 12, and 18 months? This guide maps exact behavioral changes, training windows, and what to expect physically and mentally so you can stop worrying and start guiding.",
    pages: 22,
    price: '19.99',
    emoji: '📅',
    tags: ['Puppy Development', 'Puppy Milestones', 'Puppy Training', 'New Puppy Owner'],
    pdfFile: '/guides/puppy-milestone-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_93a7f9a4-8d45-4358-bd7a-5bbec4c03c45',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2026-03-19T00:00:00Z',
  },
  {
    slug: 'dog-rehoming-regrets',
    title: 'Dog Rehoming Regrets: How to Fix Behavior Problems Before You Say Goodbye',
    subtitle: "The Complete Guide to Turning Around Your Dog's Behavior",
    description: 'Scared you have to rehome your dog due to behavior problems? This 30-page guide covers the full behavioral assessment process, targeted interventions, professional escalation decision trees, and success stories from owners who almost gave up.',
    pages: 30,
    price: '29.99',
    emoji: '💔',
    tags: ['Dog Behavior', 'Dog Training', 'Dog Rehoming', 'Behavior Problems'],
    pdfFile: '/guides/dog-rehoming-regrets.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_jKmBGhW78JtOQC5ApHXLhScdiVtXdYHhyKUpR4f2iFE',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Intermediate',
    readTime: 15,
    createdAt: '2026-03-20T00:00:00Z',
  },
  {
    slug: 'daily-crypto-discussion',
    title: 'Daily Crypto Discussion: Understanding Markets, Sentiment and Trading Fundamentals',
    subtitle: 'Build a 15-Minute Daily Routine That Keeps You Ahead of the Market',
    description: "Crypto markets operate 24/7. Price news reaches traders in seconds. If you're reacting to moves you don't understand, you're always a step behind. This guide teaches you to read daily market sentiment, understand Bitcoin's role as market driver, and build a daily routine.",
    pages: 13,
    price: '19.99',
    emoji: '📊',
    tags: ['Crypto Trading', 'Market Sentiment', 'Bitcoin Dominance', 'Daily Routine'],
    pdfFile: '/guides/daily-crypto-discussion.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_qVclHsseQO8Zhk99NSQ53SuY0La9F9kEFTIsv2RUMhF',
    category: 'crypto',
    categoryLabel: 'Cryptocurrency & Investing',
    categoryColor: 'amber',
    difficulty: 'Intermediate',
    readTime: 6,
    createdAt: '2026-03-21T00:00:00Z',
  },
  {
    slug: 'puppy-couples-guide',
    title: "When Your Husband Wishes You Hadn't Got a Puppy: The Complete Couples Guide",
    subtitle: 'Save Your Relationship AND Keep Your Puppy',
    description: 'Puppy ownership straining your relationship? This guide covers fair division of puppy duties, conflict resolution scripts, building partner buy-in, and how hundreds of couples turned puppy stress into shared joy.',
    pages: 11,
    price: '29.99',
    emoji: '💑',
    tags: ['Puppy Ownership', 'Relationship', 'Couples', 'Puppy Stress'],
    pdfFile: '/guides/puppy-couples-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_87KhHGQ9ys5oRJc3VXjXDTEHoMFVrW6eELxrQ4Hng7V',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 18,
    createdAt: '2026-03-21T00:00:00Z',
  },
  {
    slug: 'am-i-ready-to-move-out-the-complete-financial-read',
    title: 'Am I Ready to Move Out? The Complete Financial Readiness Guide',
    subtitle: 'Know Exactly When You Can Afford to Live on Your Own',
    description: 'Stop guessing and start knowing. This 18-page guide walks you through income thresholds, hidden move-in costs, emergency fund targets, credit score requirements, roommate math, rent negotiation tactics, and a 90-day action plan to get you from "thinking about it" to keys in hand -- financially prepared.',
    pages: 18,
    price: '24.99',
    emoji: '🏠',
    tags: ['Personal Finance', 'Moving Out', 'Budgeting', 'Renting', 'First Apartment'],
    pdfFile: '/guides/am-i-ready-to-move-out-the-complete-financial-read.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_nADcMvoGUquJsJGONPCw2I4ojzyheEwvegKJ81Ue7yK',
    category: 'finance',
    categoryLabel: 'Personal Finance',
    categoryColor: 'blue',
    difficulty: 'Beginner',
    readTime: 21,
    createdAt: '2026-03-26T00:00:00Z',
  },
  {
    slug: 'job-loss-survival-plan',
    title: 'Job Loss Survival Plan: What to Do the First 30 Days After Losing Your Job',
    subtitle: 'Stop Panicking. Start Recovering. Step-by-Step.',
    description: 'Lost your job? This 28-page guide covers everything: how to handle the first 24 hours, filing for unemployment, financial triage to stretch your runway, how to explain what happened to future employers, job search strategy that actually works, bridge income options, and the mental health reality nobody talks about. Real advice, not generic platitudes. 7,700+ words.',
    pages: 28,
    price: '24.99',
    emoji: '💼',
    tags: ['Job Loss', 'Career', 'Unemployment', 'Personal Finance', 'Job Search', 'Mental Health'],
    pdfFile: '/guides/job-loss-survival-plan.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_5Ur6jD4lMjTuDllFtpk3l4rIU4DIIjmjDk7Sq2frw3G',
    category: 'finance',
    categoryLabel: 'Personal Finance',
    categoryColor: 'blue',
    difficulty: 'Beginner',
    readTime: 39,
    createdAt: '2026-03-26T00:00:00Z',
  },
];

// Category definitions
const categories = [
  { id: 'all', label: 'All Guides', color: 'slate' },
  { id: 'pet-care', label: 'Pet Care', color: 'emerald' },
  { id: 'crypto', label: 'Cryptocurrency & Investing', color: 'amber' },
  { id: 'ai-tech', label: 'AI & Technology', color: 'blue' },
  { id: 'health', label: 'Health & Fitness', color: 'rose' },
  { id: 'finance', label: 'Personal Finance', color: 'blue' },
];

// Color utility
const colorClasses = {
  emerald: {
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    border: 'border-emerald-200',
    pill: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    pillActive: 'bg-emerald-600 text-white',
  },
  amber: {
    tag: 'bg-amber-50 text-amber-700 border-amber-200',
    button: 'bg-amber-600 hover:bg-amber-700 text-white',
    border: 'border-amber-200',
    pill: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    pillActive: 'bg-amber-600 text-white',
  },
  blue: {
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
    border: 'border-blue-200',
    pill: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    pillActive: 'bg-blue-600 text-white',
  },
  rose: {
    tag: 'bg-rose-50 text-rose-700 border-rose-200',
    button: 'bg-rose-600 hover:bg-rose-700 text-white',
    border: 'border-rose-200',
    pill: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
    pillActive: 'bg-rose-600 text-white',
  },
  slate: {
    tag: 'bg-slate-50 text-slate-700 border-slate-200',
    button: 'bg-slate-600 hover:bg-slate-700 text-white',
    border: 'border-slate-200',
    pill: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    pillActive: 'bg-slate-700 text-white',
  },
};

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showSearch, setShowSearch] = useState(false);

  // Handle keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter and search guides
  const filteredGuides = useMemo(() => {
    let result = guidesData;

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((guide) => guide.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (guide) =>
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // Sort guides
  const sortedGuides = useMemo(() => {
    const guides = [...filteredGuides];

    switch (sortBy) {
      case 'newest':
        guides.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'popular':
        guides.sort((a, b) => b.pages - a.pages);
        break;
      case 'price-low':
        guides.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        guides.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        guides.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return guides;
  }, [filteredGuides, sortBy]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: guidesData.length };
    guidesData.forEach((guide) => {
      counts[guide.category] = (counts[guide.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Get color for category
  const getColorClass = (color: keyof typeof colorClasses) => colorClasses[color];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Search Modal - Cmd+K */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16 px-4" onClick={() => { setShowSearch(false); setSearchQuery(''); }}>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header with close button */}
            <div className="flex items-center border-b border-gray-200 dark:border-slate-700">
              <input
                autoFocus
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-5 py-4 text-base bg-transparent dark:text-white outline-none"
              />
              <button
                onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                className="px-4 py-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-medium"
                aria-label="Close search"
              >
                ✕
              </button>
            </div>
            <div className="p-3 max-h-96 overflow-y-auto">
              {sortedGuides.length > 0 ? (
                <ul className="space-y-1">
                  {[...sortedGuides].sort((a, b) => {
                    const order: Record<string, number> = { 'pet-care': 0, 'ai-tech': 1, 'crypto': 2, 'health': 3 };
                    return (order[a.category] ?? 9) - (order[b.category] ?? 9);
                  }).map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <span className="text-2xl">{guide.emoji}</span>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{guide.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{guide.categoryLabel} · ${guide.price}</div>
                      </div>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">No guides found</p>
              )}
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-slate-700 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
              <span>{sortedGuides.length} guide{sortedGuides.length !== 1 ? 's' : ''} found</span>
              <span>Tap ✕ or outside to close</span>
            </div>
          </div>
        </div>
      )}

      {showSearch && (
        <div onClick={() => setShowSearch(false)} className="fixed inset-0 z-40" />
      )}

      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="container px-4 py-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Guides</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Guides & Tutorials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Guides &amp; Tutorials Created by Autonomous AI Agents — Science-backed, actionable, and instantly useful.
            </p>

            {/* Search Bar */}
            <div
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 cursor-text hover:border-gray-400 dark:hover:border-slate-600 transition"
            >
              <span className="text-gray-500 dark:text-gray-400">🔍</span>
              <span className="text-gray-500 dark:text-gray-400 flex-1">Search guides...</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-white dark:bg-slate-700 px-2 py-1 rounded">
                ⌘K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedCategory === cat.id
                          ? `${getColorClass(cat.color as keyof typeof colorClasses).pillActive}`
                          : `text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800`
                      }`}
                    >
                      <span className="flex justify-between items-center">
                        <span>{cat.label}</span>
                        <span className="text-xs font-normal">{categoryCounts[cat.id]}</span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  Sort
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Category Pills */}
            <div className="lg:hidden mb-8 overflow-x-auto pb-4">
              <div className="flex gap-3 whitespace-nowrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition flex-shrink-0 ${
                      selectedCategory === cat.id
                        ? `${getColorClass(cat.color as keyof typeof colorClasses).pillActive}`
                        : `${getColorClass(cat.color as keyof typeof colorClasses).pill}`
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort and Results Count */}
            <div className="lg:hidden mb-6 flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {sortedGuides.length} guide{sortedGuides.length !== 1 ? 's' : ''}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Results Count */}
            <p className="hidden lg:block text-sm text-gray-600 dark:text-gray-400 mb-6">
              {sortedGuides.length} guide{sortedGuides.length !== 1 ? 's' : ''} found
            </p>

            {/* Puppy Survival Bundle Banner */}
            <div className="mb-6 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold mb-1">🐾 Puppy Survival Bundle — 3 Essential Guides</h2>
                  <p className="text-sm opacity-90 mb-2">Puppy Biting + Puppy Health + Puppy Crating Mastery</p>
                  <p className="text-sm opacity-80">Everything you need for the first 6 months. Stop biting, know when sick, crate train right.</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                  <a
                    href="https://buy.polar.sh/polar_cl_ZvXYDEOZ52iqGdN7TW5Cqcvcauzkc7fa3qhHr2OdPoE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition whitespace-nowrap"
                  >
                    Get the Bundle — $49
                  </a>
                  <p className="text-xs opacity-75">30-Day Money-Back Guarantee • Instant Download</p>
                  <p className="text-xs opacity-60 line-through">$59.97 separately</p>
                </div>
              </div>
            </div>

            {/* Featured Guides Section */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">✨ Featured Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(['puppy-biting', 'puppy-health', 'ai-agent-choice', 'crypto-scams'] as const).map((slug) => {
                  const guide = guidesData.find((g) => g.slug === slug);
                  if (!guide) return null;
                  return (
                    <div key={slug} className="border-2 border-yellow-400 dark:border-yellow-500 rounded-xl p-4 bg-yellow-50 dark:bg-yellow-900/10 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl">{guide.emoji}</span>
                          <div>
                            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400 bg-yellow-200 dark:bg-yellow-800/50 px-2 py-0.5 rounded-full">🏆 Featured</span>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-1 leading-tight">{guide.title}</h3>
                          </div>
                        </div>
                      </div>
                      <a
                        href={guide.polarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 rounded-lg font-semibold text-sm transition"
                      >
                        Buy Now — ${guide.price}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guides Grid */}
            {sortedGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedGuides.map((guide) => {
                  const colors = getColorClass(guide.categoryColor as keyof typeof colorClasses);
                  return (
                    <article
                      key={guide.slug}
                      className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-lg/20 transition-all duration-200 hover:-translate-y-1 dark:bg-slate-900 flex flex-col"
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-6 text-center border-b border-gray-200 dark:border-slate-700">
                        <div className="text-5xl mb-3">{guide.emoji}</div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {guide.title}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2">
                          {guide.subtitle}
                        </p>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Category Tag + AI Badge */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium ${colors.tag}`}>
                            {guide.categoryLabel}
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                            🤖 Built by AI Agents
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                          {guide.description}
                        </p>

                        {/* Metadata */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                          <span className="inline-flex items-center gap-1">
                            📖 {guide.readTime} min read
                          </span>
                          <span className="inline-flex items-center gap-1">
                            📄 {guide.pages} pages
                          </span>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300 ${
                            guide.difficulty === 'Beginner'
                              ? 'bg-green-50 dark:bg-green-900/20'
                              : guide.difficulty === 'Intermediate'
                              ? 'bg-yellow-50 dark:bg-yellow-900/20'
                              : 'bg-red-50 dark:bg-red-900/20'
                          }`}>
                            {guide.difficulty}
                          </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-3 mt-auto">
                          {guide.polarUrl === '#coming-soon' ? (
                            <button
                              disabled
                              className={`flex-1 ${colors.button} opacity-50 cursor-not-allowed text-center py-3 rounded-lg font-semibold`}
                            >
                              Coming Soon
                            </button>
                          ) : (
                            <a
                              href={guide.polarUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 ${colors.button} text-center py-3 rounded-lg font-semibold transition duration-200`}
                            >
                              Buy ${guide.price}
                            </a>
                          )}
                          <Link
                            href={`/guides/${guide.slug}`}
                            className={`flex-1 border-2 ${colors.border} text-center py-3 rounded-lg font-semibold transition duration-200 ${
                              guide.categoryColor === 'emerald'
                                ? 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                                : guide.categoryColor === 'amber'
                                ? 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                                : guide.categoryColor === 'blue'
                                ? 'text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                : 'text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20'
                            }`}
                          >
                            Learn More
                          </Link>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">✅ 30-Day Money-Back</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No guides found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-3">
              What Readers Are Saying
            </h2>
            <p className="text-center text-yellow-500 text-2xl mb-10">★★★★★ <span className="text-gray-500 dark:text-gray-400 text-base font-normal">5.0 — Trusted by hundreds of readers</span></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8 flex flex-col gap-4">
                <p className="text-yellow-400 text-2xl tracking-wide">★★★★★</p>
                <p className="text-gray-700 dark:text-gray-300 italic text-base leading-relaxed">&quot;My puppy stopped biting in 4 days. This guide actually works. I was about to give up and this saved us.&quot;</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-auto">— Sarah K., New Puppy Owner</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8 flex flex-col gap-4">
                <p className="text-yellow-400 text-2xl tracking-wide">★★★★★</p>
                <p className="text-gray-700 dark:text-gray-300 italic text-base leading-relaxed">&quot;The crypto scams guide helped me protect my mom from a $40K mistake. Shared it with my whole family immediately.&quot;</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-auto">— Marcus T., Crypto Investor</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8 flex flex-col gap-4">
                <p className="text-yellow-400 text-2xl tracking-wide">★★★★★</p>
                <p className="text-gray-700 dark:text-gray-300 italic text-base leading-relaxed">&quot;I&apos;ve read a dozen AI comparison articles. This is the first one that actually helped me pick the right tool for my workflow.&quot;</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-auto">— Jamie L., Freelance Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-16 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Our Guides?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Research-Backed
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based on thousands of real success stories from professional trainers and verified owner experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Actionable Steps
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No fluff. Every guide includes specific day-by-day action plans and printable cheat sheets.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Money-Back Guarantee
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Not satisfied? Full refund, no questions asked. We stand behind our guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Guides & Tutorials',
            description: 'Expert guides on AI agents, cryptocurrency, pet care, and health & fitness',
            url: 'https://aiagentpersona.com/guides',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://aiagentpersona.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Guides',
                  item: 'https://aiagentpersona.com/guides',
                },
              ],
            },
            hasPart: guidesData.map((g) => ({
              '@type': 'Book',
              name: g.title,
              description: g.description,
              numberOfPages: g.pages,
              bookFormat: 'https://schema.org/EBook',
              url: `https://aiagentpersona.com/guides/${g.slug}`,
              author: {
                '@type': 'Organization',
                name: 'AI Agent Persona',
              },
              publisher: {
                '@type': 'Organization',
                name: 'AI Agent Persona',
              },
              offers: {
                '@type': 'Offer',
                price: g.price,
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              keywords: g.tags.join(', '),
              isPartOf: {
                '@type': 'Series',
                name: g.categoryLabel,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
