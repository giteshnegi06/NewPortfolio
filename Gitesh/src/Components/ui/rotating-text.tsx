"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps, Transition } from "framer-motion";

type RotatingTextProps = {
  text: string | string[];
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
} & HTMLMotionProps<"div">;

export default function RotatingText({
  text,
  y = -50,
  duration = 2500,
  transition = { duration: 0.6, ease: "easeOut" },
  containerClassName,
  ...props
}: RotatingTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!Array.isArray(text)) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % text.length);
    }, duration);

    return () => clearInterval(interval);
  }, [text, duration]);

  const currentText = Array.isArray(text) ? text[index] : text;

  return (
    <div className={`overflow-hidden py-1 ${containerClassName}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: y, filter: "blur(6px)", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -y, filter: "blur(6px)", scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.5,
          }}
          {...props}
        >
          {currentText}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
