import { Request, Response } from "express";
import { z } from "zod";
import { GetTaskUseCase } from "./getTask.useCase";

export class GetTaskController {

    constructor(private getTaskUseCase: GetTaskUseCase) {}

    async handle(req: Request, res: Response) {

        try {
            const getTaskSchema = z.object({
                id: z.string().uuid()
            })

            const {id} = getTaskSchema.parse(req.query);

            const task = await this.getTaskUseCase.execute(id)

            return res.json(task)
            
        } catch (error) {

            return res.status(error.statusCode || 400).json(error)
            
        }
    }
}