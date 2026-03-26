import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog | AI Agent Persona Guides",
  description: "Making the decision to let go is the hardest part of loving a dog. This compassionate guide walks you through quality-of-life assessment, the veterinary consultation, the medical process, being present at the end, grief, and living with the decision — with honesty and care.",
  openGraph: {
    title: "When It's Time: The Compassionate Guide to Saying Goodbye to Your Dog",
    description: 'A compassionate, honest guide to recognizing when it\'s time, what the process looks like, and how to grieve and heal.',
    url: 'https://aiagentpersona.com/guides/when-its-time-goodbye',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "When It's Time: Saying Goodbye to Your Dog",
    description: 'A compassionate guide to the hardest decision in dog ownership — with honesty, care, and clarity.',
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
          <span className="text-gray-900">When It&apos;s Time: Saying Goodbye to Your Dog</span>
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
                A Compassionate, Honest Guide to Recognizing When It&apos;s Time and Moving Through It
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What&apos;s Inside</h2>
                <p className="text-gray-700 mb-6">
                  Making the decision to euthanize your dog is one of the most difficult choices you&apos;ll ever face as a pet owner. Most owners don&apos;t know what to expect — not the signs, not the process, not what comes after. This guide walks you through every stage with honesty and compassion: from recognizing when quality of life has declined, through the veterinary process, to grief, memorials, and living with the decision you made out of love.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6">
                  <p className="text-emerald-800 font-medium">
                    &quot;The dogs I see live longest are those whose owners make the decision while they still have some good days left. Waiting until the dog is completely suffering is the thing owners regret most.&quot; — Veterinarian
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Recognizing the Signs — When Is It Really Time?</li>
                  <li>The Emotional Preparation</li>
                  <li>The Veterinary Consultation</li>
                  <li>Quality of Life Scoring Systems</li>
                  <li>Decision-Making Framework</li>
                  <li>The Medical Process Explained</li>
                  <li>Being Present in the Final Moment</li>
                  <li>Rituals and Memorials</li>
                  <li>Grief and Recovery</li>
                  <li>Living With the Decision</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What This Guide Covers</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Quality of Life Framework</strong> — The &quot;good day vs. bad day&quot; tracking method that helps you recognize when decline has crossed the threshold.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Medical Reality</strong> — What actually happens during euthanasia, so you&apos;re not surprised by anything when the moment comes.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>How to Be Present</strong> — Whether to stay in the room, what to say, how to hold space for your dog in their final moments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Grief Without Shame</strong> — The stages of pet grief that are real, valid, and often dismissed — and how to move through them.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">💙 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Dog owners with a seriously ill or aging dog who are beginning to face this decision</li>
                  <li>• Anyone who has recently lost a dog and needs help processing the grief</li>
                  <li>• Family members supporting someone who is going through this</li>
                  <li>• People who want to prepare emotionally before the time comes</li>
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
                  PDF download • Available soon
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>Compassionate, honest guidance</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📋</span>
                    <span>Quality of life scoring tools</span>
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
            description: 'A compassionate guide to recognizing when it\'s time, the euthanasia process, being present, grief, and living with the decision.',
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
