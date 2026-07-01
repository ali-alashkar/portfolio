"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap, Code2, TestTube } from "lucide-react";

const highlightIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "🎓": GraduationCap,
  "💻": Code2,
  "🧪": TestTube,
  "📊": MapPin,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#0B0F19]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="The Developer Behind the Code"
          subtitle="Passionate about building systems that scale — and software that ships."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Card behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-transparent blur-2xl scale-110" />
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] rounded-3xl overflow-hidden border border-white/10 shadow-glass">
                <Image
                  src="/ali-about.jpg"
                  alt="Ali Haitham — About"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 to-transparent" />

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 border border-white/10">
                    <p className="text-white font-semibold text-sm">Ali Haitham Ali Alashkar</p>
                    <p className="text-blue-400 text-xs mt-0.5">Backend Developer · CS Student</p>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 border border-blue-500/20 shadow-glow"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-xs text-gray-400">Years Building</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {portfolioData.about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="text-gray-400 leading-relaxed text-[15px]"
              >
                {para}
              </motion.p>
            ))}

            {/* Highlight pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              {portfolioData.about.highlights.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300 hover:border-blue-500/30 hover:text-white transition-colors duration-200"
                >
                  <span>{h.icon}</span>
                  {h.label}
                </motion.span>
              ))}
            </motion.div>

            {/* Quick info grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-2 gap-3 mt-4"
            >
              {[
                { label: "Location", value: "Cairo, Egypt 🇪🇬" },
                { label: "University", value: "Ain Shams University" },
                { label: "Major", value: "Information Systems" },
                { label: "Status", value: "Open to Work ✅" },
              ].map((item, i) => (
                <GlassCard key={i} className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
