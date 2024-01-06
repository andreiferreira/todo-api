import { User } from "../../../entities/user";
import { ICreateUser } from "./interfaces/ICreateUser";
import { IUsersRepository } from "./interfaces/repositories/IUsersRepository";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(user: ICreateUser) {

        const newUser = new User({
            ...user
        })

        return await this.usersRepository.create(newUser);
    }
}