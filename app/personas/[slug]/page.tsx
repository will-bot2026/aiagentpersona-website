'use client';

import { personas, getPersonaBySlug } from '@/lib/personas';
import Link from 'next/link';
import { use } from 'react';

export default function PersonaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const persona = getPersonaBySlug(slug);

  if (!persona) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Persona Not Found</h1>
          <p className="text-gray-600 mb-8">The persona you're looking for doesn't exist.</p>
          <Link href="/personas" className="text-blue-600 hover:text-blue-800 font-bold">
            Back to Personas →
          </Link>
        </div>
      </div>
    );
  }

  const otherPersonas = personas.filter(p => p.id !== persona.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container">
          <Link href="/personas" className="text-blue-100 hover:text-white mb-6 inline-block">
            ← Back to Personas
          </Link>
          <div className="flex items-start gap-8">
            <div className="text-7xl">{persona.image}</div>
            <div className="flex-1">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-bold mb-4">
                {persona.tier.toUpperCase()}
              </div>
              <h1 className="text-5xl font-bold mb-4">{persona.name}</h1>
              <p className="text-xl opacity-90 mb-6">{persona.longDescription}</p>
              <div className="flex gap-4">
                <div>
                  <div className="text-sm opacity-80">Monthly</div>
                  <div className="text-3xl font-bold">${persona.price}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Annual</div>
                  <div className="text-3xl font-bold">${persona.pricing.annual}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">One-time</div>
                  <div className="text-3xl font-bold">${persona.pricing.oneTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container py-4 flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition">
            Buy Now (Mock Polar)
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded font-bold hover:bg-gray-200 transition">
            View Docs
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{persona.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">All Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {persona.features.map((feature, i) => (
                <div key={i} className="flex gap-3 p-4 bg-blue-50 rounded">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Core Capabilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {persona.capabilities.map((cap, i) => (
                <div key={i} className="px-4 py-2 bg-purple-100 text-purple-900 rounded font-medium text-center">
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Best For</h2>
            <div className="space-y-3">
              {persona.useCases.map((useCase, i) => (
                <div key={i} className="flex gap-3 items-center p-4 border border-gray-200 rounded hover:border-blue-400 transition">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700 font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Guide */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="prose prose-blue max-w-none text-gray-700">
                <pre className="bg-gray-900 text-white p-6 rounded overflow-x-auto whitespace-pre-wrap font-mono text-sm">
                  {persona.setupGuide}
                </pre>
              </div>
            </div>
          </div>

          {/* Tech Specs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Technical Specs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded p-6">
                <h3 className="font-bold mb-2 text-gray-600 uppercase text-sm">Model</h3>
                <p className="text-lg font-bold">{persona.model}</p>
              </div>
              <div className="border border-gray-200 rounded p-6">
                <h3 className="font-bold mb-2 text-gray-600 uppercase text-sm">Tier</h3>
                <p className="text-lg font-bold capitalize">{persona.tier}</p>
              </div>
              <div className="border border-gray-200 rounded p-6">
                <h3 className="font-bold mb-2 text-gray-600 uppercase text-sm">Status</h3>
                <p className="text-lg font-bold text-green-600">✓ Production Ready</p>
              </div>
              <div className="border border-gray-200 rounded p-6">
                <h3 className="font-bold mb-2 text-gray-600 uppercase text-sm">Support</h3>
                <p className="text-lg font-bold">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded p-6 hover:border-blue-400 transition">
                <h3 className="font-bold mb-2">Monthly</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">${persona.pricing.monthly}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Full access</li>
                  <li>✓ Cancel anytime</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">
                  Subscribe Monthly
                </button>
              </div>
              <div className="border-2 border-blue-600 rounded p-6 relative">
                <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                  POPULAR
                </div>
                <h3 className="font-bold mb-2">Annual</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">${persona.pricing.annual}</div>
                <div className="text-sm text-gray-600 mb-4">
                  Save ${(persona.pricing.monthly * 12 - persona.pricing.annual).toFixed(0)}/year
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Full access</li>
                  <li>✓ Best value</li>
                  <li>✓ Priority support</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">
                  Subscribe Annual
                </button>
              </div>
              <div className="border border-gray-200 rounded p-6 hover:border-blue-400 transition">
                <h3 className="font-bold mb-2">One-time</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">${persona.pricing.oneTime}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Lifetime access</li>
                  <li>✓ No recurring</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">
                  Buy Once
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Personas */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPersonas.map(p => (
              <Link key={p.id} href={`/personas/${p.slug}`}>
                <div className="border border-gray-200 rounded p-6 hover:shadow-lg transition hover:border-blue-400 cursor-pointer h-full">
                  <div className="text-4xl mb-4">{p.image}</div>
                  <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">${p.price}/month</span>
                    <span className="text-blue-600">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy?</h2>
          <p className="mb-8 opacity-90">Start earning revenue with {persona.name} today.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
            Deploy Now (Mock Polar) →
          </button>
        </div>
      </section>
    </div>
  );
}
