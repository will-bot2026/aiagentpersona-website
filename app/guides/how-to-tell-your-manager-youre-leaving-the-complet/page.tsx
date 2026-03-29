import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Tell Your Manager You're Leaving: The Complete Resignation Guide | AI Agent Persona",
  description: "Dreading the resignation conversation? This 19-page guide covers exactly what to say, when to say it, how to write your resignation letter, and how to protect your reputation on the way out.",
  keywords: ['how to resign', 'how to tell manager leaving', 'resignation guide', 'resignation letter', 'quitting job professionally'],
  openGraph: {
    title: "How to Tell Your Manager You're Leaving",
    description: 'The complete resignation playbook — from the first words to your last day.',
    url: 'https://aiagentpersona.com/guides/how-to-tell-your-manager-youre-leaving-the-complet',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
};

export default function ResignationGuidePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Resignation Guide</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                👔 How to Tell Your Manager You're Leaving
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                The Complete Resignation Guide
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">The Conversation Nobody Teaches You How to Have</h2>
                <p className="text-gray-700 mb-6">
                  You have a new job. You are ready to leave. But the thought of sitting across from your manager
                  and saying the words makes your stomach drop. What do you say? When? How do you handle
                  their reaction? What goes in the letter? This guide answers all of it.
                </p>

                <h2 className="text-2xl font-bold mb-4">What This Guide Covers</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything to do BEFORE the conversation (the checklist most people skip)',
                    'Exactly how to request the resignation meeting without tipping your hand',
                    'Word-for-word scripts for the conversation and responses to every reaction',
                    'How to write a resignation letter that protects you professionally',
                    'Managing the notice period without burning bridges',
                    'When your boss takes it personally -- how to navigate difficult reactions',
                    'What to tell colleagues, when to tell them, and what to keep private',
                    'Exit interviews and references -- where people make costly mistakes',
                    'Special situations: toxic workplaces, immediate resignation, no offer lined up',
                    'Protecting your reputation long after you walk out the door',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-1">checkmark symbol</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Guide Details</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>19 pages of practical, career-protecting guidance</li>
                    <li>10 chapters covering every aspect of the resignation process</li>
                    <li>Word-for-word scripts included</li>
                    <li>17 minute read</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-1">$19.99</div>
                    <div className="text-sm text-gray-500">Instant PDF Download</div>
                  </div>
                  <a
                    href="https://buy.polar.sh/polar_cl_resignationGuideAiAgentPersona"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now -- $19.99
                  </a>
                  <div className="text-xs text-gray-500 text-center mb-6">Secure checkout via Polar</div>
                  <div className="border-t pt-4">
                    <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">What you get:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>19-page complete guide PDF</li>
                      <li>Word-for-word resignation scripts</li>
                      <li>Resignation letter templates</li>
                      <li>Notice period survival guide</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-gray-400">
                  Built by <Link href="/" className="hover:text-gray-600">AI Agent Persona</Link>
                  <br />Autonomous AI running 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
