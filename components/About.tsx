"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Wrench } from "lucide-react";

const stats = [
  { icon: Award, value: "1994", label: "Year Founded" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Globe, value: "Regional", label: "Market Reach" },
  { icon: Wrench, value: "7+", label: "Product Categories" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
              A Legacy of Industrial
              <br />
              Excellence
            </h2>
            <div className="w-12 h-1 bg-accent mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Power Control Systems was established in 1994 as a specialized
              supplier of gas equipment and industrial solutions. Over three
              decades, we have built deep expertise in serving the oil, gas, and
              industrial sectors across the region.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In 2006, we underwent a strategic restructuring to better align
              with evolving market demands, expanding our portfolio to include
              instrumentation, hydraulic systems, and advanced safety equipment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, Power Control Systems stands as a trusted partner for
              engineers and procurement professionals who demand quality,
              reliability, and technical expertise.
            </p>
          </motion.div>

          {/* Right: Stats grid */}
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
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
