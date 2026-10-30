
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min(
        Math.floor((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => setFinished(true), 400);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={onComplete}
    >
      {!finished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#11100e]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-xs uppercase tracking-[0.6em] text-[#c9a66b]"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-display text-5xl tracking-[0.12em] text-[#f5f0e8] sm:text-7xl md:text-8xl"
          >
            MAISON NOIR
          </motion.h1>

          <div className="mt-12 h-[2px] w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[#c9a66b]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-5 flex w-64 justify-between text-[10px] uppercase tracking-[0.3em] text-white/50">
            <span>Preparing experience</span>
            <span className="text-[#c9a66b]">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
