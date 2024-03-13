import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { ITask } from "../../../entities/task";
import { NotFoundError } from "../../../helpers/api-erros";

export class GetTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) {}

    async execute(taskId: string): Promise<ITask> {

        const task = this.tasksRepository.getTask(taskId)

        if(!task) {
            throw new NotFoundError('Task not found')
        }

        return task
    }
}