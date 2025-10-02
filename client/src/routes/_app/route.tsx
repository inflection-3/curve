import { TopNav } from "@/components/top-nav";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { HomeIcon, WalletIcon, HistoryIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

const bottomNavItems = [
  {
    label: "Home",
    to: "/",
    icon: <HomeIcon className="size-6" />,
  },
  {
    label: "Wallet",
    to: "/wallet",
    icon: <WalletIcon className="size-6" />,
  },
  {
    label: "history",
    to: "/history",
    icon: <HistoryIcon className="size-6" />,
  },
];

function RouteComponent() {
  const location = useLocation();
  return (
    <section className="px-4 pt-4 pb-32 h-full" style={{WebkitOverflowScrolling: 'touch'}}>
      <TopNav />
      <div className="h-4"></div>
      <Outlet />
      <motion.div
        className="h-20 w-full bg-background bottom-0 left-0 right-0 fixed flex items-center justify-between px-10 rounded-t-xl max-w-md mx-auto overflow-visible"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ position: 'fixed', zIndex: 50 }}
      >
        {bottomNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "relative flex flex-col items-center justify-center gap-y-1 text-muted-foreground",
              location.pathname === item.to && "text-white"
            )}
          >
            {location.pathname === item.to && (
              <motion.div
                className="absolute -top-4 left-0 w-full bg-white rounded-full h-1"
                layoutId="bottomNavIndicator"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }}
              />
            )}
            {item.icon}
            <p className="text-sm">{item.label}</p>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
