const projects = [
  {
    title: "AI Analytics Dashboard",
    description:
      "Dashboard interactif permettant d’analyser et visualiser des données en temps réel.",
    stack: ["Next.js", "Python", "SQL"],
  },
  {
    title: "Machine Learning Prediction",
    description:
      "Modèle de prédiction basé sur des données structurées et entraînement ML.",
    stack: ["Scikit-learn", "Pandas", "TensorFlow"],
  },
  {
    title: "LLM Automation Tool",
    description:
      "Outil d’automatisation exploitant des modèles de langage et des APIs IA.",
    stack: ["OpenAI", "API", "Docker"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm mb-4 uppercase tracking-[0.2em]">
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Featured Work
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl text-lg">
            Une sélection de projets orientés data, IA et développement
            applicatif moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] hover:-translate-y-2 transition duration-300"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

              <div className="relative">
                {/* Fake preview */}
                <div className="mb-8 h-48 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center text-white/20 text-sm">
                  Project Preview
                </div>

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-8 text-blue-400 hover:text-blue-300 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}