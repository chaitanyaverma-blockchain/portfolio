import { ExternalLink, FolderOpen } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`glass-card group rounded-2xl overflow-hidden hover:border-accent-primary/20 transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image / Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
        {/* Abstract pattern for placeholder */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.2) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(139,92,246,0.2) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(99,102,241,0.1) 25%, transparent 25%, transparent 75%, rgba(99,102,241,0.1) 75%)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Project icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-dark-800/80 backdrop-blur flex items-center justify-center border border-dark-600/50 group-hover:border-accent-primary/30 group-hover:scale-110 transition-all duration-300">
            <FolderOpen size={28} className="text-accent-primary" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/5 transition-colors duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-dark-100 mb-2 group-hover:text-accent-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-dark-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-accent-tertiary bg-accent-glow px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-500 text-sm text-dark-200 hover:border-accent-primary/40 hover:text-accent-primary hover:bg-accent-glow transition-all duration-300"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={15} />
            Code
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-sm text-white font-medium hover:shadow-lg hover:shadow-accent-primary/20 hover:scale-105 transition-all duration-300"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Projects"
          subtitle="A selection of projects I've built to practice and showcase my frontend development skills."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
