import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../../convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";

export const Route = createFileRoute("/convex/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

  return (
    <div>
      {data.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}
