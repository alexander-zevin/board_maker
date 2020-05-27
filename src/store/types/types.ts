import {ADD_BOARD, ADD_LIST} from "../constants/constants";

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

export type ActionType = IAddBoardAction