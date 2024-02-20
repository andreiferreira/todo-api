export interface ICreateTask {
    title: string,
    description?: string,
    priority?: number,
    userId: string,
    parentTaskId?: string,
    projectId?: string,
}