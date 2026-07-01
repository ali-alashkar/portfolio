"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, MessageCircle, Download, Send, ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function TypingEffect({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex];
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          } else {
            setCurrentText(currentText.slice(0, -1));
          }
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-blue-400">
      {currentText}
      <span className="inline-block w-0.5 h-8 bg-blue-400 ml-1 animate-blink" />
    </span>
  );
}

function FloatingIcon({ icon, style }: { icon: string; style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute w-10 h-10 rounded-xl glass flex items-center justify-center text-lg shadow-glass border border-white/10"
      style={style}
      animate={{
        y: [-8, 8, -8],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: Math.random() * 3 + 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    >
      {icon}
    </motion.div>
  );
}

const floatingIcons = [
  { icon: "☕", style: { top: "8%", right: "5%", animationDelay: "0s" } },
  { icon: "🌿", style: { top: "20%", right: "-2%", animationDelay: "0.5s" } },
  { icon: "🔥", style: { bottom: "25%", right: "-4%", animationDelay: "1s" } },
  { icon: "⚡", style: { top: "5%", left: "5%", animationDelay: "1.5s" } },
  { icon: "🗄️", style: { bottom: "15%", left: "2%", animationDelay: "2s" } },
  { icon: "🧪", style: { bottom: "35%", right: "5%", animationDelay: "0.8s" } },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const socials = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email", color: "hover:text-red-400" },
    { icon: MessageCircle, href: portfolioData.personal.whatsapp, label: "WhatsApp", color: "hover:text-green-400" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-[#0B0F19]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-slate-900 dark:text-white">Ali</span>{" "}
                <span className="gradient-text">Haitham</span>
                <br />
                <span className="text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl">Alashkar</span>
              </h1>
            </motion.div>

            {/* Typing title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-gray-300 h-9 flex items-center"
            >
              <TypingEffect texts={portfolioData.personal.titles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-600 dark:text-gray-400 text-base leading-relaxed max-w-lg"
            >
              CS student at{" "}
              <span className="text-blue-400 font-medium">Ain Shams University</span>{" "}
              passionate about building scalable backend systems, crafting clean APIs, and ensuring software quality through rigorous testing.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={portfolioData.personal.resumeUrl}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-glow hover:shadow-glow-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-blue-500/30 text-slate-800 dark:text-white font-semibold transition-all duration-200 hover:bg-blue-500/5"
              >
                <Send className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-600 dark:text-gray-400 ${color} hover:border-blue-500/20 dark:hover:border-white/20 transition-all duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-4 gap-3 mt-2"
            >
              {portfolioData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  className="glass rounded-xl p-3 text-center border border-white/5"
                >
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Floating icons */}
              {floatingIcons.map((item, i) => (
                <FloatingIcon key={i} icon={item.icon} style={item.style as React.CSSProperties} />
              ))}

              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-[-20px] rounded-full border border-blue-500/10 animate-spin-slow" />
                <div className="absolute inset-[-40px] rounded-full border border-blue-500/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
              </div>

              {/* Photo container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Glow behind photo */}
                <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />

                {/* Photo wrapper */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30 shadow-glow-lg">
                  <Image
                    src="/ali-hero.png"
                    alt="Ali Haitham Ali Alashkar"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/30 via-transparent to-transparent" />
                </div>

                {/* Animated border ring */}
                <motion.div
                  className="absolute inset-[-4px] rounded-full border-2 border-blue-500/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    borderStyle: "dashed",
                    borderDashArray: "10 5",
                  } as React.CSSProperties}
                />
              </motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 right-0 glass rounded-2xl px-4 py-2 border border-white/10 shadow-glass"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-blue-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
