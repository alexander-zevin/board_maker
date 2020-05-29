export interface ITaskProps {
    taskId: number
    taskText: string
    isPerformed: boolean
    listId: number
    boardId: number
}

export interface ISetPerformed {
    (isPerformed: boolean, taskId: number, listId: number, boardId: number): void
}