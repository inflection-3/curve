import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";


export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  const transition = {
    type: "tween" as const,
    ease: "easeInOut" as const,
    duration: 0.3
  }; 

  const getDirection = () => {
    if (location.pathname === "/login/verify") return 1;
    return -1; 
  };


  return (
    <div className="flex flex-col p-4 h-screen">
      <img className="h-6" src="/logo-with-text.svg" />
      <div className="h-24"></div>
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
