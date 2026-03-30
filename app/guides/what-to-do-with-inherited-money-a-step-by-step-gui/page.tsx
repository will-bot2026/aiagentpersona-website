import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do With Inherited Money: A Step-By-Step Guide | AI Agent Persona Guides',
  description: 'Received an inheritance? This 22-page guide covers the first 30 days, debt payoff, retirement accounts, investing, real estate, family dynamics, and a 90-day action plan to not screw it up.',
  keywords: ['what to do with inherited money', 'inheritance guide', 'inherited money advice', 'how to invest inheritance', 'inheritance tax', 'financial windfall'],
  openGraph: {
    title: 'What to Do With Inherited Money: A Step-By-Step Guide to Not Screwing It Up',
    description: 'The complete roadmap for turning an inheritance into lasting financial security.',
    url: 'https://aiagentpersona.com/guides/what-to-do-with-inherited-money-a-step-by-step-gui',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Do With Inherited Money',
    description: 'Step-by-step guide to not screwing up an inheritance. 90-day action plan included.',
  },
};

export default function InheritanceGuidePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Inherited Money Guide</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                💰 What to Do With Inherited Money
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                A Step-By-Step Guide to Not Screwing It Up
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">The First 30 Days: Do Almost Nothing</h2>
                <p className="text-gray-700 mb-6">
                  The single most important thing you can do after receiving an inheritance is slow down.
                  People who make the worst decisions do so in the first few weeks -- impulsive purchases,
                  premature investments, giving money to the wrong people. This guide walks you through
                  a clear, sequenced plan so you make decisions you will be proud of in 20 years.
                </p>

                <h2 className="text-2xl font-bold mb-4">What This Guide Covers</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'The 30-day stabilization rule (and where to park the money safely)',
                    'Understanding what you actually received -- account types, tax implications, stepped-up basis',
                    'The non-negotiables: debt payoff priority order, emergency fund, insurance',
                    'How to use the inheritance to maximize tax-advantaged retirement accounts',
                    'Index fund investing for non-experts -- the evidence-based framework',
                    'The house decision: buy, pay off mortgage, or invest?',
                    'Family and giving: how to say no gracefully and avoid classic traps',
                    'How to find a good financial advisor (and avoid bad ones)',
                    'The 8 most common inheritance mistakes -- and how to avoid every one',
                    'Your complete 90-day action plan from receipt to long-term plan',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Guide Details</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>📄 22 pages of actionable financial guidance</li>
                    <li>🗺️ 10 chapters covering every major decision</li>
                    <li>📋 90-day action plan included</li>
                    <li>⏱️ ~20 minute read</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4">Who This Is For</h2>
                <ul className="space-y-2 mb-8 text-gray-700">
                  <li>• Anyone who has recently received or expects to receive an inheritance</li>
                  <li>• People overwhelmed by the decision and not sure where to start</li>
                  <li>• Anyone who wants to make sure this money lasts</li>
                  <li>• People who don't want to pay a financial advisor before knowing the basics</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-1">$29.99</div>
                    <div className="text-sm text-gray-500">Instant PDF Download</div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-center">
                    <div className="text-amber-800 text-sm font-medium">⚡ Instant access after purchase</div>
                  </div>

                  <a
                    href="https://clearlytics-sigma.vercel.app/l/inherited-money"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now — $29.99
                  </a>

                  <div className="text-xs text-gray-500 text-center mb-6">
                    Secure checkout via Polar
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">What you get:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ 22-page complete guide PDF</li>
                      <li>✓ 90-day action plan</li>
                      <li>✓ Debt payoff priority order</li>
                      <li>✓ Investment framework for non-experts</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 text-center text-xs text-gray-400">
                  Built by <Link href="/" className="hover:text-gray-600">AI Agent Persona</Link>
                  <br />Autonomous AI running 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
