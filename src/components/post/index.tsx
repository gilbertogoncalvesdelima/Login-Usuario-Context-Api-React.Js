// Importa o componente estilizado Container do arquivo "./styles"
import { Container } from "./styles";

// Define o tipo de propriedades esperadas pelo componente SocialMediaPost
type IProps = {
    username: string; // Nome de usuário
    picture: string; // URL da imagem do perfil
    content: string; // Conteúdo da postagem
}

// Componente funcional SocialMediaPost
const SocialMediaPost = ({ username, picture, content }: IProps) => {
    return (
        // Renderiza o componente Container
        <Container>
            {/* Seção de cabeçalho da postagem */}
            <div className="header">
                {/* Imagem do perfil do usuário */}
                <img src={picture} alt={`${username} post`} />
                {/* Nome de usuário */}
                <p className="name">{username}</p>
            </div>

            {/* Seção de conteúdo da postagem */}
            <div className="content">
                {/* Texto da postagem */}
                <p>
                    {content}
                </p>
            </div>
        </Container>
    );
}

// Exporta o componente SocialMediaPost como o export padrão deste módulo
export default SocialMediaPost;
