import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-erros";
import jwt from "jsonwebtoken";
import { UsersRepository } from "../infra/repositories/usersRepository";

export interface JwtPayload {
    id: string
}
export const authMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    const usersRepository = new UsersRepository();

    const {authorization} = req.headers;

    try {

    if(!authorization) {
        return res.json({
            status: 401,
            body: 'Não autorizado'
        })
    }

    const token = authorization.split(' ')[1]

    const {id} = jwt.verify(token, process.env.JWT_PASS) as JwtPayload

    const user = await usersRepository.findById(id);

    if(!user) {
        return res.json({
            body: 'Não autorizado'
        })
    }

    const {password, ...loggedUser} = user;

    req.user = loggedUser

    next()

    } catch(error) {
        res.json({
            status: 401,
            body: 'Não autorizado'
        })
        throw new UnauthorizedError('Não autorizado')
    }

}