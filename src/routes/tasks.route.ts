import { Router } from "express";
import { createTaskController } from "../core/useCases/createTask";
import { authMiddleware } from "../middleware/auth";
import { listTasksController } from "../core/useCases/listTasks";

const taskRouter = Router();

taskRouter.post('/tasks', authMiddleware, (request, response) => {
    return createTaskController.handle(request, response)
})

taskRouter.get('/tasks', authMiddleware, (request, response) => {
    return listTasksController.handle(request, response)
})

export {taskRouter}