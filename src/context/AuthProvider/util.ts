import { api } from "../../services/api";
import { IUser } from "./types";


export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));
};

export function getUserLocalStorage() {
    const user = localStorage.getItem('u');
    if (user) return JSON.parse(user);
    return null;
}


export async function LoginRequest(email: string, password: string) {
    try {

        const request = await api.post('login', { email, password });

        return request.data;

    } catch (error) {
        return null;
    };
};