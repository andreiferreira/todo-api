import { ITask } from "../../../entities/task";

export interface ITasksRepository {
    create(task: ITask): Promise<any>
}