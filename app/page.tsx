'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [revenue, setRevenue] = useState(12450);
  const [credits, setCredits] = useState(125000);

  // Simulate live revenue ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 50) + 10);
      setCredits(prev => prev + Math.floor(Math.random() * 100) + 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Agent Personas Marketplace
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Buy, sell, and monetize AI agent personas. Real revenue sharing. Real impact.
            </p>
            <div className="flex gap-4 mb-12">
              <Link href="/personas" className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition">
                Browse Personas
              </Link>
              <Link href="/creator-api" className="bg-blue-700 text-white px-6 py-3 rounded font-bold hover:bg-blue-900 transition border border-white">
                Become a Creator
              </Link>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 p-4 rounded backdrop-blur">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-bold mb-2">Revenue Share</h3>
                <p className="text-sm opacity-80">70% of sales goes directly to persona creators</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded backdrop-blur">
                <div className="text-3xl mb-2">🔗</div>
                <h3 className="font-bold mb-2">Permanent Contract</h3>
                <p className="text-sm opacity-80">Once deployed, your persona earns forever</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded backdrop-blur">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-bold mb-2">Global Distribution</h3>
                <p className="text-sm opacity-80">Reach thousands of users on day one</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Revenue Ticker */}
      <section className="bg-gray-900 text-white py-6 overflow-hidden">
        <div className="container">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              <div className="text-sm opacity-70 mb-1">Live Platform Revenue</div>
              <div className="text-3xl font-bold">
                ${revenue.toLocaleString()}
              </div>
              <div className="text-xs opacity-60 mt-1">+$50/min average</div>
            </div>
            <div className="flex-1">
              <div className="text-sm opacity-70 mb-1">$PERSONA Token Supply</div>
              <div className="text-3xl font-bold">
                {(credits / 1000).toFixed(1)}K Credits
              </div>
              <div className="text-xs opacity-60 mt-1">Issued to creators</div>
            </div>
            <div className="flex-1">
              <div className="text-sm opacity-70 mb-1">Active Personas</div>
              <div className="text-3xl font-bold">
                6
              </div>
              <div className="text-xs opacity-60 mt-1">Generating revenue now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Personas */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Personas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Six specialized AI agents ready to solve problems, generate revenue, and scale your impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Persona Cards - Just show preview */}
            {[
              { emoji: '🐦', name: 'X Growth Agent', price: '$49' },
              { emoji: '🔒', name: 'Security Hardener', price: '$39' },
              { emoji: '💻', name: 'Claude Code Orchestrator', price: '$59' },
              { emoji: '🔍', name: 'Research Swarm', price: '$29' },
              { emoji: '📝', name: 'Content Flywheel', price: '$69' },
              { emoji: '⚙️', name: 'Ops & Memory Manager', price: '$39' },
            ].map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-400">
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">Specialized AI agent for your workflow</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">{p.price}/month</span>
                  <Link href="/personas" className="text-blue-600 hover:text-blue-800">
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/personas" className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition inline-block">
              See All Personas
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Choose a Persona</h3>
                  <p className="text-gray-600">Pick from 6 specialized AI agents, each designed for a specific use case (growth, security, development, research, content, operations).</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Deploy with Polar</h3>
                  <p className="text-gray-600">Use the one-click Polar integration to deploy your persona. It's live in seconds. Real payments, real automation.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Earn Revenue</h3>
                  <p className="text-gray-600">Every sale generates 70% commission to the creator. Watch revenue flow in real-time on your dashboard.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Earn $PERSONA Credits</h3>
                  <p className="text-gray-600">Each sale also issues $PERSONA credits. Hold credits for governance, exclusive features, or future token launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join the marketplace. Deploy a persona. Start earning today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/personas" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
              Browse All Personas
            </Link>
            <Link href="/creator-api" className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-900 transition border border-white">
              Creator API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
