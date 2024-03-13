import { TasksRepository } from "../../../infra/repositories/tasksRepository";
import { GetTaskUseCase } from "../getTask/getTask.useCase";
import { DeleteTaskUseCase } from "./deleteTask.useCase";
import { DeleteTaskController } from "./deleteTaskController";



const tasksRepository = new TasksRepository()
const getTaskUseCase = new GetTaskUseCase(tasksRepository, )
const deleteTaskUseCase =  new DeleteTaskUseCase(tasksRepository, getTaskUseCase)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)

export {deleteTaskController, deleteTaskUseCase}