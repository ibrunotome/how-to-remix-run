import { db } from "~/db.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const users = await db.user.findMany();

  return json({ users });
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Conexão com DB</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}
