import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bitcoin Basics: What New Investors Wish They\'d Known First | AI Agent Persona Guides',
  description: 'Avoid $10K+ mistakes with this beginner\'s security & strategy guide. Everything new Bitcoin investors need to know about security, timing, and getting started.',
  keywords: ['bitcoin basics', 'bitcoin for beginners', 'bitcoin security', 'hardware wallets', 'seed phrases', 'bitcoin investment strategy'],
  openGraph: {
    title: 'Bitcoin Basics: What New Investors Wish They\'d Known First',
    description: 'Avoid $10K+ mistakes with this beginner\'s security & strategy guide.',
    url: 'https://aiagentpersona.com/guides/bitcoin-basics',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Basics: What New Investors Wish They\'d Known First',
    description: 'Essential security and strategy guide for new Bitcoin investors.',
  },
};

export default function BitcoinBasicsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Bitcoin Basics</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ₿ Bitcoin Basics: What New Investors Wish They'd Known First
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Avoid $10K+ Mistakes with This Beginner's Security & Strategy Guide
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What's Inside</h2>
                <p className="text-gray-700 mb-6">
                  Thinking about getting into Bitcoin? This guide cuts through the noise and covers everything new investors need to know. From security setup with hardware wallets to timing strategies and common mistakes that cost beginners thousands.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-800 font-medium">
                    &quot;The biggest mistake new Bitcoin investors make isn't buying at the wrong time—it's losing their Bitcoin to poor security practices.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>What Bitcoin Actually Is (And Isn't)</li>
                  <li>The Security Foundation: Seed Phrases & Private Keys</li>
                  <li>Hardware Wallets: Which One to Buy First</li>
                  <li>The $10K+ Mistakes New Investors Make</li>
                  <li>Setting Up Your First Hardware Wallet (Step-by-Step)</li>
                  <li>Buying Bitcoin Safely: Exchanges & Best Practices</li>
                  <li>Timing Strategies That Actually Work</li>
                  <li>Dollar-Cost Averaging vs. Lump Sum</li>
                  <li>Tax Implications for US Investors</li>
                  <li>Spotting Scams & Phishing Attacks</li>
                  <li>Storing Your Seed Phrase Securely</li>
                  <li>What to Do If You Lose Your Hardware Wallet</li>
                  <li>Quick Reference Checklist</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Topics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Hardware Wallet Setup</strong> — The single best security decision you can make.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Seed Phrase Management</strong> — How to store it safely so it's never compromised.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Exchange Selection</strong> — Which exchanges are actually safe for beginners.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Investment Strategy</strong> — Timing, dollar-cost averaging, and realistic expectations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    <span><strong>Real-World Mistakes</strong> — Phishing attacks, stolen passwords, and how to avoid them.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🎯 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Complete Bitcoin beginners with no crypto experience</li>
                  <li>• People who want to invest but don't know where to start</li>
                  <li>• Anyone concerned about security and protecting their investment</li>
                  <li>• Investors tired of the hype and wanting clear, practical information</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">₿</div>
                  <div className="text-3xl font-bold text-gray-900">$14.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_qWrvW0akbaW3my0RH9K8dLJKdAW8N52nZ63Mrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-bold hover:bg-amber-700 transition mb-3"
                >
                  Buy Now — $14.99
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 12 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>12 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🔒</span>
                    <span>Complete security setup guide</span>
                  </div>
                  <div className="flex gap-2">
                    <span>💰</span>
                    <span>Investment strategy framework</span>
                  </div>
                  <div className="flex gap-2">
                    <span>⚠️</span>
                    <span>Common mistakes & how to avoid them</span>
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
            name: 'Bitcoin Basics: What New Investors Wish They\'d Known First',
            description: 'Avoid $10K+ mistakes with this beginner\'s security & strategy guide.',
            numberOfPages: 12,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/bitcoin-basics',
            inLanguage: 'en',
            genre: 'Cryptocurrency Investment',
            offers: {
              '@type': 'Offer',
              price: '14.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/bitcoin-basics',
            },
          }),
        }}
      />
    </div>
  );
}
