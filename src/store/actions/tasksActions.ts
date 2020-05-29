import {IAddTaskAction, ISetPerformedAction, ISetTasksAction, ITask} from "../types/types";
import {ADD_TASK, SET_PERFORMED, SET_TASKS} from "../constants/tasksContants";

export const addTaskActionCreator = (taskId: number, boardId: number, listId: number, taskName: string): IAddTaskAction =>
    ({type: ADD_TASK, taskId, boardId, listId, taskName});

export const setPerformedActionCreator = (isPerformed: boolean, boardId: number, listId: number, taskId: number): ISetPerformedAction =>
    ({type: SET_PERFORMED, isPerformed, boardId, listId, taskId})

export const setTasksActionCreator = (tasks: Array<ITask>, boardId: number, listId: number): ISetTasksAction =>
    ({type: SET_TASKS, tasks, boardId, listId});