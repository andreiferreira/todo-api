import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUser.useCase";
import { z } from "zod";

export class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {

        const createUserSchema = z.object({
            name: z.string(),
            username: z.string(),
            email: z.string().email(),
            phone: z.string(),
            password: z.string(),
            confirmPassword: z.string()
        })

        try {
            const {
                name,
                username,
                email,
                phone,
                password,
                confirmPassword
            } = createUserSchema.parse(req.body)

            if (password != confirmPassword) {
                throw Error('Senhas nao conferem.')
            }

            const useCaseResult = await this.createUserUseCase.execute({
                name,
                username,
                phone,
                email,
                password,
            })

            return res.json(useCaseResult).send()

        } catch (error) {
            return  res.json({
                body: error
            })
        }
    }
}