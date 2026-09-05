export default function TerminalSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#ededed] mb-6">
              Built for people who want control.
            </h2>
            <p className="text-lg text-[#888] mb-8 leading-relaxed">
              Aeclone is designed around flexibility, transparency, and user control. Whether you prefer a graphical interface or command-line execution, the core philosophy remains the same: your data, your rules.
            </p>
            <p className="text-sm text-[#555] italic">
              * Example commands shown for demonstration purposes. CLI availability depends on current project implementation.
            </p>
          </div>

          <div className="relative bg-[#111] border border-[#222] rounded-xl shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-[#222] bg-[#181818]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-[11px] text-[#555]">aeclone — bash — 80x24</span>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <p className="flex gap-2"><span className="text-[#00ff41]">$</span> <span className="text-[#ededed]">aeclone remote list</span></p>
                <div className="text-[#888] mt-2 pl-4">
                  <p>google-drive</p>
                  <p>backup</p>
                  <p>archive</p>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="flex gap-2"><span className="text-[#00ff41]">$</span> <span className="text-[#ededed]">aeclone sync ./photos google-drive:/photos</span></p>
                <div className="text-[#888] mt-2 pl-4 space-y-1">
                  <p>2026/01/IMG_001.jpg: Copied (new)</p>
                  <p>2026/01/IMG_002.jpg: Copied (new)</p>
                  <p className="text-[#ededed]">Transferred: 2 files, 15.4 MB</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
