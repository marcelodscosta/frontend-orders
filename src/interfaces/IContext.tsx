import { IUser } from "./IUser";

export interface IContext extends IUser {
    userData(user: IUser): void;
    loginRequest(user: IUser): Promise<string>;
    // logout(): void;
};