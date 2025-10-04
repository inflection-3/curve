import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSplash from "./animated-logo";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";

export function TopNav() {
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center bg-[#121212] sticky top-0 h-12 z-50 overflow-hidden">
      <motion.div
        className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-black"
        animate={{
          x: isScrolling ? 80 : 0,
          scale: isScrolling ? 0.7 : 1,
          opacity: isScrolling ? 0 : 1,
        }}
        transition={
          isScrolling
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.1,
              }
        }
      >
        <span>U</span>
      </motion.div>
      <Link to="/">
      <motion.div
        animate={{
          scale: isScrolling ? 1.1 : 1,
        }}
        transition={
          isScrolling
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.1,
              }
        }
      >
        <AnimatedSplash />
      </motion.div>
      </Link>
      <motion.div
        className="flex items-center gap-2"
        animate={{
          x: isScrolling ? -80 : 0,
          scale: isScrolling ? 0.7 : 1,
          opacity: isScrolling ? 0 : 1,
        }}
        transition={
          isScrolling
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.1,
              }
        }
      >
        <Button
          onClick={() => navigate({ to: "/notifications" })}
          className="size-8 border-secondary-foreground opacity-80 rounded-full border"
          variant={"ghost"}
          size={"icon"}
        >
          <Bell className="size-5 text-secondary-foreground" />
        </Button>
      </motion.div>
    </nav>
  );
}
