import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useSubmit } from "@remix-run/react";

export default function () {
  const stripe = useStripe();
  const elements = useElements();
  const submit = useSubmit();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await stripe!.confirmPayment({
      elements: elements!,
      confirmParams: {
        return_url: `${ENV.URL}/payment/success`,
      },
    });

    submit(e.currentTarget, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit">Pay now</button>
    </form>
  );
}
