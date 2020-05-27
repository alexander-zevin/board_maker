import {ActionType, IState} from "../types/types";
import {ADD_BOARD, ADD_LIST} from "../constants/constants";

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
        default:return state;
    }
}
