import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Number } from "./number";
import AnimatedSplash from "./animated-logo";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

export function TopNav() {
  return (
    <nav className="flex justify-between items-center">
      <Link
        role="button"
        to="/rewards"
        className="bg-[#545454] flex gap-1.5 rounded-full h-8 px-4 items-center"
      >
        <motion.svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M3.3935 0.418C4.06179 0.142972 4.77733 0.000985337 5.5 0C6.2205 0 6.9355 0.143 7.6065 0.418C8.272 0.693 8.877 1.1 9.3885 1.6115C9.9 2.123 10.307 2.728 10.582 3.3935C10.857 4.0645 11 4.7795 11 5.5C11 6.9575 10.4225 8.36 9.3885 9.3885C8.87844 9.89999 8.27234 10.3057 7.60503 10.5822C6.93772 10.8588 6.22235 11.0007 5.5 11C4.77733 10.999 4.06179 10.857 3.3935 10.582C2.72694 10.305 2.12143 9.89941 1.6115 9.3885C1.10001 8.87844 0.694341 8.27234 0.417789 7.60503C0.141237 6.93772 -0.000743274 6.22234 2.92609e-06 5.5C2.92609e-06 4.0425 0.577503 2.64 1.6115 1.6115C2.123 1.1 2.728 0.693 3.3935 0.418ZM5.5 8.25L6.358 6.369L8.25 5.5L6.358 4.642L5.5 2.75L4.6365 4.642L2.75 5.5L4.6365 6.369L5.5 8.25Z"
            stroke="white"
            strokeWidth="0.5"
            fill="white"
            fillOpacity="0.64"
            initial={{
              pathLength: 0,
              fillOpacity: 0,
              strokeOpacity: 1,
            }}
            animate={{
              pathLength: 1,
              fillOpacity: 0.64,
              strokeOpacity: 0,
            }}
            transition={{
              pathLength: {
                duration: 1.5,
                ease: "easeInOut",
              },
              fillOpacity: {
                duration: 0.4,
                delay: 1.3,
                ease: "easeIn",
              },
              strokeOpacity: {
                duration: 0.3,
                delay: 1.7,
                ease: "easeOut",
              },
            }}
          />
        </motion.svg>
        <Number number={20} className="text-xs font-medium" />
      </Link>
      <AnimatedSplash />
      <div className="flex items-center gap-2">
        <Button
          className="size-8 border-white rounded-full border"
          variant={"ghost"}
          size={"icon"}
        >
          <Bell className="size-5" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center text-black">
          <span>U</span>
        </div>
      </div>
    </nav>
  );
}
