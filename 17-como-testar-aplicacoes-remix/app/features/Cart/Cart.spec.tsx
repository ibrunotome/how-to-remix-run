import { render, screen } from "@testing-library/react";

import { Cart } from "./Cart";
import { it } from "vitest";
import productsMock from "~/../tests/mocks/products.json";
import userEvent from "@testing-library/user-event";

it("renders the cart", async () => {
  render(<Cart products={productsMock} />);

  expect(screen.getByTestId("product-quantity")).toHaveTextContent("12");

  // await userEvent.click(screen.getByRole("button"));
});
