import { httpClient } from "../httpClient";

export interface signUpParams {
    username: string;
    password: string;
    email: string;
}

interface signUpResponse {
    acess_token: string;
}

export async function signUp(params: signUpParams) {
    const { data } = await httpClient.post<signUpResponse>('/auth/register', params);
    return data;
}