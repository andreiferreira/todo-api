import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../../entities/task";

export class GetTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(taskId: string): Promise<ITask> {

        return await this.tasksRepository.getTask(taskId)
    }
}