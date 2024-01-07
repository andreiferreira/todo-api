import { Router } from "express";
import { loginUserController } from "../core/useCases/loginUser";

const loginRouter = Router();

loginRouter.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
})

export {loginRouter}