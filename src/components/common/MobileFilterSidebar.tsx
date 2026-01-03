'use client';
import { ReactNode, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

type MobileFilterSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const MobileFilterSidebar = ({ isOpen, onClose, children }: MobileFilterSidebarProps) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full w-[85vw] max-w-[400px] bg-background z-[71] shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={onClose}
                className="btn-ghost p-2 group"
                aria-label="Close filters"
              >
                <FiX className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
