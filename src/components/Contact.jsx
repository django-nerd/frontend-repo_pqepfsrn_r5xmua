export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Let's collaborate</h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Have a biology × AI problem to explore? I'm open to research collaborations and product
          work. Reach out and let's build something meaningful.
        </p>
        <form
          className="mt-6 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get('name');
            alert(`Thanks, ${name}! I will get back to you shortly.`);
            e.currentTarget.reset();
          }}
        >
          <input name="name" required placeholder="Name" className="rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/40" />
          <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/40" />
          <textarea name="message" required placeholder="Tell me about your project" className="md:col-span-2 h-32 rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none placeholder:text-white/40 focus:border-emerald-400/40" />
          <div className="md:col-span-2">
            <button className="w-full rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-medium text-black md:w-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} BioAI Lab — Biology meets Intelligence</p>
    </section>
  );
}
