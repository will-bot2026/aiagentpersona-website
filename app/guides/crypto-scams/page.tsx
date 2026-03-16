import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Crypto Scams: How to Protect Your Elderly Parents & Loved Ones | AI Agent Persona Guides',
  description: 'Real tactics scammers use & how to stop them before it\'s too late. Protect vulnerable family members from crypto and investment scams.',
  keywords: ['crypto scams', 'elderly scams', 'investment scams', 'scam prevention', 'protecting elderly', 'crypto security'],
  openGraph: {
    title: 'Crypto Scams: How to Protect Your Elderly Parents & Loved Ones',
    description: 'Real tactics scammers use & how to stop them before it\'s too late.',
    url: 'https://aiagentpersona.com/guides/crypto-scams',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Scams: How to Protect Your Elderly Parents & Loved Ones',
    description: 'Real tactics scammers use & how to stop them before it\'s too late.',
  },
};

export default function CryptoScamsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Crypto Scams</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🛡️ Crypto Scams: How to Protect Your Elderly Parents & Loved Ones
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Real Tactics Scammers Use & How to Stop Them Before It's Too Late
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What's Inside</h2>
                <p className="text-gray-700 mb-6">
                  Elderly relatives are prime targets for crypto and investment scams. And the problem is getting worse. This guide teaches you how to recognize scammer tactics, protect vulnerable family members, have conversations without triggering defensiveness, and what to do if they've already been scammed.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800 font-medium">
                    &quot;The average elderly person loses $28,000+ to investment scams. But most of these are preventable with the right knowledge.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Why Elderly People Are Targeted (The Psychology of Scams)</li>
                  <li>The 10 Most Common Crypto & Investment Scams</li>
                  <li>Romance Scams: How Relationships Become Financial Traps</li>
                  <li>Pump & Dump Schemes: What They Look Like</li>
                  <li>Fake Customer Service: The Most Convincing Deception</li>
                  <li>Deepfakes & AI Manipulation: The New Frontier of Scams</li>
                  <li>Social Engineering: How Scammers Extract Personal Information</li>
                  <li>The Early Warning Signs (What to Actually Watch For)</li>
                  <li>How to Talk to Elderly Family About Scams (Without Causing Offense)</li>
                  <li>Setting Up Digital Safeguards & Checks</li>
                  <li>If They've Already Been Scammed: Recovery Steps</li>
                  <li>Legal Recourse: What You Can Actually Do</li>
                  <li>Resources & Support Services</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Real Tactics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Fake Investment Apps</strong> — How to spot counterfeit exchanges and broker apps.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Wire Transfer Tricks</strong> — The language scammers use to get quick payments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Authority Impersonation</strong> — Fake FBI, SEC, and bank calls with alarming urgency.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Trusted Relationships</strong> — How scammers build months of trust before striking.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Recovery Scams</strong> — The follow-up scam targeting victims who've already lost money.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🎯 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Adult children concerned about elderly parents</li>
                  <li>• Anyone with vulnerable family members</li>
                  <li>• People already worried about a relative getting scammed</li>
                  <li>• Those who've had family members targeted or scammed</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🛡️</div>
                  <div className="text-3xl font-bold text-gray-900">$12.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_PbGEKCrfxmd1KjR5x3dFcOl2JlsxtsWH7tgbB14Mjbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-bold hover:bg-amber-700 transition mb-3"
                >
                  Buy Now — $12.99
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 43 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>43 comprehensive pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🔍</span>
                    <span>Real scam tactics broken down</span>
                  </div>
                  <div className="flex gap-2">
                    <span>💬</span>
                    <span>Conversation scripts for family talks</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🆘</span>
                    <span>Recovery & legal resources</span>
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
            <Link href="/guides" className="text-amber-600 hover:text-amber-800 font-medium">
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
            name: 'Crypto Scams: How to Protect Your Elderly Parents & Loved Ones',
            description: 'Real tactics scammers use & how to stop them before it\'s too late.',
            numberOfPages: 43,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/crypto-scams',
            inLanguage: 'en',
            genre: 'Crypto Safety',
            offers: {
              '@type': 'Offer',
              price: '12.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/crypto-scams',
            },
          }),
        }}
      />
    </div>
  );
}
