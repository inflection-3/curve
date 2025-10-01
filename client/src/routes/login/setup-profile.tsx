import { SetupProfile } from "@/components/login/setup-profile-form";
import { createFileRoute } from "@tanstack/react-router";
import {motion} from "framer-motion"


const profileSetupImage = "/images/profile.svg"

export const Route = createFileRoute("/login/setup-profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-8 relative">
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 flex flex-col gap-y-4">
          <h1 className="text-3xl font-medium">
            Set up your profile
          </h1>
          <p className="text-sm">
            Your name makes Inflection <br /> feel personal
          </p>
        </div>
        <motion.img
          src={profileSetupImage}
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
      <SetupProfile />
    </div>
  );
}
