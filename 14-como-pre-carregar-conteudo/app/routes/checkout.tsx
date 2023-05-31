import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Checkout, checkoutSchema, createOrder } from "~/features/Checkout";
import { commitSession, getSession } from "~/session.server";

import formsStyles from "~/styles/forms.css";
import { getTotals } from "~/features/Checkout";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: formsStyles }];
}

export async function action({ request }: ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const products = session.get("cartProducts") ?? [];
  const totals = getTotals({ products });
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = await createOrder({
    ...checkoutSchema.parse(data),
    products: JSON.stringify(products),
    totals: JSON.stringify(totals),
  });

  session.set("orderId", order.id);

  return redirect("/payment", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });

  return null;
}

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const products = session.get("cartProducts") || [];
  const totals = getTotals({ products });

  return json({
    products,
    totals,
  });
}

export default function () {
  const { products, totals } = useLoaderData<typeof loader>();
  return <Checkout products={products} totals={totals} />;
}
