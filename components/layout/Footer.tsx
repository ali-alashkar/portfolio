"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
    { icon: MessageCircle, href: portfolioData.personal.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-slate-50 dark:bg-[#080c14]">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xs shadow-glow">
              AH
            </div>
            <span className="text-gray-400 text-sm">
              Ali Haitham Ali Alashkar
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Designed & Developed with{" "}
            <Heart className="w-3 h-3 text-blue-400 fill-blue-400" /> by Ali
            Haitham Ali Alashkar © 2026
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-200 border border-white/10"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 transition-colors duration-200 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
