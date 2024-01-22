import { httpClient } from "../httpClient";

export interface signInParams {
    username: string;
    senha: string;
}

interface signInResponse {
    acess_token: string;
}

export async function signIn(params : signInParams) {
    const { data } = await httpClient.post<signInResponse>('/auth/login', params);
    console.log(data)
    return data;

    
}