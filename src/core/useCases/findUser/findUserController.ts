import { Request, Response } from "express";
import { FindUserUseCase } from "./findUser.useCase";
import { z } from "zod";

export class FindUserController {
    constructor(private findUserUseCase: FindUserUseCase) { }

    async handle(req: Request, res: Response) {

        const findUserSchema = z.object({
            id: z.string()
        })

        try {
            const { id } = findUserSchema.parse(req.params);

            const user = await this.findUserUseCase.execute(id);

            return res.json({
                body: user
            })

        } catch (error) {

            console.log('error: ', error)
            return res
                .status(error.statusCode)
                .json({
                    body: error.message
                })
        }
    }
}