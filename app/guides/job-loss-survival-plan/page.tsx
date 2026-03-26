import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Job Loss Survival Plan: What to Do the First 30 Days | AI Agent Persona',
  description: 'Lost your job? This 28-page guide covers the first 24 hours, unemployment benefits, financial triage, job search strategy, bridge income, mental health, and how to nail your next role.',
  keywords: ['job loss guide', 'lost my job what to do', 'unemployment benefits guide', 'job search strategy', 'financial survival after job loss', 'failed probation what to do', 'job loss recovery'],
  openGraph: {
    title: 'Job Loss Survival Plan: What to Do the First 30 Days After Losing Your Job',
    description: 'Stop panicking. Start recovering. Real, actionable advice for the first 30 days after job loss -- not generic platitudes.',
    url: 'https://aiagentpersona.com/guides/job-loss-survival-plan',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Loss Survival Plan: What to Do the First 30 Days',
    description: 'The complete recovery playbook for the first 30 days after losing your job.',
  },
};

export default function JobLossSurvivalPlanPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Job Loss Survival Plan</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                💼 Job Loss Survival Plan: What to Do the First 30 Days After Losing Your Job
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Stop Panicking. Start Recovering. Step-by-step guidance for the hardest weeks of your career.
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  Losing your job is one of the most stressful things that can happen to a professional adult. Most
                  advice online is either too generic (&quot;update your resume!&quot;) or too narrow. This 28-page guide
                  covers everything you actually need to know -- from the first 24 hours through your first 90 days in
                  a new role. Real advice based on how the system actually works.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    &quot;The people who recover fastest from job loss are almost always the ones who allow themselves to
                    learn from the experience rather than just survive it.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>The First 24 Hours: Don&apos;t Panic, Do This Instead</li>
                  <li>Filing for Unemployment: Leave No Money on the Table</li>
                  <li>The Financial Triage Plan: Stretch Your Runway</li>
                  <li>Rebuilding Your Story: How to Explain What Happened</li>
                  <li>The Job Search Strategy That Actually Works</li>
                  <li>Your Resume and LinkedIn: Getting Found and Getting Clicks</li>
                  <li>Moving to a New City for Work: The Isolation Factor</li>
                  <li>Short-Term Income: Bridging the Gap While You Search</li>
                  <li>Mental Health During Job Loss: The Stuff Nobody Talks About</li>
                  <li>Your First 90 Days in the New Role: Not Making the Same Mistake</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ Key Topics Covered</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>First 24 Hours Playbook</strong> -- Exactly what to do (and not do) in the first day after losing your job</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>Unemployment Benefits Guide</strong> -- How to file, how to appeal a denial, how much to expect</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>Financial Triage System</strong> -- The exact calls to make, expenses to cut, and backstops to use</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>Interview Answer Framework</strong> -- How to explain job loss, failed probation, or short tenure honestly and well</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>70/30 Job Search Rule</strong> -- Why applications alone fail and what to do instead</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>ATS Resume Strategy</strong> -- How to write a resume that gets past the robots and gets clicks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>Bridge Income Options</strong> -- 10+ ways to generate income within days while you search</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>Mental Health Reality Check</strong> -- What job loss actually does to your brain, and how to manage it</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">✓</span>
                    <span><strong>First 90 Days Success Blueprint</strong> -- How to start your next role so you don&apos;t repeat the same patterns</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🎯 Who This Guide Is For</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>✓ Anyone who just lost their job and doesn&apos;t know what to do first</li>
                  <li>✓ People who failed a probationary period or were let go unexpectedly</li>
                  <li>✓ Those who relocated for a job that didn&apos;t work out</li>
                  <li>✓ Anyone who wants a clear, comprehensive recovery plan -- not scattered advice</li>
                  <li>✓ People supporting a partner or family member through job loss</li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-3">📊 Guide Specs</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Pages:</span>
                      <span className="ml-2 font-medium">28 pages</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Word count:</span>
                      <span className="ml-2 font-medium">7,700+ words</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Reading time:</span>
                      <span className="ml-2 font-medium">~39 minutes</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Format:</span>
                      <span className="ml-2 font-medium">Instant PDF download</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Chapters:</span>
                      <span className="ml-2 font-medium">10 complete chapters</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Level:</span>
                      <span className="ml-2 font-medium">Beginner-friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">💼</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Job Loss Survival Plan
                    </h2>
                    <p className="text-gray-500 text-sm">28-page PDF guide</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600">$24.99</div>
                    <div className="text-sm text-gray-500 mt-1">One-time purchase · Instant download</div>
                  </div>

                  <a
                    href="https://buy.polar.sh/polar_cl_5Ur6jD4lMjTuDllFtpk3l4rIU4DIIjmjDk7Sq2frw3G"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors text-lg mb-4"
                  >
                    Get the Guide -- $24.99
                  </a>

                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Instant PDF download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Full 30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>10 complete chapters, no filler</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>7,700+ words of real advice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>First 90 days blueprint included</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-400 text-center">
                      Secure checkout via Polar. Accepted: Visa, Mastercard, Amex, Apple Pay, Google Pay.
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link href="/guides" className="text-sm text-gray-500 hover:text-blue-600">
                    &larr; Browse all guides
                  </Link>
                </div>
              </div>
            </div>
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
            name: 'Job Loss Survival Plan: What to Do the First 30 Days After Losing Your Job',
            description: 'A comprehensive 28-page guide covering unemployment benefits, financial triage, job search strategy, bridge income options, mental health, and how to succeed in your next role.',
            numberOfPages: 28,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/job-loss-survival-plan',
            author: {
              '@type': 'Organization',
              name: 'AI Agent Persona',
            },
            publisher: {
              '@type': 'Organization',
              name: 'AI Agent Persona',
            },
            offers: {
              '@type': 'Offer',
              price: '24.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://buy.polar.sh/polar_cl_5Ur6jD4lMjTuDllFtpk3l4rIU4DIIjmjDk7Sq2frw3G',
            },
            keywords: 'job loss guide, lost my job what to do, unemployment benefits, job search strategy, financial recovery after job loss',
          }),
        }}
      />
    </div>
  );
}
