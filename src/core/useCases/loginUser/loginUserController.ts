import { z } from "zod";
import { LoginUserUseCase } from "./loginUser.useCase";
import { Request, Response } from "express";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {

        const loginUserSchema = z.object({
            email: z.string(),
            password: z.string()
        })

        try {
            const {email, password} = loginUserSchema.parse(req.body);
        
            const result = await this.loginUserUseCase.execute(email, password)

            return res.json(result).send()

        } catch(error) {
            return res.json({
                body: error
            })
        }
    }
}