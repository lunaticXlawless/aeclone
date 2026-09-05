export default function Providers() {
  const providers = [
    "Google Drive",
    "Dropbox",
    "Microsoft OneDrive",
    "Amazon S3",
    "S3-compatible storage",
    "WebDAV",
    "Local Storage"
  ];

  return (
    <section id="providers" className="py-24 bg-[#0a0a0a] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-semibold text-[#ededed] mb-4">
              Designed for a wide range of storage backends.
            </h2>
            <p className="text-lg text-[#888]">
              Aeclone's architecture aims to support the most common storage protocols and commercial cloud providers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {providers.map((provider, index) => (
            <div 
              key={index} 
              className="bg-[#111] border border-[#222] rounded-lg p-6 flex items-center justify-center text-center hover:border-[#444] transition-colors shadow-sm"
            >
              <span className="font-medium text-[#ededed]">{provider}</span>
            </div>
          ))}
          <div className="bg-[#050505] border border-[#222] border-dashed rounded-lg p-6 flex items-center justify-center text-center">
            <span className="font-medium text-[#555]">And more...</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#222]">
          <p className="text-sm text-[#555] flex items-start gap-2">
            <span className="font-bold text-[#888]">Note:</span> 
            Provider availability and integration depth depends on the current Aeclone implementation. This list represents architectural targets.
          </p>
        </div>

      </div>
    </section>
  );
}
