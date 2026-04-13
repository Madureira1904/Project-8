import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./src/components/Card/Card";
import { fireEvent } from "@testing-library/react";

// Mock de dados que simula uma propriedade real (como vindo da API)
const mockProperty = {
  id: "123",
  title: "Super logement",
  cover: "img.jpg",
};


// Teste 1: verifica se o título do logement é renderizado corretamente
test("affiche le titre du logement", () => {

  // Renderiza o componente dentro de BrowserRouter (necessário por causa do Link)
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );
// Verifica se o texto do título aparece no DOM
  expect(screen.getByText("Super logement")).toBeInTheDocument();
});


// Teste 2: verifica se a imagem do logement é exibida corretamente
test("affiche l'image du logement", () => {
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );

  const image = screen.getByRole("img"); // Seleciona a imagem renderizada
  expect(image).toBeInTheDocument(); // Verifica se a imagem existe
  expect(image).toHaveAttribute("src", "img.jpg"); // Verifica se o atributo src está correto
});


// Teste 3: verifica se o link do Card funciona corretamente ao clicar
test("click sur la carte (link fonctionne)", () => {
  render(
    <BrowserRouter>
      <Card property={mockProperty} />
    </BrowserRouter>
  );

  const link = screen.getByRole("link"); // Seleciona o link (envolve todo o card)

  expect(link).toBeInTheDocument(); // Verifica se o link existe

  fireEvent.click(link); // Simula o clique do utilizador

  expect(link).toHaveAttribute("href", "/logement/123"); // Verifica se o link aponta para a rota correta com o ID
});