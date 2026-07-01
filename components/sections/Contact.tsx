"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, CheckCircle, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    color: "text-red-400",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: portfolioData.personal.phone,
    href: portfolioData.personal.whatsapp,
    color: "text-green-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: portfolioData.personal.location,
    href: null,
    color: "text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ali-alashkar",
    href: portfolioData.personal.github,
    color: "text-gray-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ali-alashkar",
    href: portfolioData.personal.linkedin,
    color: "text-blue-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = "Invalid email";
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate sending (integrate Formspree or EmailJS here)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-[#0B0F19]">
      <div className="absolute inset-0 hero-mesh opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-800/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass rounded-3xl p-8 border border-white/10 h-full">
              <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Whether you have a project, an opportunity, or just want to say hello — my inbox is always open.
              </p>

              <div className="flex flex-col gap-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300 font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick social links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">Follow me on</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
                    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
                    { icon: MessageCircle, href: portfolioData.personal.whatsapp, label: "WhatsApp" },
                    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.name ? "border-red-500/50" : "border-white/10"
                      } text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      } text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    } text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    } text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-600 cursor-not-allowed"
                      : status === "loading"
                      ? "bg-blue-600/80 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500 shadow-glow hover:shadow-glow-lg"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" ? (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </motion.div>
                    ) : status === "success" ? (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </motion.div>
                    ) : (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-xs text-gray-600 text-center">
                  I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
