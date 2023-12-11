// Importa o ícone FaTv da biblioteca react-icons/fa
import { FaTv } from "react-icons/fa";
// Importa o componente estilizado Container do arquivo "./styles"
import { Container } from "./styles";

// Define o tipo de propriedades esperadas pelo componente PopularityItem
type IPopularityProps = {
    title: string; // Título do item de popularidade
    icon: any; // Ícone associado ao item de popularidade (pode ser qualquer coisa)
    value: any; // Valor associado ao item de popularidade (pode ser qualquer coisa)
}

// Componente funcional PopularityItem
const PopularityItem = ({ title, icon, value }: IPopularityProps) => {
    return (
        // Renderiza o componente Container
        <Container>
            {/* Contêiner para o conteúdo do item de popularidade */}
            <div className="content">
                {icon} {/* Renderiza o ícone associado */}
                <p className="title">{title}</p> {/* Renderiza o título */}
                <p className="value">{value}</p> {/* Renderiza o valor */}
            </div>
        </Container>
    );
}

// Exporta o componente PopularityItem como o export padrão deste módulo
export default PopularityItem;
