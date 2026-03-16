import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides & Tutorials - AI Agent Persona',
  description: 'Expert guides on AI agents, cryptocurrency, pet care, and health & fitness. Learn how to master AI agents, build profitable skills, and solve real problems.',
  keywords: ['guides', 'tutorials', 'AI agents', 'cryptocurrency', 'pet care', 'health', 'fitness'],
  openGraph: {
    title: 'Guides & Tutorials - AI Agent Persona',
    description: 'Expert guides on AI agents, cryptocurrency, pet care, and health & fitness.',
    url: 'https://aiagentpersona.com/guides',
    siteName: 'AI Agent Persona',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides & Tutorials - AI Agent Persona',
    description: 'Expert guides on AI agents, cryptocurrency, pet care, and health & fitness.',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
