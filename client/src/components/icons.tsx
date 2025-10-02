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

export interface ExploreIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ExploreIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const exploreVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const ExploreIcon = forwardRef<ExploreIconHandle, ExploreIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 41, ...props }, ref) => {
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
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={exploreVariants}
          animate={controls}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
        >
          <g filter="url(#filter0_d_224_3688)">
            <path d="M4 16.5348C4 14.2475 4.43178 12.0979 5.29534 10.0862C6.1589 8.07449 7.32986 6.32455 8.80822 4.83642C10.2866 3.34829 12.0263 2.17047 14.0274 1.30294C16.0285 0.435416 18.1655 0.00110232 20.4384 0C23.9178 0 27.0208 0.964529 29.7474 2.89359C32.474 4.82264 34.4531 7.31664 35.6849 10.3756C35.8767 10.8441 35.8838 11.3125 35.7063 11.781C35.5288 12.2495 35.2066 12.5664 34.7397 12.7318C34.3014 12.8696 33.8838 12.8282 33.4871 12.6078C33.0904 12.3873 32.8093 12.0566 32.6438 11.6157C31.9863 9.9622 31.0411 8.50163 29.8082 7.23397C28.5753 5.9663 27.0959 4.98799 25.3699 4.29904V4.96043C25.3699 5.86985 25.0482 6.64864 24.4049 7.2968C23.7616 7.94496 22.9874 8.26849 22.0822 8.26739H18.7945V11.5743C18.7945 12.0428 18.6367 12.4358 18.3211 12.7533C18.0055 13.0707 17.6153 13.2289 17.1507 13.2278H13.863V16.5348H15.5068C15.9726 16.5348 16.3633 16.6935 16.6789 17.011C16.9945 17.3285 17.1518 17.7209 17.1507 18.1883V21.4952H15.5068L7.61644 13.5585C7.53425 14.0546 7.45918 14.5506 7.39123 15.0467C7.32329 15.5427 7.28877 16.0387 7.28767 16.5348C7.28767 19.8969 8.39068 22.8318 10.5967 25.3396C12.8027 27.8473 15.5764 29.2941 18.9178 29.6799C19.3562 29.7351 19.7195 29.9213 20.0077 30.2388C20.2959 30.5563 20.4395 30.9487 20.4384 31.4161C20.4373 31.8835 20.2795 32.2764 19.9649 32.595C19.6504 32.9136 19.274 33.0442 18.8356 32.9869C14.6438 32.5735 11.1233 30.8098 8.27397 27.6958C5.42466 24.5817 4 20.8614 4 16.5348ZM34.2466 31.0854L30.137 26.9517C29.5616 27.2824 28.9452 27.558 28.2877 27.7784C27.6301 27.9989 26.9315 28.1091 26.1918 28.1091C24.137 28.1091 22.3907 27.386 20.9529 25.9398C19.5151 24.4935 18.7956 22.7364 18.7945 20.6685C18.7934 18.6005 19.5129 16.844 20.9529 15.3988C22.3929 13.9537 24.1392 13.23 26.1918 13.2278C28.2444 13.2256 29.9912 13.9493 31.4323 15.3988C32.8734 16.8484 33.5923 18.6049 33.589 20.6685C33.589 21.4125 33.4795 22.1153 33.2603 22.7767C33.0411 23.4381 32.7671 24.0581 32.4384 24.6368L36.5479 28.7705C36.8493 29.0737 37 29.4595 37 29.928C37 30.3964 36.8493 30.7822 36.5479 31.0854C36.2466 31.3885 35.863 31.5401 35.3973 31.5401C34.9315 31.5401 34.5479 31.3885 34.2466 31.0854ZM26.1918 24.8022C27.3425 24.8022 28.3151 24.4026 29.1096 23.6034C29.9041 22.8042 30.3014 21.8259 30.3014 20.6685C30.3014 19.511 29.9041 18.5327 29.1096 17.7336C28.3151 16.9344 27.3425 16.5348 26.1918 16.5348C25.0411 16.5348 24.0685 16.9344 23.274 17.7336C22.4795 18.5327 22.0822 19.511 22.0822 20.6685C22.0822 21.8259 22.4795 22.8042 23.274 23.6034C24.0685 24.4026 25.0411 24.8022 26.1918 24.8022Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_224_3688" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_3688"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_3688" result="shape"/>
            </filter>
          </defs>
        </motion.svg>
      </div>
    );
  }
);

ExploreIcon.displayName = "ExploreIcon";

