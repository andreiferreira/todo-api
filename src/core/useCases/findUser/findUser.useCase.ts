import { IUser } from "../../../entities/user";
import { NotFoundError } from "../../../helpers/api-erros";
import { IUsersRepository } from "../createUser/interfaces/repositories/IUsersRepository";

export class FindUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(id: string): Promise<IUser> {

        const user = await this.usersRepository.findById(id);

        if(!user) {
            throw new NotFoundError('User not found')
        }

        return user;


    }
}