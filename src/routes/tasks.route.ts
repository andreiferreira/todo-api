import { Router } from "express";
import { createTaskController } from "../core/useCases/createTask";
import { authMiddleware } from "../middleware/auth";

const taskRouter = Router();

taskRouter.post('/tasks', authMiddleware, (request, response) => {
    return createTaskController.handle(request, response)
})

export {taskRouter}