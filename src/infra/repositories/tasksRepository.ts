import prismaClient from '../../../prisma/prismaClient'

import { ITasksRepository } from "../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../entities/task";

export class TasksRepository implements ITasksRepository {

    async create(task): Promise<any> {

        await prismaClient.task.create({
            data: {
                ...task,
            }
        })
    }

}