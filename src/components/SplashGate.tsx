import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashGateProps {
  children: React.ReactNode;
  minDurationMs?: number;
  onceKey?: string;
}

const SplashGate: React.FC<SplashGateProps> = ({
  children,
  minDurationMs = 2000,
  onceKey,
}) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (onceKey && sessionStorage.getItem(onceKey)) {
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onceKey) sessionStorage.setItem(onceKey, "true");
    }, minDurationMs);

    return () => clearTimeout(timer);
  }, [minDurationMs, onceKey]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.img
              src="public\lovable-uploads\png_logo.png" // 👉 replace with your logo path
              alt="Jalsa Paan Logo"
              className="w-40 h-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Text */}
            <div className="flex text-3xl font-bold text-green-900">
               
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Jalsa
              </motion.span>
              <motion.span
                className="ml-2 "
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Paan
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && children}
    </>
  );
};

export default SplashGate;
