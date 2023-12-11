// Importa a biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado Container
export const Container = styled.div`
    width: 90%; // Largura de 90% da largura disponível
    min-height: 100px; // Altura mínima de 100 pixels
    background: white; // Cor de fundo branca
    margin-top: 5px; // Margem superior de 5 pixels
    overflow: hidden; // Esconde o overflow do conteúdo
    padding: 3px; // Preenchimento de 3 pixels
    margin-bottom: 5px; // Margem inferior de 5 pixels
    
    /* Estilos para a classe top-container dentro de Container */
    .top-container {
        height: 50px; // Altura de 50 pixels
        display: flex; // Usa o modelo de layout flexível
        flex-direction: row; // Organiza os filhos em linha (horizontalmente)
        border: 1px solid #e2e2e2; // Borda sólida com cor cinza
        align-items: center; // Centraliza verticalmente os filhos
        padding-left: 10px; // Preenchimento à esquerda de 10 pixels

        /* Estilos para a tag p dentro de .top-container */
        p {
            margin-left: 10px; // Margem à esquerda de 10 pixels
            font-weight: 500; // Peso da fonte
            color: #999999; // Cor do texto cinza
            font-size: 0.9rem; // Tamanho da fonte de 0.9rem
        }
    }

    /* Estilos para a classe content dentro de Container */
    .content {
        height: calc(100% - 55px); // Altura calculada (100% - 55px)
        display: flex; // Usa o modelo de layout flexível
        flex: 1; // Ocupa todo o espaço disponível
        border: 1px solid #e2e2e2; // Borda sólida com cor cinza
        flex-direction: column; // Organiza os filhos em coluna
        align-items: center; // Centraliza horizontalmente os filhos
        justify-content: center; // Centraliza verticalmente os filhos
    }

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* TABLET */
    @media screen and (max-width: 1000px) {
        height: 100%; // Altura de 100% da altura disponível
        /* Ajustes de estilo para telas de até 1000px de largura */
        .top-container {
            height: 30px; // Altura de 30 pixels

            /* Ajustes de estilo para telas de até 1000px de largura */
            p {
                margin-left: 10px; // Margem à esquerda de 10 pixels
                font-weight: 500; // Peso da fonte
                color: #999999; // Cor do texto cinza
                font-size: 0.65rem; // Tamanho da fonte de 0.65rem
            }
        }
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Estilos ajustados para telas de até 700px de largura (pode ser adicionado conforme necessário) */
    }
`;
