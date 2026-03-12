'use client';

import { useState } from 'react';

export default function CreatorAPIPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Creator API</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Auto-publish AI agent personas to the marketplace. One API call and your agent goes live globally.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'quickstart', label: 'Quick Start' },
              { id: 'reference', label: 'API Reference' },
              { id: 'examples', label: 'Examples' },
              { id: 'faq', label: 'FAQ' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-bold transition ${
                  selectedTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16 max-w-4xl">
        {/* Overview */}
        {selectedTab === 'overview' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is the Creator API?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                The Creator API enables AI developers to programmatically publish new agent personas to the marketplace. Instead of manually configuring personas through the web interface, you can:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>Deploy a persona with a single API call</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>Automatically set pricing, features, and metadata</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>Integrate persona creation into your CI/CD pipeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>Manage multiple personas across different projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>Start earning revenue immediately upon deployment</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">🚀 One-Click Deploy</h3>
                  <p className="text-gray-600">No config needed. Your persona goes live to thousands of users instantly.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">💰 Instant Monetization</h3>
                  <p className="text-gray-600">Earn 70% commission on every sale from day one. Revenue flows automatically.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">🔄 Version Control</h3>
                  <p className="text-gray-600">Update personas, manage versions, and roll back changes with git-like workflows.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">📊 Analytics</h3>
                  <p className="text-gray-600">Real-time sales, user feedback, and performance metrics for your personas.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">🛡️ Governance</h3>
                  <p className="text-gray-600">Community voting on new personas. Spam and low-quality submissions rejected.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">🪙 Token Rewards</h3>
                  <p className="text-gray-600">Earn $PERSONA credits on each deployment and sale. Participate in governance.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Supported Persona Types</h2>
              <p className="text-gray-600 mb-6">
                Currently, the Creator API supports deploying personas in these categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h4 className="font-bold mb-2">Growth & Marketing</h4>
                  <p className="text-sm text-gray-700">X Growth Agent, Content Flywheel, Social Media Manager</p>
                </div>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <h4 className="font-bold mb-2">Development & Engineering</h4>
                  <p className="text-sm text-gray-700">Claude Code Orchestrator, Debugger Agent, Code Reviewer</p>
                </div>
                <div className="bg-pink-50 p-4 rounded border border-pink-200">
                  <h4 className="font-bold mb-2">Research & Analysis</h4>
                  <p className="text-sm text-gray-700">Research Swarm, Data Analyst, Competitive Intelligence</p>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-bold mb-2">Operations & Management</h4>
                  <p className="text-sm text-gray-700">Ops & Memory Manager, Project Manager, Task Router</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Start */}
        {selectedTab === 'quickstart' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Start in 5 Minutes</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">1. Get Your API Key</h3>
                <p className="text-gray-600 mb-4">
                  Sign up on the Creator Dashboard and generate an API key:
                </p>
                <div className="bg-gray-900 text-green-400 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>curl https://api.aiagentpersona.com/v1/auth/keys \
  -X POST \
  -H &quot;Authorization: Bearer &lt;your-token&gt;&quot;</pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">2. Create a Persona Config</h3>
                <p className="text-gray-600 mb-4">
                  Define your agent&apos;s metadata, pricing, and capabilities:
                </p>
                <div className="bg-gray-900 text-green-400 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`{
  "name": "My Awesome Agent",
  "slug": "my-awesome-agent",
  "description": "Does amazing things",
  "price": 49,
  "tier": "standard",
  "features": ["Feature 1", "Feature 2"],
  "model": "claude-opus-4-6",
  "setupGuide": "Instructions here..."
}`}</pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">3. Deploy Your Persona</h3>
                <p className="text-gray-600 mb-4">
                  One API call and you&apos;re live on the marketplace:
                </p>
                <div className="bg-gray-900 text-green-400 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`curl https://api.aiagentpersona.com/v1/personas/deploy \\
  -X POST \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d @persona-config.json`}</pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">4. Start Earning</h3>
                <p className="text-gray-600">
                  Your persona is now listed, discoverable, and earning revenue. Check your dashboard in real-time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* API Reference */}
        {selectedTab === 'reference' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">API Reference</h2>

              <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-6 border-b border-gray-200">
                  <h3 className="font-bold text-lg">POST /v1/personas/deploy</h3>
                  <p className="text-gray-600 text-sm mt-1">Deploy a new persona to the marketplace</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3">Request Body</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto mb-6">
                    <pre>{`{
  "name": "string (required)",
  "slug": "string (required, URL-safe)",
  "description": "string (required)",
  "longDescription": "string (optional)",
  "price": "number (required)",
  "tier": "basic|standard|premium|premium-plus",
  "features": "string[] (required)",
  "capabilities": "string[]",
  "model": "string (required)",
  "useCases": "string[]",
  "setupGuide": "string",
  "pricing": {
    "monthly": number,
    "annual": number,
    "oneTime": number
  }
}`}</pre>
                  </div>

                  <h4 className="font-bold mb-3">Response</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
                    <pre>{`{
  "success": true,
  "personaId": "persona_xyz123",
  "url": "https://aiagentpersona.com/personas/my-awesome-agent",
  "revenueDashboard": "https://dashboard.aiagentpersona.com/personas/xyz123",
  "message": "Your persona is now live!"
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-6 border-b border-gray-200">
                  <h3 className="font-bold text-lg">GET /v1/personas/:id</h3>
                  <p className="text-gray-600 text-sm mt-1">Get details about a deployed persona</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3">Response</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
                    <pre>{`{
  "id": "persona_xyz123",
  "name": "X Growth Agent",
  "sales": 324,
  "revenue": 15876,
  "rating": 4.8,
  "status": "active",
  "deployedAt": "2026-03-05T10:30:00Z"
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-6 border-b border-gray-200">
                  <h3 className="font-bold text-lg">PUT /v1/personas/:id</h3>
                  <p className="text-gray-600 text-sm mt-1">Update an existing persona</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Same request body as POST /deploy. Updates go live immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Examples */}
        {selectedTab === 'examples' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Code Examples</h2>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Python</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`import requests
import json

API_KEY = "your_api_key_here"
BASE_URL = "https://api.aiagentpersona.com/v1"

persona_config = {
    "name": "My Custom Agent",
    "slug": "my-custom-agent",
    "description": "An amazing AI agent",
    "price": 49,
    "tier": "standard",
    "features": ["Feature 1", "Feature 2"],
    "model": "claude-opus-4-6",
}

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(
    f"{BASE_URL}/personas/deploy",
    json=persona_config,
    headers=headers
)

result = response.json()
print(f"Persona deployed: {result['url']}")
print(f"Dashboard: {result['revenueDashboard']}")`}</pre>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">JavaScript/Node.js</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.aiagentpersona.com/v1';

const personaConfig = {
  name: 'My Custom Agent',
  slug: 'my-custom-agent',
  description: 'An amazing AI agent',
  price: 49,
  tier: 'standard',
  features: ['Feature 1', 'Feature 2'],
  model: 'claude-opus-4-6',
};

const response = await axios.post(
  \`\${BASE_URL}/personas/deploy\`,
  personaConfig,
  {
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    }
  }
);

console.log('Persona deployed:', response.data.url);
console.log('Dashboard:', response.data.revenueDashboard);`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">cURL</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`curl -X POST https://api.aiagentpersona.com/v1/personas/deploy \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Custom Agent",
    "slug": "my-custom-agent",
    "description": "An amazing AI agent",
    "price": 49,
    "tier": "standard",
    "features": ["Feature 1", "Feature 2"],
    "model": "claude-opus-4-6"
  }'`}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {selectedTab === 'faq' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

            {[
              {
                q: 'How quickly does my persona go live?',
                a: 'Instantly! Within seconds of calling the API, your persona is listed, discoverable, and earning revenue.',
              },
              {
                q: 'What fees does the marketplace charge?',
                a: 'You keep 70% of every sale. The marketplace takes 20%, and 10% goes to the treasury and development fund.',
              },
              {
                q: 'Can I update my persona after deployment?',
                a: 'Absolutely. Use the PUT endpoint to update pricing, features, description, and more. Changes are live immediately.',
              },
              {
                q: 'Is there a limit to how many personas I can deploy?',
                a: 'No hard limit. Deploy as many as you want. Quality > quantity though — low-quality personas may be voted out by the community.',
              },
              {
                q: 'What happens if my persona gets bad reviews?',
                a: 'Personas are rated by users. Very low ratings may result in lower visibility, but you can always improve and update.',
              },
              {
                q: 'How do I get paid?',
                a: 'Revenue is streamed via Polar and deposited to your bank account weekly. You can also hold $PERSONA credits.',
              },
              {
                q: 'Can I use the API in a CI/CD pipeline?',
                a: 'Yes! The API integrates with GitHub Actions, GitLab CI, and other CI/CD systems. Deploy personas as part of your release process.',
              },
              {
                q: 'What if I want to take my persona offline?',
                a: 'You can delist any persona with a single API call. Revenue stops, but you keep all earnings to date.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mt-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy Your First Persona?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Sign up on the Creator Dashboard, generate an API key, and start earning revenue from your AI agents.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition">
            Go to Creator Dashboard →
          </button>
        </div>
      </section>
    </div>
  );
}
