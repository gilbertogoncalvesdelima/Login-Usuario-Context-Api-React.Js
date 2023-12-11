import axios from 'axios';

const api = axios.create({
    baseURL: "https://dummyjson.com/"
})

// intercepta a requisição e adiciona o token no header
api.interceptors.request.use(async config => {

    // obtem um token do localStorage
    const token = localStorage.getItem('token');

    // caso exista o token, adiciona o header Authorization
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    // retorna a configuração
    return config;
})

export default api;