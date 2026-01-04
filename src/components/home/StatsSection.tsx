"use client";

import { FiAward, FiMapPin, FiDatabase, FiUsers, FiTrendingUp } from "react-icons/fi";
import { motion } from "motion/react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <FiAward className="w-8 h-8" />,
      value: "1500+",
      label: "Top Colleges",
      description: "IITs, NITs, IIITs, GFTIs, BITS ,Med schools and more",
      color: "from-primary to-primary"
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      value: "50+",
      label: "Cities",
      description: "Across India",
      color: "from-secondary to-secondary"
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      value: "3 Years",
      label: "Historical Data",
      description: "2023-2025 cutoffs",
      color: "from-accent to-accent"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: "1000+",
      label: "Students Helped",
      description: "Finding their dream college",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-primary"
          >
            <FiTrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Proven Track Record</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Trusted by <span className="text-gradient">Thousands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive data and insights to help you make the right educational choice
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Join thousands of students making informed decisions
          </p>
        </motion.div>
      </div>
    </section>
  );
};
