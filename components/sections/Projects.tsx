"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import {
  Github,
  ExternalLink,
  ChevronRight,
  Clock,
  Sparkles,
  X,
  CheckCircle,
  Zap,
  Code2,
  AlertTriangle,
} from "lucide-react";

type Project = (typeof portfolioData.projects)[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1117] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-slate-700 dark:text-gray-300" />
          </button>

          {/* Project image */}
          <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.color} overflow-hidden rounded-t-3xl`}>
            <div className="absolute inset-0 grid-pattern opacity-20" />
            {"image" in project && project.image ? (
              <Image
                src={project.image as string}
                alt={project.title}
                fill
                className="object-cover object-top opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-40">{project.icon}</span>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Title over image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  {"status" in project && project.status && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {project.status as string}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            {/* About section */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-3">
                <Code2 className="w-4 h-4 text-blue-500" />
                About This Project
              </h3>
              <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                {"longDescription" in project && project.longDescription
                  ? (project.longDescription as string)
                  : project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-3">
                <Zap className="w-4 h-4 text-blue-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            {"highlights" in project && Array.isArray(project.highlights) && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-3">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Key Highlights
                </h3>
                <ul className="flex flex-col gap-2">
                  {(project.highlights as string[]).map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-gray-300">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1 text-xs text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 px-3 py-1.5 rounded-lg"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge */}
            {"challenges" in project && project.challenges && (
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Technical Challenge
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {project.challenges as string}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-white/10 hover:border-blue-500/30 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-glow"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              ) : (
                <div className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-400 dark:text-gray-600 text-sm cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" />
                  No Live Demo
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/20 transition-all duration-300 relative flex flex-col"
              whileHover={{ y: -6 }}
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 grid-pattern opacity-20" />
                {"image" in project && project.image ? (
                  <Image
                    src={project.image as string}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-75"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                      {project.icon}
                    </motion.div>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Tech badges overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-xs bg-white/10 backdrop-blur-sm text-white border border-white/10">
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
                {/* Icon badge top-right */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-xl border border-white/10">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2">Features</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.slice(0, 4).map((f) => (
                      <span key={f} className="flex items-center gap-1 text-xs text-slate-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/8 px-2.5 py-1 rounded-lg">
                        <ChevronRight className="w-2.5 h-2.5 text-blue-400" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {/* More Info button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-glow"
                  >
                    <Sparkles className="w-4 h-4" />
                    More Info
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-blue-500/30 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-blue-500/30 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: portfolioData.projects.length * 0.15 }}
            className="group relative glass rounded-3xl overflow-hidden border border-dashed border-blue-500/30 hover:border-blue-500/60 transition-all duration-500"
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/5 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute w-32 h-32 rounded-full border border-blue-500/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-20 h-20 rounded-full border border-blue-500/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Clock className="w-8 h-8 text-blue-400" />
                </motion.div>
              </div>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
                  style={{
                    top: `${20 + Math.sin(i * 60 * (Math.PI / 180)) * 35}%`,
                    left: `${50 + Math.cos(i * 60 * (Math.PI / 180)) * 35}%`,
                  }}
                  animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                />
              ))}
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">More Projects Coming Soon</h3>
              </div>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                Currently building{" "}
                <span className="text-blue-500 dark:text-blue-400 font-medium">Spring Boot microservices</span>,{" "}
                <span className="text-purple-500 dark:text-purple-400 font-medium">AI integrations</span>, and{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">full-stack platforms</span>. Stay tuned!
              </p>
              <div className="flex flex-col gap-2.5 mt-1">
                {[
                  { label: "Spring Boot Microservices App", progress: 55, color: "bg-blue-500" },
                  { label: "AI-Powered Tool", progress: 25, color: "bg-purple-500" },
                ].map(({ label, progress, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-600 dark:text-gray-400">{label}</span>
                      <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${progress}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-blue-500/30 hover:border-blue-500/60 text-blue-500 dark:text-blue-400 hover:bg-blue-500/5 text-sm font-medium transition-all duration-200 mt-1"
              >
                <Github className="w-4 h-4" />
                Watch my GitHub for updates
              </a>
            </div>
          </motion.div>
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
            className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors duration-200 group"
          >
            <Github className="w-5 h-5" />
            View all projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
