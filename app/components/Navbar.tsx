export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-4">

          <div className="font-semibold tracking-wide text-white">
            David Carneiro
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <a
            href="https://github.com/"
            target="_blank"
            className="text-sm px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}