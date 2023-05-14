import { UserForm, saveUser, schema } from "~/features/Users";

import type { ActionArgs } from "@remix-run/node";
import { ErrorFeedback } from "~/components";
import { formAction } from "~/remix-forms";
import { makeDomainFunction } from "domain-functions";

const mutation = makeDomainFunction(schema)(
  async (data) => await saveUser(data)
);

export const action = async ({ request }: ActionArgs) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/users",
  });

export default function () {
  return <UserForm />;
}

export function ErrorBoundary() {
  return <ErrorFeedback />;
}
