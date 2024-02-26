import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./deleteTask.useCase";
import { z } from "zod";
import { GetTaskUseCase } from "../getTask/getTask.useCase";

export class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase, private getTaskUseCase: GetTaskUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {

        const deleteTaskSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = deleteTaskSchema.parse(req.params);

        try {

            const task = await this.getTaskUseCase.execute(id);

            if (!task) {
                return res.status(494).json('Task not found')
            }
    
            if(task.userId !== req.user.id) {
                return res.status(403).json('Forbbiden')
            }
    
            await this.deleteTaskUseCase.execute(id)
    
            return res.status(200).send('Task deleted.')

        } catch(error) {

            return res.json(error)
        }
    }
}