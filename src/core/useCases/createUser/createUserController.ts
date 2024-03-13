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
        }).refine(data => {
            return data.password === data.confirmPassword;
        }, {
            message: "Password dont match"
        });

        try {
            const {
                name,
                username,
                email,
                phone,
                password,
                confirmPassword
            } = createUserSchema.parse(req.body)

            const createdUser = await this.createUserUseCase.execute({
                name,
                username,
                phone,
                email,
                password,
            })

            return res.
            status(201).
            json({
                data: {
                    user: createdUser
                }
            })

        } catch (error) {
            return  res.status(error.statusCode || 400).json({
                error: true,
                message: error.message
            })
        }
    }
}