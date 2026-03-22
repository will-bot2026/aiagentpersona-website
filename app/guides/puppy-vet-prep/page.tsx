import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Puppy Vet Prep: Complete Pre-Visit Fasting & Nutrition Guide | AI Agent Persona Guides',
  description: 'The #1 mistake new puppy owners make before vet visits: feeding too close to the appointment. Learn the exact fasting protocol, 48-hour nutrition plan, and visit-day strategies for a calm, safe exam.',
  keywords: ['puppy vet visit prep', 'puppy fasting before vet', 'puppy vet appointment tips', 'puppy pre-visit nutrition', 'puppy vet anxiety'],
  openGraph: {
    title: 'Puppy Vet Prep: Complete Pre-Visit Fasting & Nutrition Guide',
    description: 'Avoid the #1 mistake: feeding your puppy too close to their vet visit. The complete fasting and nutrition protocol.',
    url: 'https://aiagentpersona.com/guides/puppy-vet-prep',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Vet Prep: Complete Pre-Visit Fasting Guide',
    description: 'The right way to prepare your puppy for a safe, calm vet visit.',
  },
};

export default function PuppyVetPrepPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Vet Prep</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🏥 Puppy Vet Prep
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Complete Pre-Visit Fasting &amp; Nutrition Guide
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">The Mistake That Lands Puppies in the ICU</h2>
                <p className="text-gray-700 mb-6">
                  The #1 mistake new puppy owners make is feeding a big meal 1-2 hours before a vet visit. A puppy&apos;s stomach is small, stress-sensitive, and still developing. Full stomach + vet anxiety = vomiting. Vomit during an exam = aspiration risk. <strong>This guide gives you the exact fasting protocol to keep your puppy safe, calm, and easier for the vet to examine.</strong>
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-yellow-800 font-medium">
                    &quot;Fasting doesn&apos;t cause hypoglycemia. Puppies have healthy glycogen reserves. A 6-8 hour fast is completely safe — and significantly reduces vomiting risk during exams.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Pre-Vet Visit Checklist</li>
                  <li>Puppy Digestive System — Why It&apos;s Different</li>
                  <li>The 48-Hour Nutrition Plan (Step-by-Step)</li>
                  <li>Common Mistakes That Cause Vomiting (And How to Avoid Them)</li>
                  <li>Special Situations — Surgery, Blood Work, Ultrasound</li>
                  <li>The Vet Visit Itself — What to Expect and How to Help</li>
                  <li>Building Vet Visit Resilience Over Time</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What You&apos;ll Learn</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>The 48-Hour Protocol</strong> — Exactly what to feed (and when to stop) the day before and morning of the appointment.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Hydration Rules</strong> — When water is fine, when to remove the bowl, and why hydration is non-negotiable.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Special Visit Types</strong> — Different protocols for surgery, blood work, ultrasound, emergency visits, and same-day multi-visits.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>7 Common Mistakes</strong> — Real examples of owners who fed too close to the appointment and what happened.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Post-Visit Recovery</strong> — How long to wait before feeding after the exam and what to watch for at home.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• New puppy owners preparing for their first vet visits</li>
                  <li>• Anyone whose puppy has vomited at the vet before</li>
                  <li>• Owners of brachycephalic, small-breed, or anxious puppies</li>
                  <li>• Puppies scheduled for surgery or procedures requiring anesthesia</li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;My French Bulldog used to vomit at every single vet visit. Followed the 48-hour protocol and she made it through her last three appointments without a single incident.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Priya S., French Bulldog owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;I had no idea about the aspiration risk. My vet never told me about fasting protocols. This guide should be handed out at every puppy&apos;s first visit.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Steven C., new puppy parent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🏥</div>
                  <div className="text-3xl font-bold text-gray-900">$19.99</div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>

                <a
                  href=""
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
                    <span>📋</span>
                    <span>48-hour nutrition protocol</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🚨</span>
                    <span>Special visit type protocols</span>
                  </div>
                  <div className="flex gap-2">
                    <span>⚠️</span>
                    <span>7 common mistakes to avoid</span>
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
            name: 'Puppy Vet Prep: Complete Pre-Visit Fasting & Nutrition Guide',
            description: 'The exact fasting and nutrition protocol to keep your puppy safe, calm, and easy to examine at the vet.',
            numberOfPages: 11,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-vet-prep',
            inLanguage: 'en',
            genre: 'Pet Health',
            offers: {
              '@type': 'Offer',
              price: '19.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-vet-prep',
            },
          }),
        }}
      />
    </div>
  );
}
