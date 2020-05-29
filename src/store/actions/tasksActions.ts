import {IAddTaskAction, ISetPerformedAction} from "../types/types";
import {ADD_TASK, SET_PERFORMED} from "../constants/tasksContants";

export const addTaskActionCreator = (taskId: number, boardId: number, listId: number, taskName: string): IAddTaskAction =>
    ({type: ADD_TASK, taskId, boardId, listId, taskName});

export const setPerformedActionCreator = (isPerformed: boolean, boardId: number, listId: number, taskId: number): ISetPerformedAction =>
    ({type: SET_PERFORMED, isPerformed, boardId, listId, taskId})