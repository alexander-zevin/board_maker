import {ADD_BOARD, SET_STATE} from "../constants/boardsConstants";
import {IAddBoardAction, ISetStateAction, IState} from "../types/types";

export const addBoardActionCreator = (id: number, name: string): IAddBoardAction => ({type: ADD_BOARD, id, name});

export const setStateActionCreator = (state: IState): ISetStateAction => ({type: SET_STATE, state});


