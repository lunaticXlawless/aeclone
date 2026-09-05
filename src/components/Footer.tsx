import { Link } from 'react-router-dom';
import { Github, Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-8 py-4 sm:h-12 sm:py-0 flex flex-col sm:flex-row items-center justify-between border-t border-[#222] bg-[#0a0a0a] text-[10px] text-[#444] uppercase tracking-widest font-medium gap-4">
      <div>© 2026 AECLONE — Cloud storage, simplified.</div>
      <div className="flex gap-6">
        <Link to="/privacy" className="hover:text-[#888] transition-colors">Privacy Policy</Link>
        <a href="/#documentation" className="hover:text-[#888] transition-colors">Docs</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#888] transition-colors flex items-center gap-1">
          <Github className="w-3 h-3" /> GitHub
        </a>
      </div>
    </footer>
  );
}
