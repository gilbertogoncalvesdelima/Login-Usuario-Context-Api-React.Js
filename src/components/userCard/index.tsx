// Importa o componente estilizado Container do arquivo "./styles"
import { Container } from "./styles";

// Define o tipo de propriedades esperadas pelo componente UserCard
type UserCardProps = {
    image: string; // URL da imagem do usuário
    name: string; // Nome do usuário
    bio: string; // Biografia do usuário
}

// Componente funcional UserCard
const UserCard = ({ image, name, bio }: UserCardProps) => {
    return (
        // Renderiza o componente Container
        <Container>
            {/* Imagem do perfil do usuário */}
            <img src={image} alt={`${name} profile`} />
            {/* Nome do usuário */}
            <p className="username">{name}</p>
            {/* Biografia do usuário */}
            <p className="bio">{bio}</p>
            {/* Botão para visualizar mais informações (por exemplo, "Ver") */}
            <div className="button">Ver</div>
        </Container>
    );
}

// Exporta o componente UserCard como o export padrão deste módulo
export default UserCard;
