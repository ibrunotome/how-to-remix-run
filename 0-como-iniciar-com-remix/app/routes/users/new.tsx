import type { ActionArgs } from "@remix-run/node";
import type { User } from "@prisma/client";
import { UserForm } from "~/features/Users/UserForm";
import { createUser } from "~/features/Users/users.api.server";
import { redirect } from "react-router";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await createUser(data as User);

  return redirect("/users");
}

export default function () {
  return <UserForm />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <h1>Huston we have a problem!</h1>;
}
