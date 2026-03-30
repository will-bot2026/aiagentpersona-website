import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Complete Puppy Biting Solution - Stop Nipping in 14 Days | AI Agent Persona Guides',
  description: 'A step-by-step guide to stop puppy nipping, mouthing, and aggressive biting in 14 days or less. Based on proven positive-reinforcement techniques used by professional dog trainers worldwide.',
  keywords: ['puppy biting solution', 'stop puppy nipping', 'puppy bite inhibition', 'puppy training guide', 'reverse timeout technique', 'herding breed biting'],
  openGraph: {
    title: 'The Complete Puppy Biting Solution',
    description: 'Stop nipping, mouthing, and aggressive biting in 14 days or less. Proven positive-reinforcement techniques.',
    url: 'https://aiagentpersona.com/guides/puppy-biting',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Puppy Biting Solution',
    description: 'Stop puppy biting in 14 days with proven techniques.',
  },
};

export default function PuppyBitingPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Biting Solution</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🐕 The Complete Puppy Biting Solution
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                A Step-by-Step Guide to Stop Nipping, Mouthing, and Aggressive Biting in 14 Days or Less
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  If you&apos;re covered in scratches and wondering if you made a terrible mistake getting a puppy — this guide is for you. Based on proven positive-reinforcement techniques used by professional dog trainers worldwide.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    &quot;The goal is NOT to stop all mouthing immediately. The goal is to teach bite inhibition first, then gradually reduce mouthing.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Why Puppies Bite (And Why It&apos;s Normal)</li>
                  <li>The 3 Types of Puppy Biting</li>
                  <li>Age-by-Age Biting Timeline</li>
                  <li>The 5 Methods That Actually Work</li>
                  <li>The Reverse Timeout Technique (Step-by-Step)</li>
                  <li>Redirection Done Right</li>
                  <li>Teaching Bite Inhibition</li>
                  <li>Managing the &quot;Witching Hour&quot;</li>
                  <li>Special Cases: Herding Breeds &amp; High-Energy Dogs</li>
                  <li>What NOT to Do (Common Mistakes)</li>
                  <li>The 14-Day Action Plan</li>
                  <li>When to Call a Professional</li>
                  <li>Quick Reference Cheat Sheet</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Techniques Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Reverse Timeout</strong> — The single most effective technique. You leave, not the puppy.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Structured Redirection</strong> — Intercept before the bite, don&apos;t react after it.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Enforced Nap Schedule</strong> — The &quot;1 hour up, 2 hours nap&quot; rule that transforms puppies overnight.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Capturing Calm</strong> — Silently reward calm behavior to shift the balance.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Herding Breed Strategies</strong> — Specific solutions for ACDs, Border Collies, Corgis, and more.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• New puppy owners overwhelmed by biting</li>
                  <li>• Owners of herding breeds with intense nipping</li>
                  <li>• Anyone dealing with the &quot;witching hour&quot; land shark</li>
                  <li>• Families needing everyone on the same page with training</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🐕</div>
                  <div className="text-3xl font-bold text-gray-900">$19.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://clearlytics-sigma.vercel.app/l/puppy-biting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — Instant Download + Money-Back Guarantee
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 18 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>18 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📋</span>
                    <span>Complete 14-day action plan</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🖨️</span>
                    <span>Printable cheat sheet included</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🐕</span>
                    <span>Herding breed special section</span>
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
            name: 'The Complete Puppy Biting Solution',
            description: 'A Step-by-Step Guide to Stop Nipping, Mouthing, and Aggressive Biting in 14 Days or Less',
            numberOfPages: 18,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-biting',
            inLanguage: 'en',
            genre: 'Pet Training',
            offers: {
              '@type': 'Offer',
              price: '19.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-biting',
            },
          }),
        }}
      />
    </div>
  );
}
