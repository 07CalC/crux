"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiTrendingUp, FiFilter, FiCheckCircle, FiArrowRight, FiBarChart2 } from "react-icons/fi";

export const CutoffSection = () => {
  const cutoffRows = [
    { program: "IT", gender: "Neutral", open: 950, close: 5870 },
    { program: "IT", gender: "Female", open: 2818, close: 11259 },
    { program: "IT-BI", gender: "Neutral", open: 3281, close: 6192 },
    { program: "IT-BI", gender: "Female", open: 8616, close: 11529 },
    { program: "ECE", gender: "Neutral", open: 5249, close: 9200 },
    { program: "ECE", gender: "Female", open: 10761, close: 14522 },
  ];
  const cutoffCommon = {
    id: "c19b3fc1-f70c-48c5-997f-51dfcb3b4c79",
    institute: "IIITA",
  };

  const features = [
    { icon: FiBarChart2, text: "JoSAA • 6 Rounds", color: "from-primary to-secondary" },
    { icon: FiFilter, text: "CSAB • Special", color: "from-secondary to-accent" },
    { icon: FiCheckCircle, text: "BITSAT • NEET PG", color: "from-accent to-primary" },
  ];

  return (
    <section className="section bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-primary"
          >
            <FiTrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Data-Driven Decisions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Historical <span className="text-gradient">Cutoff Data</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Analyze 3 years of opening & closing ranks across JoSAA, CSAB, BITSAT & NEET PG counseling
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <FiTrendingUp className="w-5 h-5 text-white" />
                </div>
                Make Informed Choices
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Access comprehensive historical cutoff data for IITs, NITs, IIITs, and GFTIs. 
                Filter by branch, gender, category, and seat type to find your perfect match.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-hover group"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mr-2 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/orcr" className="btn-primary group">
                <FiBarChart2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Explore All Cutoffs</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/orcr/neet-pg" className="btn-secondary group">
                <FiCheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>NEET PG</span>
                <span className="badge-accent text-xs px-2 py-0.5 ml-1">NEW</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Table Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-primary via-secondary to-primary px-6 py-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base md:text-lg font-bold text-white">
                    IIIT Allahabad • 2025 R1
                  </h4>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                    Sample
                  </span>
                </div>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-xs md:text-sm text-center text-primary font-bold px-4 py-3 border-b border-border">
                        Program
                      </th>
                      <th className="text-xs md:text-sm text-center text-primary font-bold px-4 py-3 border-b border-border">
                        Gender
                      </th>
                      <th className="text-xs md:text-sm text-center text-primary font-bold px-4 py-3 border-b border-border">
                        Open
                      </th>
                      <th className="text-xs md:text-sm text-center text-primary font-bold px-4 py-3 border-b border-border">
                        Close
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cutoffRows.map((row, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + idx * 0.05 }}
                        className="group hover:bg-primary/5 transition-colors border-b border-border last:border-b-0"
                      >
                        <td className="text-xs md:text-sm text-center font-medium px-4 py-3">
                          {row.program}
                        </td>
                        <td className="text-xs md:text-sm text-center text-muted-foreground px-4 py-3">
                          {row.gender}
                        </td>
                        <td className="text-xs md:text-sm text-center font-semibold px-4 py-3">
                          <span className="inline-flex items-center gap-1 text-secondary">
                            {row.open.toLocaleString()}
                          </span>
                        </td>
                        <td className="text-xs md:text-sm text-center font-semibold px-4 py-3">
                          <span className="inline-flex items-center gap-1 text-accent">
                            {row.close.toLocaleString()}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* View More Link */}
              <div className="bg-muted/30 px-6 py-4 text-center border-t border-border">
                <Link
                  href={`/explore/${cutoffCommon.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group"
                >
                  <span>View full college details</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
