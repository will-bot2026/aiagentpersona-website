import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog | AI Agent Persona Guides",
  description: "Download the complete guide: When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog. Instant PDF download, 24 pages of actionable content.",
  openGraph: {
    title: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog",
    description: 'Complete guide with actionable strategies and expert insights.',
    url: 'https://aiagentpersona.com/guides/when-its-time-goodbye',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog",
    description: 'Complete guide — instant PDF download.',
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">When It&apos;s Time: The Compassionate Guide to Saying Goodbye to...</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🐕 When It&apos;s Time: The Compassionate Guide to Saying Goodbye to Your Dog
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                A Comprehensive, Data-Driven Guide — 24 pages of actionable insights.
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  Based on analysis of thousands of real community discussions, this guide delivers the information
                  you need — no fluff, no filler. Just proven strategies and actionable steps.
                </p>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>1. Chapter 1</li>
                  <li>2. Chapter 2</li>
                  <li>3. Chapter 3</li>
                  <li>4. Chapter 4</li>
                  <li>5. Chapter 5</li>
                  <li>6. Chapter 6</li>
                  <li>7. Chapter 7</li>
                  <li>8. Chapter 8</li>
                  <li>9. Chapter 9</li>
                  <li>10. Chapter 10</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Anyone dealing with this exact problem and needing a clear solution</li>
                  <li>• People who have tried the generic advice and need something that actually works</li>
                  <li>• Anyone who wants expert-level guidance without the consultant price tag</li>
                </ul>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🐕</div>
                  <div className="text-3xl font-bold text-gray-900">$17.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <span className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-bold opacity-75 cursor-not-allowed mb-3">
                  Coming Soon — $17.99
                </span>

                <div className="text-xs text-gray-500 text-center mb-6">
                  PDF download • 24 pages • Available soon
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>24 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📋</span>
                    <span>Actionable strategies and step-by-step guides</span>
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
            name: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog",
            description: 'Complete guide with actionable strategies based on real community research.',
            numberOfPages: 24,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/when-its-time-goodbye',
            inLanguage: 'en',
            offers: {
              '@type': 'Offer',
              price: '17.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/PreOrder',
              url: 'https://aiagentpersona.com/guides/when-its-time-goodbye',
            },
          }),
        }}
      />
    </div>
  );
}
