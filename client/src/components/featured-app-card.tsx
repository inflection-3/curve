import { BadgeIcon } from "./icons";

export function FeaturedAppCard() {
  return (
    <div className="h-[76px] px-5 w-full bg-gradient-to-l from-[#1B1B1B] via-[#1B1B1B]/50 to-[#949494]/30 rounded-[10px] relative flex items-center justify-between">
        <div className="absolute top-0 left-0">
        <BadgeIcon />
        </div>
        <div >
            <h3 className="font-medium text-xl">Geodnet</h3>
            <p className="text-xs text-secondary-foreground">Decentralized GPS Network</p>
        </div>
        <div className="h-full size-11 flex items-center justify-center">
            <img src="./test.svg"  className="drop-shadow-xl" />
            <img src="./images/grid.svg" className="size-20 absolute -bottom-1 right-0"  />
        </div>
    </div>
  );
}