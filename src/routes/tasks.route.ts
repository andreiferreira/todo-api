import { Router } from "express";
import { createTaskController } from "../core/useCases/createTask";
import { authMiddleware } from "../middleware/auth";
import { listTasksController } from "../core/useCases/listTasks";
import { updateTaskController } from "../core/useCases/updateTask";
import { deleteTaskController } from "../core/useCases/deleteTask";

const taskRouter = Router();

taskRouter.post('/tasks', authMiddleware, (request, response) => {
    return createTaskController.handle(request, response)
})

taskRouter.get('/tasks', authMiddleware, (request, response) => {
    return listTasksController.handle(request, response)
})

taskRouter.put('/tasks/:id', authMiddleware, (request, response) => {
    return updateTaskController.handle(request, response)
})

taskRouter.delete('/tasks/:id', authMiddleware, (request, response) => {
    return deleteTaskController.handle(request, response)
})

export {taskRouter}