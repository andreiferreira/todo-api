import { IUpdateTask } from "../../../domain/interfaces/models/IUpdateTask";
import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../../entities/task";

export class UpdateTasUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(task: IUpdateTask): Promise<ITask> {

        return await this.tasksRepository.updateTask(task)
    }
}