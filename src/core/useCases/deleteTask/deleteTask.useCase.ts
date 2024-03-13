import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { BadRequestError, NotFoundError } from "../../../helpers/api-erros";
import { GetTaskUseCase } from "../getTask/getTask.useCase";

export class DeleteTaskUseCase {
    constructor(private tasksRepository: ITasksRepository, private getTaskUseCase: GetTaskUseCase) {}

    async execute(taskId: string): Promise<void> {

        const task = await this.getTaskUseCase.execute(taskId);

        if (!task) {
            throw new NotFoundError('Task not found')
        }

        return await this.tasksRepository.deleteTask(taskId)
    }
}