export interface UsdcIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UsdcIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const usdcVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const UsdcIcon = forwardRef<UsdcIconHandle, UsdcIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 41, ...props }, ref) => {
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
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={usdcVariants}
          animate={controls}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
        >
          <g filter="url(#filter0_d_224_3708)">
            <path d="M20.5 0C29.6132 0 37 7.38684 37 16.5C37 25.6132 29.6132 33 20.5 33C11.3868 33 4 25.6132 4 16.5C4 7.38684 11.3868 0 20.5 0ZM23.9567 5.73375C23.7051 5.61 23.4535 5.73375 23.3916 5.98434C23.3287 6.04725 23.3287 6.11016 23.3287 6.23494V7.1115L23.339 7.21875C23.3929 7.43091 23.5233 7.61566 23.7051 7.73747C28.6077 9.49059 31.1219 14.9356 29.2986 19.7546C28.3561 22.3843 26.2822 24.386 23.7051 25.3254C23.4535 25.4502 23.3287 25.6379 23.3287 25.9514V26.828L23.3339 26.9187C23.3437 27.0177 23.3851 27.111 23.4519 27.1847C23.5188 27.2584 23.6075 27.3087 23.7051 27.3281C23.768 27.3281 23.8938 27.3281 23.9567 27.2663C25.3712 26.8245 26.6843 26.1074 27.8204 25.1561C28.9565 24.2049 29.8933 23.0382 30.5767 21.7235C31.2601 20.4087 31.6767 18.9717 31.8025 17.4952C31.9283 16.0188 31.7607 14.532 31.3096 13.1206C30.1793 9.55247 27.4135 6.85987 23.9567 5.73375ZM17.2949 5.67188C17.232 5.67188 17.1062 5.67187 17.0433 5.73375C15.6288 6.17546 14.3157 6.89259 13.1796 7.84387C12.0435 8.79514 11.1067 9.96175 10.4233 11.2765C9.73987 12.5913 9.32328 14.0283 9.19751 15.5048C9.07173 16.9812 9.23926 18.468 9.69044 19.8794C10.8207 23.3857 13.5236 26.0772 17.0433 27.2033C17.2949 27.3281 17.5465 27.2033 17.6084 26.9527C17.6713 26.8909 17.6713 26.8269 17.6713 26.7022V25.8256L17.661 25.7431C17.6177 25.5688 17.4558 25.3698 17.2949 25.2625C12.3923 23.5094 9.87812 18.0644 11.7014 13.2454C12.6439 10.6157 14.7178 8.61403 17.2949 7.67456C17.5465 7.54978 17.6713 7.36209 17.6713 7.04859V6.17203L17.6661 6.08128C17.6563 5.98225 17.6149 5.889 17.5481 5.81529C17.4812 5.74157 17.3925 5.69129 17.2949 5.67188ZM20.9403 8.9265H19.9967L19.906 8.93475C19.6998 8.976 19.5492 9.15338 19.4935 9.42769V10.8673L19.28 10.9003C17.5187 11.2138 16.4152 12.4297 16.4152 13.9342C16.4152 15.9988 17.6713 16.8125 20.3113 17.126C22.0716 17.4384 22.6368 17.8148 22.6368 18.8162C22.6368 19.8165 21.7571 20.5054 20.5629 20.5054C18.9284 20.5054 18.3632 19.8175 18.1745 18.8781C18.1127 18.6285 17.9229 18.5027 17.7342 18.5027H16.6658L16.5843 18.5099C16.4824 18.5257 16.3897 18.5783 16.3238 18.6577C16.2579 18.7371 16.2233 18.8378 16.2265 18.941V19.0028L16.2605 19.1885C16.5596 20.657 17.5661 21.7078 19.5574 22.0079V23.5104L19.5657 23.6012C19.6069 23.8054 19.7853 23.9559 20.0607 24.0106H21.0033L21.094 24.0023C21.3002 23.9611 21.4508 23.7837 21.5065 23.5104V22.0069L21.72 21.9656C23.4865 21.5923 24.6487 20.3146 24.6487 18.6893C24.6487 16.499 23.3287 15.7482 20.6887 15.4347C18.8026 15.1841 18.4262 14.684 18.4262 13.8074C18.4262 12.9308 19.0552 12.3678 20.3113 12.3678C21.4426 12.3678 22.0716 12.7432 22.3851 13.6826C22.418 13.7733 22.4778 13.8518 22.5565 13.9076C22.6352 13.9634 22.729 13.994 22.8255 13.9951H23.8309L23.9124 13.9889C24.0145 13.9727 24.1071 13.9199 24.1732 13.8404C24.2392 13.7609 24.2741 13.6601 24.2713 13.5568V13.4949L24.2331 13.3165C24.0783 12.6755 23.7253 12.0997 23.2243 11.6709C22.7233 11.2421 22.0998 10.9822 21.4426 10.9282V9.42769L21.4343 9.33694C21.3931 9.13172 21.2157 8.98116 20.9403 8.9265Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_224_3708" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_3708"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_3708" result="shape"/>
            </filter>
          </defs>
        </motion.svg>
      </div>
    );
  }
);

UsdcIcon.displayName = "UsdcIcon";

