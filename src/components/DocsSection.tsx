import { Terminal, Settings, ShieldAlert, Book } from 'lucide-react';

export default function DocsSection() {
  const cards = [
    {
      title: "Getting Started",
      description: "Learn the basics and connect your first storage.",
      icon: <Book className="h-5 w-5 text-[#888]" />
    },
    {
      title: "Configuration",
      description: "Understand remotes, storage paths, and configuration.",
      icon: <Settings className="h-5 w-5 text-[#888]" />
    },
    {
      title: "Commands",
      description: "Explore the available command structure.",
      icon: <Terminal className="h-5 w-5 text-[#888]" />
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common problems.",
      icon: <ShieldAlert className="h-5 w-5 text-[#888]" />
    }
  ];

  return (
    <section id="documentation" className="py-24 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-semibold text-[#ededed] mb-4">
              Documentation
            </h2>
            <p className="text-lg text-[#888]">
              Everything you need to know about setting up and using Aeclone.
            </p>
          </div>
          <a href="#documentation" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-transparent border border-[#333] hover:bg-[#111] transition-colors">
            Read Documentation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <a 
              key={index}
              href="#documentation" 
              className="block p-6 rounded-xl border border-[#222] bg-[#111] hover:border-[#444] transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#222] shrink-0 group-hover:bg-[#333] transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ededed] mb-1">{card.title}</h3>
                  <p className="text-[#888]">{card.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
