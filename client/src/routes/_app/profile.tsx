import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, User, Pencil, X, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animated-text";
import { AppsList } from "@/components/apps";
import { apps } from "./apps.index";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { SetupProfile } from "@/components/login/setup-profile-form";

export const Route = createFileRoute("/_app/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="w-full h-full">
      <div className="flex w-full flex-col items-center relative gap-y-3">
        <motion.div
          className="w-[147px] h-[147px] rounded-full bg-[#B8B8B8] flex items-center justify-center relative z-20"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
        >
          <User className="w-16 h-16 fill-white/50 stroke-0" />
        </motion.div>
        <motion.div
          className="flex flex-col items-center gapy-3 relative z-20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-x-2">
            <h2 className="text-2xl font-medium">User Name</h2>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  type="button"
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors relative z-30"
                  aria-label="Edit profile"
                >
                  <Pencil className="w-4 h-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[90vh]">
                <DrawerHeader className="relative">
                  <DrawerTitle>Edit Profile</DrawerTitle>
                  <DrawerClose asChild>
                    <button
                      type="button"
                      className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="overflow-y-auto max-w-md flex items-center justify-center mx-auto w-full">
                  <SetupProfile />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex items-center gap-x-2">
          <p className="text-sm font-medium text-light">Wallet Address</p>
          <Button variant="ghost" className="text-sm font-medium text-light">
            <Copy className="w-4 h-4" />
          </Button>
          </div>
        </motion.div>
        <div className="h-10"></div>
        <motion.div
          className="flex items-center w-full relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        >
          <div className="h-1 bg-muted-foreground w-full"></div>
          <div className="flex items-center gap-x-6 absolute left-0 right-0 justify-between w-max mx-auto bg-[#171717] h-10 rounded-full px-4 z-50">
            <div className="flex justify-center gap-3 bg- border-red-400 rounded-full items-center">
              <img width={16} height={16} src="/icons/telegram.svg" />
              <img width={16} height={16} src="/icons/x.svg" />
            </div>
            <p className="text-xs">Connect Your Socials</p>
          </div>
          <div className="h-1 w-full bg-muted-foreground"></div>
        </motion.div>
        <motion.img
          src="./images/grid.svg"
          className="w-full absolute bottom-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="h-10"></div>
      <div className="flex flex-col gap-y-4">
        <KycCard />
        <motion.div
          className="flex gap-x-1 items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.64, duration: 0.2, ease: "easeOut" }}
        >
          <LayoutDashboard className="text-[#E4E4E4] size-4 storke-[0.3px]" />
          <AnimatedText
            as="p"
            className="text-sm font-bold text-[#E4E4E4]"
            delay={0.66}
            duration={0.25}
            blurAmount="2px"
          >
            Apps you have interacted with
          </AnimatedText>
        </motion.div>
        <AppsList apps={apps.flatMap((app) => app.apps)} />
      </div>
    </section>
  );
}

function KycCard() {
  return (
    <motion.div
      className="bg-background rounded-lg p-2.5 flex items-center gap-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.56, duration: 0.3, ease: "easeOut" }}
    >
      <motion.img
        src="./images/kyc.svg"
        className="w-14 h-14"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.62, duration: 0.25, ease: "easeOut" }}
      />
      <div className="flex flex-col gap-y-1 w-max">
        <h2 className="font-bold border-b-2 pb-0.5 border-b-white w-max">
          Kyc Pending
        </h2>
        <p className="text-[10px]">Do KYC & claim +100 Coins.</p>
      </div>
      <Button size={"sm"} className="text-[10px] ml-auto w-[96px] h-6">
        Complete Now!
      </Button>
    </motion.div>
  );
}
