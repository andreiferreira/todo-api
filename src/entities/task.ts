import { uuid } from "uuidv4"

export interface ITask {
    id?: string
    title: string
    description?: string
    priority?: number
    active?: boolean
    userId: string
    parentTaskId?: string
    projectId?: string
    createdAt?: Date
    updatedAt?: Date 
}

export class Task {
    id: string
    title: string
    description?: string
    priority?: number
    active?: boolean
    userId: string
    parentTaskId?: string
    projectId?: string
    createdAt?: Date
    updatedAt?: Date

    constructor({
        id,
        title,
        description,
        priority,
        active,
        userId,
        parentTaskId,
        projectId,
        createdAt,
        updatedAt
    }: ITask) {
        this.id = id || uuid(),
        this.title = title,
        this.description = description,
        this.priority = priority || 1,
        this.active = active || true,
        this.userId = userId,
        this.parentTaskId = parentTaskId,
        this.projectId = projectId,
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt
    }
    
}