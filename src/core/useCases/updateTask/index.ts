import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { GetTaskUseCase } from "../getTask/getTask.useCase";
import { UpdateTasUseCase } from "./updateTask.useCase";
import { UpdateTaskController } from "./updateTaskController";

const tasksRepository = new TasksRepository();

const getTaskUseCase = new GetTaskUseCase(tasksRepository)
const updateTasUseCase = new UpdateTasUseCase(tasksRepository, getTaskUseCase)

const updateTaskController = new UpdateTaskController(updateTasUseCase)

export {updateTaskController, updateTasUseCase}
