import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Am I Ready to Move Out? The Complete Financial Readiness Guide | AI Agent Persona',
  description: 'Know exactly when you can afford to live on your own. Income thresholds, hidden move-in costs, emergency fund targets, credit scores, roommate math, rent negotiation, and a 90-day action plan.',
  keywords: ['am I ready to move out', 'can I afford to move out', 'moving out financial guide', 'first apartment budget', 'moving out savings', 'rent affordability calculator', 'moving out checklist'],
  openGraph: {
    title: 'Am I Ready to Move Out? The Complete Financial Readiness Guide',
    description: 'Stop guessing. Know exactly when you can afford your first apartment with this step-by-step financial guide.',
    url: 'https://aiagentpersona.com/guides/am-i-ready-to-move-out-the-complete-financial-read',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Am I Ready to Move Out? The Complete Financial Readiness Guide',
    description: 'The financial framework for knowing exactly when you can afford your first apartment.',
  },
};

export default function MovingOutGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Am I Ready to Move Out?</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🏠 Am I Ready to Move Out? The Complete Financial Readiness Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Know Exactly When You Can Afford to Live on Your Own — No Guesswork, Just Numbers
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  The question &quot;Am I financially ready to move out?&quot; has a real, calculable answer. This 18-page guide
                  gives you the complete framework — income thresholds, hidden costs, emergency fund targets, credit
                  requirements, and a 90-day action plan — so you can move out with confidence, not anxiety.
                </p>

                <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-6">
                  <p className="text-violet-800 font-medium">
                    &quot;An apartment you can comfortably afford is a launching pad. An apartment you&apos;re struggling to
                    afford is a trap that limits every other decision you make.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>The 30% Rule — And Why It&apos;s Just the Starting Point</li>
                  <li>The True Cost of Your First Apartment — Numbers Nobody Tells You</li>
                  <li>Building Your Emergency Fund — The Non-Negotiable Prerequisite</li>
                  <li>Credit Score Fundamentals — What Landlords Actually See</li>
                  <li>Building Your Monthly Budget — The Realistic Numbers</li>
                  <li>Finding Affordable Housing — Where to Look and How to Win</li>
                  <li>The Roommate Decision — When It Makes Financial Sense</li>
                  <li>Negotiating Rent — The Conversation Most People Skip</li>
                  <li>The Financial Red Flags — When to Wait and Why</li>
                  <li>Your 90-Day Move-Out Action Plan</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Topics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>Income Threshold Calculator</strong> — Minimum income for common rent levels, by gross and net</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>Real Move-In Cost Breakdown</strong> — Why the first apartment often costs $4,700+ before you sleep there</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>The Savings Ladder</strong> — Four rungs from $1,000 to $10,000 with clear milestones</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>Credit Score by Tier</strong> — What 580, 620, 680, and 720+ each mean for your rental applications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>Roommate Savings Math</strong> — City-by-city comparison showing $500–$1,500/month in potential savings</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>Rent Negotiation Scripts</strong> — Word-for-word language that actually works with private landlords</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>6 Financial Red Flags</strong> — The specific signs you should wait 3–6 more months</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-500">✓</span>
                    <span><strong>8-Point Readiness Checklist</strong> — Sign the lease only when every box is checked</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🎯 Who This Guide Is For</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>✓ People in their 20s–30s wondering if they&apos;re financially ready to go solo</li>
                  <li>✓ Anyone who&apos;s been told &quot;just move out&quot; without a concrete financial framework</li>
                  <li>✓ People who&apos;ve tried to move out before and had to move back due to money stress</li>
                  <li>✓ Anyone who wants to move out within the next 3–12 months and wants to do it right</li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-3">📊 Guide Specs</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Pages:</span>
                      <span className="ml-2 font-medium">18 pages</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Reading time:</span>
                      <span className="ml-2 font-medium">~21 minutes</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Format:</span>
                      <span className="ml-2 font-medium">Instant PDF download</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Level:</span>
                      <span className="ml-2 font-medium">Beginner-friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white border-2 border-violet-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">🏠</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Financial Readiness Guide
                    </h2>
                    <p className="text-gray-500 text-sm">18-page PDF guide</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-violet-600">$24.99</div>
                    <div className="text-sm text-gray-500 mt-1">One-time purchase · Instant download</div>
                  </div>

                  <a
                    href="https://clearlytics-sigma.vercel.app/l/move-out-ready"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors text-lg mb-4"
                  >
                    Get the Guide — $24.99
                  </a>

                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Instant PDF download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Full 30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>10 complete chapters, no filler</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>90-day action plan included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Readiness checklist included</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-400 text-center">
                      Secure checkout via Polar. Accepted: Visa, Mastercard, Amex, Apple Pay, Google Pay.
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link href="/guides" className="text-sm text-gray-500 hover:text-violet-600">
                    ← Browse all guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Book',
            name: 'Am I Ready to Move Out? The Complete Financial Readiness Guide',
            description: 'A comprehensive 18-page guide to knowing exactly when you can afford to move out on your own. Covers income thresholds, hidden costs, emergency funds, credit scores, roommate math, rent negotiation, and a 90-day action plan.',
            numberOfPages: 18,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/am-i-ready-to-move-out-the-complete-financial-read',
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
              price: '24.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://clearlytics-sigma.vercel.app/l/move-out-ready',
            },
            keywords: 'moving out financial guide, am I ready to move out, first apartment budget, rent affordability',
          }),
        }}
      />
    </div>
  );
}
