"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiTrendingUp, FiStar, FiAward, FiUsers, FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";

export const HeroSection = () => {
  const stats = [
    { value: "170+", label: "Colleges", icon: <FiAward className="w-4 h-4" /> },
    { value: "10K+", label: "Students", icon: <FiUsers className="w-4 h-4" /> },
    { value: "3", label: "Years Data", icon: <FiTrendingUp className="w-4 h-4" /> },
  ];

  const features = [
    { icon: <FiTrendingUp />, text: "JEE, NEET & BITSAT Cutoffs" },
    { icon: <FiAward />, text: "NIRF Rankings" },
    { icon: <FiStar />, text: "Student Reviews" },
  ];

  return (
    <section className="relative section overflow-hidden bg-pattern-dots pt-24 md:pt-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-50" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-primary px-4 py-2 rounded-full">
              <FiStar className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted by 10,000+ Students</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="text-gradient block mt-2">
                  College Match
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Compare 170+ engineering and medical colleges with real cutoff data, rankings, and authentic student reviews. Make informed decisions with confidence.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explore"
                className="btn-primary text-lg group"
              >
                <FiSearch className="w-5 h-5" />
                <span>Explore Colleges</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/orcr"
                className="btn-outline text-lg"
              >
                <FiTrendingUp className="w-5 h-5" />
                <span>View Cutoffs</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Card */}
            <div className="relative group">
              <div className="card card-hover overflow-hidden">
                <Image
                  src="/iiita.jpeg"
                  alt="Modern college campus with state-of-the-art facilities"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">IIIT Allahabad</h3>
                    <p className="text-white/80 text-sm">Explore Campus →</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - College Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 card backdrop-blur-xl bg-card/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">170+</div>
                    <div className="text-sm text-muted-foreground">Top Colleges</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Featured College */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4"
              >
                <Link
                  href="/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                  className="badge-accent px-4 py-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <FiStar className="w-4 h-4" />
                  <span className="font-semibold">Featured</span>
                </Link>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};