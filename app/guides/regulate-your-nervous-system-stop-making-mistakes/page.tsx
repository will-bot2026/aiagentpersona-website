import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Regulate Your Nervous System: Stop Making Mistakes at Work | AI Agent Persona Guides',
  description: 'You are not careless. Your nervous system is dysregulated. The science-backed guide to stopping chronic work mistakes through breathwork, movement, and nervous system reset.',
  keywords: ['nervous system regulation', 'stop making mistakes at work', 'workplace stress', 'regulate nervous system', 'work anxiety mistakes'],
  openGraph: {
    title: 'Regulate Your Nervous System: Stop Making Mistakes at Work',
    description: 'The science behind chronic work mistakes and the 30-day reset plan to finally fix them.',
    url: 'https://aiagentpersona.com/guides/regulate-your-nervous-system-stop-making-mistakes',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regulate Your Nervous System: Stop Making Mistakes at Work',
    description: 'Stop blaming yourself. Regulate your nervous system and watch the mistakes disappear.',
  },
};

export default function NervousSystemGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/guides" className="hover:text-blue-600">Guides</Link>
          {' > '}
          <span className="text-gray-900">Nervous System Regulation</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                🧠 Regulate Your Nervous System
              </h1>
              <p className="text-lg text-gray-600 mb-8 italic">
                Stop Making Mistakes at Work and Finally Feel in Control
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">You Are Not Careless. You Are Dysregulated.</h2>
                <p className="text-gray-700 mb-6">
                  If you keep making the same kinds of mistakes at work — blanking on names, sending emails before they are ready, 
                  forgetting steps you know by heart — the problem is almost certainly not your intelligence or dedication. 
                  It is your nervous system operating in chronic stress. And stress literally takes the error-detection 
                  parts of your brain offline.
                </p>

                <h2 className="text-2xl font-bold mb-4">What This Guide Covers</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>The neuroscience of why stress causes mistakes (not willpower problems)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Window of Tolerance — your optimal performance zone and how to stay in it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>3 breathing techniques that activate the parasympathetic system in 60 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Physical regulation tools including movement, cold exposure, and sleep repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Cognitive load management — stop using your brain as a storage device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>The 3-step error recovery protocol (what to do after a mistake)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Sensory environment changes that reduce chronic stress activation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>Workplace relationships and psychological safety — the hidden factor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>30-day nervous system reset plan with week-by-week action steps</span>
                  </li>
                </ul>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Guide Details</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>📄 22 pages of evidence-based content</li>
                    <li>🧠 10 chapters covering every aspect of nervous system regulation</li>
                    <li>📋 30-day action plan included</li>
                    <li>⏱️ ~18 minute read</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4">Who This Is For</h2>
                <ul className="space-y-2 mb-8 text-gray-700">
                  <li>• People who make "careless" mistakes despite knowing better</li>
                  <li>• Anyone with racing thoughts, chronic tension, or mental fatigue at work</li>
                  <li>• People who freeze up, rush, or blank out under pressure</li>
                  <li>• Anyone whose error rate spikes when they are stressed or overwhelmed</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-1">$29.99</div>
                    <div className="text-sm text-gray-500">Instant PDF Download</div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-center">
                    <div className="text-amber-800 text-sm font-medium">⚡ Instant access after purchase</div>
                  </div>

                  <a
                    href="https://clearlytics-sigma.vercel.app/l/nervous-system"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now — $29.99
                  </a>

                  <div className="text-xs text-gray-500 text-center mb-6">
                    Secure checkout via Polar
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">What you get:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ 22-page guide PDF</li>
                      <li>✓ 30-day reset plan</li>
                      <li>✓ Breathing technique reference</li>
                      <li>✓ Error recovery protocol</li>
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
