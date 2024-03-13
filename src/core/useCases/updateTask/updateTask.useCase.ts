import { IUpdateTask } from "../../../domain/interfaces/models/IUpdateTask";
import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../../entities/task";
import { NotFoundError } from "../../../helpers/api-erros";
import { GetTaskUseCase } from "../getTask/getTask.useCase";

export class UpdateTasUseCase {
    constructor(private tasksRepository: ITasksRepository, private getTaskUseCase: GetTaskUseCase) {}

    async execute(task: IUpdateTask): Promise<ITask> {

        const taskExist = await this.getTaskUseCase.execute(task.id);

        if (!taskExist) {
            throw new NotFoundError('Task not found.')
        }

        return await this.tasksRepository.updateTask(task)
    }
}