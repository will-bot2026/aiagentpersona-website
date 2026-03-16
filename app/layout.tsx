import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Agent Persona Marketplace',
  description: 'Buy, sell, and monetize AI agent personas with real revenue sharing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Navigation */}
        <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
          <div className="container flex justify-between items-center py-4">
            <Link href="/" className="font-bold text-2xl text-blue-600">
              🤖 PERSONA
            </Link>
            <div className="flex gap-8 items-center">
              <Link href="/personas" className="hover:text-blue-600 transition">
                Personas
              </Link>
              <Link href="/guides" className="hover:text-blue-600 transition">
                🐾 Guides
              </Link>
              <Link href="/dashboard" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
              <Link href="/creator-api" className="hover:text-blue-600 transition">
                Creator API
              </Link>
              <Link href="/mission-control" className="hover:text-blue-600 transition font-medium">
                🎛️ Mission Control
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Sign In
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-20">
          <div className="container py-12">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/personas" className="hover:text-blue-400">Personas</Link></li>
                  <li><Link href="/guides" className="hover:text-blue-400">Pet Guides</Link></li>
                  <li><Link href="/creator-api" className="hover:text-blue-400">Creator API</Link></li>
                  <li><Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">About</a></li>
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
                  <li><a href="#" className="hover:text-blue-400">Terms</a></li>
                  <li><a href="#" className="hover:text-blue-400">License</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Social</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-400">Discord</a></li>
                  <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>&copy; 2026 AI Agent Persona Marketplace. All rights reserved. 🚀</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
