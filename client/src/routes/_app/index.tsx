import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Number } from "@/components/number";
import { ChartNoAxesColumnIncreasing, Crown, Globe, ScanTextIcon } from "lucide-react";
import { UploadIcon, DownloadIcon, EyeIcon } from "@/components/icons";
import { FeaturedAppCard } from "@/components/featured-app-card";
import { ExploreList } from "@/components/explore-list";

export const Route = createFileRoute("/_app/")({
  component: Index,
});

function Index() {
  const [balance, setBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const initialBalance = 1000;
  useEffect(() => {
    setBalance(initialBalance);
  }, []);
  return (
    <section>
      {/* Total Balance Card */}
      <div className="relative">
        <motion.div
          className="bg-gradient-to-l from-[#131313] to-[#212121] rounded-[19px] py-[26px] px-6 border drop-shadow-sm relative overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {/* Animated Background Gradient - Starts After Card Appears */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-[19px]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 1],
              background: [
                "linear-gradient(135deg, #131313 0%, #212121 100%)",
                "linear-gradient(180deg, #161616 0%, #242424 100%)",
                "linear-gradient(225deg, #131313 0%, #212121 100%)",
                "linear-gradient(270deg, #161616 0%, #242424 100%)",
                "linear-gradient(135deg, #131313 0%, #212121 100%)",
              ],
            }}
            transition={{
              opacity: { delay: 0.2, duration: 0.4 },
              background: {
                delay: 0.4,
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-sm text-[#AEAEAE]">Total Balance</p>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="cursor-pointer"
              type="button"
            >
              <EyeIcon state={showBalance} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
          >
            <Number
              className="text-4xl font-extrabold "
              formatProps={{
                currency: "USD",
                currencyDisplay: "symbol",
                style: "currency",
                minimumFractionDigits: 2,
                maximumFractionDigits: 5,
              }}
              number={balance}
            />
          </motion.div>

          <div className="h-4"></div>

          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-xs font-extrabold text-[#AEAEAE]">
                My INX points
              </p>
              <Number
                className="font-medium text-xl"
                formatProps={{
                  maximumFractionDigits: 5,
                }}
                number={10}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <ChartNoAxesColumnIncreasing className="size-[12px] text-green-500 " />
                <p className="text-xs font-extrabold text-[#AEAEAE]">
                  Investment
                </p>
              </div>

              <Number
                className="font-medium text-xl"
                formatProps={{
                  currency: "USD",
                  currencyDisplay: "symbol",
                  style: "currency",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 5,
                }}
                number={500}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Buttons*/}
      <div className="flex items-center justify-between py-9 relative">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#484848]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.95, duration: 0.4, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
        <motion.div
          className="w-[90px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            role="button"
            onClick={() => {}}
            className="w-full cursor-pointer h-16 flex items-center justify-center rounded-md bg-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <UploadIcon />
          </motion.div>
          <p className="text-center text-xs font-medium mt-2">Send</p>
        </motion.div>
        <motion.div
          className="w-[90px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="w-full cursor-pointer h-16 flex items-center justify-center rounded-md bg-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <DownloadIcon />
          </motion.div>
          <p className="text-center text-xs font-medium mt-2">Receive</p>
        </motion.div>
        <motion.div
          className="w-[90px] cursor-pointer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-16 flex items-center justify-center rounded-md bg-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ScanTextIcon />
          </motion.div>
          <p className="text-center text-xs font-medium mt-2">Scan</p>
        </motion.div>
      </div>
      {/** Featured App */}
      <div className="py-6 flex flex-col gap-y-6">
        <motion.div
          className="w-full flex flex-col gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="flex gap-x-1 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.3, ease: "easeOut" }}
          >
            <Crown className="text-[#E4E4E4] size-[18px]" />
            <p className="text-sm font-bold text-[#E4E4E4]">Featured App</p>
          </motion.div>
          <FeaturedAppCard />
        </motion.div>
        <motion.div
          className="w-full flex flex-col gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="flex gap-x-1 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.3, ease: "easeOut" }}
          >
            <Globe className="text-[#E4E4E4] size-[18px]" />
            <p className="text-sm font-bold text-[#E4E4E4]">Explore</p>
          </motion.div>
          <ExploreList />
        </motion.div>
      </div>
    </section>
  );
}
