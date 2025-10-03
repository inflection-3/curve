import { ThemeProvider } from "@/components/theme-provider";
import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect } from "react";

function ScrollToTop() {
  const router = useRouterState();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [router.location.pathname]);

  return null;
}

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
      <ScrollToTop />
      <div className="dark:bg-[#121212] min-h-screen">
        <div className="w-full max-w-sm mx-auto">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
