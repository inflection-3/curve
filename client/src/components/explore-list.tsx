import { Link } from "@tanstack/react-router";
import { BuyIcon, ExploreIcon, UsdcIcon, CardIcon } from "./icons";
import { motion } from "framer-motion";

export const exploreItems = [
  {
    label: "Explore Partner Apps",
    icon: <ExploreIcon />,
    link: "/apps",
  },
  {
    label: "Invest Upto 10% APY",
    icon: <UsdcIcon />,
  },
  {
    label: "Buy / Sell Stablecoins",
    icon: <BuyIcon />,
    link: "/apps",
  },
  {
    label: " Stablecoins Debit Card",
    icon: <CardIcon />,
    link: "/apps",
  },
];

export function ExploreList() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-x-10 gap-y-6 ">
      {exploreItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.35 + index * 0.08,
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <Link to={item.link} className="flex flex-col w-[78px] items-center gap-y-1">
            <div className="bg-background rounded-lg p-4 border-[#848484] border w-[76px] h-[72px] flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-xs text-center font-medium">
              {item.label}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
