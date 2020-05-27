import {ADD_BOARD} from "../constants/constants";
import {IAddBoardAction} from "../types/types";

export const addBoardActionCreator = (id: number, name: string): IAddBoardAction => ({type: ADD_BOARD, id, name});