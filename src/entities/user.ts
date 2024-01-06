import { uuid } from "uuidv4"

export interface IUser {
    id?: string
    name: string
    username: string
    phone: string
    password: string
    email: string
    taks?: any[]
    projects?: any[]
    createdAt?: Date
    updatedAt?: Date
}

export class User {
    id: string
    name: string
    username: string
    phone: string
    password: string
    email: string
    taks?: any[]
    projects?: any[]
    createdAt: Date
    updatedAt: Date
    constructor({
        id,
        name,
        username,
        email,
        password,
        phone,
        createdAt,
        updatedAt
    }: IUser) {
        this.id = id || uuid(),
        this.name = name,
        this.username = username,
        this.email = email,
        this.password = password,
        this.phone = phone
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt
    }
}