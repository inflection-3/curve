import AnimatedSplash from "@/components/animated-logo";
import { AnimatedText } from "@/components/animated-text";
import { Number } from "@/components/number";
import {
  getWalletActionsWalletScreen,
  WalletActions,
} from "@/components/wallet-actions";
import { cn } from "@/lib/utils";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MoveUp } from "lucide-react";
import { ComponentProps, ReactNode, useState } from "react";

export const Route = createFileRoute("/_app/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const actions = getWalletActionsWalletScreen(navigate);
  return (
    <section className="flex flex-col gap-y-8">
      <motion.div
        className="w-full flex justify-center items-center pt-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Number
          number={1000}
          className="text-5xl font-medium"
          formatProps={{
            style: "currency",
            currency: "USD",
          }}
        />
      </motion.div>
      <WalletActions actions={actions} />
      <div className="w-full grid grid-cols-3 gap-5 ">
        <WalletItemCard className="col-span-3 " delay={0.35}>
          {() => (
            <>
                <AnimatedSplash />
              <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <AnimatedText
                as="p"
                className="text-xs font-extrabold text-[#AEAEAE]"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                My INX points
              </AnimatedText>
              <Number
                className="font-medium text-xl"
                formatProps={{
                  maximumFractionDigits: 5,
                }}
                number={10}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 justify-end text-green-500 ">
                <MoveUp className="size-[12px] " />
                <AnimatedText
                  as="p"
                  className="text-xs font-extrabold "
                  delay={0.32}
                  duration={0.25}
                  blurAmount="2px"
                >
                  14%
                </AnimatedText>
              </div>

              <Number className="font-medium text-xl" number={500} />
            </div>
          </div>
            </>
          )}
        </WalletItemCard>
        <div className="grid grid-cols-2 gap-5 col-span-3">
          <WalletItemCard className="col-span-1" delay={0.42}>
            {(isHovered) => (
              <>
                <motion.img 
                  className="size-10" 
                  src={"/images/usdc.svg"}
                  animate={isHovered ? { 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.15, 1.15, 1.15, 1],
                  } : {
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <div className="flex flex-col gap-1">
              <AnimatedText
                as="p"
                className="text-xs font-extrabold text-[#AEAEAE]"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Cash
              </AnimatedText>
              <AnimatedText
                as="p"
                className="text-xl font-medium"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Deposit
              </AnimatedText>
            </div>
              </>
            )}
          </WalletItemCard>
          <WalletItemCard className="col-span-1" delay={0.49}>
            {(isHovered) => (
              <>
                <motion.img 
                  className="size-10" 
                  src={"/images/eth.svg"}
                  animate={isHovered ? { 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.15, 1.15, 1.15, 1],
                  } : {
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <div className="flex flex-col gap-1">
              <AnimatedText
                as="p"
                className="text-xs font-extrabold text-[#AEAEAE]"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Tokens
              </AnimatedText>
              <AnimatedText
                as="p"
                className="text-xl font-medium"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Invest
              </AnimatedText>
            </div>
              </>
            )}
          </WalletItemCard>
          <WalletItemCard className="col-span-1" delay={0.56}>
            {(isHovered) => (
              <>
                <motion.img
                  className="size-10"
                  src={"/images/inflection-card.svg"}
                  animate={isHovered ? { 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.15, 1.15, 1.15, 1],
                  } : {
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <div className="flex flex-col gap-1">
              <AnimatedText
                as="p"
                className="text-xs font-extrabold text-[#AEAEAE]"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Apply for
              </AnimatedText>
              <AnimatedText
                as="p"
                className="text-xl font-medium"
                delay={0.32}
                duration={0.25}
                blurAmount="2px"
              >
                Stables Card
              </AnimatedText>
            </div>
              </>
            )}
          </WalletItemCard>
        </div>
      </div>
    </section>
  );
}

interface WalletItemCardProps extends Omit<ComponentProps<"div">, "children"> {
  children: ReactNode | ((isHovered: boolean) => ReactNode);
  delay?: number;
}

function WalletItemCard({ children, className, delay = 0.28 }: WalletItemCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4,
        transition: { 
          duration: 0.2, 
          ease: "easeOut" 
        } 
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ delay, duration: 0.25, ease: "easeOut" }}
      className={cn(
        "bg-[#252525] h-[150px] rounded-sm p-3 w-full flex flex-col justify-between cursor-pointer",
        className
      )}
    >
      {typeof children === "function" ? children(isHovered) : children}
    </motion.div>
  );
}
