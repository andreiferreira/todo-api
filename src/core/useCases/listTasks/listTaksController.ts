import { Request, Response } from "express";
import { ListTasksUseCase } from "./listTasks.useCase";

export class ListTasksController {
    constructor(private listTasksUseCase: ListTasksUseCase) {}

    async handle(req: Request, res: Response): Promise<any> {

        try {
            const userId = req.user.id;

            const tasks = await this.listTasksUseCase.execute(userId);

            return res.status(201).json(tasks)

        } catch(error) {
            return res.status(500).json(`Error: ${error}`)
        }
    }
}