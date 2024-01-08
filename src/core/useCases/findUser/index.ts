import { UsersRepository } from "../../../infra/repositories/usersRepository";
import { FindUserUseCase } from "./findUser.useCase";
import { FindUserController } from "./findUserController";




const usersRepository = new UsersRepository();


const findUserUseCase = new FindUserUseCase(usersRepository);

const findUserController = new FindUserController(findUserUseCase);

export {findUserController, findUserUseCase}