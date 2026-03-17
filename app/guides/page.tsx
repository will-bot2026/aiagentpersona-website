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
    pages: 17,
    price: '9.99',
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
    pages: 19,
    price: '9.99',
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
    price: '14.99',
    emoji: '₿',
    tags: ['Bitcoin', 'Crypto', 'Investment', 'Security', 'Beginner'],
    pdfFile: '/guides/bitcoin-basics-new-investor-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cL0WfvW0akbaW3my0RH9K8dLJKdAW8N52nZ63Mrn',
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
    price: '12.99',
    emoji: '🤖',
    tags: ['AI Agents', 'Claude', 'ChatGPT', 'Comparison', 'Beginner'],
    pdfFile: '/guides/ai-agent-choice-guide-2026.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cL1nseGZUtbbaYWv0JkbUReqVf1URmqJYSQo2CV3Qm',
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
    price: '16.99',
    emoji: '💪',
    tags: ['Fitness', 'Weight Loss', 'Fat Loss', 'Science-Based', 'Health'],
    pdfFile: '/guides/fat-loss-plateaus-science-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cL9FQSqHrWeDS3igr4sVcrdsMA0EEzL8hNxMt2S5e',
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
    price: '12.99',
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
    price: '12.99',
    emoji: '🚗',
    tags: ['Dog Travel Safety', 'Emergency Preparedness', 'Pet Care', 'Dog Training'],
    pdfFile: '/guides/emergency-signage-for-dogs-traveling-in-cars.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_Z30Fre4MqiTdEowqH024TOjn35mAEJAQQd253SbzAi',
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
    price: '12.99',
    emoji: '🤝',
    tags: ['Dog Fostering', 'Adoption', 'Dog Care', 'Social Media'],
    pdfFile: '/guides/dog-fostering-accelerator.pdf',
    polarUrl: '#coming-soon',
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
    price: '12.99',
    emoji: '🐕‍⚕️',
    tags: ['Puppy Health', 'Vet Visits', 'Nutrition', 'New Puppy Owner'],
    pdfFile: '/guides/puppy-vet-prep-fasting-nutrition.pdf',
    polarUrl: '#coming-soon',
    category: 'pet-care',
    categoryLabel: 'Pet Care',
    categoryColor: 'emerald',
    difficulty: 'Beginner',
    readTime: 6,
    createdAt: '2026-03-16T00:00:00Z',
  },
];

// Category definitions
const categories = [
  { id: 'all', label: 'All Guides', color: 'slate' },
  { id: 'pet-care', label: 'Pet Care', color: 'emerald' },
  { id: 'crypto', label: 'Cryptocurrency & Investing', color: 'amber' },
  { id: 'ai-tech', label: 'AI & Technology', color: 'blue' },
  { id: 'health', label: 'Health & Fitness', color: 'rose' },
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <input
              autoFocus
              type="text"
              placeholder="Search guides by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white outline-none"
            />
            <div className="p-4">
              {sortedGuides.length > 0 ? (
                <ul className="space-y-2">
                  {sortedGuides.slice(0, 8).map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      onClick={() => setShowSearch(false)}
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="font-semibold text-gray-900 dark:text-white">{guide.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{guide.categoryLabel}</div>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">No guides found</p>
              )}
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-slate-700 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
              <span>Press ESC to close</span>
              <span>↵ to select</span>
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
              Learn how to master AI agents, build profitable skills, and solve real problems.
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
                        {/* Category Tag */}
                        <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors.tag}`}>
                          {guide.categoryLabel}
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
