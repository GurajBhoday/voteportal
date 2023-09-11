import axios from "axios"
import { BASE_URL } from "./helper"

export const registerUser=(user)=>{
    return axios.post(BASE_URL+"user/signup",user).then(response=>response.data)
}

export const loginUser=(user)=>{
    return axios.post(BASE_URL+"user/login",user).then(response=>response.data)
}