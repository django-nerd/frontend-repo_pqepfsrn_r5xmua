import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.06),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-xl font-semibold text-white">Let’s connect</h3>
        <p className="mt-1 text-white/70">Open to collaborations in LLMs, Genomics, and ML pipelines.</p>

        <div className="mt-6 flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="group rounded-full border border-white/15 bg-white/5 p-2 hover:border-white/30">
            <Github className="h-5 w-5 text-white/70 group-hover:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group rounded-full border border-white/15 bg-white/5 p-2 hover:border-white/30">
            <Linkedin className="h-5 w-5 text-white/70 group-hover:text-white" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="group rounded-full border border-white/15 bg-white/5 p-2 hover:border-white/30">
            <Mail className="h-5 w-5 text-white/70 group-hover:text-white" />
          </a>
        </div>

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Bio × LLMs. Built with care.</p>
      </div>
    </footer>
  );
}
