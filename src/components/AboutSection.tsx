export default function AboutSection() {
  return (
    <section className="py-24 bg-[#050505] border-b border-[#222]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-[#555] tracking-wider uppercase mb-6">
          About Project
        </h2>
        <p className="text-lg md:text-xl text-[#ededed] leading-relaxed mb-6">
          Aeclone is an independent cloud-storage management project focused on giving users a simple and flexible way to work with multiple storage backends.
        </p>
        <p className="text-[#888]">
          Built with inspiration from the broader open-source cloud-storage ecosystem.
        </p>
      </div>
    </section>
  );
}
