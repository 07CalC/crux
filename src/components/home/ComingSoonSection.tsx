"use client";

import { motion } from "motion/react";
import { FiLayers, FiBook, FiZap } from "react-icons/fi";

export const ComingSoonSection = () => {
  const features = [
    {
      icon: FiLayers,
      title: "College Comparison Tool",
      description: "Compare colleges side-by-side across various parameters to make smarter choices.",
      color: "from-primary to-secondary",
    },
    {
      icon: FiBook,
      title: "JAC Delhi Cutoffs",
      description: "Extended coverage for JAC Delhi counselling data and cutoff trends.",
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
          >
            <FiZap className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Coming Soon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            What's Next for <span className="text-white/90">CRUX</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We're constantly improving! Here's what's in our development pipeline:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
