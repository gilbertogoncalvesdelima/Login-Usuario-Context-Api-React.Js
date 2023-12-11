// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Importa várias dependências do React e TypeScript, incluindo CSSProperties, LegacyRef e forwardRef
import { CSSProperties, LegacyRef, forwardRef } from "react";
// Importa os componentes Container e InputContainer do arquivo "./styles"
import { Container, InputContainer } from "./styles"

// Define a interface de propriedades para o componente Input, estendendo as propriedades padrão do input HTML
interface IIpuntProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerStyle?: CSSProperties; // Estilos para o contêiner do input
    errors?: string | null; // Mensagens de erro associadas ao input
}

// Componente funcional Input usando forwardRef para permitir o uso de ref
const Input = forwardRef(({ containerStyle, errors, ...rest }: IIpuntProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
        // Renderiza o componente Container, aplicando estilos fornecidos
        <Container style={containerStyle}>
            <InputContainer>
                {/* Renderiza o elemento input, repassando todas as propriedades (rest) e a ref */}
                <input {...rest} ref={ref as any} />
            </InputContainer>
            {/* Renderiza a mensagem de erro se existir */}
            {errors &&
                <p className="error">{errors}</p>
            }
        </Container>
    );
});

// Exporta o componente Input como o export padrão deste módulo
export default Input;
