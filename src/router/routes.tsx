// Importa a função 'createBrowserRouter' do pacote 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';

// Importa os componentes das páginas 'AuthScreen' e 'HomeScreen'
import AuthScreen from '../pages/auth';
import HomeScreen from '../pages/home';

// Cria as rotas para o aplicativo usando 'createBrowserRouter'
const Routes = createBrowserRouter([
    {
        path: "/", // Define o caminho para a rota principal
        element: <HomeScreen /> // Define o componente a ser renderizado quando a rota for acessada
    },
    {
        path: "/login", // Define o caminho para a rota de login
        element: <AuthScreen /> // Define o componente a ser renderizado quando a rota for acessada
    }
]);

// Exporta o componente 'Routes' para ser utilizado no aplicativo
export default Routes;
