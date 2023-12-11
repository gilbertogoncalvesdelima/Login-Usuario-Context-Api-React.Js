// Importa a biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado Container
export const Container = styled.div`
    width: 100%; // Largura de 100% da largura disponível
    height: 100%; // Altura de 100% da altura disponível
    background: #F2F2F2; // Cor de fundo
    border-radius: 5px; // Borda arredondada
    display: flex; // Usa o modelo de layout flexível
    flex-direction: column; // Organiza os filhos em coluna
    align-items: center; // Centraliza horizontalmente os filhos
    justify-content: center; // Centraliza verticalmente os filhos

    /* Estilos para a tag img dentro de Container */
    img {
        width: 100px; // Largura da imagem
        height: 100px; // Altura da imagem
    }

    /* Estilos para a classe username dentro de Container */
    .username {
        font-weight: 500; // Peso da fonte
        font-size: 1rem; // Tamanho da fonte de 1rem
        margin-top: 10px; // Margem superior de 10 pixels
        margin-bottom: 10px; // Margem inferior de 10 pixels
    }

    /* Estilos para a classe bio dentro de Container */
    .bio {
        text-align: center; // Alinhamento do texto ao centro
        font-weight: 0.8rem; // Peso da fonte (provavelmente deveria ser font-size)
        color: darkgray; // Cor do texto
    }

    /* Estilos para a classe button dentro de Container */
    .button {
        width: 80%; // Largura de 80% da largura disponível
        height: 40px; // Altura de 40 pixels
        display: flex; // Usa o modelo de layout flexível
        justify-content: center; // Centraliza horizontalmente
        align-items: center; // Centraliza verticalmente
        border-radius: 10px; // Borda arredondada
        font-weight: 500; // Peso da fonte
        margin-top: 10px; // Margem superior de 10 pixels
        background: #FCB603; // Cor de fundo
        font-size: 0.8rem; // Tamanho da fonte de 0.8rem
        cursor: pointer; // Cursor apontando

        /* Efeitos de hover e active para o botão */
        &:hover {
            opacity: 0.8; // Opacidade reduzida ao passar o mouse
        }

        &:active {
            opacity: 0.7; // Opacidade reduzida ao clicar
        }

        user-select: none; // Impede a seleção de texto no botão
    }

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* TABLET */
    @media screen and (max-width: 1000px) {
        /* Ajustes de estilo para telas de até 1000px de largura */
        img {
            width: 60px; // Largura da imagem reduzida para telas de até 1000px de largura
            height: 60px; // Altura da imagem reduzida para telas de até 1000px de largura
        }

        .username {
            font-size: 0.8rem; // Tamanho da fonte reduzido para telas de até 1000px de largura
        }

        .bio {
            font-size: 0.8rem; // Tamanho da fonte reduzido para telas de até 1000px de largura
        }
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Estilos ajustados para telas de até 700px de largura (pode ser adicionado conforme necessário) */
    }
`;
