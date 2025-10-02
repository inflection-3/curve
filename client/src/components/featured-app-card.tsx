import { BadgeIcon } from "./icons";
import { motion } from "framer-motion";

export function FeaturedAppCard() {
  return (
    <motion.div
      className="h-[76px] px-5 w-full bg-gradient-to-l from-[#1B1B1B] via-[#1B1B1B]/50 to-[#949494]/30 rounded-[10px] relative flex items-center justify-between overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.15, duration: 0.3, ease: "easeOut" }}
    >
        <div className="absolute top-0 left-0">
          <BadgeIcon />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.25, duration: 0.3, ease: "easeOut" }}
        >
            <h3 className="font-medium text-xl">Geodnet</h3>
            <p className="text-xs text-secondary-foreground">Decentralized GPS Network</p>
        </motion.div>
        <motion.div
          className="h-full size-11 flex items-center justify-center"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.3, ease: "easeOut" }}
        >
            <img src="./test.svg"  className="drop-shadow-xl" />
            <img src="./images/grid.svg" className="size-20 absolute -bottom-1 right-0"  />
        </motion.div>
    </motion.div>
  );
}