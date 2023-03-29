import { Form } from "@remix-run/react";

export function UserForm() {
  return (
    <Form method="post">
      <fieldset>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </fieldset>

      <button type="submit">Create</button>
    </Form>
  );
}
