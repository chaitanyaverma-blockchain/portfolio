import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

/**
 * Reusable section header with animated heading and optional subtitle.
 */
export default function SectionHeader({ title, subtitle, id }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      id={id}
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-dark-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
    </div>
  );
}
