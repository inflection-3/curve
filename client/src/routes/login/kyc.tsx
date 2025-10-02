import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const kycImage = "/images/kyc.svg";
const coinImage = "/icons/coin.svg";
const sheildIcon = "/icons/sheild.svg";
const rewardImage = "/images/kyc-reward.svg";

const perks = [
  "Protects your account",
  "Keeps Inflection safe & trusted",
  "Unlocks exclusive rewards",
];

export const Route = createFileRoute("/login/kyc")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ScrollArea className="h-[calc(100vh-120px)] [&>[data-slot=scroll-area-scrollbar]]:hidden p-1">
      <div className="flex flex-col gap-y-14 relative">
        <div className="grid grid-cols-3 ">
          <div className="col-span-2 flex flex-col gap-y-4">
            <h1 className="text-4xl font-medium">
              Verify & <br /> unlock <br /> rewards
            </h1>
          </div>
          <motion.img
            src={kycImage}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1,
              duration: 0.8,
            }}
          />
        </div>
        <div className="flex items-start gap-2">
          {/** coin image */}
          <img src={coinImage} className="mt-0.5" />
          <p>
            Complete your KYC to secure your account and <span>
              <span className="font-extrabold"> earn 100 Inflection Coins. </span>
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center gap-y-8">
          <motion.img
            src={rewardImage}
            initial={{ 
              x: -400, 
              y: -400, 
              opacity: 0, 
              rotate: -35,
              scale: 0.6 
            }}
            animate={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              rotate: 0,
              scale: 1 
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
              mass: 2,
              duration: 2,
              delay: 0.3,
            }}
            style={{
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))"
            }}
          />
          <div className="w-full flex flex-col gap-y-2">
            {
              perks.map((perk, index) => (
                <div className="flex items-center gap-x-2" key={index}>
                  <img src={sheildIcon} />
                  <p>{perk}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <Button className="h-12 w-full">Start KYC</Button>
          <Link
            className={cn(
              buttonVariants({
                variant: "link",
                size: "lg",
              }),
              "underline mt-5 text-lg"
            )}
            to="/"
          >
            Skip
          </Link>
        </div>
      </div>
    </ScrollArea>
  );
}
