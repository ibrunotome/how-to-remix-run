import { UsersTable } from "~/components/UsersTable";
import { db } from "~/db.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const users = await db.user.findMany();

  return json({ users });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return <UsersTable users={users} />;
}
