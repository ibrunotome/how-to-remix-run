import type { LoaderArgs } from "@remix-run/node";
import { Layout } from "~/Layouts/Layout";
import { isAuthenticated } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  await isAuthenticated(request);

  return null;
}

export default function () {
  return (
    <Layout>
      <div className="container p-8 mx-auto">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea
          consectetur eum autem laudantium. Fugiat, dolor eligendi recusandae
          laborum eveniet animi consequatur, explicabo perferendis iure est sed
          modi quod. Voluptas!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          impedit, eius omnis veritatis temporibus labore necessitatibus a neque
          sequi iure enim quos obcaecati quidem officia mollitia quas, tempora
          perspiciatis quisquam?
        </p>
      </div>
    </Layout>
  );
}
