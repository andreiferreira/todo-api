import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { GetTaskUseCase } from "../getTask/getTask.useCase";
import { DeleteTaskUseCase } from "./deleteTask.useCase";
import { DeleteTaskController } from "./deleteTaskController";



const tasksRepository = new TasksRepository()
const deleteTaskUseCase =  new DeleteTaskUseCase(tasksRepository)
const getTaskUseCase = new GetTaskUseCase(tasksRepository)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase, getTaskUseCase)

export {deleteTaskController, deleteTaskUseCase}