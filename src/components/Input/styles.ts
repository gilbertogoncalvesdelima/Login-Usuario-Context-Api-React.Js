// Importa a biblioteca styled-components
import styled from "styled-components";

// Estilos para o componente Container
export const Container = styled.div`
    .error {
        color: red; // Cor do texto de erro
        font-size: 0.8rem; // Tamanho da fonte para mensagens de erro
        margin-top: 5px; // Margem superior para separar das outras partes
    }
`;

// Estilos para o componente InputContainer
export const InputContainer = styled.div`
    width: 450px; // Largura padrão do componente
    height: 55px; // Altura padrão do componente
    background: transparent; // Fundo transparente
    border: 1.8px solid darkgray; // Borda com espessura e cor específicas
    border-radius: 10px; // Borda arredondada
    overflow: hidden; // Oculta qualquer conteúdo que ultrapasse as dimensões do contêiner

    input {
        border: none; // Remove a borda do input
        outline: none; // Remove o contorno ao focar no input
        width: 100%; // Ocupa 100% da largura disponível
        height: 100%; // Ocupa 100% da altura disponível
        padding-left: 10px; // Preenchimento à esquerda para afastar o texto da borda
        font-size: 0.9rem; // Tamanho da fonte para o input
        font-weight: 500; // Peso da fonte para o input
    }

    /* Estilos responsivos para diferentes tamanhos de tela */

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
