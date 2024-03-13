import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./deleteTask.useCase";
import { z } from "zod";
import { GetTaskUseCase } from "../getTask/getTask.useCase";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {

        const deleteTaskSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = deleteTaskSchema.parse(req.params);

        try {
            await this.deleteTaskUseCase.execute(id)
    
            return res.status(200).send('Task deleted.')

        } catch(error) {

            return res.status(error.statusCode || 400).json(error)
        }
    }
}