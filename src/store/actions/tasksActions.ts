import {IAddTaskAction} from "../types/types";
import {ADD_TASK} from "../constants/tasksActions";

export const addTaskActionCreator = (taskId: number, boardId: number, listId: number, taskName: string): IAddTaskAction =>
    ({type: ADD_TASK, taskId, boardId, listId, taskName});