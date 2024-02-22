import prismaClient from '../../../prisma/prismaClient'

import { ITasksRepository } from "../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../entities/task";

export class TasksRepository implements ITasksRepository {

    async create(task: any): Promise<ITask> {

        const createdTask = await prismaClient.task.create({
            data: {
                ...task,
            }
        })

        return createdTask
    }

    async listTasksByUserId(userId: string): Promise<any> {

        const tasks = await prismaClient.task.findMany({
            where: {
                userId: userId
            }
        })

        return tasks
    }

}