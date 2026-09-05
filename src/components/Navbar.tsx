import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Hexagon } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center group-hover:bg-[#ccc] transition-colors">
                <div className="w-4 h-4 border-2 border-black rotate-45"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-[#ededed]">
                AECLONE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#features" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Features</a>
            <a href="/#providers" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Providers</a>
            <a href="/#documentation" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Documentation</a>
            <a href="/#getting-started" className="text-sm font-medium text-[#888] hover:text-white transition-colors">Getting Started</a>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#888] hover:text-white transition-colors">
              GitHub
            </a>
            <a href="/#getting-started" className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-bold rounded-md text-black bg-white hover:bg-[#ccc] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:ring-white">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#888] hover:text-white hover:bg-[#111] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#222]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:bg-[#111]" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="/#providers" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:bg-[#111]" onClick={() => setIsMobileMenuOpen(false)}>Providers</a>
            <a href="/#documentation" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:bg-[#111]" onClick={() => setIsMobileMenuOpen(false)}>Documentation</a>
            <a href="/#getting-started" className="block px-3 py-2 rounded-md text-base font-medium text-[#ededed] hover:bg-[#111]" onClick={() => setIsMobileMenuOpen(false)}>Getting Started</a>
          </div>
          <div className="pt-4 pb-4 border-t border-[#222] px-5 flex flex-col gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-[#888] hover:text-white">
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a href="/#getting-started" className="flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-black bg-white hover:bg-[#ccc]" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
