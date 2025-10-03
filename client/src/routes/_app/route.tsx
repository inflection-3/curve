import { TopNav } from "@/components/top-nav";
import {
  createFileRoute,
  Outlet,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="px-4 pt-4 pb-32">
      <TopNav />
      <div className="h-4"></div>
      <Outlet />
    </section>
  );
}
