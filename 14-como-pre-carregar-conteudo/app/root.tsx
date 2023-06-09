import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";

import { getLoggedUser } from "./session.server";
import { json } from "@remix-run/node";
import stylesheet from "~/tailwind.css";

// import { getLoggedUser } from "./session.server";
// import { UserContext } from "./features/Users/context";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  const loggedUser = await getLoggedUser(request);

  return json({
    ENV: {
      STRIPE_PUBLIC_KEY: ENV.STRIPE_PUBLIC_KEY,
      URL: ENV.URL,
    },
    loggedUser,
  });
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        {/* <UserContext.Provider value={{ loggedUser }}>
          <Outlet />
        </UserContext.Provider> */}
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}
