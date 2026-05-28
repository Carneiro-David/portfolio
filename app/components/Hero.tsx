"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-80 h-80 bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-300 mb-6">
            Data • AI • Development
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            David Carneiro
            <span className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              AI & Data Developer
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Je développe des applications et solutions orientées data,
            intelligence artificielle et automatisation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
            >
              Voir mes projets
            </a>

            <a
              href="/cv.pdf"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Télécharger CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#111111]/80 p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-5 font-mono text-sm text-white/80">
              <p><span className="text-blue-400">{">"}</span> Loading AI models...</p>
              <p><span className="text-purple-400">{">"}</span> Processing datasets...</p>
              <p><span className="text-green-400">{">"}</span> Deploying scalable systems...</p>

              <div className="mt-8 border border-white/10 rounded-xl p-5 bg-black/40">
                <p className="text-white/40 mb-2">Current focus</p>
                <p className="text-lg text-white">
                  Building intelligent data-driven products.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}