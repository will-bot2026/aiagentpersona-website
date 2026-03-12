export interface Persona {
  id: string;
  slug: string;
  name: string;
  price: number;
  tier: 'basic' | 'standard' | 'premium' | 'premium-plus';
  description: string;
  longDescription: string;
  features: string[];
  capabilities: string[];
  image: string;
  model: string;
  useCases: string[];
  setupGuide: string;
  pricing: {
    monthly: number;
    annual: number;
    oneTime: number;
  };
}

export const personas: Persona[] = [
  {
    id: '1',
    slug: 'x-growth-agent',
    name: 'X Growth Agent',
    price: 49,
    tier: 'standard',
    description: 'Real Twitter API integration, persistent memory, 24h posting cron',
    longDescription: 'AI-powered Twitter growth strategist with real API integration and persistent engagement tracking. Analyzes user content, generates optimized tweet ideas, monitors metrics, and manages posting schedules.',
    features: [
      'Real Twitter/X API access',
      'Persistent memory of performance metrics',
      'Daily strategy generation (5-7 content ideas)',
      'Trending topic analysis',
      'Thread composition & performance tracking',
      'Optimal posting time calculation',
      'A/B testing recommendations',
      'Engagement tracking dashboard',
    ],
    capabilities: [
      'Post optimization',
      'Engagement strategy',
      'Audience analysis',
      'Metric tracking',
      'Trending insights',
      'Content scheduling',
      'Performance reporting',
    ],
    image: '🐦',
    model: 'claude-opus-4-6',
    useCases: [
      'Twitter growth',
      'Engagement optimization',
      'Audience building',
      'Content strategy',
      'Brand amplification',
    ],
    setupGuide: `
1. Connect your Twitter API credentials in settings
2. Define your brand voice and posting schedule
3. Agent analyzes your account and audience
4. Receives 5-7 content ideas daily via email
5. Approves posts before scheduling
6. Monitors real-time engagement metrics
    `,
    pricing: {
      monthly: 49,
      annual: 490,
      oneTime: 200,
    },
  },
  {
    id: '2',
    slug: 'security-hardener',
    name: 'Security Hardener',
    price: 39,
    tier: 'standard',
    description: 'Takes .claw files, hardens them, outputs secure versions',
    longDescription: 'AI security expert that audits, hardens, and secures OpenClaw agent configurations. Identifies vulnerabilities and outputs production-ready secure versions.',
    features: [
      'Static code/config analysis',
      'Credential detection & encryption',
      'Permission auditing (least privilege)',
      'Rate limit enforcement',
      'Audit logging setup',
      'OWASP AI compliance checking',
      'CWE/CVE vulnerability mapping',
      'Security report generation',
    ],
    capabilities: [
      'Config auditing',
      'Vulnerability scanning',
      'Hardening automation',
      'Compliance checking',
      'Credential protection',
      'Risk assessment',
      'Remediation guidance',
    ],
    image: '🔒',
    model: 'claude-opus-4-6',
    useCases: [
      'Security auditing',
      'Config hardening',
      'Compliance checking',
      'Vulnerability scanning',
      'Agent security',
    ],
    setupGuide: `
1. Upload your .claw files or agent configurations
2. Agent scans for 50+ security patterns
3. Generates vulnerability report (critical/high/medium/low)
4. Creates hardened versions with remediations
5. Provides before/after comparison
6. Compliance check against SOC2, ISO27001, HIPAA
    `,
    pricing: {
      monthly: 39,
      annual: 390,
      oneTime: 150,
    },
  },
  {
    id: '3',
    slug: 'claude-code-orchestrator',
    name: 'Claude Code Orchestrator',
    price: 59,
    tier: 'premium',
    description: 'Uses Claude Code terminal to build/debug code on demand',
    longDescription: 'Advanced development agent using Claude Code for full-stack code generation and debugging. Builds features, debugs issues, runs tests, and manages entire codebases in real-time.',
    features: [
      'Full Claude Code terminal access',
      'Multi-language code generation',
      'Real-time compilation & testing',
      'Git-based version control',
      'Database schema design',
      'API endpoint testing',
      'CI/CD pipeline automation',
      'Load testing & optimization',
    ],
    capabilities: [
      'Code generation',
      'Feature building',
      'Debugging',
      'Test writing',
      'Refactoring',
      'Deployment',
      'Performance optimization',
    ],
    image: '💻',
    model: 'claude-opus-4-6',
    useCases: [
      'Full-stack development',
      'Bug fixing',
      'Feature implementation',
      'Code review',
      'Architecture design',
    ],
    setupGuide: `
1. Connect to your GitHub/GitLab repo
2. Define your project structure & tech stack
3. Describe feature or bug to fix
4. Agent designs architecture in Claude Code
5. Generates and tests implementation
6. Commits with documentation
7. Delivers production-ready code
    `,
    pricing: {
      monthly: 59,
      annual: 590,
      oneTime: 250,
    },
  },
  {
    id: '4',
    slug: 'research-swarm',
    name: 'Research Swarm',
    price: 29,
    tier: 'basic',
    description: '5-agent orchestration (researcher, verifier, summarizer, citer, formatter)',
    longDescription: 'Multi-agent research team with specialized roles for comprehensive research and fact-checking. Uses 5 agents: Researcher, Verifier, Summarizer, Citer, and Formatter.',
    features: [
      '5-agent orchestration',
      'Web search & source collection',
      'Fact-checking & verification',
      'Citation formatting',
      'Comprehensive briefing generation',
      'Source reliability scoring',
      'Confidence level reporting',
      'Audit trail of sources',
    ],
    capabilities: [
      'Research execution',
      'Fact-checking',
      'Source verification',
      'Citation management',
      'Briefing generation',
      'Gap identification',
      'Conflict flagging',
    ],
    image: '🔍',
    model: 'claude-opus-4-6',
    useCases: [
      'Deep research',
      'Fact-checking',
      'Competitive analysis',
      'Market research',
      'Due diligence',
    ],
    setupGuide: `
1. Submit your research query
2. Researcher agents search and collect sources
3. Verifier agents fact-check all claims
4. Summarizer synthesizes findings
5. Citer formats bibliography
6. Formatter produces final document
7. Receive comprehensive research brief with sources
    `,
    pricing: {
      monthly: 29,
      annual: 290,
      oneTime: 100,
    },
  },
  {
    id: '5',
    slug: 'content-flywheel',
    name: 'Content Flywheel',
    price: 69,
    tier: 'premium-plus',
    description: 'Research → draft → optimize → schedule multi-platform threads',
    longDescription: 'End-to-end content creation engine: research, draft, optimize, schedule across platforms. Transforms research into compelling multi-platform content automatically.',
    features: [
      'Trending topic identification',
      'Source gathering & analysis',
      'Multi-angle content creation',
      'Long-form to short-form conversion',
      'Platform-specific optimization',
      'SEO optimization',
      'Viral potential scoring',
      'Multi-platform scheduling',
    ],
    capabilities: [
      'Content research',
      'Draft generation',
      'Content optimization',
      'Platform formatting',
      'Hashtag research',
      'Caption generation',
      'Visual recommendations',
      'Call-to-action optimization',
    ],
    image: '📝',
    model: 'claude-opus-4-6',
    useCases: [
      'Content creation',
      'Multi-platform publishing',
      'Audience engagement',
      'SEO optimization',
      'Content calendar management',
    ],
    setupGuide: `
1. Define your content pillars and target audience
2. Agent identifies trending topics
3. Researches and gathers sources
4. Creates multiple content angles
5. Writes long-form base article
6. Optimizes for each platform
7. Schedules across Twitter, LinkedIn, Medium, Substack
8. Tracks performance metrics
    `,
    pricing: {
      monthly: 69,
      annual: 690,
      oneTime: 300,
    },
  },
  {
    id: '6',
    slug: 'ops-memory-manager',
    name: 'Ops & Memory Manager',
    price: 39,
    tier: 'standard',
    description: 'Daily standup + task router + self-healing loop with persistent memory',
    longDescription: 'Operations orchestrator with persistent memory, daily standups, and self-healing capabilities. Manages daily standups, task routing, and system health monitoring.',
    features: [
      'Daily standup generation',
      'Task classification & routing',
      'Persistent vector memory',
      'Health monitoring & alerts',
      'Automatic error recovery',
      'Performance optimization',
      'Audit logging',
      'Cross-agent coordination',
    ],
    capabilities: [
      'Daily standups',
      'Task routing',
      'Memory management',
      'Health monitoring',
      'Issue escalation',
      'Performance tracking',
      'Optimization',
    ],
    image: '⚙️',
    model: 'claude-opus-4-6',
    useCases: [
      'Operations management',
      'Task orchestration',
      'Continuous monitoring',
      'Team coordination',
      'System optimization',
    ],
    setupGuide: `
1. Define your daily standup schedule (default 6 AM)
2. Configure task classification rules
3. Agent monitors system health 24/7
4. Generates daily summaries & recommendations
5. Routes tasks to appropriate agents
6. Maintains persistent memory of decisions
7. Self-heals detected issues
8. Provides performance reports
    `,
    pricing: {
      monthly: 39,
      annual: 390,
      oneTime: 150,
    },
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find(p => p.slug === slug);
}

export function getAllPersonaSlugs(): string[] {
  return personas.map(p => p.slug);
}
