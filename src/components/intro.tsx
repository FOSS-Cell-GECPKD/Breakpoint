import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Variants for container animation
  const containerVariants = {
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      y: "100%",
      transition: {
        when: "afterChildren",
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Variants for text elements
  const textVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black text-white"
          variants={containerVariants}
          initial="visible"
          exit="hidden"
        >
          <div className="h-full flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-8">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-7xl md:text-8xl font-bold"
                  variants={textVariants}
                >
                  Breakpoint;
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  className="text-xl md:text-2xl text-gray-400"
                  variants={textVariants}
                >
                  Build. Pause. Inspire.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