export interface BuyIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BuyIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const buyArrowVariants: Variants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const BuyIcon = forwardRef<BuyIconHandle, BuyIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 35, ...props }, ref) => {
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
        <motion.svg
          width={size}
          height={size * 1.57} // Maintain aspect ratio
          viewBox="0 0 35 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            filter="url(#filter0_d_224_3699)"
            variants={buyArrowVariants}
            animate={controls}
          >
            <path d="M21.0022 16.8281H19.3412V20.612V24.3958H17.5292H15.7172C12.5396 24.3958 9.96244 26.973 9.96244 30.1506V33.5232H6.87256C6.49047 33.5232 6.18246 33.2132 6.18246 32.8331V16.8281H4.82564C4.06731 16.8281 3.71251 15.8904 4.27785 15.3874L12.3661 8.20762C12.678 7.93079 13.1478 7.93079 13.4598 8.20762L21.548 15.3874C22.1173 15.8923 21.7605 16.8281 21.0022 16.8281Z" fill="white"/>
          </motion.g>
          <motion.g
            filter="url(#filter1_d_224_3699)"
            variants={buyArrowVariants}
            animate={controls}
            style={{ animationDelay: "0.1s" }}
          >
            <path d="M13.3399 38.1083H15.0132V30.4843H18.6642C21.8654 30.4843 24.4618 27.8879 24.4618 24.6867V21.2891H27.5746C27.9596 21.2891 28.2699 21.6013 28.2699 21.9843V38.1064H29.6368C30.4008 38.1064 30.7582 39.051 30.1886 39.5577L22.0402 46.791C21.726 47.0699 21.2527 47.0699 20.9384 46.791L12.79 39.5577C12.2165 39.051 12.5759 38.1083 13.3399 38.1083Z" fill="#949494"/>
          </motion.g>
          <defs>
            <filter id="filter0_d_224_3699" x="0" y="0" width="25.8281" height="33.5229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_3699"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_3699" result="shape"/>
            </filter>
            <filter id="filter1_d_224_3699" x="8.50781" y="21.2891" width="25.9607" height="33.7109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_3699"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_3699" result="shape"/>
            </filter>
          </defs>
        </motion.svg>
      </div>
    );
  }
);

BuyIcon.displayName = "BuyIcon";

export interface CardIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CardIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const cardVariants: Variants = {
  normal: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: [1, 1.02, 1],
    y: [0, -1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const CardIcon = forwardRef<CardIconHandle, CardIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 50, ...props }, ref) => {
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
        <motion.svg
          width={size}
          height={size * 0.82} // Maintain aspect ratio (50/41)
          viewBox="0 0 50 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={cardVariants}
          animate={controls}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
        >
          <g filter="url(#filter0_d_224_3706)">
            <mask id="mask0_224_3706" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="4" y="0" width="42" height="33">
              <path d="M28.7505 0H20.5005C12.7228 0 8.83295 -2.45869e-07 6.41777 2.41725C4.67702 4.15594 4.19027 6.65981 4.05414 10.8281H45.1969C45.0608 6.65981 44.574 4.15594 42.8333 2.41725C40.4181 -2.45869e-07 36.5282 0 28.7505 0ZM20.5005 33H28.7505C36.5282 33 40.4181 33 42.8333 30.5827C45.2485 28.1655 45.2505 24.2777 45.2505 16.5C45.2505 15.5898 45.2491 14.7304 45.2464 13.9219H4.00464C4.00052 14.7304 3.99914 15.5898 4.00052 16.5C4.00052 24.2777 4.00052 28.1676 6.41777 30.5827C8.83502 32.9979 12.7228 33 20.5005 33Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7036 24.75C10.7036 24.3397 10.8666 23.9463 11.1567 23.6562C11.4468 23.3661 11.8402 23.2031 12.2505 23.2031H20.5005C20.9107 23.2031 21.3042 23.3661 21.5943 23.6562C21.8844 23.9463 22.0474 24.3397 22.0474 24.75C22.0474 25.1603 21.8844 25.5537 21.5943 25.8438C21.3042 26.1339 20.9107 26.2969 20.5005 26.2969H12.2505C11.8402 26.2969 11.4468 26.1339 11.1567 25.8438C10.8666 25.5537 10.7036 25.1603 10.7036 24.75ZM24.1099 24.75C24.1099 24.3397 24.2728 23.9463 24.5629 23.6562C24.853 23.3661 25.2465 23.2031 25.6567 23.2031H28.7505C29.1607 23.2031 29.5542 23.3661 29.8443 23.6562C30.1344 23.9463 30.2974 24.3397 30.2974 24.75C30.2974 25.1603 30.1344 25.5537 29.8443 25.8438C29.5542 26.1339 29.1607 26.2969 28.7505 26.2969H25.6567C25.2465 26.2969 24.853 26.1339 24.5629 25.8438C24.2728 25.5537 24.1099 25.1603 24.1099 24.75Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_224_3706)">
              <path d="M-0.124512 -8.25H49.3755V41.25H-0.124512V-8.25Z" fill="white"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_224_3706" x="0" y="0" width="49.2505" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_224_3706"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_224_3706" result="shape"/>
            </filter>
          </defs>
        </motion.svg>
      </div>
    );
  }
);

CardIcon.displayName = "CardIcon";

export { UploadIcon, DownloadIcon, ScanFaceIcon, ScanTextIcon, EyeIcon, HomeIcon, HistoryIcon, WalletIcon, ExploreIcon, UsdcIcon, BuyIcon, CardIcon };
