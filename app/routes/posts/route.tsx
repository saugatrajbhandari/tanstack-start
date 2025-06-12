import { createFileRoute, Outlet } from "@tanstack/react-router";
import { fetchPosts } from "../../utils/fetch-posts";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
  loader: fetchPosts,
});

function RouteComponent() {
  const loader = Route.useLoaderData();
  console.log(loader, "loader");

  return (
    <div>
      <Outlet />
      <p>layout</p>
    </div>
  );
}
