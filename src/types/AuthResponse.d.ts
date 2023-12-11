// Interface que define a estrutura de dados para representar um usuário
interface IUser {
    "id": number; // Identificador único do usuário
    "username": string; // Nome de usuário do usuário
    "email": string; // Endereço de e-mail do usuário
    "firstName": string; // Primeiro nome do usuário
    "lastName": string; // Sobrenome do usuário
    "gender": string; // Gênero do usuário
    "image": string; // Caminho ou URL para a imagem do usuário
    "token": string; // Token associado ao usuário (geralmente utilizado para autenticação)
}
