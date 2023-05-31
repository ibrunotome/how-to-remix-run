import { Outlet, useLoaderData } from "@remix-run/react";
import { createPaymentIntent, retrievePaymentIntent } from "~/features/Payment";
import { getOrder, updateOrder } from "~/features/Checkout";

import { Elements } from "@stripe/react-stripe-js";
import type { LoaderArgs } from "@remix-run/node";
import { getSession } from "~/session.server";
import { json } from "@remix-run/node";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(ENV.STRIPE_PUBLIC_KEY);

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const orderId = session.get("orderId");
  const order = await getOrder(orderId ?? "");
  const totals = JSON.parse(order?.totals ?? "");

  let paymentIntent;

  if (order?.stripePaymentIntentId) {
    paymentIntent = await retrievePaymentIntent(order.stripePaymentIntentId);
  } else {
    paymentIntent = await createPaymentIntent(Math.ceil(totals.total));

    await updateOrder(session.get("orderId") ?? "", {
      stripePaymentIntentId: paymentIntent.id,
    });
  }

  return json({
    paymentIntent,
  });
}

export default function () {
  const { paymentIntent } = useLoaderData<typeof loader>();

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret: paymentIntent.client_secret! }}
    >
      <Outlet />
    </Elements>
  );
}
