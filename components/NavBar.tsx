'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/personas', label: 'Personas' },
  { href: '/guides', label: '🐾 Guides' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/creator-api', label: 'Creator API' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container flex justify-between items-center py-4 px-4 mx-auto">
        <Link href="/" className="font-bold text-2xl text-blue-600 flex-shrink-0">
          🤖 PERSONA
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-blue-600 transition text-sm">
              {l.label}
            </Link>
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
            Sign In
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full mt-2">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
