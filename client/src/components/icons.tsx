"use client";

import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface UploadIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UploadIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const arrowVariants: Variants = {
  normal: { y: 0 },
  animate: {
    y: -2,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      mass: 1,
    },
  },
};

const UploadIcon = forwardRef<UploadIconHandle, UploadIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <motion.g variants={arrowVariants} animate={controls}>
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </motion.g>
        </svg>
      </div>
    );
  }
);

UploadIcon.displayName = "UploadIcon";

export interface DownloadIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DownloadIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const downloadArrowVariants: Variants = {
  normal: { y: 0 },
  animate: {
    y: 2,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      mass: 1,
    },
  },
};

const DownloadIcon = forwardRef<DownloadIconHandle, DownloadIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <motion.g variants={downloadArrowVariants} animate={controls}>
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </motion.g>
        </svg>
      </div>
    );
  }
);

DownloadIcon.displayName = "DownloadIcon";

export interface ScanFaceIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ScanFaceIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ScanFaceIcon = forwardRef<ScanFaceIconHandle, ScanFaceIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: async () => {
          await controls.start("hidden");
          await controls.start("visible");
        },
        stopAnimation: () => controls.start("visible"),
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          await controls.start("hidden");
          await controls.start("visible");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("visible");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    const faceVariants: Variants = {
      visible: { scale: 1 },
      hidden: {
        scale: 0.9,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      },
    };

    const cornerVariants: Variants = {
      visible: { scale: 1, rotate: 0, opacity: 1 },
      hidden: {
        scale: 1.2,
        rotate: 45,
        opacity: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      },
    };

    const mouthVariants: Variants = {
      visible: { scale: 1, opacity: 1 },
      hidden: {
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.3, delay: 0.1 },
      },
    };

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          variants={faceVariants}
        >
          <motion.path
            variants={cornerVariants}
            animate={controls}
            initial="visible"
            d="M3 7V5a2 2 0 0 1 2-2h2"
          />
          <motion.path
            variants={cornerVariants}
            animate={controls}
            initial="visible"
            d="M17 3h2a2 2 0 0 1 2 2v2"
          />
          <motion.path
            variants={cornerVariants}
            animate={controls}
            initial="visible"
            d="M21 17v2a2 2 0 0 1-2 2h-2"
          />
          <motion.path
            variants={cornerVariants}
            animate={controls}
            initial="visible"
            d="M7 21H5a2 2 0 0 1-2-2v-2"
          />
          <motion.path
            variants={mouthVariants}
            animate={controls}
            initial="visible"
            d="M8 14s1.5 2 4 2 4-2 4-2"
          />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </motion.svg>
      </div>
    );
  }
);

ScanFaceIcon.displayName = "ScanFaceIcon";

export interface ScanTextIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ScanTextIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const frameVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 1 },
};

const lineVariants: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ScanTextIcon = forwardRef<ScanTextIconHandle, ScanTextIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: async () => {
          await controls.start((i) => ({
            pathLength: 0,
            opacity: 0,
            transition: { delay: i * 0.1, duration: 0.3 },
          }));
          await controls.start((i) => ({
            pathLength: 1,
            opacity: 1,
            transition: { delay: i * 0.1, duration: 0.3 },
          }));
        },
        stopAnimation: () => controls.start("visible"),
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          await controls.start((i) => ({
            pathLength: 0,
            opacity: 0,
            transition: { delay: i * 0.1, duration: 0.3 },
          }));
          await controls.start((i) => ({
            pathLength: 1,
            opacity: 1,
            transition: { delay: i * 0.1, duration: 0.3 },
          }));
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("visible");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path variants={frameVariants} d="M3 7V5a2 2 0 0 1 2-2h2" />
          <motion.path variants={frameVariants} d="M17 3h2a2 2 0 0 1 2 2v2" />
          <motion.path variants={frameVariants} d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <motion.path variants={frameVariants} d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <motion.path
            variants={lineVariants}
            initial="visible"
            animate={controls}
            custom={0}
            d="M7 8h8"
          />
          <motion.path
            variants={lineVariants}
            initial="visible"
            animate={controls}
            custom={1}
            d="M7 12h10"
          />
          <motion.path
            variants={lineVariants}
            initial="visible"
            animate={controls}
            custom={2}
            d="M7 16h6"
          />
        </svg>
      </div>
    );
  }
);

