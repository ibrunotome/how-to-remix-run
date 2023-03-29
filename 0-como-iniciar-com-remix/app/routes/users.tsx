import { UsersList } from "~/features/Users/UsersList";
import { getUsers } from "~/features/Users/users.api.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "react-router";

export async function loader() {
  return json({
    users: await getUsers(),
  });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return <UsersList users={users} />;
}
