import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Emergency Signage for Dogs Traveling in Cars: A Complete Guide | AI Agent Persona Guides',
  description: 'Protect your dog during car travel emergencies. Learn what signage to display, what critical info to include, and how to create an emergency plan that could save your dog\'s life.',
  keywords: ['dog car travel safety', 'dog emergency signage', 'traveling with dogs', 'dog car emergency', 'pet safety car'],
  openGraph: {
    title: 'Emergency Signage for Dogs Traveling in Cars: A Complete Guide',
    description: 'What happens to your dog if something happens to you while driving? This guide ensures responders know exactly what to do.',
    url: 'https://aiagentpersona.com/guides/emergency-signage-dogs-traveling',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Signage for Dogs Traveling in Cars',
    description: 'Protect your dog during car emergencies. A complete guide.',
  },
};

export default function EmergencySignageDogsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Emergency Signage for Dogs Traveling</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🚗 Emergency Signage for Dogs Traveling in Cars
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                A Complete Guide — Protect Your Dog When You Can&apos;t Speak for Yourself
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What Happens to Your Dog if Something Happens to You?</h2>
                <p className="text-gray-700 mb-6">
                  You&apos;re driving home from the vet. Suddenly, a medical emergency. You lose consciousness. Your dog is trapped in the car — confused, frightened, and vulnerable. Emergency responders arrive but don&apos;t immediately realize there&apos;s a dog inside. Precious minutes pass. <strong>This actually happens.</strong> The solution takes less than 30 minutes to implement and could save your dog&apos;s life.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-800 font-medium">
                    &quot;Brachycephalic breeds — Bulldogs, Pugs, French Bulldogs — are at extreme risk in warm vehicles. Even moderate temperatures can be dangerous. Your signage can alert responders before it&apos;s too late.&quot;
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-3">📖 Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
                  <li>Why Emergency Signage Matters</li>
                  <li>Assessing Your Dog&apos;s Vulnerabilities</li>
                  <li>Essential Information to Include</li>
                  <li>Design Principles That Work</li>
                  <li>Creating Your Signage — DIY Step by Step</li>
                  <li>Professional Design Options</li>
                  <li>Beyond the Sign — Communication Planning</li>
                  <li>Real Emergency Scenarios — What Actually Happens</li>
                  <li>Legal Considerations and Liability</li>
                  <li>Creating Your Complete Emergency Plan</li>
                </ol>

                <h3 className="text-xl font-bold mb-3">✅ What This Guide Covers</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Vulnerability Assessment</strong> — Breed-specific risks, medical conditions, behavioral traits to communicate.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Exact Sign Format</strong> — What to write, how large to make it, and where to place it for maximum visibility.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>DIY + Professional Options</strong> — Create effective signage for $5 or less, or order professional versions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Full Emergency Plan</strong> — Beyond signage: who has your car key, who is authorized to take your dog, and what to put in a glove compartment emergency packet.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Legal Protections</strong> — Understand liability and how proper signage protects both you and Good Samaritans.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-3">🐾 Who Is This For?</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>• Anyone who regularly travels with their dog in a car</li>
                  <li>• Owners of brachycephalic, senior, or medically complex dogs</li>
                  <li>• Road trip families with pets</li>
                  <li>• Anyone who has ever wondered &quot;what if something happens to me?&quot;</li>
                </ul>

                {/* Testimonials */}
                <h3 className="text-xl font-bold mb-3">⭐ What Readers Are Saying</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;My Bulldog has serious breathing issues. I never thought about what would happen if I was in an accident. This guide walked me through everything — now I have signage AND a full emergency packet in the glove box.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Angela D., Bulldog owner</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <p className="text-gray-700 italic">&quot;22 pages of practical, clear information. The vulnerability assessment alone made me realize my senior Lab&apos;s medications needed to be listed. Worth every penny.&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— Robert H., Lab owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🚗</div>
                  <div className="text-3xl font-bold text-gray-900">$24.99</div>
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
                  Instant PDF download • 22 pages • Money-back guarantee
                </div>

                <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span>📄</span>
                    <span>22 professionally formatted pages</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🚨</span>
                    <span>Sign templates and formats</span>
                  </div>
                  <div className="flex gap-2">
                    <span>🐕</span>
                    <span>Breed-specific vulnerability guide</span>
                  </div>
                  <div className="flex gap-2">
                    <span>📋</span>
                    <span>Emergency plan worksheet</span>
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
            name: 'Emergency Signage for Dogs Traveling in Cars: A Complete Guide',
            description: 'Complete guide to creating emergency signage and plans to protect your dog during car travel emergencies.',
            numberOfPages: 22,
            bookFormat: 'https://schema.org/EBook',
            url: 'https://aiagentpersona.com/guides/emergency-signage-dogs-traveling',
            inLanguage: 'en',
            genre: 'Pet Safety',
            offers: {
              '@type': 'Offer',
              price: '24.99',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: 'https://aiagentpersona.com/guides/emergency-signage-dogs-traveling',
            },
          }),
        }}
      />
    </div>
  );
}
