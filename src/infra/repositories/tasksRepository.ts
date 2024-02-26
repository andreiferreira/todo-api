import prismaClient from '../../../prisma/prismaClient'
import { IUpdateTask } from '../../domain/interfaces/models/IUpdateTask';

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

    async getTask(taskId: string): Promise<ITask> {

        return await prismaClient.task.findFirst({
            where: {
                id: taskId
            }
        })
    }

    async updateTask(task: IUpdateTask): Promise<ITask> {

        const editedTask = await prismaClient.task.update({
            data: {
                ...task
            },
            where: {
                id: task.id
            }
        })

        return editedTask
    }

    async deleteTask(taskId: string): Promise<void> {

        await prismaClient.task.delete({
            where: {
                id: taskId
            }
        })
    }
}