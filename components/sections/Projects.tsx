"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-slate-50 dark:bg-[#080c14]">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          subtitle="A collection of real-world projects that showcase my skills."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/20 transition-all duration-300 relative"
              whileHover={{ y: -6 }}
            >
              {/* Project Image / Header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20" />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                  >
                    {project.icon}
                  </motion.div>
                </div>
                {/* Tech badges overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs bg-white/10 backdrop-blur-sm text-white border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs bg-white/10 backdrop-blur-sm text-white border border-white/10">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2">Features</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1 text-xs text-slate-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/8 px-2.5 py-1 rounded-lg"
                      >
                        <ChevronRight className="w-2.5 h-2.5 text-blue-400" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 hover:border-blue-500/30 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-glow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-600 text-sm cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 group"
          >
            <Github className="w-5 h-5" />
            View all projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
