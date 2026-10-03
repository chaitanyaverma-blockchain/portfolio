import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[180px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build modern web experiences."
        />

        <div
          ref={ref}
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card group rounded-xl p-5 md:p-6 hover:border-accent-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                transitionDelay: isVisible ? `${i * 70}ms` : "0ms",
              }}
            >
              {/* Icon & Color Dot */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {skill.icon}
                </span>
                <div
                  className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-sm md:text-base font-semibold text-dark-100 mb-1">
                {skill.name}
              </h3>

              {/* Category badge */}
              <span className="inline-block text-[11px] font-medium text-dark-400 bg-dark-700/50 px-2 py-0.5 rounded-md">
                {skill.category}
              </span>

              {/* Hover accent bar */}
              <div
                className="mt-4 h-0.5 rounded-full bg-dark-700 overflow-hidden"
              >
                <div
                  className="h-full rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, var(--color-accent-primary))`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
