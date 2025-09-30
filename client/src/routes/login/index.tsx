import LoginWithPhone from "@/components/login/login-with-phone";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";



const phoneImageUrl = '/images/phone.svg'

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-14 relative">
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 flex flex-col gap-y-4">
          <h1 className="text-3xl">Enter Your <br /> Mobile <br /> Number</h1>
          <p>Verify with your <br /> mobile and continue</p>
        </div>
        <motion.img 
          className="absolute -top-32 -right-10 "
          src={phoneImageUrl}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            duration: 0.8
          }}
        />
      </div>
      <LoginWithPhone />
    </div>
  );
}
