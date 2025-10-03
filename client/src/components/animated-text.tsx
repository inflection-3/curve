import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  blurAmount?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

export function AnimatedText({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  blurAmount = "10px",
  as = "span",
}: AnimatedTextProps) {
  const animationProps = {
    className,
    initial: { opacity: 0, filter: `blur(${blurAmount})` },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: {
      delay,
      duration,
      ease: "easeOut" as const,
    },
  };

  switch (as) {
    case "p":
      return <motion.p {...animationProps}>{children}</motion.p>;
    case "h1":
      return <motion.h1 {...animationProps}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...animationProps}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...animationProps}>{children}</motion.h3>;
    case "h4":
      return <motion.h4 {...animationProps}>{children}</motion.h4>;
    case "h5":
      return <motion.h5 {...animationProps}>{children}</motion.h5>;
    case "h6":
      return <motion.h6 {...animationProps}>{children}</motion.h6>;
    case "div":
      return <motion.div {...animationProps}>{children}</motion.div>;
    case "span":
    default:
      return <motion.span {...animationProps}>{children}</motion.span>;
  }
}

