import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroLLMBio() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline 3D scene as full-bleed cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients overlay - pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.10),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow"
        >
          Where Biology Meets Language — Understanding Life Through Code.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-teal-100/85"
        >
          A living interface blending DNA, neurons, and attention — an organic narrative of intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-teal-400/90 px-5 py-2.5 text-black font-medium hover:bg-teal-300 transition shadow-[0_10px_40px_rgba(45,212,191,0.45)]">View Projects</a>
          <a href="#contact" className="rounded-full border border-white/40 bg-black/30 px-5 py-2.5 text-white/90 backdrop-blur hover:bg-white/10">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  );
}
