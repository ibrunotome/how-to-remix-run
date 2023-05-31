import { type Product } from "@prisma/client";
import { Form, useNavigation } from "@remix-run/react";
import { usd } from "~/features/utils/currency";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  const navigation = useNavigation();

  return (
    <Form method="post" className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            const busy =
              navigation.state === "submitting" &&
              Number(navigation.formData.get("productId")) === product.id;
            return (
              <div key={product.id} className={`${busy && "opacity-50"}`}>
                <div className="relative">
                  <div className="relative w-full overflow-hidden rounded-lg h-72">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {usd(product.price)}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    name="productId"
                    value={product.id}
                    disabled={busy}
                    className="relative flex items-center justify-center px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Form>
  );
}
