import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col p-4 h-screen">
      <img className="h-6" src="/logo-with-text.svg" />
      <div className="h-24"></div>
      <Outlet />
    </div>
  );
}
