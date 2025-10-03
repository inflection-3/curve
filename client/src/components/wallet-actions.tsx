import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animated-text";
import { useNavigate } from "@tanstack/react-router";
import {  DollorIcon, UploadIcon, DownloadIcon, ScanTextIcon, WalletIcon } from "./icons";



export function getWalletActionsHomeScreen(navgare: ReturnType<typeof useNavigate>) {
  return [
    {
      icon: <UploadIcon />,
      label: "Send",
      onClick: () => navgare({ to: "/" }),
    },
    {
      icon: <DownloadIcon />,
      label: "Receive",
      onClick: () => navgare({ to: "/" }),
    },
    {
      icon: <ScanTextIcon />,
      label: "Pay",
      onClick: () => navgare({ to: "/" }),
    },
    {
      icon: <WalletIcon />,
      label: "Wallet",
      onClick: () => navgare({ to: "/wallet" }),
    },
  ];
}


export function getWalletActionsWalletScreen(navgare: ReturnType<typeof useNavigate>) {
  return [
    {
        icon: <UploadIcon />,
        label: "Send",
        onClick: () => navgare({ to: "/" }),
      },
      {
        icon: <DownloadIcon />,
        label: "Receive",
        onClick: () => navgare({ to: "/" }),
      },
      {
        icon: <ScanTextIcon />,
        label: "Pay",
        onClick: () => navgare({ to: "/" }),
      }, 
      {
        icon: <DollorIcon />,
        label: "Buy",
        onClick: () => navgare({ to: "/" }),
      },
      
  ];
}


export function WalletActions({actions}: {
    actions: {
        icon: React.ReactNode;
        label: string;
        onClick: () => void;
    }[];
}) {
  return (
    <div className="flex items-center justify-between py-9 relative flex-wrap">
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#484848]"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.48, duration: 0.25, ease: "easeOut" }}
      style={{ originX: 0 }}
    />
     {actions.map((action, index) => (
      <WalletActionButton key={index} {...action} />
     ))}
  </div> 
  );
}


export function WalletActionButton({icon, label, onClick}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="w-[70px]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
    >
      <motion.div
        role="button"
        onClick={onClick}
        className="w-full cursor-pointer h-16 flex items-center justify-center rounded-md bg-black"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
      </motion.div>
      <AnimatedText 
        as="p" 
        className="text-center text-xs font-medium mt-2"
        delay={0.44}
        duration={0.25}
        blurAmount="2px"
      >
        {label}
      </AnimatedText>
    </motion.div> 
  );
}