"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Clock, HeartHandshake, BookOpen, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [BadgeCheck, Clock, HeartHandshake, BookOpen, TrendingUp];

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            {t.whyUs.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            {t.whyUs.title}
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.whyUs.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="group flex flex-col gap-4 p-7 bg-surface border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 + t.whyUs.items.length * 0.1 }}
            className="flex flex-col justify-center items-center text-center p-7 bg-gradient-to-br from-primary to-primary-hover rounded-xl"
          >
            <div className="text-5xl font-bold text-accent mb-2">{t.whyUs.cta30}</div>
            <div className="text-white text-lg font-semibold mb-3">{t.whyUs.ctaYears}</div>
            <p className="text-white/70 text-sm mb-6">{t.whyUs.ctaDesc}</p>
            <button
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
            >
              {t.whyUs.ctaBtn}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
