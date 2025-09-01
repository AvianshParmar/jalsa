// src/components/SplashScreen.tsx
import React from "react";
import { motion } from "framer-motion";

const LOGO_URL = "https://res.cloudinary.com/dmepjjljl/image/upload/v1755765543/Logo_x5gsqr.jpg";

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        {/* Logo with entry + gentle breathing */}
        <motion.img
          src={LOGO_URL}
          alt="Jalsa Paan Logo"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto shadow-xl mb-6 breathe"
          initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Brand — Jalsa from left, Paan from right */}
        <div className="flex items-baseline justify-center gap-3">
          <motion.span
            initial={{ x: -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-green-700"
          >
            Jalsa
          </motion.span>

          <motion.span
            initial={{ x: 240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-red-600"
          >
            Paan
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-3 text-sm text-gray-500"
        >
          Experience the Joy of Authentic Paan
        </motion.p>
      </motion.div>

      {/* Small CSS for breathing effect (keeps file self-contained) */}
      <style>{`
        @keyframes breathe {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }
        .breathe { animation: breathe 2.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default SplashScreen;
