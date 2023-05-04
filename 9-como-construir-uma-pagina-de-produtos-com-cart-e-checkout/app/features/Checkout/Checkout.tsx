import { type Product } from "@prisma/client";
import { type Totals } from "./checkout.api.server";

interface Props {
  products: Product[];
  totals: Totals;
}

export function Checkout({ products, totals }: Props) {
  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div
        className="fixed top-0 left-0 hidden w-1/2 h-full bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 hidden w-1/2 h-full bg-indigo-900 lg:block"
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 mx-auto max-w-7xl gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="py-12 text-indigo-300 bg-indigo-900 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-24"
        >
          <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                ${totals.total}
              </dd>
            </dl>

            <ul
              role="list"
              className="text-sm font-medium divide-y divide-white divide-opacity-10"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start py-6 space-x-4"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="flex-none object-cover object-center w-20 h-20 rounded-md"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white">{product.name}</h3>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-white">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="pt-6 space-y-6 text-sm font-medium border-t border-white border-opacity-10">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>${totals.subTotal}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>FREE</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>${totals.taxes}</dd>
              </div>

              <div className="flex items-center justify-between pt-6 text-white border-t border-white border-opacity-10">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${totals.total}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form>
            <div className="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
              <div>
                <h3
                  id="contact-info-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Contact information
                </h3>

                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Payment details
                </h3>

                <div className="grid grid-cols-3 mt-6 gap-y-6 gap-x-4 sm:grid-cols-4">
                  <div className="col-span-3 sm:col-span-4">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-3">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Shipping address
                </h3>

                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        autoComplete="address-level2"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="region"
                        name="region"
                        autoComplete="address-level1"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        name="postal-code"
                        autoComplete="postal-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Billing information
                </h3>

                <div className="flex items-center mt-6">
                  <input
                    id="same-as-shipping"
                    name="same-as-shipping"
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <div className="ml-2">
                    <label
                      htmlFor="same-as-shipping"
                      className="text-sm font-medium text-gray-900"
                    >
                      Same as shipping information
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 mt-10 border-t border-gray-200">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Pay now
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
