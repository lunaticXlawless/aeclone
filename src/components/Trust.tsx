import { Layers, Network, Zap } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-semibold text-[#ededed] mb-6">
            Your files shouldn't be trapped in one cloud.
          </h2>
          <p className="text-lg text-[#888] leading-relaxed">
            As data grows, people increasingly rely on multiple storage providers. Aeclone aims to provide a simpler, unified management layer to connect these disconnected ecosystems without vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 bg-[#111] rounded-xl border border-[#222]">
            <div className="h-12 w-12 rounded-lg bg-[#222] flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-[#ededed]" />
            </div>
            <h3 className="text-xl font-semibold text-[#ededed] mb-3">One interface</h3>
            <p className="text-[#888]">A single, consistent interface to interact with all your storage backends.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-[#111] rounded-xl border border-[#222]">
            <div className="h-12 w-12 rounded-lg bg-[#222] flex items-center justify-center mb-6">
              <Network className="h-6 w-6 text-[#ededed]" />
            </div>
            <h3 className="text-xl font-semibold text-[#ededed] mb-3">Multiple providers</h3>
            <p className="text-[#888]">Designed to bridge the gap between commercial, personal, and local storage.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-[#111] rounded-xl border border-[#222]">
            <div className="h-12 w-12 rounded-lg bg-[#222] flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-[#ededed]" />
            </div>
            <h3 className="text-xl font-semibold text-[#ededed] mb-3">Flexible file management</h3>
            <p className="text-[#888]">Sync, transfer, mount, and manage files on your own terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
