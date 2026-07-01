"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle, Trophy } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-[#0B0F19]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          subtitle="Real-world projects, real impact."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-12">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-xl shadow-glow border-4 border-[#0B0F19]">
                    {i === 0 ? "📊" : "💻"}
                  </div>
                </div>

                <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 hover:border-blue-500/20 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          exp.type === "Full-time"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-blue-400 font-semibold">{exp.role}</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg glass border border-white/10 text-sm text-gray-400 whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                  {/* Grid: Responsibilities + Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Responsibilities
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {exp.responsibilities.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Key Achievements
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {exp.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-sm text-gray-300 font-medium">
                            <Trophy className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
