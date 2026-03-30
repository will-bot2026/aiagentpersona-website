import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "When Your Husband Wishes You Hadn't Got a Puppy: The Complete Couples Guide | AI Agent Persona Guides",
  description: 'Save your relationship AND keep your puppy. A guide to fair division of puppy duties, conflict resolution, building partner buy-in, and turning puppy stress into shared joy.',
  keywords: ['puppy couples guide', 'husband hates puppy', 'puppy stress relationship', 'puppy ownership couples', 'puppy conflict resolution'],
  openGraph: {
    title: "When Your Husband Wishes You Hadn't Got a Puppy: The Complete Couples Guide",
    description: 'Save your relationship AND keep your puppy. Science-backed strategies for couples navigating puppy ownership.',
    url: 'https://aiagentpersona.com/guides/puppy-couples-guide',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "When Your Husband Wishes You Hadn't Got a Puppy",
    description: 'Save your relationship AND keep your puppy with this couples guide.',
  },
};

export default function PuppyCouplesGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Couples Guide</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                💑 When Your Husband Wishes You Hadn&apos;t Got a Puppy: The Complete Couples Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Save Your Relationship AND Keep Your Puppy — Real Solutions for Couples
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  You got the puppy. Your partner is struggling. Now both of you are stressed, sleep-deprived, and arguing. This guide is for couples navigating the real — and often overlooked — relationship strain of new puppy ownership.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
                  <p className="text-emerald-800 font-medium">
                    &quot;The first 90 days with a puppy are the hardest on relationships. But with the right framework, most couples come out stronger — and with a dog they both love.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Why Puppies Strain Relationships (The Research)</li>
                  <li>The 5 Core Puppy Conflicts — and Why They Happen</li>
                  <li>Fair Division of Puppy Duties (The Responsibility Map)</li>
                  <li>Conflict Resolution Scripts That Actually Work</li>
                  <li>Building Partner Buy-In When It&apos;s Too Late to Ask</li>
                  <li>The Sleep Deprivation Trap and How to Survive It Together</li>
                  <li>When Your Partner Says &quot;The Dog Has to Go&quot;</li>
                  <li>The 30-Day Relationship Recovery Plan</li>
                  <li>Success Stories: Couples Who Almost Gave Up</li>
                  <li>Talking to Kids About Puppy Stress</li>
                  <li>When to Get Outside Help (Trainer vs. Couples Therapist)</li>
                  <li>Building a Life You Both Love — With the Dog</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Strategies Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Responsibility Map</strong> — A printable framework to split puppy duties fairly, based on each partner&apos;s schedule, tolerance, and strengths</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Conflict Resolution Scripts</strong> — Exact words to use when tensions peak, including the &quot;night duty swap&quot; conversation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Buy-In Building Framework</strong> — How to help a resistant partner genuinely bond with the puppy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The 30-Day Recovery Plan</strong> — A step-by-step guide to rebuilding relationship harmony while managing the puppy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The &quot;Ultimatum Conversation&quot; Guide</strong> — What to do when your partner says the dog has to go</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Sleep Strategy</strong> — How to handle night waking without resentment building</span>
                  </li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;My husband gave me an ultimatum: the dog or him. After reading this guide, we have a system that actually works and he&apos;s now the one walking her every morning.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Rachel M., Labrador owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;The responsibility map alone saved us. We stopped fighting about who was doing what and started actually working together. Worth 10x the price.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Chris & Dana T., Golden Retriever owners</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">💑 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Couples where one partner is significantly more reluctant about the puppy</li>
                  <li>• Partners feeling overwhelmed by the imbalance in puppy care duties</li>
                  <li>• Anyone who has had the &quot;maybe we made a mistake&quot; conversation</li>
                  <li>• Couples navigating sleep deprivation, financial stress, and puppy chaos together</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">💑</div>
                  <div className="text-3xl font-bold text-gray-900">$29.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://clearlytics-sigma.vercel.app/l/puppy-couples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — Instant Download + Money-Back Guarantee
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 11 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>11 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🗺️</span>
                    <span>Printable Responsibility Map</span>
                  </div>
                  <div className="flex gap-2">
                    <span>💬</span>
                    <span>Conflict resolution scripts</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📅</span>
                    <span>30-day relationship recovery plan</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🔒</span>
                    <span>Secure checkout via Polar</span>
                  </div>
                  <div className="flex gap-2">
                    <span>↩️</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800">
                  <strong>✅ Instant Access</strong> — Download your guide immediately after purchase. No shipping, no waiting.
                </div>
              </div>
            </div>
          </div>

          {/* Back to Guides */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/guides" className="text-emerald-600 hover:text-emerald-800 font-medium">
              ← Back to All Guides
            </Link>
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
            name: "When Your Husband Wishes You Hadn't Got a Puppy: The Complete Couples Guide",
            description: 'Save your relationship AND keep your puppy. Real solutions for couples navigating puppy ownership.',
            numberOfPages: 11,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-couples-guide',
            author: {
              '@type': 'Organization',
              name: 'AI Agent Persona',
            },
            offers: {
              '@type': 'Offer',
              price: '29.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </div>
  );
}
