import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white backdrop-blur-xl">
          <a href="#home" className="font-semibold tracking-wide">
            BioAI<span className="text-emerald-400">.lab</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-medium text-black"
            >
              Hire Me
            </a>
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 px-3 py-2 text-center text-sm font-medium text-black"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
