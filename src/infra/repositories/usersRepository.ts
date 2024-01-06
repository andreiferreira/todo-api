import { User } from '@prisma/client'
import prismaClient from '../../../prisma/prismaClient'
export class UsersRepository {

    async create(user: User): Promise<any> {

       return await prismaClient.user.create({
            data: {
                ...user
            }
        })
    }
 }