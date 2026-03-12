import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Guides - AI Agent Persona | Expert Dog Training & Health Guides',
  description: 'Professional puppy training guides and pet health resources. Step-by-step solutions for puppy biting, emergency health decisions, and more. Backed by proven techniques.',
  openGraph: {
    title: 'Pet Guides - AI Agent Persona',
    description: 'Professional puppy training guides and pet health resources. Step-by-step solutions backed by proven techniques.',
    url: 'https://aiagentpersona.com/guides',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Guides - AI Agent Persona',
    description: 'Professional puppy training guides and pet health resources.',
  },
};

const guides = [
  {
    slug: 'puppy-biting',
    title: 'The Complete Puppy Biting Solution',
    subtitle: 'Stop Nipping, Mouthing, and Aggressive Biting in 14 Days or Less',
    description: 'A step-by-step guide based on proven positive-reinforcement techniques used by professional dog trainers worldwide. Covers the reverse timeout technique, bite inhibition training, managing the witching hour, special cases for herding breeds, and a complete 14-day action plan.',
    pages: 17,
    price: '$9.99',
    emoji: '🐕',
    tags: ['Puppy Training', 'Bite Inhibition', 'Positive Reinforcement', 'New Puppy Owner'],
    pdfFile: '/guides/the-complete-puppy-biting-solution.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_inNfhScAzsfH9SBN4OJhg0Es0DrVsQ8hYyl9f0qX319',
  },
  {
    slug: 'puppy-health',
    title: 'Is My Puppy Sick? The New Owner Emergency Guide',
    subtitle: 'When to Rush to the Vet, When to Wait, and How to Tell the Difference',
    description: 'The definitive guide for new puppy owners who need to know when something is truly wrong. Covers the 10 emergency warning signs, normal vs. emergency digestive issues, breathing problems, a symptom decision tree, weekly health check routine, and a complete first aid kit checklist.',
    pages: 19,
    price: '$9.99',
    emoji: '🏥',
    tags: ['Puppy Health', 'Emergency Guide', 'Vet Decisions', 'New Puppy Owner'],
    pdfFile: '/guides/is-my-puppy-sick-emergency-guide.pdf',
    polarUrl: 'https://buy.polar.sh/polar_cl_y3Ah8rsCoRXYJaUHLm9qzEF0e8FHez3fusNbK1Wh1de',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🐾 Pet Guides
            </h1>
            <p className="text-xl opacity-90 mb-2">
              Expert-crafted guides for new puppy owners. Real solutions backed by professional dog trainers.
            </p>
            <p className="text-sm opacity-70">
              Instant PDF download • Proven techniques • Money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide) => (
              <div
                key={guide.slug}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center">
                  <div className="text-6xl mb-4">{guide.emoji}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h2>
                  <p className="text-sm text-gray-600 italic">{guide.subtitle}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>📄 {guide.pages} pages</span>
                    <span>📱 PDF format</span>
                    <span>⬇️ Instant download</span>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <a
                      href={guide.polarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-600 text-white text-center py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
                    >
                      Buy {guide.price}
                    </a>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="flex-1 border border-emerald-600 text-emerald-600 text-center py-3 rounded-lg font-bold hover:bg-emerald-50 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Our Guides?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold mb-2">Research-Backed</h3>
                <p className="text-sm text-gray-600">
                  Based on thousands of real success stories from professional trainers and verified owner experiences.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold mb-2">Actionable Steps</h3>
                <p className="text-sm text-gray-600">
                  No fluff. Every guide includes specific day-by-day action plans and printable cheat sheets.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-gray-600">
                  Not satisfied? Full refund, no questions asked. We stand behind our guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Pet Guides',
            description: 'Expert-crafted guides for new puppy owners',
            url: 'https://aiagentpersona.com/guides',
            hasPart: guides.map((g) => ({
              '@type': 'Book',
              name: g.title,
              description: g.description,
              numberOfPages: g.pages,
              bookFormat: 'https://schema.org/EBook',
              url: `https://aiagentpersona.com/guides/${g.slug}`,
              offers: {
                '@type': 'Offer',
                price: g.price.replace('$', ''),
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            })),
          }),
        }}
      />
    </div>
  );
}
