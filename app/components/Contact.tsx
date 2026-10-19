export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 text-sm mb-4 uppercase tracking-[0.2em]">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Parlons data, IA ou développement.
        </h2>

        <p className="mt-6 text-white/60 text-lg">
          Disponible pour des opportunités Data Analyst, IA ou développement.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:david.carneiro2301@gmail.com"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Me contacter
          </a>

          <a
            href="https://www.linkedin.com/in/david-carneiro-840877205/"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Carneiro-David"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}