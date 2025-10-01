import { createFileRoute } from '@tanstack/react-router'
import VerifyOTP from '@/components/login/verify-otp'
import {motion} from "framer-motion"

export const Route = createFileRoute('/login/verify')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-14 relative">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 flex flex-col gap-y-4">
          <h1 className="text-3xl font-medium">Verify your number</h1>
          <p className='text-sm'>We’ve sent a code to 
          +91 9876543210 Enter it to continue</p>
        </div>
        <motion.img
          src={"/images/verify.svg"}
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
      <VerifyOTP />
    </div>
  )
}
