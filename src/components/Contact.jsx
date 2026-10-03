import { useState } from "react";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import SectionHeader from "./SectionHeader";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  const { ref, isVisible } = useRevealOnScroll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission — replace with real API/email service
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success state after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputBaseClass =
    "w-full px-4 py-3 rounded-xl bg-dark-800/50 border text-dark-100 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[180px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-5 gap-10 md:gap-12 max-w-5xl mx-auto transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-dark-100 mb-2">
                Let's connect
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed">
                Feel free to reach out through the form or any of the channels
                below. I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center">
                <Mail size={18} className="text-accent-primary" />
              </div>
              <div>
                <p className="text-xs text-dark-500 mb-0.5">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-dark-200 hover:text-accent-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center">
                <MapPin size={18} className="text-accent-primary" />
              </div>
              <div>
                <p className="text-xs text-dark-500 mb-0.5">Location</p>
                <p className="text-sm text-dark-200">India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-dark-500 mb-3">Find me on</p>
              <div className="flex gap-3">
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
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-dark-200 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`${inputBaseClass} ${
                    errors.name
                      ? "border-red-500/50"
                      : "border-dark-600 hover:border-dark-500"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-dark-200 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`${inputBaseClass} ${
                    errors.email
                      ? "border-red-500/50"
                      : "border-dark-600 hover:border-dark-500"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-dark-200 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className={`${inputBaseClass} resize-none ${
                    errors.message
                      ? "border-red-500/50"
                      : "border-dark-600 hover:border-dark-500"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-sm shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {isSubmitted && (
                <p className="text-center text-sm text-green-400">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
