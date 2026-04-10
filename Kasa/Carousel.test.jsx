import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./src/components/carousel/Carousel";

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

test("affiche la première image du carousel", () => {
  render(<Carousel images={images} />);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img1.jpg");
});

test("change vers image suivante", () => {
  render(<Carousel images={images} />);

  const nextButton = document.querySelector(".carousel-next");

  fireEvent.click(nextButton);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img2.jpg");
});

test("retour à l'image précédente", () => {
  render(<Carousel images={images} />);

  const prevButton = document.querySelector(".carousel-prev");

  fireEvent.click(prevButton);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img3.jpg");
});

test("loop du carousel fonctionne", () => {
  render(<Carousel images={images} />);

  const nextButton = document.querySelector(".carousel-next");

  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img1.jpg");
});