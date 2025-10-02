import { ThemeProvider } from "@/components/theme-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="dark:bg-[#121212]">
        <div className="w-full max-w-md mx-auto h-full">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
