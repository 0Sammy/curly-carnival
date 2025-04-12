"use client"

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { Add } from "iconsax-react";

export default function Drawer({ isOpen, onClose, children, className = "" }: DrawerProps) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="z-40 fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" />
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 20, stiffness: 300 }} className={`fixed bottom-0 left-0 right-0 z-50 max-h-[95vh] overflow-y-auto border-t border-primaryGreen/30 bg-black rounded-t-2xl px-6 py-8 shadow-xl ${className}`}>
                        <button onClick={onClose} className="top-4 right-4 absolute bg-gray-600 hover:bg-primaryGreen p-1 rounded-full text-white transition-colors" aria-label="Close drawer">
                            <Add className="rotate-45" size={24} />
                        </button>
                        <div className="space-y-4 mt-8">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
