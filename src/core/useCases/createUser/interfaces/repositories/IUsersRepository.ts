import { IUser } from "../../../../../entities/user";
import { ICreateUser } from "../ICreateUser";

export interface IUsersRepository {
    create(user: ICreateUser): Promise<any>;
    findByEmail(email: string): Promise<IUser>;
    findById(id: string): Promise<IUser>;
}