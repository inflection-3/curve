import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export function SetupProfile() {
  return (
    <section className="w-full flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label>Name</Label>
          <div className="relative">
            <Input placeholder="Enter Your Name" className="h-12" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Email</Label>
          <div className="relative">
            <Input placeholder="Enter Your Email" className="h-12" />
          </div>
        </div>
      </div>
      <Button className="w-full h-12">Setup Profile</Button>
      <div className="rounded-md p-7 flex flex-col gap-y-5 bg-[linear-gradient(to_right,#000000_0%,#151515_33%,#151515_65%,#000000_100%)">
        <p className="text-center text-sm text-muted-foreground">
          Connect with your world
        </p>
        <div className="flex justify-center gap-10 items-center">
          <img width={24} height={24} src="/icons/telegram.svg" />
          <img width={24} height={24} src="/icons/x.svg" />
        </div>
        <Link
          className={cn(
            buttonVariants({
              variant: "link",
              size:"lg"
            }),
            "underline mt-5 text-lg"
          )}
          to="/login/kyc"
        >
          Skip
        </Link>
      </div>
    </section>
  );
}
