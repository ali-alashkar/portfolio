"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-16 relative bg-[#080c14]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Languages"
          title="Communication Skills"
        />

        <div ref={ref} className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
          {portfolioData.languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="flex-1 glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">{lang.flag}</div>
              <h3 className="text-white font-bold text-lg mb-1">{lang.name}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{lang.level}</p>
              
              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full progress-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
