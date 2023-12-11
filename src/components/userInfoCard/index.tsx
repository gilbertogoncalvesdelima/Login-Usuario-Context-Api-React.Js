// Importa o ícone FaStar da biblioteca react-icons/fa
import { FaStar } from "react-icons/fa";

// Importa o componente estilizado Container do arquivo "./styles"
import { Container } from "./styles";

// Importa React e CSSProperties de "react"
import React, { CSSProperties } from "react";

// Define o tipo de propriedades esperadas pelo componente UserInfoCard
type IProps = {
    children?: React.ReactNode; // Conteúdo filho opcional
    title: string; // Título do card
    icon?: any; // Ícone opcional
    style?: CSSProperties; // Estilos CSS opcionais
}

// Componente funcional UserInfoCard
const UserInfoCard = ({ children, title, icon, style }: IProps) => {
    return (
        // Renderiza o componente Container, passando estilos opcionais
        <Container style={style}>
            {/* Container superior com título e ícone */}
            <div className="top-container">
                {/* Ícone passado como propriedade ou o ícone FaStar por padrão */}
                {icon}
                {/* <FaStar color="#FFD700" /> */}
                {/* Título do card */}
                <p className="title">
                    {title}
                </p>
            </div>
            {/* Container de conteúdo, renderiza os filhos passados como propriedade */}
            <div className="content">
                {children}
            </div>
        </Container>
    );
}

// Exporta o componente UserInfoCard como o export padrão deste módulo
export default UserInfoCard;
