import {
  createFileRoute,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const previousPathRef = useRef<string>("");

  const routeHierarchy = [
    "/login",
    "/login/",
    "/login/verify", 
    "/login/setup-profile"
  ];

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const transition = {
    type: "tween" as const,
    ease: "easeInOut" as const,
    duration: 0.3,
  };

  const getDirection = () => {
    const currentPath = location.pathname;
    const previousPath = previousPathRef.current;
    
    // Normalize paths for comparison
    const normalizePath = (path: string) => {
      if (path === "/login" || path === "/login/") return "/login/";
      return path;
    };
    
    const normalizedCurrent = normalizePath(currentPath);
    const normalizedPrevious = normalizePath(previousPath);
    
    // Get indices in the hierarchy
    const currentIndex = routeHierarchy.findIndex(route => 
      normalizePath(route) === normalizedCurrent
    );
    const previousIndex = routeHierarchy.findIndex(route => 
      normalizePath(route) === normalizedPrevious
    );
    
    // If we can't find indices or it's the first load, default to forward
    if (currentIndex === -1 || previousIndex === -1 || !previousPath) {
      return 1; // forward (left to right)
    }
    
    // Compare indices to determine direction
    if (currentIndex > previousIndex) {
      return 1; // forward (left to right)
    } else {
      return -1; // backward (right to left)
    }
  };

  // Update previous path after render
  useEffect(() => {
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className="flex flex-col p-4 h-screen">
      <img className="h-6" src="/logo-with-text.svg" />
      <div className="h-16"></div>
      <div className="relative flex-1">
        <AnimatePresence mode="wait" custom={getDirection()}>
          <motion.div
            key={location.pathname}
            custom={getDirection()}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="absolute inset-0 w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
