"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiSearch, FiBarChart2, FiArrowRight } from "react-icons/fi";

export const CtaSection = () => {
  return (
    <section className="section bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-border p-12 md:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-pattern-dots opacity-5" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Find Your <span className="text-gradient">Dream College?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Start your educational journey today with access to our
                comprehensive college database, cutoff trends, and authentic
                anonymous reviews.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/explore" className="btn-primary group">
                <FiSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Explore Colleges</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/orcr" className="btn-secondary group">
                <FiBarChart2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View Cutoffs</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border"
            >
              {[
                { label: "Colleges", value: "170+" },
                { label: "Data Points", value: "10K+" },
                { label: "Years of Data", value: "3" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
