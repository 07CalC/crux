"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const SurveySection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-primary to-secondary p-1"
        >
          <div className="relative bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern-dots opacity-10" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 badge-accent bg-white/10 backdrop-blur-sm border-white/20"
              >
                <FiCheckCircle className="w-4 h-4" />
                <span className="text-sm font-semibold text-white">Help Us Improve</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl font-bold text-white"
              >
                Help Us Improve CRUX
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-white/90 font-semibold text-lg md:text-xl">
                  Which branch in which IIT do you think is better?
                </p>
                <p className="text-white/80 text-base md:text-lg max-w-2xl">
                  Every choice you make helps us improve our recommendations for future students.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  href="/iit/preference" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 border-2 border-white/20 shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <FiCheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Take the Survey</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
