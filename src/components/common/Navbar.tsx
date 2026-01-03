"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiBarChart2, FiAward, FiActivity } from "react-icons/fi";
import { ThemeToggleButton } from "./ToggleThemeButton";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/explore", label: "Explore", icon: <FiSearch className="w-4 h-4" /> },
    { href: "/orcr", label: "Cutoffs", icon: <FiBarChart2 className="w-4 h-4" /> },
    { href: "/orcr/neet-pg", label: "NEET PG", icon: <FiActivity className="w-4 h-4" />, badge: "New" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-4"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="CRUX Home"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-gradient">
                CRUX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                  aria-label={link.label}
                >
                  <span className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                    {link.badge && (
                      <span className="badge-secondary animate-pulse">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <ThemeToggleButton />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden btn-ghost p-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-card border-l border-border shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  aria-hidden="true"
                />
                <span className="text-xl font-bold text-gradient">
                  CRUX
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-ghost p-2"
                aria-label="Close mobile menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <span className="flex items-center gap-3 text-base font-medium text-foreground">
                      <span className="text-primary">{link.icon}</span>
                      {link.label}
                    </span>
                    {link.badge && (
                      <span className="badge-secondary">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Made with ❤️ for Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
