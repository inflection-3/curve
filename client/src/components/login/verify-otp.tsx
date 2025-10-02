"use client";

import {  useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

export default function VerifyOTP() {
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
      navigate({
        to: "/login/setup-profile"
      })
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
          <Button
            variant={"link"}
            onClick={handleResend}
            className="text-sm py-0 font-medium text-muted-foreground hover:text-foreground rounded-none px-0"
          >
            Resend Code
          </Button>
          <p className="font-bold">in 00:15</p>
        </div>

        <InputOTP
        onChange={(val) => {setValue(val)}}
          className="w-full bg-red-400"
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup className="w-full flex justify-between mx-auto">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
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

