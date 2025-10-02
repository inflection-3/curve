import { TopNav } from "@/components/top-nav";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { HomeIcon, WalletIcon, HistoryIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

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
    <section className="flex flex-col overflow-hidden">
      <div className="p-4 flex-shrink-0">
        <TopNav />
      </div>

      <div className="flex-1 overflow-y-auto scroll-smooth px-4 pb-24">
        <Outlet />
      </div>

      <div className="h-20 w-full bg-background bottom-0 left-0 right-0 fixed flex items-center justify-between px-10 rounded-t-xl max-w-md mx-auto">
        {bottomNavItems.map((item) => (
          <Link
            to={item.to}
            className={cn(
              "relative flex flex-col items-center justify-center gap-y-1 text-muted-foreground",
              location.pathname === item.to && "text-white"
            )}
          >
            <div
              className={cn(
                "absolute -top-4 left-0 w-full bg-white rounded-full",
                location.pathname === item.to && "h-1"
              )}
            ></div>
            {item.icon}
            <p className="text-sm">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
