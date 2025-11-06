export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Hi, I'm Alex — a BioAI Engineer</h2>
          <p className="mt-4 text-white/80">
            I design data-driven systems that decode biology. My work blends wet-lab intuition with
            modern machine learning to build practical tools for genomics, drug discovery, and
            digital health.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>• Computational biology, ML for sequences and structures</li>
            <li>• Model interpretability and scientific visualization</li>
            <li>• MLOps: data pipelines, evaluation, and deployment</li>
          </ul>
        </div>
        <div>
          <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6">
            <h3 className="text-lg font-semibold">Focus areas</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">Protein design</div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">Single-cell AI</div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">Biomarker discovery</div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">Health NLP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
