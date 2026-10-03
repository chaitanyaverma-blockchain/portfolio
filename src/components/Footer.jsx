import { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-700/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-bold text-white text-sm">
                N
              </div>
              <span className="text-lg font-semibold text-dark-100">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-dark-400">
              {personalInfo.title} · {personalInfo.university}
            </p>
          </div>

          {/* Center — Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-dark-600 text-dark-400 hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-glow transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-dark-700/50" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-dark-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-dark-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> using React
            & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-110 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
