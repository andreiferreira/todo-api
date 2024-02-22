import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../../entities/task";

export class ListTasksUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(userId: string): Promise<ITask[]> {

        return await this.tasksRepository.listTasksByUserId(userId)
    }
}