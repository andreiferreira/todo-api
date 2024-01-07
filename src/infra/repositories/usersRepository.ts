import { User } from '@prisma/client'
import prismaClient from '../../../prisma/prismaClient'
import { IUsersRepository } from '../../core/useCases/createUser/interfaces/repositories/IUsersRepository'
export class UsersRepository implements IUsersRepository {

    async create(user: User): Promise<any> {

        return await prismaClient.user.create({
            data: {
                ...user
            }
        })
    }

    async findByEmail(email: string): Promise<User> {
        return await prismaClient.user.findFirst(
            {
                where: {
                    email: email
                }
            }
        )
    }

    async findById(id: string): Promise<User> {
        return await prismaClient.user.findUnique(
            {
                where: {
                    id: id
                }
            }
        )
    }
}