const skills = [
  {
    title: "Data Analysis",
    items: ["Python", "SQL", "Pandas", "Power BI", "Excel"],
  },
  {
    title: "AI / Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "NLP", "LLM", "Model Training"],
  },
  {
    title: "Development",
    items: ["React", "Next.js", "API", "Git", "TypeScript"],
  },
  {
    title: "Tools & Deployment",
    items: ["Docker", "Vercel", "GitHub", "Jupyter", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-sm mb-4 uppercase tracking-[0.2em]">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Technical Stack
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl text-lg">
            Les technologies que j’utilise pour analyser, automatiser,
            développer et déployer des solutions data & IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
            >
              <h3 className="text-xl font-semibold mb-5">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}