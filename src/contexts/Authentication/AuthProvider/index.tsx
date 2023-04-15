import { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { IAuthProviderProps } from "../../../interfaces/IAuthProviderProps";
import { loginRequest } from "../utils";
import { IUser } from "../../../interfaces/IUser";


export const AuthProvider = ({ children }: IAuthProviderProps) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const userData = (user: IUser): void => {
        setEmail(user.email);
        setPassword(user.password);
    };



    useEffect(() => {
    }, []);

    { password && console.log({ email, password }) };
    return (
        <AuthContext.Provider value={
            {
                email,
                password,
                loginRequest,
                userData
            }}>
            {children}
        </AuthContext.Provider>)
};