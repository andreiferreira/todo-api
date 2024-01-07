import { UsersRepository } from "../../../infra/repositories/usersRepository";
import { LoginUserUseCase } from "./loginUser.useCase";
import { LoginUserController } from "./loginUserController";

const usersRepository = new UsersRepository();
const loginUserUseCase = new LoginUserUseCase(usersRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export {loginUserController, loginUserUseCase}