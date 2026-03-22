import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dog Rehoming Regrets: Fix Behavior Problems Before You Say Goodbye | AI Agent Persona Guides',
  description: 'Before you rehome your dog, read this. A comprehensive guide to diagnosing and fixing behavior problems — destructive chewing, aggression, anxiety, and more — using science-backed methods.',
  keywords: ['dog rehoming', 'dog behavior problems', 'fix dog behavior', 'dog aggression', 'dog separation anxiety', 'should I rehome my dog'],
  openGraph: {
    title: 'Dog Rehoming Regrets: How to Fix Behavior Problems Before You Say Goodbye',
    description: 'Most "bad dogs" are misdiagnosed. Learn to fix real behavior problems before making a decision you\'ll regret.',
    url: 'https://aiagentpersona.com/guides/dog-rehoming-regrets',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dog Rehoming Regrets',
    description: 'Fix your dog\'s behavior problems before it\'s too late.',
  },
};

export default function DogRehomingRegretsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Dog Rehoming Regrets</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🐕 Dog Rehoming Regrets
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                How to Fix Behavior Problems Before You Say Goodbye
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Your Dog Isn&apos;t Bad. They&apos;re Misdiagnosed.</h2>
                <p className="text-gray-700 mb-6">
                  You&apos;re frustrated, sleep-deprived, and your dog has ruined furniture, scared guests, or worse. You&apos;re considering rehoming. But here&apos;s the uncomfortable truth: <strong>most &quot;bad dogs&quot; are dogs expressing unmet needs in the only way they know how</strong>. Before you make a decision you&apos;ll regret, this guide gives you the diagnosis and fix.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800 font-medium">
                    &quot;Pain from hip dysplasia, thyroid issues, or a UTI can make a dog seem aggressive or difficult. A full medical workup ($300-$600) is cheaper than rehoming and adopting a new dog ($200-$2,000+).&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Before You Rehome — Understanding Your Dog&apos;s Actual Problem</li>
                  <li>The Medical Foundation — Rule Out Health Problems First</li>
                  <li>Exercise Is Medicine — The 4-Week Challenge</li>
                  <li>Structure and Boundaries — Setting Your Dog Up for Success</li>
                  <li>Addressing Specific Behaviors — Your Problem-Solving Toolkit</li>
                  <li>Training Foundation — Teaching Your Dog to Listen</li>
                  <li>Working With a Professional — When and How to Get Help</li>
                  <li>Your Support Network — Family, Vets, and Community</li>
                  <li>The Rehoming Decision — When It Might Actually Be Right</li>
                  <li>The Long Game — Maintaining Progress and Your New Life</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What This Guide Covers</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Real Diagnosis Framework</strong> — 5 questions that reveal whether your dog&apos;s problem is trainable, medical, or environmental.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Medical Checklist</strong> — The exact blood panels and tests that reveal hidden causes of aggression and anxiety.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The 4-Week Exercise Challenge</strong> — Structured physical activity that resolves destructive chewing, jumping, and barking.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Behavior Problem Toolkit</strong> — Specific fixes for separation anxiety, resource guarding, leash reactivity, and more.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Honest Rehoming Guide</strong> — When it actually is the right decision, and how to do it responsibly.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Dog owners overwhelmed by behavior problems and considering rehoming</li>
                  <li>• Owners dealing with aggression, anxiety, or destructive behavior</li>
                  <li>• Anyone whose dog &quot;changed&quot; suddenly without explanation</li>
                  <li>• Families feeling like they made a terrible mistake getting a dog</li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;I was 48 hours away from rehoming my 3-year-old Lab. The medical checklist led me to discover she had hypothyroidism. Six weeks on medication and she&apos;s a different dog.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Jennifer R., Lab owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;30 pages of actual help. Not fluff. The behavior timeline exercise alone helped me realize my dog&apos;s &apos;aggression&apos; was completely predictable — and completely trainable.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Marcus T., Shepherd mix owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🐕</div>
                  <div className="text-3xl font-bold text-gray-900">$14.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_jKmBGhW78JtOQC5ApHXLhScdiVtXdYHhyKUpR4f2iFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — $14.99
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 30 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>30 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🔍</span>
                    <span>Behavior diagnosis framework</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🏥</span>
                    <span>Medical workup checklist</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📋</span>
                    <span>4-week exercise program</span>
                  </div>
                  <div className="flex gap-2">
                    <span>♻️</span>
                    <span>Full refund if not satisfied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Guides */}
          <div className="mt-12 pt-8 border-t text-center">
            <Link href="/guides" className="text-emerald-600 hover:text-emerald-800 font-medium">
              ← Back to All Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: 'Dog Rehoming Regrets: How to Fix Behavior Problems Before You Say Goodbye',
            description: 'Science-backed guide to diagnosing and fixing dog behavior problems before making a rehoming decision.',
            numberOfPages: 30,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/dog-rehoming-regrets',
            inLanguage: 'en',
            genre: 'Pet Training',
            offers: {
              '@type': 'Offer',
              price: '14.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/dog-rehoming-regrets',
            },
          }),
        }}
      />
    </div>
  );
}
