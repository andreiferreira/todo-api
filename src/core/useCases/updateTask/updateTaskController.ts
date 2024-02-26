import { Request, Response } from "express";
import { UpdateTasUseCase } from "./updateTask.useCase";
import { z } from "zod";
import { GetTaskUseCase } from "../getTask/getTask.useCase";

export class UpdateTaskController {
    constructor(private updateTaskUseCase: UpdateTasUseCase, private getTaskUseCase: GetTaskUseCase) { }

    async handle(req: Request, res: Response) {

        try {
            const getTaskSchema = z.object({
                id: z.string().uuid(),
            })

            const updateTaskSchema = z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                priority: z.number().optional(),
            })

            const { id } = getTaskSchema.parse(req.params);
            const { title, description, priority } = updateTaskSchema.parse(req.body)

            const task = await this.getTaskUseCase.execute(id);

            if (!task) {
                return res.status(494).json('Task not found')
            }

            if(task.userId !== req.user.id) {
                return res.status(403).json('Forbbiden')
            }
            const editedTask = await this.updateTaskUseCase.execute({ id, title, description, priority, updatedAt: new Date() })

            return res.status(200).json(editedTask)
            
        } catch (error) {

            return res.json(error)

        }
    }
}