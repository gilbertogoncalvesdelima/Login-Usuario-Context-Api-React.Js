// Importa a biblioteca styled-components
import styled from "styled-components";

// Estilo para o componente Container
export const Container = styled.div`
    /* Define o layout flexível, com direção de linha, alinhamento central e espaçamento entre os itens */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%; /* Ocupa 100% da largura disponível */
    height: 100%; /* Ocupa 100% da altura disponível */
    background: white; /* Cor de fundo branca */
    background-image: url("/assets/images/auth-background.png"); /* Imagem de fundo */
    background-size: 95%; /* Tamanho da imagem de fundo */
    background-position-x: -150px; /* Posição da imagem de fundo horizontalmente */
    background-position-y: -50px; /* Posição da imagem de fundo verticalmente */
    position: relative; /* Posição relativa para posicionar elementos filhos */

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* HD */
    @media screen and (max-width: 1270px) {
        /* Estilos específicos para telas de até 1270px de largura */
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        /* Ajustes para telas de até 1000px de largura */
        justify-content: center; /* Alinha os itens no centro horizontalmente */
        align-items: center; /* Alinha os itens no centro verticalmente */
        background-size: cover; /* Cobrir toda a área com a imagem de fundo */
        background-position: 0%; /* Reinicia a posição da imagem de fundo */
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Ajustes para telas de até 700px de largura */
    }
`;

// Estilo para o componente ContentLeft
export const ContentLeft = styled.div`
    /* Define o layout flexível, altura de 100%, flex de 1.5 e posição relativa */
    display: flex;
    height: 100%;
    flex: 1.5;
    position: relative;

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* HD */
    @media screen and (max-width: 1270px) {
        /* Estilos específicos para telas de até 1270px de largura */
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        /* Esconde o componente em telas de até 1000px de largura */
        display: none;
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Estilos específicos para telas de até 700px de largura */
    }
`;

// Estilo para o componente ContentRight
export const ContentRight = styled.div`
    /* Define o layout flexível, altura de 100%, bordas arredondadas e alinhamento central */
    display: flex;
    height: 100%;
    background: white;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* Estilos para o formulário dentro de ContentRight */
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* Estilos para o título dentro de ContentRight */
    #title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* HD */
    @media screen and (min-width: 1270px) {
        flex: 1; /* Ocupa 1 unidade flexível */
    }

    /* HD */
    @media screen and (max-width: 1270px) {
        flex: 1; /* Ocupa 1 unidade flexível */
    }

    /* TABLET */
    @media screen and (max-width: 1000px) {
        /* Ajustes para telas de até 1000px de largura */
        width: 80% !important; /* Largura de 80% com importância */
        height: 90%; /* Altura de 90% */
        flex: none; /* Não flexível */
        border-radius: 50px; /* Bordas arredondadas */
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Ajustes para telas de até 700px de largura */
        width: 100% !important; /* Largura de 100% com importância */
        border-radius: 0px; /* Bordas sem arredondamento */
        height: 100% !important; /* Altura de 100% com importância */
    }
`;
