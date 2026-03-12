'use client';

import Link from 'next/link';
import { personas } from '@/lib/personas';
import { useState } from 'react';

export default function PersonasPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const filtered = selectedTier
    ? personas.filter(p => p.tier === selectedTier)
    : personas;

  const tiers = [
    { id: 'basic', label: 'Basic', color: 'blue' },
    { id: 'standard', label: 'Standard', color: 'purple' },
    { id: 'premium', label: 'Premium', color: 'pink' },
    { id: 'premium-plus', label: 'Premium+', color: 'orange' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">AI Agent Personas</h1>
          <p className="text-xl opacity-90">
            Six specialized agents, each ready to solve real problems and generate revenue.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container py-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedTier(null)}
              className={`px-4 py-2 rounded font-medium transition ${
                selectedTier === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Personas
            </button>
            {tiers.map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-4 py-2 rounded font-medium transition ${
                  selectedTier === tier.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(persona => (
              <div
                key={persona.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition hover:border-blue-400 flex flex-col"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 flex items-center justify-between">
                  <div className="text-5xl">{persona.image}</div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">
                      {persona.tier}
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      ${persona.price}
                    </div>
                    <div className="text-xs text-gray-600">/month</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-2">{persona.name}</h2>
                  <p className="text-gray-600 mb-4">{persona.description}</p>

                  <div className="mb-6">
                    <h3 className="font-bold text-sm uppercase text-gray-500 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {persona.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-green-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {persona.features.length > 4 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{persona.features.length - 4} more features
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-sm uppercase text-gray-500 mb-3">
                      Use Cases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {persona.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-4">
                      Built with <span className="font-bold">{persona.model}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <Link
                    href={`/personas/${persona.slug}`}
                    className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition block text-center"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No personas found in this tier.</p>
              <button
                onClick={() => setSelectedTier(null)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-bold"
              >
                Show all personas →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-600">Specialized Agents</p>
              <p className="text-sm text-gray-500 mt-2">Each solving real problems</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <p className="text-gray-600">Creator Commission</p>
              <p className="text-sm text-gray-500 mt-2">Revenue share for deployments</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">∞</div>
              <p className="text-gray-600">Earning Potential</p>
              <p className="text-sm text-gray-500 mt-2">Revenue from day one, forever</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
