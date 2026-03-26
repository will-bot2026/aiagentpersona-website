import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'No-Kill Shelters: How They Work and Why They Matter | AI Agent Persona Guides',
  description: 'A data-driven deep dive into how no-kill shelters actually operate sustainably — the economics, intake strategies, foster networks, and how communities achieve no-kill status. 14 pages.',
  openGraph: {
    title: 'No-Kill Shelters: How They Work and Why They Matter',
    description: 'Understand the real business model, intake strategies, and community systems that make no-kill shelters sustainable.',
    url: 'https://aiagentpersona.com/guides/no-kill-shelters',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No-Kill Shelters: How They Work and Why They Matter',
    description: 'The data-driven guide to understanding no-kill shelter operations, funding, and community impact.',
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">No-Kill Shelters: How They Work and Why They Matter</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🐾 No-Kill Shelters: How They Work and Why They Matter
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                A Comprehensive, Data-Driven Guide to Modern Animal Sheltering
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  Every year, approximately 920,000 shelter animals are euthanized in the US. Yet many shelters claim to be &quot;no-kill.&quot; How does that work? This guide explains the real economics, intake strategies, foster networks, and community systems that make no-kill shelters operate sustainably — and what advocates and donors actually need to know.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
                  <p className="text-emerald-800 font-medium">
                    &quot;No-kill shelters achieve their status through strategic intake limits, active foster networks, and aggressive marketing — not by eliminating all euthanasia. Understanding this distinction changes everything about how you support them.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>The Shelter Crisis — Understanding the Numbers</li>
                  <li>The Business Model of No-Kill Shelters</li>
                  <li>The Intake Selection Strategy</li>
                  <li>Marketing and Adoption Acceleration</li>
                  <li>The Foster Network — Doubling Capacity</li>
                  <li>Transfer Networks and Regional Cooperation</li>
                  <li>Behavioral Rehabilitation and Specialized Rescues</li>
                  <li>Medical Care and Triage</li>
                  <li>Community Fundraising and Sustainability</li>
                  <li>The Future — Sustainability for All</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What This Guide Covers</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The 90% Live-Release Rate</strong> — What &quot;no-kill&quot; actually means and why the math is more complex than it sounds.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Intake Selection Strategy</strong> — How no-kill shelters choose which animals to accept and why this creates a two-tiered system.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Foster Network Economics</strong> — How volunteer foster programs double a shelter&apos;s effective capacity at minimal cost.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Community Fundraising Models</strong> — What sustainable no-kill shelters do differently to stay financially viable long-term.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Rescue volunteers and shelter workers who want to understand the full ecosystem</li>
                  <li>• Donors deciding which shelters deserve their support</li>
                  <li>• Animal welfare advocates working toward community no-kill status</li>
                  <li>• Anyone curious about how these organizations actually sustain themselves</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🐾</div>
                  <div className="text-3xl font-bold text-gray-900">$19.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_f85-326d0bbaa0c6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — Instant Download + Money-Back Guarantee
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 14 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>14 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📊</span>
                    <span>Data-driven analysis of shelter economics</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🐾</span>
                    <span>Foster network and intake strategy breakdowns</span>
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
            name: 'No-Kill Shelters: How They Work and Why They Matter',
            description: 'A data-driven guide to understanding how no-kill shelters operate sustainably — the economics, intake strategies, foster networks, and community systems.',
            numberOfPages: 14,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/no-kill-shelters',
            inLanguage: 'en',
            offers: {
              '@type': 'Offer',
              price: '19.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/no-kill-shelters',
            },
          }),
        }}
      />
    </div>
  );
}
