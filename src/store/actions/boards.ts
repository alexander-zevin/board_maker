import {ADD_BOARD, ADD_LIST} from "../constants/constants";
import {IAddBoardAction, IAddListAction} from "../types/types";

export const addBoardActionCreator = (id: number, name: string): IAddBoardAction => ({type: ADD_BOARD, id, name});

export const addListActionCreator = (id: number, boardId: number, name: string): IAddListAction =>
    ({type: ADD_LIST, id, boardId, name});