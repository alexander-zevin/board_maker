import {ADD_BOARD} from "../constants/constants";

export interface iList {
    listId: number
    listText: string
}

export interface IBoard {
    id: number
    name: string
    list: Array<iList>
}

export interface IState {
    boards: Array<IBoard>

}

export interface IAddBoardAction {
    type: typeof ADD_BOARD
    id: number
    name: string
}

export type ActionType = IAddBoardAction