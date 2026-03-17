"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Award, Users, Globe, Wrench];

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: icons[0], value: t.about.stat1value, label: t.about.stat1label },
    { icon: icons[1], value: t.about.stat2value, label: t.about.stat2label },
    { icon: icons[2], value: t.about.stat3value, label: t.about.stat3label },
    { icon: icons[3], value: t.about.stat4value, label: t.about.stat4label },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              {t.about.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
              {t.about.title1}
              <br />
              {t.about.title2}
            </h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.about.p1}</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.about.p2}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{t.about.p3}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-surface border border-border rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="text-primary" size={22} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
