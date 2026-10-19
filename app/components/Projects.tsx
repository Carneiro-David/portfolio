"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  details: string;
  role: string;
  stack: string[];
  features: string[];
  images: string[];
};

const projects: Project[] = [
  {
    title: "Application Web avec modèle IA intégré",
    description:
      "Conception d'une application Web type réseau social avec modèle IA FER intégré.",
    details:
      "Application web type réseau social permettant aux utilisateurs de partager du contenu, avec un modèle de reconnaissance des expressions faciales (FER) intégré pour analyser les émotions et classer les posts en fonction de l'expression retenue.",
    role: "Création et entrainement du modèle de reconnaissance des expressions.",
    stack: ["Python", "Flask", "React.js", "Node.js", "Scikit-learn", "Pandas", "TensorFlow"],
    features: [
      "Création du modèle",
      "Entrainement du modèle",
      "Test du modèle",
      "Intégration du modèle dans l'application",
      "Gestion des routes entre l'API, le backend et le frontend",
    ],
    images: [
      "/projets/web_ia_1.png",
      "/projets/web_ia_2.png",
      "/projets/web_ia_3.png",
      "/projets/web_ia_4.png",

    ],
  },
  {
    title: "Application Web avec présentation d'analyse de Données",
    description:
      "Création d'une application web présentant une analyse des données sur un thème donnée.",
    details:
      "Conception d'une application Web permettant de présenter les analyses sous forme graphique et descriptif.",
    role: "Création des graphiques et des présentation avec intégration sur l'application Web.",
    stack: ["Python", "Flask", "Dash", "Plotly", "Pandas"],
    features: ["Visualtion des résultats", "Navigation à travers les pages"],
    images: [
      "/projets/data1.png",
      "/projets/data2.png",
      // "/projects/data-3.png",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section id="projects" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 text-sm mb-4 uppercase tracking-[0.2em]">
              Projets
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">Featured Work</h2>

            <p className="mt-6 text-white/60 max-w-2xl text-lg">
              Une sélection de projets orientés data, IA et développement
              applicatif moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => openProject(project)}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8 h-48 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={640}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold">{project.title}</h3>

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

                  <div className="mt-8 text-blue-400">View Project →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-4xl font-bold">{selectedProject.title}</h2>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-white/50 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="relative mt-8 h-64 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition"
                  >
                    →
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          currentImage === index
                            ? "bg-blue-400"
                            : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Mon rôle</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                {selectedProject.role}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Fonctionnalités</h3>
              <ul className="mt-3 space-y-2 text-white/60">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}