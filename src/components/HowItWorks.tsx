export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#050505] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-semibold text-[#ededed]">
            A simple, logical workflow.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#222] z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#111] border-4 border-[#222] shadow-sm flex items-center justify-center mb-6">
                <span className="text-2xl font-display font-bold text-[#444]">01</span>
              </div>
              <h3 className="text-xl font-semibold text-[#ededed] mb-3">Connect</h3>
              <p className="text-[#888]">
                Connect your supported cloud storage accounts securely.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#111] border-4 border-[#222] shadow-sm flex items-center justify-center mb-6">
                <span className="text-2xl font-display font-bold text-[#444]">02</span>
              </div>
              <h3 className="text-xl font-semibold text-[#ededed] mb-3">Configure</h3>
              <p className="text-[#888]">
                Choose how your files should be organized, synchronized, or transferred.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#111] border-4 border-[#222] shadow-sm flex items-center justify-center mb-6">
                <span className="text-2xl font-display font-bold text-[#444]">03</span>
              </div>
              <h3 className="text-xl font-semibold text-[#ededed] mb-3">Manage</h3>
              <p className="text-[#888]">
                Work with your storage through a unified workflow.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
