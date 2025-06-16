import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import prisma from "../lib/primsa";

const getUsers = createServerFn({ method: "GET" }).handler(async () => {
  return prisma.user.findMany({ include: { posts: true } });
});

export const Route = createFileRoute("/users")({
  component: RouteComponent,
  loader: () => getUsers(),
});

function RouteComponent() {
  const users = Route.useLoaderData();

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <ul>
              {user.posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
