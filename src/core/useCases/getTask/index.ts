import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { GetTaskUseCase } from "./getTask.useCase";
import { GetTaskController } from "./getTaskController";


const tasksRepository = new TasksRepository();


const getTaskUseCase = new GetTaskUseCase(tasksRepository);
const getTaskController = new GetTaskController(getTaskUseCase);

export {getTaskController, getTaskUseCase}