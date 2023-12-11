// Importa a biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado Container
export const Container = styled.div`
    width: 98%; // Largura de 98% da largura disponível
    height: auto; // Altura automática, se ajustando ao conteúdo
    margin-top: 10px; // Margem superior de 10 pixels
    border-radius: 5px; // Borda arredondada
    background: #F2F2F2; // Cor de fundo
    position: relative; // Posição relativa para posicionar elementos filhos
    padding-bottom: 20px; // Preenchimento na parte inferior de 20 pixels

    /* Estilos para a classe header dentro do Container */
    .header {
        width: 100%; // Ocupa 100% da largura disponível
        height: auto; // Altura automática, se ajustando ao conteúdo
        display: flex; // Usa o modelo de layout flexível
        margin-top: 10px; // Margem superior de 10 pixels
        flex-direction: row; // Organiza os filhos em linha (horizontalmente)
        align-items: center; // Centraliza verticalmente o conteúdo

        /* Estilos para a tag img dentro de .header */
        img {
            width: 60px; // Largura da imagem
            height: 60px; // Altura da imagem
            margin-left: 10px; // Margem à esquerda de 10 pixels
            border-radius: 60px; // Borda arredondada para criar uma imagem circular
        }

        /* Estilos para a classe name dentro de .header */
        .name {
            font-weight: 500; // Peso da fonte
            margin-left: 10px; // Margem à esquerda de 10 pixels
        }
    }

    /* Estilos para a classe content dentro do Container */
    .content {
        width: 100%; // Ocupa 100% da largura disponível
        margin-top: 10px; // Margem superior de 10 pixels

        /* Estilos para o parágrafo dentro de .content */
        p {
            margin-left: 10px; // Margem à esquerda de 10 pixels
            margin-right: 10px; // Margem à direita de 10 pixels
        }
    }

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* TABLET */
    @media screen and (max-width: 1000px) {
        .header {
            /* Estilos ajustados para telas de até 1000px de largura */
            img {
                width: 40px;
                height: 40px;
                border-radius: 40px;
            }

            .name {
                font-size: 0.9rem;
            }
        }

        .content {
            /* Estilos ajustados para telas de até 1000px de largura */
            p {
                font-size: 0.9rem;
            }
        }
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Estilos ajustados para telas de até 700px de largura */
    }
`;
