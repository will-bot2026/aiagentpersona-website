import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy Sleep Training: The Complete Guide to Sleeping Through the Night | AI Agent Persona Guides',
  description: 'From 3 AM wake-ups to full nights in 4-8 weeks. Science-backed guide covering crate setup, bedtime routines, breed-specific adjustments, and week-by-week milestones. 23 pages of real actionable advice.',
  keywords: ['puppy sleep training', 'puppy sleeping through the night', 'puppy night waking', 'crate training at night', 'puppy bedtime routine', 'how to get puppy to sleep'],
  openGraph: {
    title: 'Puppy Sleep Training: The Complete Guide to Sleeping Through the Night',
    description: 'From 3 AM wake-ups to full nights in 4-8 weeks. Science-backed, 23-page guide with week-by-week milestones.',
    url: 'https://aiagentpersona.com/guides/puppy-sleep-training',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Sleep Training: The Complete Guide',
    description: 'Stop the 3 AM wake-ups. Science-backed puppy sleep guide with week-by-week milestones.',
  },
};

export default function PuppySleepTrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Sleep Training</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                😴 Puppy Sleep Training: The Complete Guide to Sleeping Through the Night
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                From 3 AM Wake-Ups to Full Nights in 4-8 Weeks
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  You&apos;re on your third sleepless night, Googling &ldquo;why won&apos;t my puppy sleep&rdquo; at 3 AM. This guide is what you need. Based on analysis of thousands of real puppy owner experiences combined with veterinary sleep research — not generic advice, but what actually works.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
                  <p className="text-emerald-800 font-medium">
                    &quot;A puppy&apos;s inability to sleep through the night is not a behavior problem — it&apos;s biology. But with the right environment and consistent responses, almost every healthy puppy can sleep through by 4-6 months.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Why Your Puppy Can&apos;t Sleep — And What&apos;s Actually Normal</li>
                  <li>Setting Up the Perfect Sleep Environment</li>
                  <li>The First Night: A Step-by-Step Survival Plan</li>
                  <li>Crate Training Done Right: The Foundation of Good Sleep</li>
                  <li>Building a Sleep Schedule That Actually Works</li>
                  <li>Middle-of-the-Night Wake-Ups: The Definitive Response Guide</li>
                  <li>Common Sleep Mistakes That Set You Back Weeks</li>
                  <li>Week-by-Week Sleep Milestones: What to Expect</li>
                  <li>Breed-Specific Sleep Considerations</li>
                  <li>When to Transition Out of the Crate and What Comes Next</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Topics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The biology of puppy sleep</strong> — Why a 9-week puppy wakes at 3 AM and what the realistic timeline is by age.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Perfect sleep environment setup</strong> — Crate sizing, location, temperature, darkness, and sound — each one impacts sleep quality.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Night one survival plan</strong> — Exact pre-bed checklist, bedtime routine, what to do when crying starts, and the Two-Minute Rule.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Middle-of-night response protocol</strong> — How to distinguish toilet needs from attention-seeking and respond correctly to each.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Week-by-week milestones</strong> — Clear benchmarks for weeks 1, 2, 3-4, 5-8, and months 3-4 so you know if you&apos;re on track.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Breed-specific adjustments</strong> — Small breeds, working breeds, brachycephalic breeds, anxious breeds, and giant breeds each need different approaches.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>8 mistakes that set you back weeks</strong> — Including the most common one: inconsistency between caregivers.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• New puppy owners in the exhausting first weeks home</li>
                  <li>• Anyone whose puppy is still waking multiple times per night</li>
                  <li>• Owners who tried crate training but hit a wall</li>
                  <li>• Households with inconsistent training between family members</li>
                  <li>• Anyone wanting a concrete week-by-week plan, not vague advice</li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <p className="text-amber-800 text-sm">
                    <strong>What makes this different:</strong> This guide was built from analyzing thousands of real owner experiences in r/puppy101 and r/dogtraining combined with veterinary behavioral research. It tells you what the timeline actually is, not what you wish it was — and gives you specific actions for each phase, not just principles.
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📋 The Week-by-Week Reality Check</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3 p-3 bg-gray-50 rounded">
                    <span className="font-bold text-gray-500 shrink-0">Week 1-2:</span>
                    <span className="text-gray-700">Survive. 2-4 toilet trips per night is normal. Learn the schedule.</span>
                  </div>
                  <div className="flex gap-3 p-3 bg-gray-50 rounded">
                    <span className="font-bold text-gray-500 shrink-0">Week 3-4:</span>
                    <span className="text-gray-700">Momentum. One clear 4-5 hour sleep block appearing. Settling faster.</span>
                  </div>
                  <div className="flex gap-3 p-3 bg-gray-50 rounded">
                    <span className="font-bold text-gray-500 shrink-0">Week 5-8:</span>
                    <span className="text-gray-700">Consolidation. 0-1 toilet trips. 5-6 hour stretches becoming normal.</span>
                  </div>
                  <div className="flex gap-3 p-3 bg-gray-50 rounded">
                    <span className="font-bold text-gray-500 shrink-0">Month 3-4:</span>
                    <span className="text-gray-700">Full nights achievable. Begin transition out of crate planning.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">😴</div>
                  <div className="text-3xl font-bold text-gray-900">$24.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_VMtnxLtURyTfMk9cBv7SiheMisyX6tnyvpOYb0qd2fv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — Instant Download
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 23 pages • 30-day money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>23 pages of actionable content</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📅</span>
                    <span>Week-by-week milestone tracker</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🕐</span>
                    <span>Sample daily schedule included</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🐕</span>
                    <span>Breed-specific adjustments</span>
                  </div>
                  <div className="flex gap-2">
                    <span>♻️</span>
                    <span>30-day money-back guarantee</span>
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
            name: 'Puppy Sleep Training: The Complete Guide to Sleeping Through the Night',
            description: 'From 3 AM wake-ups to full nights in 4-8 weeks. Science-backed guide with week-by-week milestones.',
            numberOfPages: 23,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-sleep-training',
            inLanguage: 'en',
            genre: 'Pet Training',
            offers: {
              '@type': 'Offer',
              price: '24.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-sleep-training',
            },
          }),
        }}
      />
    </div>
  );
}
