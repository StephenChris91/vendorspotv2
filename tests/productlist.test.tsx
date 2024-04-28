// ProductList.test.tsx
import ProductList from "@/components/home2/product/product-list";
import { render, screen } from "@testing-library/react";

test("renders a list of product cards", () => {
  render(<ProductList />);

  const productCards = screen.getAllByText("Acme Circles T-Shirt");
  expect(productCards).toHaveLength(8);

  productCards.forEach((productCard) => {
    expect(productCard).toContainEqual("Acme Circles T-Shirt");
  });
});
