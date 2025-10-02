import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Number } from "@/components/number";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

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
      {/* Total Balance Card - Appears First */}
      <div className="relative">
        <motion.div
          className="bg-gradient-to-l from-[#131313] to-[#212121] rounded-[19px] py-[26px] px-6 border drop-shadow-sm relative overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0.8,
            z: -100,
            rotateX: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            z: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          {/* Animated Background Gradient - Starts After Card Appears */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-[19px]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              background: [
                "linear-gradient(135deg, #131313 0%, #212121 100%)",
                "linear-gradient(225deg, #1a1a1a 0%, #2a2a2a 100%)",
                "linear-gradient(315deg, #131313 0%, #212121 100%)",
                "linear-gradient(45deg, #1a1a1a 0%, #2a2a2a 100%)",
                "linear-gradient(135deg, #131313 0%, #212121 100%)",
              ],
            }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              background: {
                delay: 0.8,
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* Content Items - Animate On Top */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
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
            <div></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <ChartNoAxesColumnIncreasing className="size-[12px] text-green-500 " />
                <p className="text-xs font-extrabold text-[#AEAEAE]">
                  My INX points
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
    </section>
  );
}

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
