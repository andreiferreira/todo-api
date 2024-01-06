import { ICreateUser } from "../ICreateUser";

export interface IUsersRepository {
    create(user: ICreateUser): Promise<any>;
}