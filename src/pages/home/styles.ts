/* Importa o módulo 'styled' e o hook 'css' do styled-components */
import styled, { css } from "styled-components";

/* Estilo do contêiner principal */
export const Container = styled.div`
    width: 1500px; /* Largura fixa do contêiner */
    height: 100%; /* Altura total da tela */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #F2F2F2; /* Cor de fundo */
`;

/* Estilo do cabeçalho superior */
export const TopHeader = styled.div`
    width: 100%; /* Largura total da tela */
    height: 200px; /* Altura fixa do cabeçalho */
    border-bottom: 1px solid rgba(0, 0, 0, 0.25); /* Borda inferior */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* Estilo do contêiner da foto de perfil */
    .profile-pic-container {
        /* Estilo da foto de perfil redonda */
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: #A1A1A1; /* Cor de fundo */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-left: 50px;

        /* Estilo da imagem da foto de perfil */
        img {
            width: 100%;
            height: 100%;
        }
    }

    /* Estilo do contêiner de informações do usuário */
    .userinfo-container {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
        padding-left: 20px;
        justify-content: center;

        /* Estilo do nome do usuário */
        #name {
            font-size: 1.5rem;
            font-weight: bold;
        }

        /* Estilo da biografia do usuário */
        #biography {
            font-size: 0.9rem;
            margin-top: 5px;
            max-width: 700px;
            color: #A1A1A1;
        }

        /* Estilo do contêiner de ícones de contato */
        .contact-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 15px;

            /* Estilo de cada ícone de contato */
            .contact-item {
                width: 40px;
                height: 40px;
                background: #A1A1A1;
                display: flex;
                justify-content: center;
                margin-right: 10px;
                align-items: center;
                border-radius: 50px;
                cursor: pointer;

                /* Efeito de hover e active */
                &:hover {
                    opacity: 0.8;
                }

                &:active {
                    opacity: 0.7;
                }
            }
        }
    }

    /* Estilos responsivos para TABLET e MOBILE */
    @media screen and (max-width: 1000px) {
        .profile-pic-container {
            width: 100px;
            height: 100px;
        }
        
        .userinfo-container {
            #name {
                font-size: 1rem;
                font-weight: bold;
            }

            #biography {
                font-size: 0.6rem;
            }

            .contact-container > .contact-item {
                width: 30px;
                height: 30px;
            }
        }
    }
`;

/* Estilo do contêiner principal de conteúdo */
export const Content = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;
    overflow: hidden;

     /* Estilos responsivos para HD, TABLET e MOBILE */
     @media screen and (max-width: 1270px) {
        
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }

    @media screen and (max-width: 700px) {
    }
`;

/* Estilo do contêiner da parte esquerda do conteúdo */
export const LeftContent = styled.div`
    display: flex;
    flex: 0.3;
    overflow-y: auto;
    padding-bottom: 20px;
    height: 100%;
    flex-direction: column;
    align-items: center;

    /* Estilos responsivos para TABLET e MOBILE */
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        flex: 0.5;
        overflow: hidden;
        margin-top: 10px;
    }

    @media screen and (max-width: 700px) {
    }
`;

/* Estilo do contêiner da parte direita do conteúdo */
export const RightContent = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`;

/* Estilo do contêiner das habilidades do usuário */
export const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    /* Estilos responsivos para TABLET e MOBILE */
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }

    @media screen and (max-width: 700px) {
    }
`;

/* Estilo do rótulo da seção "Sobre mim" */
export const AboutMeLabel = styled.p`
    margin: 10px;
    font-size: 0.8rem;
    font-weight: 500;
    color: gray;

    /* Estilos responsivos para TABLET e MOBILE */
    @media screen and (max-width: 1000px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 700px) {
    }
`;

/* Estilo do contêiner das abas de navegação */
export const TabContainer = styled.div`
    width: 100%;
    margin-right: 15px;
    height: 95%;
    display: flex;
    flex-direction: column;

    /* Estilo do contêiner das abas superiores */
    .top-tab-container {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

/* Tipagem para o componente TabItem */
type TabItemProps = {
    $active: boolean;
}

/* Estilo do componente da aba de navegação */
export const TabItem = styled.div<TabItemProps>`
    width: 100px;
    height: 59px; /*59px para ficar com 1px de borda */
    background: white;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid darkgray;
    font-size: 0.9rem;
    align-items: center;
    color: ${({$active}) => $active ? "black" : "gray"};

    /* Desativar seleção do usuário no texto da TabItem */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    /* Adiciona estilo específico quando a aba está ativa */
    ${({$active}) => $active && css({
        border: "1px solid gray",
        borderBottom: "none",
    })}
`;

/* Estilo do contêiner do conteúdo da aba */
export const TabContent = styled.div`
    background: white;
    display: flex;
    flex: 1;
    width: 100%;
    overflow-y: auto;
    align-items: center;
    flex-direction: column;
`;

/* Estilo do contêiner da grid de conteúdo da aba */
export const TabContentGrid = styled.div`
    /* Configuração da grid com 100px a 250px, auto fill e 4 itens por linha */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    width: 98%;
    padding: 10px;
`;
