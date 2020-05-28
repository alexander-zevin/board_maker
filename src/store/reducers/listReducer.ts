import {ActionType, IList} from "../types/types";
import {ADD_LIST} from "../constants/listsConstants";
import {ADD_TASK} from "../constants/tasksActions";
import {taskReducer} from "./tasksReducer";

export const listReducer = (state: Array<IList>, action: ActionType): Array<IList> => {
    switch (action.type) {
        case ADD_LIST: {
            return [
                ...state,
                {listId: action.id, listName: action.name, tasks: []}
            ]
        }
        case ADD_TASK: {
            return [
                ...state,
                Object.assign({}, state[action.listId], {
                    tasks: taskReducer(state[action.listId].tasks, action)
                })
            ]
        }
        default: return state;
    }
}