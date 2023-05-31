import { Form } from "~/remix-forms";
import { schema } from "./users.api";
import { useLoggedUser, useUsersList } from "~/hooks/hooks";
// import { useLoggedUser } from "./context";

export function UserForm() {
  // const { loggedUser } = useLoggedUser();
  const loggedUser = useLoggedUser();
  const users = useUsersList();

  return (
    <div className="pt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
            <p>Logged user is: {loggedUser?.name}</p>
            <p>User quantity: {users.length}</p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <Form schema={schema}>
            {({ Field, Errors, Button, register }) => (
              <>
                <Field name="name" label="Name">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("name")}
                        className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-sm antialiased font-bold text-red-500" />
                    </>
                  )}
                </Field>
                <Field name="email" label="E-mail">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("email")}
                        className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-sm antialiased font-bold text-red-500" />
                    </>
                  )}
                </Field>
                <Field name="city" label="City">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("city")}
                        className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-sm antialiased font-bold text-red-500" />
                    </>
                  )}
                </Field>
                <Field name="state" label="State">
                  {({ Label, Errors }) => (
                    <>
                      <Label className="block text-sm font-medium text-gray-700" />
                      <input
                        {...register("state")}
                        className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      <Errors className="text-sm antialiased font-bold text-red-500" />
                    </>
                  )}
                </Field>
                <Errors className="text-sm antialiased font-bold text-red-500" />
                <Button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </Button>
              </>
            )}
          </Form>
          {/* <form method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="first-name"
                      autoComplete="name"
                      className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-address"
                      autoComplete="email"
                      className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city-address"
                      autoComplete="city"
                      className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      className="block w-full h-8 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
