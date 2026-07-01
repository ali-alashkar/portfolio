"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 lg:py-32 relative bg-slate-50 dark:bg-[#080c14]">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Milestones That Matter"
          subtitle="Recognition that fuels the drive to keep building."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/20 transition-all duration-300 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/10 group-hover:border-blue-500/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-200">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
