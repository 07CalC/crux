"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiHeart, FiBarChart2, FiUsers, FiTrendingUp, FiAward } from "react-icons/fi";
import { GiSpikedBat } from "react-icons/gi";

export const BonkSection = () => {
  const features = [
    {
      icon: GiSpikedBat,
      title: "Bonk Your College",
      description: "Show your support for your institution",
    },
    {
      icon: FiBarChart2,
      title: "Compare Bonk Counts",
      description: "See which colleges are most popular",
    },
    {
      icon: FiUsers,
      title: "Community Perspective",
      description: "Get insights from collective student opinions",
    },
  ];

  const leaderboard = [
    { name: "IIT Bombay", bonks: 2543, rank: 1 },
    { name: "IIIT Allahabad", bonks: 2187, rank: 2 },
    { name: "NIT Surathkal", bonks: 1845, rank: 3 },
    { name: "BITS Pilani", bonks: 1623, rank: 4 },
    { name: "IIT Madras", bonks: 1512, rank: 5 },
  ];

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-br from-amber-400 to-yellow-500 text-amber-900";
      case 2:
        return "bg-gradient-to-br from-slate-300 to-gray-400 text-slate-800";
      case 3:
        return "bg-gradient-to-br from-orange-400 to-amber-600 text-orange-900";
      default:
        return "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary";
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <FiAward className="w-4 h-4" />;
    return null;
  };

  return (
    <section className="section bg-gradient-to-br from-accent/5 via-muted/50 to-primary/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge-accent w-fit"
              >
                <FiHeart className="w-4 h-4" />
                <span className="text-sm font-semibold">Community Engagement</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold"
              >
                Bonk Your <span className="text-gradient-secondary">Favorite College</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Express your support and help other students discover great colleges through "Bonk". 
                Each college has a Bonk count that shows its popularity among the student community.
              </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-hover group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm md:text-base mb-1">
                      {feature.title}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="card h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-accent via-primary to-accent px-6 py-5 border-b border-border">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <FiTrendingUp className="w-6 h-6" />
                  Top Bonked Colleges
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  Most supported by the community
                </p>
              </div>

              {/* Leaderboard */}
              <div className="flex-1 p-6 space-y-3">
                {leaderboard.map((college, index) => (
                  <motion.div
                    key={college.rank}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${getRankStyle(college.rank)}`}>
                        {getRankIcon(college.rank) || `#${college.rank}`}
                      </div>
                      <span className="font-bold truncate text-sm md:text-base">
                        {college.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="badge-primary text-xs md:text-sm whitespace-nowrap">
                        {college.bonks.toLocaleString()}
                      </span>
                      <button 
                        className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full hover:scale-110 active:scale-95 transition-transform flex items-center justify-center group-hover:rotate-12"
                        aria-label={`Bonk ${college.name}`}
                      >
                        <GiSpikedBat className="text-white text-xl" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border text-center">
                <Link href="/explore" className="btn-outline group inline-flex">
                  <GiSpikedBat className="w-5 h-5" />
                  <span>See All Colleges</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
