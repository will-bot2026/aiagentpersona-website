import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fat Loss Plateaus: The Science-Backed Troubleshooting Guide | AI Agent Persona Guides',
  description: 'Break through your weight loss plateau with proven techniques. Uses real metabolic science to diagnose and fix your progress.',
  keywords: ['fat loss plateau', 'weight loss plateau', 'metabolic adaptation', 'body recomposition', 'fitness science', 'weight loss guide'],
  openGraph: {
    title: 'Fat Loss Plateaus: The Science-Backed Troubleshooting Guide',
    description: 'Break through your weight loss plateau with proven techniques.',
    url: 'https://aiagentpersona.com/guides/fat-loss-plateaus',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fat Loss Plateaus: The Science-Backed Troubleshooting Guide',
    description: 'Break through your weight loss plateau with proven techniques.',
  },
};

export default function FatLossPlateausPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Fat Loss Plateaus</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                💪 Fat Loss Plateaus: The Science-Backed Troubleshooting Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Break Through Your Weight Loss Plateau with Proven Techniques
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What's Inside</h2>
                <p className="text-gray-700 mb-6">
                  You're losing fat but not seeing results on the scale. Worse, you might be stuck. This guide uses real metabolic science to diagnose exactly why your plateau exists and the proven techniques to break through it.
                </p>

                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mb-6">
                  <p className="text-rose-800 font-medium">
                    &quot;A plateau isn't a sign you're doing it wrong. It's a sign your body has adapted. Knowing how to counter that adaptation is the difference between success and failure.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>What Actually Happens During a Plateau (The Science)</li>
                  <li>Metabolic Adaptation: How Your Body Fights Fat Loss</li>
                  <li>The 5 Real Reasons Your Progress Stopped</li>
                  <li>Are You Actually in a Plateau? (Testing Protocol)</li>
                  <li>Calorie Deficit Strategy: Adjusting Your Approach</li>
                  <li>Macros Breakdown: Protein, Carbs, and Fats During a Plateau</li>
                  <li>Cardio: Types, Duration, and When to Add More</li>
                  <li>Strength Training: Progressive Overload That Works</li>
                  <li>The Refeed Strategy: Strategic High Days</li>
                  <li>Sleep, Stress, and Recovery (The Underrated Factors)</li>
                  <li>Supplements That Actually Help (And Which Are Wastes of Money)</li>
                  <li>Mental Game: Staying Consistent When Progress Stalls</li>
                  <li>The 30-Day Breakthrough Protocol</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Strategies Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-rose-500">✓</span>
                    <span><strong>Metabolic Testing</strong> — Know your exact calorie burn and adjust accordingly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-500">✓</span>
                    <span><strong>Macro Cycling</strong> — Strategic carb and calorie manipulation that doesn't feel like deprivation.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-500">✓</span>
                    <span><strong>Refeed Protocol</strong> — How to time high-calorie days to recharge metabolism and stay sane.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-500">✓</span>
                    <span><strong>Training Variation</strong> — Switching protocols to prevent adaptation.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-500">✓</span>
                    <span><strong>Recovery Optimization</strong> — Sleep and stress management that actually accelerates fat loss.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🎯 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Anyone stuck on a weight loss plateau for 3+ weeks</li>
                  <li>• People who've lost fat before but hit a wall</li>
                  <li>• Athletes and fitness enthusiasts wanting science-based approaches</li>
                  <li>• Anyone tired of generic diet advice that doesn't work</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">💪</div>
                  <div className="text-3xl font-bold text-gray-900">$16.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_DFQSqHrWeDS3igr4sVcrdsMA0Eq8LqhNtXU2S5e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-rose-600 text-white text-center py-3 rounded-lg font-bold hover:bg-rose-700 transition mb-3"
                >
                  Buy Now — $16.99
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
                    <span>🔬</span>
                    <span>Science-backed protocols & strategies</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📊</span>
                    <span>30-day breakthrough action plan</span>
                  </div>
                  <div className="flex gap-2">
                    <span>⚡</span>
                    <span>Metabolic adaptation solutions</span>
                  </div>
                  <li className="flex gap-2">
                    <span>♻️</span>
                    <span>Full refund if not satisfied</span>
                  </li>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Guides */}
          <div className="mt-12 pt-8 border-t text-center">
            <Link href="/guides" className="text-rose-600 hover:text-rose-800 font-medium">
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
            name: 'Fat Loss Plateaus: The Science-Backed Troubleshooting Guide',
            description: 'Break through your weight loss plateau with proven techniques.',
            numberOfPages: 12,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/fat-loss-plateaus',
            inLanguage: 'en',
            genre: 'Health & Fitness',
            offers: {
              '@type': 'Offer',
              price: '16.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/fat-loss-plateaus',
            },
          }),
        }}
      />
    </div>
  );
}
