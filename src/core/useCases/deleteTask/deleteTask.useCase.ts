import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";

export class DeleteTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(taskId: string): Promise<void> {

        return await this.tasksRepository.deleteTask(taskId)
    }
}