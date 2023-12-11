// Importa o módulo "styled" da biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado chamado Container
export const Container = styled.div`
    width: 450px; // Largura do componente
    height: 55px; // Altura do componente
    background: #0656d6; // Cor de fundo
    display: flex; // Usa o modelo de layout flexível
    justify-content: center; // Centraliza horizontalmente o conteúdo
    align-items: center; // Centraliza verticalmente o conteúdo
    border-radius: 55px; // Borda arredondada
    cursor: pointer; // Muda o cursor para indicar que é clicável

    &:hover {
        opacity: 0.8; // Efeito de opacidade quando o mouse está sobre o componente
    }

    &:active {
        opacity: 0.7; // Efeito de opacidade quando o componente está ativo (pressionado)
    }

    // Estilos para o input do tipo "button" ou "submit" dentro do Container
    input[type="button"],
    input[type="submit"] {
        width: 100%; // Ocupa 100% da largura disponível
        cursor: pointer; // Muda o cursor para indicar que é clicável
        height: 100%; // Ocupa 100% da altura disponível
        background: transparent; // Fundo transparente
        color: white; // Cor do texto
        font-weight: 500; // Peso da fonte
        font-size: 0.85rem; // Tamanho da fonte
        outline: none; // Remove o contorno ao focar
        border: none; // Remove a borda
    }

    // Estilos responsivos para diferentes tamanhos de tela

    /* HD */
    @media screen and (max-width: 1270px) {
        width: 300px; // Reduz a largura para telas com largura máxima de 1270px
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        width: 350px; // Reduz a largura para telas com largura máxima de 1000px
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        width: 350px; // Reduz a largura para telas com largura máxima de 700px
    }
`;
