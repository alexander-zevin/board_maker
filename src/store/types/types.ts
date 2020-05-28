import {ADD_BOARD} from "../constants/boardsConstants";
import {ADD_LIST} from "../constants/listsConstants";
import {ADD_TASK} from "../constants/tasksActions";

export interface ITask {
    taskId: number
    taskText: string
    isPerformed: boolean
}

export interface IList {
    listId: number
    listName: string
    tasks: Array<ITask>
}

export interface IBoard {
    id: number
    name: string
    list: Array<IList>
}

export interface IState {
    boards: Array<IBoard>
}

export interface IAddBoardAction {
    type: typeof ADD_BOARD
    id: number
    name: string
}

export interface IAddListAction {
    type: typeof ADD_LIST
    id: number
    boardId: number
    name: string
}

export interface IAddTaskAction {
    type: typeof ADD_TASK
    taskId: number
    listId: number
    boardId: number
    taskName: string
}

export type ActionType = IAddBoardAction | IAddListAction | IAddTaskAction