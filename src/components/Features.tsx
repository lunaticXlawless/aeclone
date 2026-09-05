import { RefreshCcw, HardDrive, Database, ArrowRightLeft, Combine, Workflow } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Sync",
      description: "Synchronize files between supported storage locations reliably.",
      icon: <RefreshCcw className="h-6 w-6" />
    },
    {
      title: "Backup",
      description: "Create reliable copies of important data for peace of mind.",
      icon: <HardDrive className="h-6 w-6" />
    },
    {
      title: "Mount",
      description: "Access remote storage as if it were part of your local filesystem.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Transfer",
      description: "Move files between different cloud providers efficiently.",
      icon: <ArrowRightLeft className="h-6 w-6" />
    },
    {
      title: "Union",
      description: "Combine multiple storage locations into a single unified view.",
      icon: <Combine className="h-6 w-6" />
    },
    {
      title: "Automation",
      description: "Build repeatable workflows for common storage management tasks.",
      icon: <Workflow className="h-6 w-6" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#050505] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#555] font-bold">Core Capabilities</h2>
          <div className="text-xs text-[#444]">Designed for developers & power users</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-[#1a1a1a] bg-[#0a0a0a] rounded-lg group hover:border-[#444] transition-all"
            >
              <div className="text-[#888] mb-4 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-[#ededed] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
