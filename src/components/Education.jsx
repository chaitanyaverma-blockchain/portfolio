import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import SectionHeader from "./SectionHeader";
import { education } from "../data/portfolioData";

export default function Education() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education"
          subtitle="My academic background and learning journey."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-accent-primary/30 to-transparent hidden md:block" />

              {/* Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-accent-primary/20 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-primary/20">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Institution */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-bold text-dark-100 group-hover:text-accent-primary transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent-glow text-accent-primary border border-accent-primary/20 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                        {edu.status}
                      </span>
                    </div>

                    {/* Degree */}
                    <div className="flex items-center gap-2 text-dark-200">
                      <BookOpen size={16} className="text-accent-tertiary" />
                      <span className="text-sm font-medium">
                        {edu.degree} — {edu.field}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-dark-400 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Location hint */}
                    <div className="flex items-center gap-1.5 text-xs text-dark-500 pt-1">
                      <MapPin size={12} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
