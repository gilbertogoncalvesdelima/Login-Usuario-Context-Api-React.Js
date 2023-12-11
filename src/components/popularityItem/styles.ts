// Importa a biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado Container
export const Container = styled.div`
    width: 100%; // Ocupa 100% da largura disponível
    height: 40px; // Altura fixa de 40 pixels
    margin-top: 5px; // Margem superior de 5 pixels
    margin-bottom: 5px; // Margem inferior de 5 pixels
    display: flex; // Usa o modelo de layout flexível
    justify-content: center; // Centraliza horizontalmente o conteúdo
    align-items: center; // Centraliza verticalmente o conteúdo
    flex-direction: row; // Organiza os filhos em linha (horizontalmente)

    /* Estilos para a classe content dentro do Container */
    .content {
        margin-left: 10px; // Margem à esquerda de 10 pixels
        margin-right: 10px; // Margem à direita de 10 pixels
        height: 100%; // Ocupa 100% da altura disponível
        border: 1px solid rgba(0, 0, 0, 0.15); // Borda sólida com cor rgba
        border-left-width: 0px; // Largura da borda à esquerda
        border-top-width: 0px; // Largura da borda superior
        border-right-width: 0px; // Largura da borda à direita
        display: flex; // Usa o modelo de layout flexível
        flex-direction: row; // Organiza os filhos em linha (horizontalmente)
        align-items: center; // Centraliza verticalmente o conteúdo
        justify-content: space-between; // Distribui o espaço entre os filhos

        /* Estilos para as classes title e value dentro de content */
        .title, .value {
            font-size: 0.8rem; // Tamanho da fonte para title e value
            font-weight: 500; // Peso da fonte
            color: darkgray; // Cor do texto
        }

        /* Estilos responsivos para diferentes tamanhos de tela */

        /* TABLET */
        @media screen and (max-width: 1000px) {
            .title, .value {
                font-size: 0.6rem; // Reduz o tamanho da fonte para telas até 1000px de largura
            }
        }

        /* MOBILE */
        @media screen and (max-width: 700px) {
            .title, .value {
                font-size: 0.5rem; // Reduz ainda mais o tamanho da fonte para telas até 700px de largura
            }
        }
    }
`;
