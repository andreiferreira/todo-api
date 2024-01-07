import { Router } from "express";
import { createUserController } from "../core/useCases/createUser";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.post('/users', authMiddleware, (request, response) => {
    return createUserController.handle(request, response);
})

export {router}