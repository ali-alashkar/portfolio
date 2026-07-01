"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

interface SkillBarProps {
  name: string;
  level: number;
  badge: string;
  delay: number;
  isInView: boolean;
}

function SkillBar({ name, level, badge, delay, isInView }: SkillBarProps) {
  const badgeColor: Record<string, string> = {
    Advanced: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Intermediate: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Beginner: "bg-gray-500/10 text-slate-600 dark:text-gray-400 border-gray-500/20",
    Learning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-gray-500">{level}%</span>
          <span className={`px-2 py-0.5 rounded-full text-xs border ${badgeColor[badge] || badgeColor.Beginner}`}>
            {badge}
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillChip({ skill }: { skill: string }) {
  return (
    <span className="px-3 py-1.5 rounded-lg text-sm text-slate-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/8 hover:border-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-500/5 transition-all duration-200 cursor-default">
      {skill}
    </span>
  );
}

const skillCategories = [
  { title: "Backend", icon: "⚙️", skills: portfolioData.skills.backend, color: "from-blue-600 to-blue-400" },
  { title: "Frontend", icon: "🎨", skills: portfolioData.skills.frontend, color: "from-purple-600 to-purple-400" },
  { title: "Databases", icon: "🗄️", skills: portfolioData.skills.databases, color: "from-green-600 to-green-400" },
  { title: "Testing & QA", icon: "🧪", skills: portfolioData.skills.testing, color: "from-red-600 to-red-400" },
  { title: "Tools & Other", icon: "🛠️", skills: portfolioData.skills.other, color: "from-amber-600 to-amber-400" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-slate-50 dark:bg-[#080c14]">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="What I Bring to the Table"
          subtitle="A constantly growing stack of battle-tested technologies."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Language proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-lg shadow-glow">
                💻
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Programming Languages</h3>
            </div>
            {portfolioData.skills.languages.map((lang, i) => (
              <SkillBar
                key={lang.name}
                name={lang.name}
                level={lang.level}
                badge={lang.badge}
                delay={0.2 + i * 0.1}
                isInView={isInView}
              />
            ))}
          </motion.div>

          {/* Right side: category chips */}
          <div className="grid grid-cols-1 gap-4">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
                className="glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-sm`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
