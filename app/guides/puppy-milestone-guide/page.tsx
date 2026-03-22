import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy Milestone Guide: What Your Puppy Is Really Learning at 9, 12, 18 Months | AI Agent Persona Guides',
  description: 'Understand your puppy\'s brain at every stage from 9 to 18 months. Stop misinterpreting adolescent behavior as permanent problems. Know exactly what to expect and how to support development.',
  keywords: ['puppy development stages', 'puppy 9 months', 'puppy 12 months', 'puppy 18 months', 'puppy adolescence', 'teenage puppy behavior'],
  openGraph: {
    title: 'Puppy Milestone Guide: What Your Puppy Is Really Learning at 9, 12, and 18 Months',
    description: 'Your puppy hasn\'t forgotten their training. They\'re just growing up. Learn what\'s actually happening at each milestone.',
    url: 'https://aiagentpersona.com/guides/puppy-milestone-guide',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Milestone Guide: 9, 12, 18 Months',
    description: 'Understand what\'s really happening in your puppy\'s brain at each milestone.',
  },
};

export default function PuppyMilestoneGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Milestone Guide</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                📅 Puppy Milestone Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                What Your Puppy Is Really Learning at 9, 12, and 18 Months
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">&quot;My Puppy Forgot Everything!&quot; — No, They Didn&apos;t.</h2>
                <p className="text-gray-700 mb-6">
                  Your 9-month-old knew &quot;sit,&quot; &quot;stay,&quot; and &quot;come&quot; at 5 months. Now they&apos;re ignoring you, testing every boundary, and acting like they&apos;ve never been trained. This is completely normal — and completely temporary. <strong>This guide explains exactly what&apos;s happening in your puppy&apos;s brain at each milestone and what to do about it.</strong>
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                  <p className="text-purple-800 font-medium">
                    &quot;An 18-month-old dog is like a 16-year-old human with a driver&apos;s license. Mostly capable, judgment still developing. They need structure, not frustration.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Understanding Puppy Development Stages</li>
                  <li>The 9-Month Puppy — Late Puppyhood Skills and Challenges</li>
                  <li>Months 10-11 — The Rebellious Phase and Boundary Testing</li>
                  <li>12 Months — The One-Year Mark and Transitional Thinking</li>
                  <li>Months 13-15 — Adolescence Deepening and Personality Solidifying</li>
                  <li>Months 16-17 — The Homestretch and Emerging Adulthood</li>
                  <li>18 Months — Young Adulthood Arrives</li>
                  <li>Comparing the Stages — What Actually Changes</li>
                  <li>Common Mistakes Owners Make During This Period</li>
                  <li>Your Roadmap to Adult Dog Success</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What This Guide Covers</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The 9-Month Reality Check</strong> — Why &quot;selective hearing&quot; and boundary testing are developmentally normal (not failure).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Rebellious Phase (10-11 months)</strong> — How to stay consistent and avoid training regression during the toughest window.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Breed-by-Breed Timing</strong> — Giant breeds vs. small breeds: why a 9-month Chihuahua is different from a 9-month Great Dane.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Energy Management</strong> — Exercise requirements at each stage and how under-exercise creates &quot;bad behavior.&quot;</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The Breakthrough Moment</strong> — What changes at 18 months and why owners who stuck it out always say it was worth it.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Owners of puppies aged 9-18 months who are frustrated by regression</li>
                  <li>• Anyone who thinks their dog is &quot;broken&quot; or &quot;impossible to train&quot;</li>
                  <li>• New owners who want to understand what&apos;s ahead before the teenage phase hits</li>
                  <li>• Anyone comparing their puppy&apos;s development to unrealistic standards</li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;My 11-month-old Border Collie was driving me insane. I thought I&apos;d failed at training. This guide explained exactly what stage she was in and what to do. I felt like I could breathe again.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Cassie W., Border Collie owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;Wish I&apos;d had this when my Lab hit 9 months. The energy management section was eye-opening — turns out he needed 2 hours of REAL exercise, not just a walk.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Neil A., Labrador owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">📅</div>
                  <div className="text-3xl font-bold text-gray-900">$12.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_93a7f9a4-8d45-4358-bd7a-5bbec4c03c45"
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
                    <span>Month-by-month development guide</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🐕</span>
                    <span>Breed-specific timing differences</span>
                  </div>
                  <div className="flex gap-2">
                    <span>💪</span>
                    <span>Exercise requirements by stage</span>
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
            name: 'Puppy Milestone Guide: What Your Puppy Is Really Learning at 9, 12, and 18 Months',
            description: 'Understand your puppy\'s brain development from 9 to 18 months and navigate adolescence without frustration.',
            numberOfPages: 12,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-milestone-guide',
            inLanguage: 'en',
            genre: 'Pet Training',
            offers: {
              '@type': 'Offer',
              price: '12.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-milestone-guide',
            },
          }),
        }}
      />
    </div>
  );
}
