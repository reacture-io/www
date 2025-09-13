import { createFileRoute, Outlet } from "@tanstack/react-router";

const LayoutComponent = () => (
  <div className="p-2">
    <div className="border-b">I'm a layout</div>
    <div>
      <Outlet />
    </div>
  </div>
);

export const Route = createFileRoute("/_pathlessLayout")({
  component: LayoutComponent,
});
