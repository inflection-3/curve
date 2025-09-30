"use client"

import { useId, useState } from "react"
import * as RPNInput from "react-phone-number-input"
import { motion, AnimatePresence } from "framer-motion"

import { CountrySelect, FlagComponent, PhoneInput } from "../ui/phone-input"
import { Button } from "../ui/button"
import { useNavigate } from "@tanstack/react-router"

export default function LoginWithPhone() {
  const id = useId()
  const [value, setValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleGetOTP = async () => {
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
      navigate({ to: "/login/verify" })
    } catch (error) {
      console.error("Failed to send OTP:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-full gap-y-7" dir="ltr">
      <RPNInput.default
        className="flex rounded-md shadow-xs dark:bg-white"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={id}
        placeholder="Enter phone number"
        value={value}
        onChange={(newValue) => setValue(newValue ?? "")}
      />
      
      <Button 
        className="w-full h-12 relative overflow-hidden" 
        disabled={!value || isLoading}
        onClick={handleGetOTP}
      >
        <AnimatePresence mode="wait">
          {!isLoading ? (
            <motion.span
              key="get-otp"
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              Get OTP
            </motion.span>
          ) : (
            <motion.div
              key="loading"
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
                  ease: "backInOut"
                }}
              />
              <span>Sending...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  )
}