function EyeIcon({ state }: { state: boolean }) {
  return (
    <motion.svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M10.83 6L14 9.16V9C14 8.20435 13.6839 7.44129 13.1213 6.87868C12.5587 6.31607 11.7956 6 11 6H10.83ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.77 8 9C8 9.79565 8.31607 10.5587 8.87868 11.1213C9.44129 11.6839 10.2044 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C9.67392 14 8.40215 13.4732 7.46447 12.5355C6.52678 11.5979 6 10.3261 6 9C6 8.21 6.2 7.47 6.53 6.8ZM3.73 4C2.08 5.3 0.78 7 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.81 16.08M11 4C12.3261 4 13.5979 4.52678 14.5355 5.46447C15.4732 6.40215 16 7.67392 16 9C16 9.64 15.87 10.26 15.64 10.82L18.57 13.75C20.07 12.5 21.27 10.86 22 9C20.27 4.61 16 1.5 11 1.5C9.6 1.5 8.26 1.75 7 2.2L9.17 4.35C9.74 4.13 10.35 4 11 4Z"
        fill="white"
      />
      <motion.path
        d="M1 1.27L3.28 3.55L18.73 19L20 17.73L2.27 0"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="white"
        animate={{
          pathLength: state ? 0 : 1,
          opacity: state ? 0 : 1,
          pathOffset: state ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function BadgeIcon() {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        originX: 0.15,
        originY: 0.05,
      }}
      animate={{
        rotate: [-3, 3, -3],
        y: [0, -2, 0],
      }}
      transition={{
        rotate: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <path d="M18.2704 0.0807371C18.3996 0.0980559 18.5156 0.191967 18.6121 0.275478C18.692 0.344074 18.7629 0.42472 18.8338 0.500865C18.8942 0.568064 18.9561 0.635254 19.015 0.702461C19.1418 0.847329 19.249 0.986299 19.1691 1.18478C19.138 1.26147 19.0918 1.33224 19.0472 1.40299C18.9594 1.54 18.8611 1.66956 18.7672 1.8036C18.7658 1.80661 18.7613 1.81113 18.7598 1.81414C18.6004 2.03105 18.4184 2.23308 18.2409 2.43358C17.8233 2.89943 17.4056 3.36378 16.9624 3.80427C16.834 3.93099 16.7056 4.05621 16.5742 4.18144C16.0801 4.6477 15.5693 5.09455 15.0329 5.51452C14.7325 5.75018 14.4187 5.97692 14.0987 6.18418C14.0254 6.23108 13.9597 6.28995 13.8742 6.2949C13.6372 6.31117 13.2032 5.95187 13.1165 5.73777C13.0846 5.65391 13.1049 5.53677 13.1706 5.4734C13.2094 5.43719 13.2528 5.40545 13.2916 5.37223C14.3327 4.48744 15.3449 3.53378 16.2577 2.50263C16.732 1.96596 17.1732 1.40695 17.5797 0.816621C17.7286 0.602768 17.8592 0.336497 18.0488 0.155437C18.098 0.107161 18.1579 0.0753337 18.2254 0.0764752C18.2404 0.0763954 18.2554 0.0778161 18.2704 0.0807371Z" fill="#6A6A6A"/>
      <mask id="mask0_224_3654" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="13" y="1" width="7" height="8">
        <path d="M18.2702 1.80828C18.3993 1.82559 18.5154 1.91951 18.6118 2.00302C18.6917 2.07161 18.7627 2.15226 18.8336 2.2284C18.894 2.2956 18.9558 2.36279 19.0147 2.43C19.1415 2.57487 19.2488 2.71384 19.1688 2.91232C19.1377 2.98901 19.0916 3.05977 19.047 3.13053C18.9592 3.26754 18.8608 3.3971 18.767 3.53114C18.7655 3.53414 18.761 3.53867 18.7596 3.54168C18.6002 3.75859 18.4182 3.96061 18.2407 4.16112C17.823 4.62697 17.4054 5.09132 16.9621 5.53181C16.8337 5.65853 16.7054 5.78374 16.574 5.90898C16.0798 6.37524 15.5691 6.82208 15.0326 7.24206C14.7323 7.47772 14.4184 7.70446 14.0984 7.91172C14.0252 7.95862 13.9594 8.01748 13.8739 8.02244C13.637 8.0387 13.2029 7.67941 13.1163 7.4653C13.0843 7.38145 13.1047 7.26431 13.1704 7.20094C13.2092 7.16472 13.2525 7.13298 13.2914 7.09977C14.3325 6.21498 15.3447 5.26132 16.2575 4.23017C16.7318 3.6935 17.1729 3.13449 17.5794 2.54416C17.7283 2.33031 17.8589 2.06404 18.0485 1.88298C18.0978 1.8347 18.1576 1.80287 18.2252 1.80401C18.2402 1.80393 18.2552 1.80536 18.2702 1.80828Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_224_3654)">
        <path d="M15.6045 3.20968C15.6045 3.20968 15.2185 4.27254 15.5992 5.05074L14.8931 6.57144L13.3387 6.85428L12.0463 4.78755L13.7756 2.67475L15.6045 3.20968Z" fill="black"/>
      </g>
      <path d="M6.51178 19.0666C6.79686 19.0651 7.15445 18.8742 7.57256 18.4968C7.69204 18.3912 7.81451 18.2855 7.95341 18.1647C9.32749 16.9766 12.5446 14.1927 15.0449 9.7801C15.5845 8.82595 16.4541 6.71922 16.4906 6.53748C16.5257 6.35874 16.4799 6.22394 16.3488 6.12111L12.4285 3.06305C12.4224 3.05708 12.3546 3.00193 12.2496 3.00249C12.1115 3.00322 11.9605 3.10305 11.8145 3.29288C11.3078 3.94827 9.42664 6.27194 6.40979 8.63015C5.15613 9.6091 2.69722 11.0776 1.35371 11.8064L1.17417 11.9034C0.470986 12.2838 0.150821 12.458 0.0886563 12.6189C0.0235253 12.7858 0.105496 12.9639 0.361925 13.2191C1.03013 13.8803 4.27807 17.173 5.35826 18.2775C5.38239 18.3014 5.41108 18.3358 5.4473 18.3746C5.6435 18.5911 6.04952 19.0421 6.47278 19.0683L6.51178 19.0666ZM13.1587 4.94672C13.3717 4.94559 13.5866 5.00596 13.7808 5.12196C14.3754 5.47741 14.624 6.23831 14.3345 6.81751C14.1578 7.17106 13.8183 7.38292 13.4222 7.38503C13.1671 7.38638 12.9146 7.3007 12.6932 7.13833C12.1524 6.74209 11.964 6.00938 12.2642 5.47062C12.4455 5.14407 12.7791 4.94874 13.1587 4.94672Z" fill="white"/>
      <path d="M14.2401 0.0790877C14.2446 0.076063 14.2491 0.0715379 14.2551 0.0685052C14.3224 0.0321369 14.4108 0.0211636 14.4874 0.0267584C14.6225 0.0365434 14.7561 0.0538383 14.8898 0.0786351C14.9889 0.0976139 15.0895 0.107582 15.1901 0.126553C15.6407 0.214184 15.5413 0.696353 15.5461 1.04293C15.5587 2.00314 15.4302 2.94459 15.1635 3.86728C15.0398 4.29856 14.8905 4.72698 14.7096 5.13756C14.5732 5.44587 14.4085 5.78435 14.1486 6.01079C14.1083 6.04552 14.0664 6.07725 14.0231 6.10749C13.9543 6.15137 13.8885 6.19523 13.8104 6.17764C13.6677 6.14689 13.5247 6.06963 13.4117 5.9772C13.3755 5.94738 13.3393 5.90857 13.3002 5.88177C13.2746 5.8654 13.2445 5.85955 13.2204 5.84168C12.9479 5.65557 13.2848 5.24716 13.3873 5.06356C13.5999 4.68583 13.7388 4.28147 13.8461 3.86378C13.9181 3.57531 13.9766 3.28392 14.026 2.98957C14.0726 2.71474 14.1056 2.43699 14.1326 2.15926C14.1582 1.89655 14.1748 1.63239 14.1839 1.36826C14.1931 1.11314 14.1917 0.858071 14.1784 0.603068C14.1701 0.45907 14.1101 0.183309 14.2401 0.0790877Z" fill="#6A6A6A"/>
      <path d="M4.89072 11.5939C4.70014 12.4351 4.57842 14.0938 5.38196 15.9395C5.50349 16.221 5.2698 16.2927 5.14316 16.1779C4.78282 15.8527 2.41126 13.4301 2.41126 13.4301C2.41126 13.4301 1.81759 12.9591 2.29028 12.6865C2.64329 12.4821 3.95502 11.7009 4.5892 11.3239C4.79709 11.1983 4.95669 11.3024 4.89072 11.5939Z" fill="white"/>
    </motion.svg>
  );
}

ScanTextIcon.displayName = "ScanTextIcon";

export interface HomeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface HomeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const defaultTransition = {
  duration: 0.6,
  opacity: { duration: 0.2 },
};

const homePathVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
  },
};

const HomeIcon = forwardRef<HomeIconHandle, HomeIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );
    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <motion.path
            d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
            variants={homePathVariants}
            transition={defaultTransition}
            animate={controls}
          />
        </svg>
      </div>
    );
  }
);

