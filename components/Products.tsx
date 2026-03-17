"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Gauge, Droplets, ShieldCheck, Wrench, Zap, Package } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Flame, Gauge, Droplets, ShieldCheck, Wrench, Zap, Package];

export default function Products() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 px-4 md:px-8 lg:px-16 bg-surface">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            {t.products.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            {t.products.title}
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.products.sub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.products.items.map((product, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="group bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + t.products.items.length * 0.07 }}
            className="bg-primary border border-primary rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-3">{t.products.ctaTitle}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t.products.ctaDesc}</p>
            </div>
            <button
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 bg-accent hover:bg-yellow-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200"
            >
              {t.products.ctaBtn}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
