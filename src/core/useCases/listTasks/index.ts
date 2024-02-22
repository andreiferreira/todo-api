import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { ListTasksController } from "./listTaksController";
import { ListTasksUseCase } from "./listTasks.useCase";

const tasksRepository = new TasksRepository();

const listTasksUseCase = new ListTasksUseCase(tasksRepository);
const listTasksController = new ListTasksController(listTasksUseCase);

export {listTasksUseCase, listTasksController}