HomeIcon.displayName = "HomeIcon";

export interface HistoryIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface HistoryIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const historyArrowVariants: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: -50,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  },
};

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "0%",
    originY: "100%",
  },
  animate: {
    rotate: -360,
    originX: "0%",
    originY: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const minuteHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "0%",
    originY: "0%",
  },
  animate: {
    rotate: -45,
    originX: "0%",
    originY: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const HistoryIcon = forwardRef<HistoryIconHandle, HistoryIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.g
            variants={historyArrowVariants}
            animate={controls}
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </motion.g>
          <motion.line
            x1="12"
            y1="12"
            x2="12"
            y2="7"
            variants={handVariants}
            animate={controls}
            initial="normal"
          />
          <motion.line
            x1="12"
            y1="12"
            x2="16"
            y2="14"
            variants={minuteHandVariants}
            animate={controls}
            initial="normal"
          />
        </svg>
      </div>
    );
  }
);

HistoryIcon.displayName = "HistoryIcon";

export interface WalletIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WalletIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const walletPathVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stiffness: 200,
      damping: 13,
    },
  },
  animate: (i: number) => ({
    translateY: [2 * i, 0],
    opacity: [0, 1],
    transition: {
      delay: 0.25 * (2 - i),
      type: "tween",
      stiffness: 200,
      damping: 13,
    },
  }),
};

const WalletIcon = forwardRef<
  WalletIconHandle,
  WalletIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        controls.start("animate");
      } else {
        onMouseEnter?.(e);
      }
    },
    [controls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        controls.start("normal");
      } else {
        onMouseLeave?.(e);
      }
    },
    [controls, onMouseLeave]
  );

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M7 2h10"
          variants={walletPathVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M5 6h14"
          variants={walletPathVariants}
          animate={controls}
          custom={2}
        />
        <rect width="18" height="12" x="3" y="10" rx="2" />
      </svg>
    </div>
  );
});

WalletIcon.displayName = "WalletIcon";

export { UploadIcon, DownloadIcon, ScanFaceIcon, ScanTextIcon, EyeIcon, HomeIcon, HistoryIcon, WalletIcon };
