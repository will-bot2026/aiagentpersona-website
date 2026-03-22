import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy Crating Mastery: Stop Over-Crating and Build Confidence | AI Agent Persona Guides',
  description: 'The complete guide to crate training without over-crating. Age-appropriate schedules, positive association building, nighttime routines, and troubleshooting anxiety — so your puppy grows into a confident adult.',
  keywords: ['puppy crate training', 'crate training guide', 'puppy crating schedule', 'stop over-crating', 'puppy separation anxiety crate'],
  openGraph: {
    title: 'Puppy Crating Mastery: Stop Over-Crating and Build Confidence in Your Puppy',
    description: 'Crating too much is as harmful as crating too little. Learn the right schedules, techniques, and mindset for confident puppy development.',
    url: 'https://aiagentpersona.com/guides/puppy-crating-mastery',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Crating Mastery',
    description: 'Stop over-crating. Build a confident, well-adjusted puppy.',
  },
};

export default function PuppyCratingMasteryPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Crating Mastery</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🏠 Puppy Crating Mastery
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Stop Over-Crating and Build Confidence in Your Puppy
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">More Crate Time ≠ Better Behavior</h2>
                <p className="text-gray-700 mb-6">
                  Most owners believe more crate time equals faster housetraining and better behavior. The opposite is often true. Puppies spending 16+ hours daily in a crate are under developmental arrest — missing critical socialization, muscle development, and confidence-building. <strong>This guide teaches you to crate strategically, not compulsively.</strong>
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    &quot;The crate should be a place the puppy CHOOSES to go — not a place you put them. Building positive associations changes everything.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Understanding Puppy Crate Needs vs. Overuse</li>
                  <li>Age-Appropriate Crate Schedules That Actually Work</li>
                  <li>Building a Crate Your Puppy Actually Wants to Enter</li>
                  <li>The Supervised vs. Unsupervised Free Space Rule</li>
                  <li>Troubleshooting Crate-Related Anxiety and Behavior Problems</li>
                  <li>Nighttime Crating: Building Natural Sleep Rhythms</li>
                  <li>Socialization and Play Don&apos;t Happen in a Crate</li>
                  <li>Transitioning From Full-Time to Part-Time Crating</li>
                  <li>Common Mistakes Parents Make (And How to Avoid Them)</li>
                  <li>Building a Confident, Adjusted Adult (The Goal)</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Topics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Age-by-Age Schedules</strong> — Exact daily crate hours for 8-12 weeks, 12-16 weeks, and 4-6 months with sample day plans.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Positive Association Building</strong> — The 2-week crate introduction that makes your puppy run toward the crate, not away.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Nighttime Protocols</strong> — Sleep training, middle-of-night potty trips, and the overnight transition timeline.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Anxiety Troubleshooting</strong> — What to do when your puppy cries, refuses to enter, or shows panic behaviors.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Freedom Transition</strong> — Step-by-step guide from full-time crating to supervised free roam to full house freedom.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• New puppy owners starting crate training from scratch</li>
                  <li>• Owners whose puppy cries, panics, or hates the crate</li>
                  <li>• Anyone worried they might be over-crating</li>
                  <li>• Families struggling with nighttime whining and sleep routines</li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;I was crating my 10-week-old for 12+ hours a day. She was getting more anxious, not less. This guide showed me exactly why and gave me a realistic schedule. Night and day difference in 2 weeks.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Lauren B., Golden Retriever owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;The nighttime protocol chapter alone is worth $12.99. My puppy went from howling every hour to sleeping through the night in 10 days.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— David P., Labrador owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🏠</div>
                  <div className="text-3xl font-bold text-gray-900">$12.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_678-ce98beea2b43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition mb-3"
                >
                  Buy Now — $12.99
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
                    <span>📅</span>
                    <span>Age-appropriate daily schedules</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🌙</span>
                    <span>Nighttime sleep training protocol</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🔧</span>
                    <span>Anxiety troubleshooting guide</span>
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
            name: 'Puppy Crating Mastery: Stop Over-Crating and Build Confidence in Your Puppy',
            description: 'Age-appropriate crate schedules and techniques to raise a confident, well-adjusted puppy without over-crating.',
            numberOfPages: 12,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-crating-mastery',
            inLanguage: 'en',
            genre: 'Pet Training',
            offers: {
              '@type': 'Offer',
              price: '12.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-crating-mastery',
            },
          }),
        }}
      />
    </div>
  );
}
