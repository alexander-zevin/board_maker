import {ActionType, IState} from "../types/types";
import {ADD_BOARD, SET_STATE} from "../constants/boardsConstants";
import {ADD_LIST} from "../constants/listsConstants";
import {listReducer} from "./listReducer";
import {ADD_TASK, SET_PERFORMED, SET_TASKS} from "../constants/tasksContants";

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
        case SET_TASKS:
        case ADD_TASK:
        case SET_PERFORMED:
        case ADD_LIST: {
            return Object.assign({}, state, {
                boards: state.boards.map(board => {
                    if (board.id === action.boardId) {
                        return listReducer(board, action)
                    } else return board
                })
            })
        }
        case SET_STATE: {
            return action.state
        }
        default: return state;
    }
}
