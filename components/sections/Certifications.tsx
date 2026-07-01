"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 lg:py-32 relative bg-[#0B0F19]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Credentials & Recognition"
          subtitle="Industry-recognized certifications that validate my expertise."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mx-auto mb-5 shadow-glow group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {cert.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-snug">{cert.issuer}</p>

                {/* Year badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
                  <Award className="w-3 h-3 text-blue-400" />
                  <span className="text-gray-300 font-medium">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
