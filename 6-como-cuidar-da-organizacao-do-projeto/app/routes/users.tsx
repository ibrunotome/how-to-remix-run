import { UsersTable, getUsers } from "~/features/Users";

import { ErrorFeedback } from "~/components";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({ users: await getUsers() });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return <UsersTable users={users} />;
}

export function ErrorBoundary() {
  return <ErrorFeedback />;
}
