import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Biology × AI
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
          Crafting intelligent tools for life sciences
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          A portfolio at the intersection of molecular biology, machine learning, and
          interactive visuals.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
