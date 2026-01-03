"use client";

import { motion } from "motion/react";
import { FiInfo, FiTool } from "react-icons/fi";

export const WarningsSection = () => {
  return (
    <section className="section py-12">
      <div className="container-custom max-w-5xl">
        <div className="grid gap-6">
          {/* Info Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8 border-l-4 border-secondary"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                <FiInfo className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">
                  Data Update in Progress
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're currently updating NIRF rankings and student statistics to the latest data.
                  <strong className="block mt-1 text-foreground">Cutoff data (ORCR) is up-to-date for 2023-2025.</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beta/Development Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 border-l-4 border-primary"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <FiTool className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg md:text-xl font-bold">
                    Continuous Improvements
                  </h3>
                  <span className="badge-primary text-xs">BETA</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're actively improving CRUX with new features and data updates. 
                  Your feedback helps us build a better platform for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
