import { Router } from "express";
import { authMiddleware } from "../middleware/auth";

import { createUserController } from "../core/useCases/createUser";
import { findUserController } from "../core/useCases/findUser";

const router = Router();

router.post('/users', authMiddleware, (request, response) => {
    return createUserController.handle(request, response);
})

router.get('/users/:id', authMiddleware, (request, response) => {
    return findUserController.handle(request, response)
})

export {router}