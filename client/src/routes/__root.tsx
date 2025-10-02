import { ThemeProvider } from "@/components/theme-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark">
      <style>{`
        html {
          scroll-behavior: smooth;
          overscroll-behavior: none;
        }
        body {
          overscroll-behavior: none;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="dark:bg-[#121212] min-h-screen">
        <div className="w-full max-w-md mx-auto">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
