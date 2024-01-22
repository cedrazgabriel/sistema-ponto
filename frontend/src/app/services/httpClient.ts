import axios from 'axios'
import { localStorageKeys } from '../config/localStorageKeys'

export const httpClient = axios.create({
    baseURL: 'http://localhost:3000'
})

httpClient.interceptors.request.use(config => {
    const acessTokenJWT = localStorage.getItem(localStorageKeys.ACESS_TOKEN_JWT)

    if(acessTokenJWT) {
        config.headers.Authorization = `Bearer ${acessTokenJWT}`
    }

    return config
})