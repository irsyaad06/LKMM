import { useEffect } from "react";
import { motion, useAnimationControls, type Variants } from "framer-motion";

interface ThreeDTransformTextProps {
  text: string;
}

const ThreeDTransformText: React.FC<ThreeDTransformTextProps> = ({ text }) => {
  const controls = useAnimationControls();

  const transformText: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const transformChar: Variants = {
    hidden: {
      opacity: 0,
      scale: 2,
      rotateX: 180,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      scale: 5,
      rotateX: -180,
      filter: "blur(10px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      variants={transformText}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="text-3xl md:text-5xl text-center font-bold text-[#d2e5f5]"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={transformChar}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ThreeDTransformText;
