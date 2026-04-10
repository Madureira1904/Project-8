import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./src/components/Card/Card";
import { fireEvent } from "@testing-library/react";

const mockProperty = {
  id: "123",
  title: "Super logement",
  cover: "img.jpg",
};

test("affiche le titre du logement", () => {
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );

  expect(screen.getByText("Super logement")).toBeInTheDocument();
});

test("affiche l'image du logement", () => {
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "img.jpg");
});

test("click sur la carte (link fonctionne)", () => {
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );

  const link = screen.getByRole("link");

  expect(link).toBeInTheDocument();

  fireEvent.click(link);

  expect(link).toHaveAttribute("href", "/logement/123");
});