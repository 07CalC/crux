"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FiBarChart2, FiTrendingUp, FiArrowRight, FiActivity } from "react-icons/fi";

const options = [
  {
    name: "JoSAA",
    image: "/jossa.jpg",
    done: true,
    href: "/orcr/jossa",
    description: "IITs, NITs, IIITs, and GFTIs admissions",
    color: "from-primary to-secondary",
    icon: <FiBarChart2 className="w-6 h-6" />,
  },
  {
    name: "CSAB",
    image: "/csab.jpg",
    done: true,
    href: "/orcr/csab",
    description: "Special vacant seat rounds for NITs, IIITs, GFTIs",
    color: "from-secondary to-accent",
    icon: <FiTrendingUp className="w-6 h-6" />,
  },
  {
    name: "BITSAT",
    image: "/bits.png",
    done: true,
    href: "/orcr/bitsat",
    description: "BITS Pilani, Goa, Hyderabad",
    color: "from-accent to-primary",
    icon: <FiBarChart2 className="w-6 h-6" />,
  },
  {
    name: "NEET PG",
    image: "/neetPg.png",
    done: true,
    href: "/orcr/neet-pg",
    description: "Medical Postgraduate (MD/MS/DNB) admissions",
    color: "from-primary to-accent",
    icon: <FiActivity className="w-6 h-6" />,
    badge: "New",
  },
  {
    name: "JAC",
    image: "/jac.jpeg",
    done: false,
    href: "/orcr/jac",
    description: "DTU, NSUT, IGDTUW, IIIT-D (Delhi Region)",
    color: "from-secondary to-primary",
    icon: <FiBarChart2 className="w-6 h-6" />,
  },
];

export default function Orcr() {
  return (
    <section className="section min-h-screen bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge-primary"
          >
            <FiTrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Historical Cutoff Data</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Explore <span className="text-gradient">Cutoff Rankings</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Access comprehensive opening and closing rank data from various counseling processes. 
            Analyze trends across 3 years to make informed admission decisions.
          </motion.p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={option.done ? option.href : "#"}
                className={`group block ${!option.done ? "pointer-events-none" : ""}`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 ${
                    option.done
                      ? "hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
                      : "opacity-60"
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative p-6 md:p-8 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {option.icon}
                        </div>

                        {/* Logo Image */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary/30 transition-colors">
                          <Image
                            src={option.image}
                            alt={option.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Badge */}
                      {option.badge && (
                        <span className="badge-secondary animate-pulse">
                          {option.badge}
                        </span>
                      )}
                      {!option.done && (
                        <span className="badge-primary text-xs">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {option.name}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    {/* Action */}
                    {option.done && (
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base pt-2">
                        <span>Explore Cutoffs</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`h-1 bg-gradient-to-r ${option.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="card p-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>3 years of data</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-150" />
                <span>Multiple rounds tracked</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300" />
                <span>Updated regularly</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
