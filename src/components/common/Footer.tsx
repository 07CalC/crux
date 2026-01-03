"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiGithub, FiHeart, FiExternalLink, FiStar } from "react-icons/fi";

const quickLinks = [
  { title: "Cutoffs", link: "/orcr" },
  { title: "Explore", link: "/explore" },
  { title: "Rankings", link: "/nirf" },
  { title: "NEET PG", link: "/orcr/neet-pg" },
];

const officialLinks = [
  { title: "NIRF", link: "https://www.nirfindia.org/" },
  { title: "JoSAA", link: "https://josaa.nic.in/" },
  { title: "CSAB", link: "https://csab.nic.in/" },
  { title: "BITSAT", link: "https://www.bitsadmission.com/fd/BITSAT_cutoffs.html?06012025" },
  { title: "JAC Delhi", link: "https://jacdelhi.admissions.nic.in/" }
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-muted/50 via-background to-muted/50 border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      
      {/* Large Background Text */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[15rem] lg:text-[20rem] font-extrabold text-muted/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        CRUX
      </div>

      <div className="container-custom relative z-10 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gradient">
                CRUX
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              Your trusted platform for exploring colleges across India. We aggregate data from official sources to help you make informed educational decisions.
            </p>
            <div className="glass rounded-xl p-3 text-xs md:text-sm border border-amber-500/20">
              <div className="flex items-start gap-2">
                <FiExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Disclaimer:</strong>
                  <span className="text-muted-foreground"> CRUX aggregates data from official sources. Always verify with official websites for accuracy.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl md:text-2xl font-bold">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="btn-ghost text-sm group"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Official Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              Official Sources
              <FiExternalLink className="w-4 h-4 text-muted-foreground" aria-label="External links" />
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {officialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm group"
                  aria-label={`Visit ${link.title} official website (opens in new tab)`}
                >
                  <span>{link.title}</span>
                  <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          {/* Call to Action */}
          <div className="flex items-center gap-2 text-base md:text-lg">
            <span className="text-muted-foreground">
              Found CRUX helpful?
            </span>
            <a
              href="https://github.com/07calc/crux/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors"
              aria-label="Star CRUX on GitHub"
            >
              <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="underline">Star on GitHub</span>
              <FiStar className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Creator Credit */}
          <div className="flex items-center gap-2 text-base md:text-lg text-muted-foreground">
            <span>Made with</span>
            <FiHeart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" aria-label="love" />
            <span>by</span>
            <a
              href="https://vinm.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:text-secondary underline transition-colors"
              aria-label="Visit creator's website"
            >
              CalC
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-xs md:text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} CRUX. Open source under MIT License.</p>
        </motion.div>
      </div>
    </footer>
  );
};
