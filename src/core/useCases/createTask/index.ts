import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { CreateTaskUseCase } from "./createTask.useCase";
import { CreateTaskController } from "./createTaskController";

const tasksRepository = new TasksRepository();

const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export {createTaskUseCase, createTaskController}