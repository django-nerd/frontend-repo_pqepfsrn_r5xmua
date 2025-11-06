import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Utility glow class
const glow = 'shadow-[0_0_30px_rgba(45,212,191,0.25)]';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-teal-200/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function AboutTimeline() {
  const milestones = [
    {
      year: '2018',
      title: 'Began journey into Bioinformatics',
      desc: 'Bridging wet-lab data with code and statistics.'
    },
    {
      year: '2020',
      title: 'Deep Learning for Omics',
      desc: 'Applied CNNs/RNNs to genomics and transcriptomics.'
    },
    {
      year: '2022',
      title: 'Protein + Language Models',
      desc: 'Explored transformers for sequences and structures.'
    },
    {
      year: '2024',
      title: 'LLMs × Biology',
      desc: 'Built pipelines for retrieval-augmented bio reasoning.'
    }
  ];

  return (
    <section id="about" className="relative py-24">
      <SectionHeader title="About" subtitle="A neuron-lit path through science and code" />
      <div className="relative mx-auto max-w-4xl">
        {/* Neuron pathway (SVG) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="neuronGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,300 C200,50 400,350 600,120 C800,-40 1000,200 1200,80" fill="none" stroke="url(#neuronGrad)" strokeWidth="2" className="opacity-60" />
        </svg>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 ${glow}`}
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.6)]" />
                <span className="text-teal-200/80 text-sm font-medium">{m.year}</span>
              </div>
              <h3 className="mt-2 text-white text-lg font-semibold">{m.title}</h3>
              <p className="mt-1 text-sm text-white/70">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsNetwork() {
  const skills = ['Python', 'Nextflow', 'PyTorch', 'Bioinformatics', 'Genomics', 'ML', 'LLMs', 'NLP', 'RAG', 'Protein ML'];
  // Simple particle-ish effect using floating badges and connecting lines
  return (
    <section id="skills" className="relative py-24">
      <SectionHeader title="Skills" subtitle="An orbital network of tools and techniques" />
      <div className="relative mx-auto max-w-5xl">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
          {/* Connection web */}
          <g stroke="#67e8f9" strokeOpacity="0.15">
            <circle cx="200" cy="200" r="180" fill="none" />
            <circle cx="600" cy="200" r="160" fill="none" />
            <circle cx="1000" cy="200" r="180" fill="none" />
            <path d="M200,40 600,40 1000,40" fill="none" />
            <path d="M200,360 600,360 1000,360" fill="none" />
            <path d="M380,80 820,320" />
            <path d="M820,80 380,320" />
          </g>
        </svg>
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl border border-teal-300/20 bg-gradient-to-b from-white/10 to-white/5 text-teal-100 px-4 py-3 backdrop-blur-sm overflow-hidden"
            >
              <span className="relative z-10 text-sm font-medium">{s}</span>
              <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal-400/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationDNA() {
  const items = [
    { label: 'B.Sc. Bioinformatics', year: '2018' },
    { label: 'M.Sc. Computational Biology', year: '2020' },
    { label: 'Specialization: Genomics', year: '2021' },
    { label: 'Focus: LLMs in Biology', year: '2024' }
  ];
  return (
    <section id="education" className="relative py-24">
      <SectionHeader title="Education" subtitle="A flowing strand of learning" />
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          {/* DNA-like double helix using offset sin curves */}
          <svg viewBox="0 0 1200 200" className="w-full h-40" aria-hidden>
            <defs>
              <linearGradient id="dnaA" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="dnaB" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <path d="M0,100 C150,30 300,170 450,100 C600,30 750,170 900,100 C1050,30 1200,170 1350,100" stroke="url(#dnaA)" strokeWidth="3" fill="none" />
            <path d="M0,100 C150,170 300,30 450,100 C600,170 750,30 900,100 C1050,170 1200,30 1350,100" stroke="url(#dnaB)" strokeWidth="3" fill="none" />
          </svg>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {items.map((it) => (
              <motion.div
                key={it.label}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-white/10 bg-black/30 p-4 text-center hover:border-teal-300/40"
              >
                <div className="mx-auto h-8 w-8 rounded-full bg-gradient-to-tr from-teal-400 to-violet-400 opacity-80 group-hover:opacity-100 transition shadow-[0_0_20px_rgba(168,85,247,0.35)]" />
                <p className="mt-3 text-sm text-white/80">{it.label}</p>
                <p className="text-xs text-teal-200/70">{it.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkNeuralWeb() {
  const roles = [
    { id: 1, name: 'Research Intern', impact: 'Single-cell ML', x: 20, y: 60 },
    { id: 2, name: 'ML Engineer', impact: 'Genomic pipelines', x: 45, y: 25 },
    { id: 3, name: 'BioNLP Fellow', impact: 'LLM retrieval', x: 70, y: 65 },
    { id: 4, name: 'AI in Proteomics', impact: 'Structure prediction', x: 85, y: 35 }
  ];
  const [active, setActive] = useState(null);
  return (
    <section id="experience" className="relative py-24">
      <SectionHeader title="Work Experience" subtitle="Signals propagating through a neural web" />
      <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <svg viewBox="0 0 100 100" className="w-full h-72 md:h-96" aria-hidden>
          <g stroke="#94a3b8" strokeOpacity="0.25">
            <path d="M20,60 45,25 70,65 85,35 20,60" />
            <path d="M45,25 85,35" />
            <path d="M20,60 70,65" />
          </g>
          {roles.map((r) => (
            <g key={r.id}>
              <motion.circle
                cx={r.x}
                cy={r.y}
                r={active === r.id ? 3 : 2.2}
                fill={active === r.id ? '#22d3ee' : '#a78bfa'}
                className="cursor-pointer"
                onMouseEnter={() => setActive(r.id)}
                onMouseLeave={() => setActive(null)}
                animate={{ filter: active === r.id ? 'drop-shadow(0 0 6px #22d3ee)' : 'drop-shadow(0 0 0px #000)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
            </g>
          ))}
        </svg>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((r) => (
            <motion.div
              key={r.id}
              onMouseEnter={() => setActive(r.id)}
              onMouseLeave={() => setActive(null)}
              animate={{ backgroundColor: active === r.id ? 'rgba(34,211,238,0.08)' : 'rgba(255,255,255,0.04)' }}
              className="rounded-xl border border-white/10 p-4"
            >
              <p className="text-white font-medium">{r.name}</p>
              <p className="text-sm text-white/70">{r.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsResearch() {
  const [open, setOpen] = useState(null);
  const projects = [
    { id: 1, title: 'Genomic RAG with LLMs', tags: ['LLMs', 'Genomics', 'RAG'], desc: 'Retrieval-augmented reasoning over variant annotations and literature.' },
    { id: 2, title: 'Protein Function GPT', tags: ['Transformers', 'Proteins'], desc: 'Sequence-to-function modeling with structured reasoning.' },
    { id: 3, title: 'ML Pipelines at Scale', tags: ['Nextflow', 'MLOps'], desc: 'Robust, reproducible pipelines for multi-omics.' }
  ];

  const papers = [
    { title: 'Attention maps align with regulatory motifs', link: '#' },
    { title: 'Language models for cell type annotation', link: '#' },
    { title: 'Graph transformers for protein interfaces', link: '#' }
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_30%)]" />
      <SectionHeader title="Projects" subtitle="Living systems of ideas — expanding on click" />
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            onClick={() => setOpen(p)}
            whileHover={{ scale: 1.02 }}
            className="text-left rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-teal-300/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-white/70 line-clamp-3">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="rounded-full bg-teal-400/10 text-teal-200/90 px-2 py-0.5 text-xs border border-teal-300/20">{t}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Research */}
      <div id="research" className="relative mt-20">
        <SectionHeader title="Research" subtitle="Heatmaps, attention, and folding dynamics" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.06),rgba(168,85,247,0.06))]">
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)' }} />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {papers.map((paper, i) => (
              <motion.a
                key={paper.title}
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-xl border border-white/10 bg-black/30 p-4 hover:border-violet-300/30"
              >
                <div className="flex items-center justify-between">
                  <p className="text-white/90 font-medium">{paper.title}</p>
                  <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-white/80" />
                </div>
                <div className="mt-3 h-24 w-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),rgba(34,211,238,0.15),transparent_70%)] rounded-lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(null)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-b from-black/60 to-black/40 p-6 text-white"
          >
            <h3 className="text-xl font-semibold">{open.title}</h3>
            <p className="mt-2 text-white/80">{open.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {open.tags.map(t => (
                <span key={t} className="rounded-full bg-violet-400/10 text-violet-200/90 px-2 py-0.5 text-xs border border-violet-300/20">{t}</span>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setOpen(null)} className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default function CoreShowcase() {
  // Subtle scroll progress accent bar
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: typeof window !== 'undefined' ? undefined : ref });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative">
      <motion.div style={{ width }} className="pointer-events-none fixed left-0 top-[64px] h-[2px] bg-gradient-to-r from-teal-400 via-violet-400 to-teal-400/60 z-40" />
      <AboutTimeline />
      <SkillsNetwork />
      <EducationDNA />
      <WorkNeuralWeb />
      <ProjectsResearch />
    </div>
  );
}
