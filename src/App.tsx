import { RouterProvider } from "react-router-dom";
import Routes from "./router/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import AuthProvider from "./context/AuthContext";

// Componente principal da aplicação
const App = () => {
    return (
        // Provedor de autenticação envolvendo a aplicação
        <AuthProvider>
            {/* Provedor de rotas envolvendo a aplicação */}
            <RouterProvider router={Routes} />
            {/* Componente para exibir notificações de toasts */}
            <ToastContainer />
        </AuthProvider>
    )
}

// Exporta o componente principal
export default App;
