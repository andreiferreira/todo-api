import { ICreateTask } from "../../../domain/interfaces/models/ICreateTask";
import { ITasksRepository } from "../../../domain/interfaces/repositories/ITasksRepository";
import { Task } from "../../../entities/task";

export class CreateTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) {}
    async execute(task: ICreateTask): Promise<any> {

        const newTask = new Task({...task})

        return await this.tasksRepository.create(newTask);
    }
}