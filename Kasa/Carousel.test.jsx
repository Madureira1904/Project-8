import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./src/components/carousel/Carousel";

const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Mock de imagens utilizado para simular dados reais no teste

// Teste 1: verifica se o carousel mostra a primeira imagem por defeito
test("affiche la première image du carousel", () => { 
  render(<Carousel images={images} />); // Renderiza o componente com as imagens de teste

  const img = screen.getByRole("img"); // Seleciona a imagem renderizada no DOM

  expect(img).toHaveAttribute("src", "img1.jpg"); // Verifica se o src corresponde à primeira imagem
});

// Teste 2: verifica se ao clicar no botão "next" a imagem muda
test("change vers image suivante", () => {
  render(<Carousel images={images} />);

  const nextButton = document.querySelector(".carousel-next"); // Seleciona o botão de avançar (next)

  fireEvent.click(nextButton); // Simula o clique do utilizador

  const img = screen.getByRole("img"); // Verifica se passou para a segunda imagem

  expect(img).toHaveAttribute("src", "img2.jpg");
});

// Teste 3: verifica se ao clicar no botão "prev" volta para a imagem anterior
test("retour à l'image précédente", () => {
  render(<Carousel images={images} />);

  const prevButton = document.querySelector(".carousel-prev"); // Seleciona o botão de voltar (prev)

  fireEvent.click(prevButton); // Simula o clique do utilizador

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img3.jpg");
});

// Teste 4: verifica o comportamento de loop do carousel
test("loop du carousel fonctionne", () => {
  render(<Carousel images={images} />);

  const nextButton = document.querySelector(".carousel-next");

// Avança várias vezes (mais do que o número de imagens)
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);

  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("src", "img1.jpg"); // Deve voltar à primeira imagem (loop completo)
});