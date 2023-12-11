// Importa a biblioteca styled-components
import styled from "styled-components";

// Define o componente estilizado Container com propriedade color
const Container = styled.div<{ color: string }>`
    padding: 5px; // Preenchimento interno de 5 pixels
    padding-right: 10px; // Preenchimento interno à direita de 10 pixels
    padding-left: 10px; // Preenchimento interno à esquerda de 10 pixels
    border-radius: 5px; // Borda arredondada
    background: ${({ color }) => color}; // Cor de fundo dinâmica baseada na propriedade color
    font-weight: 500; // Peso da fonte
    font-size: 0.7rem; // Tamanho da fonte de 0.7rem
    margin: 2px; // Margem de 2 pixels

    /* Estilos responsivos para diferentes tamanhos de tela */

    /* TABLET */
    @media screen and (max-width: 1000px) {
        width: 100%; // Largura de 100% para telas até 1000px de largura
        font-size: 0.6rem; // Reduz o tamanho da fonte para telas até 1000px de largura
    }

    /* MOBILE */
    @media screen and (max-width: 700px) {
        /* Estilos para telas até 700px de largura (pode ser adicionado conforme necessário) */
    }
`;

// Define o componente funcional SkillItem
const SkillItem = ({ title, color }: { title: string; color: string; }) => {
    return (
        // Renderiza o componente Container, passando a propriedade color
        <Container color={color}>
            {title} {/* Renderiza o título passado como propriedade */}
        </Container>
    ); 
}

// Exporta o componente SkillItem como o export padrão deste módulo
export default SkillItem;
