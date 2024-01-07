import { BadRequestError, NotFoundError } from "../../../helpers/api-erros";
import { IUsersRepository } from "../createUser/interfaces/repositories/IUsersRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }


    async execute(email: string, password: string): Promise<any> {

        const userExist = await this.usersRepository.findByEmail(email);

        if(!userExist) {
            throw new NotFoundError('Email or password incorrects')
        }

        const verifyPass = await bcrypt.compare(password, userExist.password);

        if (!verifyPass) {
            throw new BadRequestError('Email or password incorrects')
        }

        const token = jwt.sign({
            id: userExist.id
        },
            process.env.JWT_PASS,
            { expiresIn: '8h' }
        )

        return token;
    }
}