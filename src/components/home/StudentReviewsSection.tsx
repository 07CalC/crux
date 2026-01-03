"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiMessageSquare, FiStar, FiSearch, FiUser } from "react-icons/fi";

export const StudentReviewsSection = () => {
  const studentReviews = [
    {
      college: "IIIT Allahabad",
      review: "Placements go brrrrrrr",
      rating: 4,
    },
    {
      college: "IIT Bombay",
      review: "no review needed",
      rating: 5,
    },
    {
      college: "VIT",
      review: "Gender Ratio 😍😍😍",
      rating: 3,
    },
  ];

  const gradients = [
    "from-primary to-secondary",
    "from-secondary to-accent",
    "from-accent to-primary",
  ];

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-secondary"
          >
            <FiMessageSquare className="w-4 h-4" />
            <span className="text-sm font-semibold">Real Student Feedback</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Hear From <span className="text-gradient">Students</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Anonymous, authentic reviews from real students. Share your experience and help others make informed decisions.
          </motion.p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {studentReviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover group"
            >
              {/* Reviewer Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <FiUser className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">Anonymous Student</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.college}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-muted-foreground mb-4 text-sm md:text-base italic min-h-[3rem]">
                &quot;{item.review}&quot;
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center gap-1" role="img" aria-label={`${item.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 transition-all ${
                      i < item.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-border"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-sm font-semibold">
                  {item.rating}/5
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 md:p-12 text-center border border-border"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-muted-foreground">
              Reviews are available on every college page. Explore colleges to read detailed feedback and share your own experience!
            </p>
            <Link href="/explore" className="btn-secondary group inline-flex">
              <FiSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Explore Colleges</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
