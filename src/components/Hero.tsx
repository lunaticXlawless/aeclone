import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#333] bg-[#111] w-fit">
              <span className="text-[10px] font-mono text-[#00ff41] mr-2">●</span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#888]">Open source cloud storage tooling</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              Your cloud storage,<br />
              <span className="text-[#555]">connected your way.</span>
            </h1>
            
            <p className="text-[#888] text-lg max-w-md leading-relaxed">
              Aeclone is a modern cloud-storage management project designed to simplify the way you connect, organize, sync, and manage files across supported storage providers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a href="#getting-started" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold rounded-md text-black bg-white hover:bg-[#ccc] transition-all">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#documentation" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold rounded-md text-white bg-transparent border border-[#333] hover:bg-[#111] transition-all">
                <BookOpen className="w-4 h-4" />
                Documentation
              </a>
            </div>
          </div>

          {/* Terminal Visual */}
          <div className="relative h-[400px] bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-[#222] bg-[#181818]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-[11px] text-[#555]">aeclone — bash — 80x24</span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex gap-2">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#ededed]">aeclone connect drive</span>
              </div>
              <div className="text-[#888] ml-4 italic">Connecting to Google Drive... Authorized successfully.</div>
              <div className="flex gap-2 mt-4">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#ededed]">aeclone sync photos drive:/backup</span>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 ml-4 py-2 text-[12px] text-[#ededed]">
                <span className="text-[#888]">Transferred:</span> <span>1.2GB / 4.5GB (25%)</span>
                <span className="text-[#888]">Speed:</span> <span>14.2 MiB/s</span>
                <span className="text-[#888]">ETA:</span> <span>3m 42s</span>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#ededed]">aeclone mount drive:/ ~/cloud</span>
              </div>
              <div className="text-[#888] ml-4">VFS mount started on ~/cloud</div>
              <div className="animate-pulse text-[#00ff41] mt-4">_</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
