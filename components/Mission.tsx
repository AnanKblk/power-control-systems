"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Mission() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              {t.mission.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
              {t.mission.title1}
              <br />
              {t.mission.title2}
            </h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed">{t.mission.sub}</p>
          </motion.div>

          <div className="space-y-5">
            {t.mission.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={22} />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
