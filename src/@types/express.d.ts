import { IUser } from "../entities/user";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<IUser>
        }
    }
}