import { UsersRepository } from "../../../infra/repositories/usersRepository";
import { CreateUserUseCase } from "./createUser.useCase";
import { CreateUserController } from "./createUserController";

const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
    usersRepository
)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserController, createUserUseCase}