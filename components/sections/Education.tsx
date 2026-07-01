"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { portfolioData } from "@/data/portfolio";
import { BookOpen, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 lg:py-32 relative bg-[#080c14]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Foundation"
          subtitle="Where curiosity meets computer science."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Animated border glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600/30 via-blue-400/10 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-blue-500/20 transition-colors duration-300 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800/5 rounded-full blur-2xl" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8 relative">
                {/* University icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-2xl shadow-glow flex-shrink-0">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {portfolioData.education.university}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">
                    {portfolioData.education.degree}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      {portfolioData.education.major}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {portfolioData.education.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {portfolioData.education.graduation}
                    </span>
                  </div>
                </div>
                {/* GPA Badge */}
                <div className="flex-shrink-0">
                  <div className="glass rounded-2xl px-4 py-3 border border-blue-500/20 text-center">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Award className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-xs text-gray-400 font-medium">GPA</span>
                    </div>
                    <div className="text-2xl font-bold gradient-text">2.9</div>
                    <div className="text-xs text-gray-500">/ 4.0</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Coursework */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.education.coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/5 border border-white/8 hover:border-blue-500/20 hover:text-blue-300 transition-colors duration-200"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
