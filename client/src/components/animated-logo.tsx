"use client"

import { motion, RepeatType } from "framer-motion"

interface AnimatedSplashProps {
  loop?: boolean
}

export default function AnimatedSplash({ loop = false }: AnimatedSplashProps) {
  return (
    <motion.svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.rect
        width="38"
        height="38"
        rx="19.0778"
        fill="#1A1A1A"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      <motion.path
        d="M10 28C10 22.4962 12.9824 18.9481 19 18.9482C26.0941 18.9483 28 13.9037 28 10"
        stroke="white"
        strokeWidth="2.48255"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          pathLength: {
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
            repeat: loop ? Number.POSITIVE_INFINITY : 0,
            repeatDelay: loop ? 0.3 : 0,
            repeatType: loop ? "reverse" as RepeatType : "restart" as RepeatType,
          },
          opacity: {
            duration: 0.2,
            delay: 0.2,
          },
        }}
      />
    </motion.svg>
  )
}
