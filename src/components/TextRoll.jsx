import React from "react";
import { motion } from "framer-motion";

export const TextRoll = ({ text, className = "" }) => {
  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.33, 1, 0.68, 1], // easeOutCubic
          }}
          whileHover={{
            y: [0, "-100%", "100%", 0],
            transition: {
              duration: 0.4,
              times: [0, 0.4, 0.5, 1],
              ease: "easeInOut",
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
