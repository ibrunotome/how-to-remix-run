export function usd(cents: number) {
  cents /= 100;

  return cents.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
