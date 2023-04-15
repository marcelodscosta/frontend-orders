import { IUser } from "../../../interfaces/IUser";
import { api } from "../../../services/api";

export const loginRequest = async (user: IUser) => {
    try {

        const request = await api.post('login', user);
        return request.data;

    } catch (error) {
        console.log(error);
    }
};