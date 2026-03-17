"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "1994",
    title: "Company Founded",
    description:
      "Power Control Systems was established as a specialized gas equipment supplier, laying the foundation for regional industrial excellence.",
    color: "bg-accent",
  },
  {
    year: "2006",
    title: "Strategic Restructuring",
    description:
      "Underwent a comprehensive restructuring to align with evolving market demands, expanding capabilities and strengthening operations.",
    color: "bg-primary-hover",
  },
  {
    year: "2010s",
    title: "Product Line Expansion",
    description:
      "Expanded into instrumentation, hydraulic systems, and industrial safety equipment — meeting growing complexity in the oil & gas sector.",
    color: "bg-primary",
  },
  {
    year: "Today",
    title: "30+ Years of Excellence",
    description:
      "Serving oil, gas, and industrial sectors across the region with a comprehensive portfolio and a team of seasoned technical experts.",
    color: "bg-primary",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="history"
      className="py-24 px-4 md:px-8 lg:px-16 bg-surface"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Our History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Our Journey
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border origin-top md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`flex-1 md:max-w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  } pl-16 md:pl-0`}
                >
                  <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                      className={`inline-block text-white text-sm font-bold px-3 py-1 rounded-full mb-3 ${m.color}`}
                    >
                      {m.year}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {m.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 border-white bg-accent shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
