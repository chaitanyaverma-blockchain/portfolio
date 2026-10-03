import { ArrowDown, Send } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-primary/10 rounded-full blur-[128px] animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[128px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[200px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/20 bg-accent-glow mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-dark-200 font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Title */}
        <p
          className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200 mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-in-up max-w-2xl mx-auto text-base sm:text-lg text-dark-300 leading-relaxed mb-10"
          style={{ animationDelay: "0.3s" }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-sm shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-105 transition-all duration-300"
          >
            View My Work
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-dark-500 text-dark-100 font-semibold text-sm hover:border-accent-primary/50 hover:bg-accent-glow hover:scale-105 transition-all duration-300"
          >
            Contact Me
            <Send
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Social Links */}
        <div
          className="animate-fade-in-up flex items-center justify-center gap-4"
          style={{ animationDelay: "0.6s" }}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-dark-600 text-dark-400 hover:text-accent-primary hover:border-accent-primary/40 hover:bg-accent-glow transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in hidden md:flex flex-col items-center gap-2 text-dark-500">
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-dark-500 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-dark-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
