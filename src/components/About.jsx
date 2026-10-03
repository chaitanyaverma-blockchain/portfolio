import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import SectionHeader from "./SectionHeader";
import { aboutText, highlights, personalInfo } from "../data/portfolioData";

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useRevealOnScroll();
  const { ref: highlightsRef, isVisible: highlightsVisible } = useRevealOnScroll();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="Get to know a little more about my journey and what drives me as a developer."
        />

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20 transition-all duration-700 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left column — text */}
          <div className="space-y-5">
            {aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="text-dark-300 leading-relaxed text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-sm text-dark-400">
                <span className="w-8 h-px bg-accent-primary/50" />
                <span>{personalInfo.university}</span>
              </div>
            </div>
          </div>

          {/* Right column — decorative card */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent-primary/10 rounded-full blur-[60px]" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-100">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm text-dark-400">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <div className="h-px bg-dark-600/50" />

              {/* Code-style detail */}
              <div className="font-mono text-sm space-y-2 text-dark-400">
                <p>
                  <span className="text-accent-primary">const</span>{" "}
                  <span className="text-dark-200">developer</span> ={" "}
                  <span className="text-accent-tertiary">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-dark-300">focus</span>:{" "}
                  <span className="text-green-400">"Frontend"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-300">passion</span>:{" "}
                  <span className="text-green-400">"Clean UI"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-dark-300">learning</span>:{" "}
                  <span className="text-amber-400">true</span>,
                </p>
                <p>
                  <span className="text-accent-tertiary">{"}"}</span>;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div
          ref={highlightsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 ${
            highlightsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 hover:border-accent-primary/20 transition-all duration-300 group hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center mb-4 group-hover:bg-accent-glow-strong transition-colors duration-300">
                  <Icon size={20} className="text-accent-primary" />
                </div>
                <h3 className="text-sm font-semibold text-dark-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-dark-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
