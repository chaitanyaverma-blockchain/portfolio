import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
            aria-label="Go to homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-bold text-white text-sm transition-transform duration-300 group-hover:scale-110">
              N
            </div>
            <span className="text-lg font-semibold text-dark-100 hidden sm:block">
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent-primary"
                      : "text-dark-300 hover:text-dark-100"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-accent-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-300 hover:text-dark-100 hover:bg-dark-700 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-dark-950/90 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Items */}
          <ul className="relative z-10 flex flex-col items-center justify-center gap-2 pt-12 px-6">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`w-full transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-center py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent-primary bg-accent-glow"
                      : "text-dark-200 hover:text-dark-100 hover:bg-dark-800"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
