// Importa o hook useContext da biblioteca React
import { useContext } from "react";

// Importa o contexto de autenticação (AuthContext)
import { AuthContext } from "../context/AuthContext";

// Hook personalizado para utilizar o contexto de autenticação
const useAuthContext = () => {
    // Usa a função useContext para obter o valor do contexto de autenticação
    return useContext(AuthContext);
}

// Exporta o hook personalizado useAuthContext
export default useAuthContext;
