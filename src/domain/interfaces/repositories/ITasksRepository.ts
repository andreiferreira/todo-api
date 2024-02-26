import { ITask } from "../../../entities/task";
import { IUpdateTask } from "../models/IUpdateTask";

export interface ITasksRepository {
    create(task: ITask): Promise<any>
    listTasksByUserId(userId: string): Promise<ITask[]>
    getTask(taskId: string): Promise<ITask>
    updateTask(task: IUpdateTask): Promise<ITask>
    deleteTask(taskId: string): Promise<void>
}