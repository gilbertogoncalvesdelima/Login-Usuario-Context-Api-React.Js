import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import AuthScreen from "../../../pages/auth";
import 'jest-styled-components'


describe("Auth Page", () => {
    it("should render auth page", () => {
        render(<AuthScreen />) // Renderiza a tela de auth
        expect(screen.getByText("Entrar")).toBeInTheDocument(); // Verifica se o texto "Entrar" está na tela
        expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument(); // Verifica se o texto "Usuário" está na tela
        expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument(); // Verifica se o texto "Senha" está na tela
    });
});