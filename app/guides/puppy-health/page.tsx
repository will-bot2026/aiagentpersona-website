import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is My Puppy Sick? Emergency Guide - When to Go to the Vet | AI Agent Persona Guides',
  description: 'Know when to rush to the vet and when to wait. The 10 emergency warning signs, symptom decision tree, weekly health check routine, and first aid kit checklist for new puppy owners.',
  keywords: ['puppy sick signs', 'when to take puppy to vet', 'puppy emergency guide', 'puppy health symptoms', 'puppy first aid', 'new puppy owner guide'],
  openGraph: {
    title: 'Is My Puppy Sick? The New Owner Emergency Guide',
    description: 'Know when to rush to the vet and when to wait. 10 emergency warning signs every puppy owner must know.',
    url: 'https://aiagentpersona.com/guides/puppy-health',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is My Puppy Sick? Emergency Guide',
    description: 'When to rush to the vet, when to wait, and how to tell the difference.',
  },
};

export default function PuppyHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Puppy Health Emergency Guide</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🏥 Is My Puppy Sick? The New Owner Emergency Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                When to Rush to the Vet, When to Wait, and How to Tell the Difference
              </p>

              <div className="prose max-w-none">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-800 font-medium">
                    &quot;If your puppy is acting abnormally, assume illness, not moodiness.&quot;
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    — Advice that saved a puppy&apos;s life (r/puppy101, 551 upvotes)
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  This guide exists because a single piece of online advice saved a puppy&apos;s life. A new owner noticed their golden retriever was &quot;off&quot; — not greeting them, not interested in dinner. They almost dismissed it as moodiness. Instead, an emergency vet found a massive hidden abscess. Emergency surgery saved that puppy.
                </p>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>The Golden Rule: Abnormal = Vet</li>
                  <li>Know Your Puppy&apos;s Baseline</li>
                  <li>The 10 Warning Signs That Mean &quot;Go to the Vet NOW&quot;</li>
                  <li>Digestive Issues: Normal vs. Emergency</li>
                  <li>Lethargy &amp; Behavior Changes</li>
                  <li>Breathing Problems</li>
                  <li>Skin, Eyes, and Ears</li>
                  <li>Limping and Pain</li>
                  <li>Common Puppy Illnesses by Age</li>
                  <li>The Home Health Check (5-Minute Weekly Exam)</li>
                  <li>Building Your Puppy First Aid Kit</li>
                  <li>Vet Visit Preparation Checklist</li>
                  <li>Emergency Contacts Template</li>
                  <li>Quick Reference: Symptom Decision Tree</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">🚨 The 10 Emergency Warning Signs</h3>
                <div className="bg-red-50 rounded-lg p-4 mb-8">
                  <ol className="space-y-2 text-gray-800">
                    <li><strong>1.</strong> Not eating for 24+ hours</li>
                    <li><strong>2.</strong> Vomiting multiple times in a few hours</li>
                    <li><strong>3.</strong> Bloody or black stool</li>
                    <li><strong>4.</strong> Extreme lethargy</li>
                    <li><strong>5.</strong> Difficulty breathing</li>
                    <li><strong>6.</strong> Distended/bloated abdomen</li>
                    <li><strong>7.</strong> Seizures</li>
                    <li><strong>8.</strong> Ingestion of toxic substance</li>
                    <li><strong>9.</strong> Trauma / Hit by car</li>
                    <li><strong>10.</strong> Collapse or loss of consciousness</li>
                  </ol>
                </div>

                <h3 className="text-xl font-bold mb-3">✅ Key Features</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Symptom Decision Tree</strong> — Print it. Put it on your fridge. Know exactly what to do.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Normal vs. Emergency</strong> — For every symptom, know when to wait and when to act.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>5-Minute Weekly Health Check</strong> — Catch problems early with a simple routine.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>First Aid Kit Checklist</strong> — Everything you need, nothing you don&apos;t.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Emergency Contacts Template</strong> — Fill-in-the-blank, ready to print.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• First-time puppy owners who worry about every symptom</li>
                  <li>• Anyone who wants a clear framework for health decisions</li>
                  <li>• Owners who want to be prepared before an emergency happens</li>
                  <li>• Anyone who&apos;s ever Googled &quot;is my puppy sick&quot; at 2 AM</li>
                </ul>
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
                  href="https://clearlytics-sigma.vercel.app/l/puppy-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700 transition mb-3"
                >
                  Buy Now — Instant Download + Money-Back Guarantee
                </a>

                <div className="text-xs text-gray-500 text-center mb-6">
                  Instant PDF download • 20 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>20 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🚨</span>
                    <span>10 emergency warning signs</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🌳</span>
                    <span>Printable symptom decision tree</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🩺</span>
                    <span>Weekly health check routine</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🧰</span>
                    <span>First aid kit checklist</span>
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
            name: 'Is My Puppy Sick? The New Owner Emergency Guide',
            description: 'When to Rush to the Vet, When to Wait, and How to Tell the Difference',
            numberOfPages: 20,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/puppy-health',
            inLanguage: 'en',
            genre: 'Pet Health',
            offers: {
              '@type': 'Offer',
              price: '19.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/puppy-health',
            },
          }),
        }}
      />
    </div>
  );
}
