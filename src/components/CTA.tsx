export default function CTA() {
  return (
    <section id="getting-started" className="py-32 bg-[#0a0a0a] relative overflow-hidden border-b border-[#222]">
      <div className="absolute inset-0 bg-[#050505]/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#ededed] mb-6 tracking-tight">
          Ready to take control of your cloud storage?
        </h2>
        
        <p className="text-xl text-[#888] mb-10 max-w-2xl mx-auto">
          Start exploring Aeclone and build a storage workflow that works the way you do.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#getting-started" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-md text-black bg-white hover:bg-[#ccc] transition-all">
            Get Started
          </a>
          <a href="#documentation" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-md text-white bg-transparent border border-[#333] hover:bg-[#111] transition-all">
            View Documentation
          </a>
        </div>

      </div>
    </section>
  );
}
