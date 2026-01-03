import { Orcr } from "@/types/globalTypes";
import { FiEye, FiX, FiChevronDown } from "react-icons/fi";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

type props = {
    view: { name: string; key: keyof Orcr; show: boolean }[]
    setView: React.Dispatch<{ name: string; key: keyof Orcr; show: boolean }[]>
}

export const ViewToggle = ({ view, setView }: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const viewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (viewRef.current && !viewRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    const visibleCount = view.filter(v => v.show).length;

    return (
        <div className="relative" ref={viewRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn-secondary group relative"
            >
                <FiEye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Columns</span>
                <FiChevronDown className="w-4 h-4" />
                <span className="badge-primary text-xs px-2 py-0.5 ml-1">
                    {visibleCount}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="fixed sm:absolute inset-x-4 sm:inset-x-auto sm:right-0 top-auto z-50 mt-4"
                    >
                        <div className="card p-4 sm:p-6 space-y-4 shadow-xl sm:min-w-[320px]">
                            {/* Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <FiEye className="w-5 h-5 text-primary" />
                                    <h3 className="text-base sm:text-lg font-bold">Visible Columns</h3>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="btn-ghost p-2 group/close"
                                >
                                    <FiX className="w-5 h-5 group-hover/close:rotate-90 transition-transform" />
                                </button>
                            </div>

                            {/* Column toggles */}
                            <div className="space-y-2 max-h-[60vh] sm:max-h-[400px] overflow-y-auto pr-2">
                                {view.map((item, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 flex-shrink-0 rounded border-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                                            checked={item.show}
                                            onChange={() => setView(view.map((v, i) => i === index ? { ...v, show: !v.show } : v))}
                                        />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors flex-1 break-words">
                                            {item.name}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center pt-4 border-t border-border text-sm text-muted-foreground">
                                <span>{visibleCount} of {view.length} visible</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
