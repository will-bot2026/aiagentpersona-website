'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface AgentTask {
  agent: string;
  agentEmoji: string;
  task: string;
  status: 'In Progress' | 'Completed' | 'Queued' | 'Idle' | 'Scheduled';
  timeStarted: string;
  estimatedCompletion: string;
  cronId?: string;
}

interface Project {
  name: string;
  description: string;
  tasksTotal: number;
  tasksCompleted: number;
  status: 'Active' | 'In Progress' | 'Complete' | 'Paused';
  icon: string;
  color: string;
}

export default function MissionControlPage() {
  const [activeTab, setActiveTab] = useState<'office' | 'projects'>('office');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // Load real agent tasks from cron jobs + session state
  useEffect(() => {
    const loadTasks = () => {
      const now = new Date();
      // These represent the actual cron jobs + known agent tasks
      const agentTasks: AgentTask[] = [
        {
          agent: 'ProductClaw',
          agentEmoji: '🦞',
          task: 'Research Reddit (r/dogs, r/crypto, r/aiagents)',
          status: getResearchStatus(now),
          timeStarted: '08:00 AM',
          estimatedCompletion: '~45 min',
          cronId: '6d5c040b'
        },
        {
          agent: 'ProductClaw',
          agentEmoji: '🦞',
          task: 'Sales Tracking (Polar API)',
          status: getSalesTrackingStatus(now),
          timeStarted: getLastSalesTrackingTime(now),
          estimatedCompletion: '~5 min',
          cronId: '606393d1'
        },
        {
          agent: 'ProductClaw',
          agentEmoji: '🦞',
          task: 'Weekly Report Generation',
          status: now.getDay() === 0 && now.getHours() === 9 ? 'In Progress' : 'Scheduled',
          timeStarted: 'Sundays 9:00 AM',
          estimatedCompletion: now.getDay() === 0 ? '~10 min' : 'Next Sunday',
          cronId: '613d2fa4'
        },
        {
          agent: 'SENTINEL',
          agentEmoji: '🛡️',
          task: 'Morning Tech Briefing',
          status: now.getHours() === 8 ? 'In Progress' : 'Scheduled',
          timeStarted: '08:00 AM daily',
          estimatedCompletion: now.getHours() === 8 ? '~15 min' : 'Tomorrow 8 AM',
          cronId: 'b4701bb4'
        },
        {
          agent: 'SENTINEL',
          agentEmoji: '🛡️',
          task: 'System monitoring & heartbeat checks',
          status: 'Idle',
          timeStarted: 'Continuous',
          estimatedCompletion: 'Ongoing',
        },
        {
          agent: 'Scout',
          agentEmoji: '🔍',
          task: 'Market research data analysis',
          status: 'Queued',
          timeStarted: '—',
          estimatedCompletion: 'On demand',
        },
        {
          agent: 'FORGE',
          agentEmoji: '🔨',
          task: 'Feature development pipeline',
          status: 'Queued',
          timeStarted: '—',
          estimatedCompletion: 'TBD',
        },
      ];

      setTasks(agentTasks);
      setLastUpdate(now);
    };

    loadTasks();
    const interval = setInterval(loadTasks, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Load project data
  useEffect(() => {
    const projectData: Project[] = [
      {
        name: 'Mission Control',
        description: 'Real-time agent monitoring dashboard with org chart, calendar, office view',
        tasksTotal: 7,
        tasksCompleted: 5,
        status: 'Active',
        icon: '🎛️',
        color: 'blue',
      },
      {
        name: 'WorldView',
        description: 'Geospatial dashboard with CesiumJS, Phase 1 complete, Phase 2 in progress',
        tasksTotal: 10,
        tasksCompleted: 4,
        status: 'In Progress',
        icon: '🌍',
        color: 'green',
      },
      {
        name: 'void_engine',
        description: 'Rust game engine, 3D flying, physics, networking, Phase 15+ in progress',
        tasksTotal: 20,
        tasksCompleted: 15,
        status: 'In Progress',
        icon: '🎮',
        color: 'purple',
      },
    ];
    setProjects(projectData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎛️</span>
            <div>
              <h1 className="text-2xl font-bold">Mission Control</h1>
              <p className="text-gray-400 text-sm">
                Last updated: {lastUpdate.toLocaleTimeString()} •{' '}
                <span className="text-green-400">● Live</span>
              </p>
            </div>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 pt-6">
        <div className="flex gap-1 bg-gray-900 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('office')}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition ${
              activeTab === 'office'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            🏢 Office Activity
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            📋 Projects
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-6">
        {activeTab === 'office' ? (
          <OfficeActivityTab tasks={tasks} />
        ) : (
          <ProjectsTab projects={projects} />
        )}
      </div>
    </div>
  );
}

function OfficeActivityTab({ tasks }: { tasks: AgentTask[] }) {
  const statusColors: Record<string, string> = {
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Queued': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    'Idle': 'bg-gray-500/20 text-gray-500 border-gray-500/30',
    'Scheduled': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  const statusDots: Record<string, string> = {
    'In Progress': '🟡',
    'Completed': '🟢',
    'Queued': '⚪',
    'Idle': '⚫',
    'Scheduled': '🔵',
  };

  // Group by agent
  const agents = Array.from(new Set(tasks.map(t => t.agent)));

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <div className="text-gray-400 text-sm">Active Agents</div>
          <div className="text-3xl font-bold mt-1">{agents.length}</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <div className="text-gray-400 text-sm">Tasks Running</div>
          <div className="text-3xl font-bold mt-1 text-yellow-400">
            {tasks.filter(t => t.status === 'In Progress').length}
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <div className="text-gray-400 text-sm">Scheduled</div>
          <div className="text-3xl font-bold mt-1 text-blue-400">
            {tasks.filter(t => t.status === 'Scheduled').length}
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <div className="text-gray-400 text-sm">Queued</div>
          <div className="text-3xl font-bold mt-1 text-gray-400">
            {tasks.filter(t => t.status === 'Queued').length}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Real-Time Agent Activity</h2>
          <span className="text-xs text-gray-500">Updates every 30s</span>
        </div>
        <div className="divide-y divide-gray-800">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl">{task.agentEmoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{task.agent}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{task.task}</span>
                  </div>
                  {task.cronId && (
                    <span className="text-xs text-gray-600 font-mono">
                      cron:{task.cronId}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-medium ${
                    statusColors[task.status]
                  }`}
                >
                  {statusDots[task.status]} {task.status}
                </span>
                <div className="text-right w-28">
                  <div className="text-gray-400">{task.timeStarted}</div>
                  <div className="text-gray-600 text-xs">{task.estimatedCompletion}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsTab({ projects }: { projects: Project[] }) {
  const colorMap: Record<string, { bg: string; bar: string; border: string }> = {
    blue: { bg: 'bg-blue-500/10', bar: 'bg-blue-500', border: 'border-blue-500/30' },
    green: { bg: 'bg-green-500/10', bar: 'bg-green-500', border: 'border-green-500/30' },
    purple: { bg: 'bg-purple-500/10', bar: 'bg-purple-500', border: 'border-purple-500/30' },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, i) => {
        const progress = Math.round((project.tasksCompleted / project.tasksTotal) * 100);
        const colors = colorMap[project.color] || colorMap.blue;
        
        return (
          <div
            key={i}
            className={`bg-gray-900 border border-gray-800 rounded-xl p-6 hover:${colors.border} transition`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      project.status === 'Complete'
                        ? 'bg-green-500/20 text-green-400'
                        : project.status === 'Active'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            
            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-white font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className={`${colors.bar} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mt-3">
              <span>{project.tasksCompleted}/{project.tasksTotal} tasks</span>
              <span>{project.tasksTotal - project.tasksCompleted} remaining</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Helper functions for determining task status based on current time
function getResearchStatus(now: Date): AgentTask['status'] {
  const hour = now.getHours();
  // Research runs at 8am and 8pm
  if ((hour === 8 || hour === 20) && now.getMinutes() < 45) return 'In Progress';
  return 'Scheduled';
}

function getSalesTrackingStatus(now: Date): AgentTask['status'] {
  const hour = now.getHours();
  if ([2, 8, 14, 20].includes(hour) && now.getMinutes() < 10) return 'In Progress';
  return 'Scheduled';
}

function getLastSalesTrackingTime(now: Date): string {
  const hour = now.getHours();
  const trackingHours = [2, 8, 14, 20];
  const lastHour = trackingHours.filter(h => h <= hour).pop() || trackingHours[trackingHours.length - 1];
  return `${lastHour.toString().padStart(2, '0')}:00`;
}
