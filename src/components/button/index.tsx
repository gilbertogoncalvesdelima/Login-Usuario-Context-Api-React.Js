// Importa a interface CSSProperties do React para fornecer tipagem aos estilos CSS do componente
import { CSSProperties } from "react";
// Importa o componente de estilo Container do arquivo "./styles"
import { Container } from "./styles"

// Interface que define as propriedades esperadas pelo componente Button
interface IButtonProps {
    text: string; // Texto exibido no botão
    onClick(): void; // Função de callback para lidar com o evento de clique
    type?: "button" | "submit"; // Tipo do botão (pode ser "button" ou "submit")
    style?: CSSProperties; // Estilos CSS opcionais para o componente
    isLoading?: boolean; // Indica se o botão está no estado de carregamento
}

// Componente funcional Button
const Button = ({ text, onClick, type, isLoading, style }: IButtonProps) => {
    return (
        // Renderiza o componente Container, aplicando estilos fornecidos
        <Container style={{ ...style }}>
            {/* Condição para renderizar o spinner de carregamento ou o input do botão */}
            {isLoading ? (
                <div className="loading"></div> // Renderiza o spinner de carregamento
            ) : (
                <input
                    type={type || "button"} // Usa o tipo fornecido ou "button" como padrão
                    onClick={onClick} // Atribui a função de callback ao evento de clique
                    value={text} // Exibe o texto fornecido no botão
                />
            )}
        </Container>
    );
}

// Exporta o componente Button como o export padrão deste módulo
export default Button;
