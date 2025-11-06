export default function Projects() {
  const items = [
    {
      title: 'Genomic Variant Classifier',
      desc:
        'A transformer-based model that prioritizes regulatory variants using multi-omics context.',
      tags: ['PyTorch', 'ATAC-seq', 'Transformers'],
      link: '#',
    },
    {
      title: 'Protein-Ligand Docking Assistant',
      desc:
        'Interactive visualization and ranking of docking poses powered by graph neural networks.',
      tags: ['GNN', 'Cheminformatics', '3D'],
      link: '#',
    },
    {
      title: 'Clinical Notes De-identification',
      desc: 'Robust PHI removal with ensemble NER models and rule-guided post-processing.',
      tags: ['NLP', 'Healthcare', 'SpaCy'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <h2 className="font-display text-3xl font-semibold md:text-4xl">Selected Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-emerald-400/40 hover:bg-black/60"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-xs text-emerald-400 opacity-0 transition group-hover:opacity-100">View</span>
            </div>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
