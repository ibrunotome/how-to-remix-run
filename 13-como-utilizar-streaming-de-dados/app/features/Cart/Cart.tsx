import { Fragment } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import type { Product } from "@prisma/client";
import { Link, Links } from "@remix-run/react";

const navigation = [
  { name: "Women", href: "#" },
  { name: "Men", href: "#" },
  { name: "Company", href: "#" },
  { name: "Stores", href: "#" },
];

interface Props {
  products: Product[];
}

export function Cart({ products }: Props) {
  return (
    <header className="relative z-10 bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-4 border-b border-gray-200 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0">
              <div className="flex items-center px-4 space-x-8 h-14 sm:h-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end flex-1">
              {/* Search */}
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
              </a>

              {/* Cart */}
              {products.length > 0 ? (
                <Popover className="flow-root ml-4 text-sm lg:relative lg:ml-8">
                  <Popover.Button className="flex items-center p-2 -m-2 group">
                    <ShoppingBagIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {products.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                      <h2 className="sr-only">Shopping Cart</h2>

                      <form className="max-w-2xl px-4 mx-auto">
                        <ul role="list" className="divide-y divide-gray-200">
                          {products.map((product) => (
                            <li
                              key={product.id}
                              className="flex items-center py-6"
                            >
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="flex-none w-16 h-16 border border-gray-200 rounded-md"
                              />
                              <div className="flex-auto ml-4">
                                <h3 className="font-medium text-gray-900">
                                  <a href={product.href}>{product.name}</a>
                                </h3>
                                <p className="text-gray-500">{product.color}</p>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to="/checkout"
                          type="submit"
                          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Checkout
                        </Link>

                        <p className="mt-6 text-center">
                          <Link
                            to="/products/clear-cart"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Clear Cart
                          </Link>
                        </p>
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
