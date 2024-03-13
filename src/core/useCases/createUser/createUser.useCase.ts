import { User } from "../../../entities/user";
import { BadRequestError } from "../../../helpers/api-erros";
import { ICreateUser } from "./interfaces/ICreateUser";
import { IUsersRepository } from "./interfaces/repositories/IUsersRepository";
import bcrypt from 'bcrypt'
export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(user: ICreateUser) {

        const userExist = await this.usersRepository.findUser(
            user.phone, user.email, user.username
        )

        if(userExist) {
            throw new BadRequestError('User already exist')
        }

        user.password = await bcrypt.hash(user.password, 4);

        const newUser = new User({
            ...user
        })

        return await this.usersRepository.create(newUser);
    }
}