import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { Container, ContentRight, ContentLeft } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useEffect } from "react";
import Button from "../../components/button";
import useAuthContext from "../../hooks/useAuthContext";

// Define a interface para os dados do formulário
interface IAuthSchema {
    email: string;
    password: string;

}

// Define o esquema Yup para validação do formulário
const AuthSchema = Yup.object().shape({
    email: Yup.string().required("Nome de usuário é obrigatório"),
    password: Yup.string().required("Senha obrigatória")
})
// Componente funcional para a tela de autenticação
const AuthScreen = () => {
// Usa o hook personalizado useAuthContext para obter funções e estado de autenticação
    const { handleLogin } = useAuthContext();

    // Usa o hook useForm do react-hook-form para gerenciar o estado do formulário
    const {handleSubmit, formState: {isSubmitting, errors}, getValues, setValue, register} = useForm({
        mode: "onTouched", // Define o modo de validação
        resolver: yupResolver(AuthSchema)  // Usa o Yup como resolver de validação
    })

    // define automaticamente o usuário e senha para teste
    useEffect(() => {
        setValue("email", "kminchelle")
        setValue("password", "0lelplR")
    }, [])
    // ao enviar o formulário, chama a função onSubmit
    const onSubmit = async (formData: IAuthSchema) => {
        await handleLogin(formData.email, formData.password);
        return;
    }

    return (
        <Container>
            <ContentLeft />
            <ContentRight>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p id="title">Entre para continuar</p>
                    <Input
                        errors={errors.email ? errors.email.message : null}
                        containerStyle={{
                            marginBottom: 15
                        }}
                        placeholder="Usuário"
                        {...register("email")}
                    />
                    <Input
                        errors={errors.password ? errors.password.message : null}
                        placeholder="Senha"
                        type="password"
                        {...register("password")}
                    />
                    <Button
                        style={{
                            marginTop: 15
                        }}
                        text="Entrar"
                        onClick={() => {}}
                        type="submit"
                        isLoading={isSubmitting}
                    />
                </form>
            </ContentRight>        
        </Container>
    )
}
// Exporta o componente AuthScreen
export default AuthScreen;