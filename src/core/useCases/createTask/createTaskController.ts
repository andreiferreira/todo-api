import { Request, Response } from "express";
import { z } from "zod";
import { CreateTaskUseCase } from "./createTask.useCase";

export class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(req: Request, res: Response): Promise<any> {

        const createTaskSchema = z.object({
            title: z.string(),
            description: z.string().optional(),
            priority: z.number().optional(),
            userId: z.string(),
            parentTaskId: z.string().optional(),
            projectId: z.string().optional()
        })

        try {
            const { title, description, priority, userId, parentTaskId, projectId } = createTaskSchema.parse(req.body);

            const task = await this.createTaskUseCase.execute({
                title, description, priority, userId, parentTaskId, projectId
            });

            return res.status(201).json(task)
        } catch (error) {
            return res.status(500).json('Error')
        }
    }
}