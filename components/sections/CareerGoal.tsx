"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function CareerGoal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statusStyles = {
    completed: {
      dot: "bg-green-400",
      card: "border-green-500/20",
      label: "text-green-400",
      badge: "bg-green-500/10 border-green-500/20 text-green-400",
    },
    current: {
      dot: "bg-blue-400 animate-pulse",
      card: "border-blue-500/30",
      label: "text-blue-400",
      badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    upcoming: {
      dot: "bg-gray-600",
      card: "border-white/5",
      label: "text-gray-500",
      badge: "bg-white/5 border-white/10 text-gray-500",
    },
  };

  return (
    <section id="career" className="py-24 lg:py-32 relative bg-white dark:bg-[#0B0F19]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Career Goal"
          title="The Road Ahead"
          subtitle={portfolioData.careerGoal.headline}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {portfolioData.careerGoal.description}
        </motion.p>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {portfolioData.careerGoal.milestones.map((milestone, i) => {
              const styles = statusStyles[milestone.status as keyof typeof statusStyles];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex flex-col sm:flex-row ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"} items-start sm:items-center gap-6`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "sm:text-right" : "sm:text-left"}`}>
                    <div className={`glass rounded-2xl p-5 border ${styles.card} transition-colors duration-300 hover:border-blue-500/30 inline-block w-full`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "sm:flex-row-reverse" : "sm:flex-row"} flex-row`}>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles.badge}`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-white font-bold text-base">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:flex w-4 h-4 flex-shrink-0 relative z-10">
                    <div className={`w-4 h-4 rounded-full ${styles.dot} border-4 border-[#0B0F19]`} />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
