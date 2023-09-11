import axios from "axios"
import { getToken } from "./auth"

export const BASE_URL ="http://localhost:8181/api/"

export const privateAxios = axios.create({
    baseURL:BASE_URL
})

privateAxios.interceptors.request.use(config=>{
    const token = getToken()
    console.log(token)
    if(token){
        // Initialize config.headers if it's undefined
        //config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`
    
        return config
    }
},error=>Promise.reject(error))