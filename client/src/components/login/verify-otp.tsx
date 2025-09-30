"use client";

import { useId, useState } from "react";
import { OTPInput, SlotProps } from "input-otp";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function VerifyOTP() {
  const id = useId();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (value.length !== 6) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      // Handle successful verification
      console.log("OTP verified successfully");
      // Navigate to next screen or dashboard
    } catch (error) {
      console.error("Failed to verify OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    setValue("");
    // Add resend logic here
    console.log("Resending OTP...");
  };

  const handleBack = () => {
    navigate({ to: "/login" });
  };

  return (
    <div className="flex flex-col w-full gap-y-7">
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center text-sm items-center gap-2">
          <Button variant={"link"} onClick={handleResend} className="text-sm py-0 font-medium text-muted-foreground hover:text-foreground rounded-none px-0">
            Resend Code
          </Button>
          <p className="font-bold">in 00:15</p>
        </div>
        <OTPInput
          id={id}
          value={value}
          onChange={setValue}
          containerClassName="flex items-center justify-center gap-3 has-disabled:opacity-50 text-black"
          maxLength={6}
          render={({ slots }) => (
            <div className="flex gap-3">
              {slots.map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          )}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full h-12 relative overflow-hidden"
          disabled={value.length !== 6 || isLoading}
          onClick={handleVerify}
        >
          <AnimatePresence mode="wait">
            {!isLoading ? (
              <motion.span
                key="verify"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                Verify Code
              </motion.span>
            ) : (
              <motion.div
                key="verifying"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span>Verifying...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        <Button variant="outline" className="w-full h-12" onClick={handleBack}>
          Back to Login
        </Button>
      </div>
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "border-input dark:bg-white dark:text-black bg-background text-foreground flex size-12 items-center justify-center rounded-md border-2 font-medium shadow-xs transition-[color,box-shadow] text-lg",
        { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
