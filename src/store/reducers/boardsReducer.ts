import {ActionType, IState} from "../types/types";
import {ADD_BOARD} from "../constants/boardsConstants";
import {ADD_LIST} from "../constants/listsConstants";
import {listReducer} from "./listReducer";
import {ADD_TASK} from "../constants/tasksActions";

const initialState: IState = {
    boards: []
};

export const boardReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case ADD_BOARD: {
            return {
                ...state,
                boards: [...state.boards, {id: action.id, name: action.name, list: []}]
            }
        }
        case ADD_LIST: {
            return Object.assign({}, state, {
                boards: state.boards.map(board => {
                    if (board.id === action.boardId) {
                        return listReducer(board, action)
                    } else return board
                })
            })
        }
        case ADD_TASK: {
            return Object.assign({}, state, {
                boards: state.boards.map(board => {
                    if (board.id === action.boardId) {
                        debugger
                        return listReducer(board, action)
                    } else return board
                })
            })
        }
        default: return state;
    }
}
