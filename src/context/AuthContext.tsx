import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { isAxiosError } from "axios";
import { toast } from 'react-toastify';
import {redirect} from 'react-router-dom';

// interface padrão do contexto
interface IAuthContext {
  handleLogin(email: string, password: string): Promise<any>;
  userAuthenticated: IUser | null;
}

// cria um context com a interface padrão
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// cria um provider para o contexto
const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [userAuthenticated, setUserAuthenticated] = useState<IUser | null>(null)

  useEffect(() => {
    if(window){
      const currentPath = window.location.pathname;
      const token = localStorage.getItem("token");
      const userData = localStorage.getItem("userData");
      if(token && userData){
        // usuario logado
        setUserAuthenticated(JSON.parse(userData));
        // aqui teria uma api para validar o token e obter os dados do usuario
      }else{
        if(currentPath !== "/login"){
          setUserAuthenticated(null);
          // joga para a tela de login  
          window.location.replace("/login")
        }
      }
    }
  }, [])

  // função para realizar o login
  const handleLogin = async (email: string, password: string): Promise<any> => {
    // enviar um post para auth/login
    await api.post<IUser>("/auth/login", {
      username: email,
      password
    }).then(({data}) => {
      // usuario logado
      const { token } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(data));
      setUserAuthenticated(data);
      toast.success("Login realizado com sucesso, aguarde...")
      return window.location.replace("/")
    }).catch(ex => {
      // erro ao logar
      if(isAxiosError(ex)){
        // erro do axios
        const { message } = ex?.response?.data as any;
        if(message){
          // erro do backend
          return toast.error(message)
        }
      }
       // erro interno
      toast.error("Internal App Error, contact the support");
    })

    return {} as any;
  }

  return (
    <AuthContext.Provider value={{
      handleLogin,
      userAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// exporta o contexto e o provider
export default AuthProvider;