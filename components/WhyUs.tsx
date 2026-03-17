"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BadgeCheck,
  Clock,
  HeartHandshake,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "30+ Years of Proven Expertise",
    description:
      "Three decades of hands-on experience in gas equipment and industrial solutions. Our track record speaks for itself.",
  },
  {
    icon: Clock,
    title: "Reliable & On-Time Delivery",
    description:
      "We understand project timelines. Our logistics capabilities and supplier network ensure your equipment arrives when needed.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Long-Term Partner",
    description:
      "We build relationships, not just transactions. Our clients return to us because we deliver on our commitments every time.",
  },
  {
    icon: BookOpen,
    title: "Technical Depth & Consultation",
    description:
      "Our team includes experienced engineers who provide technical consultation beyond just product supply.",
  },
  {
    icon: TrendingUp,
    title: "Comprehensive Product Range",
    description:
      "From gas systems to hydraulics to safety equipment, a single supplier for your diverse industrial procurement needs.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Why Choose Us
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            What sets Power Control Systems apart from other suppliers in the
            region.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="group flex flex-col gap-4 p-7 bg-surface border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300">
                <feature.icon
                  className="text-primary group-hover:text-white transition-colors duration-300"
                  size={26}
                />
              </div>
              <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 + features.length * 0.1 }}
            className="flex flex-col justify-center items-center text-center p-7 bg-gradient-to-br from-primary to-primary-hover rounded-xl"
          >
            <div className="text-5xl font-bold text-accent mb-2">30+</div>
            <div className="text-white text-lg font-semibold mb-3">
              Years Serving Industry
            </div>
            <p className="text-white/70 text-sm mb-6">
              Oil, gas, and industrial sectors across the region trust us for
              their critical supply needs.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
            >
              Work With Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
