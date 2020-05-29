import {ActionType, IBoard, IList} from "../types/types";
import {ADD_LIST} from "../constants/listsConstants";
import {ADD_TASK, SET_PERFORMED, SET_TASKS} from "../constants/tasksContants";
import {taskReducer} from "./tasksReducer";

export const listReducer = (state: IBoard, action: ActionType): IBoard => {
    switch (action.type) {
        case ADD_LIST: {
            return {
                ...state,
                list: [
                    ...state.list,
                    {listId: action.id, listName: action.name, tasks: []}
                ]
            }
        }
        case SET_TASKS:
        case SET_PERFORMED:
        case ADD_TASK: {
            return {
                ...state,
                list: state.list.map(listItem => {
                    if (listItem.listId === action.listId) {
                        return taskReducer(listItem, action)
                    } else return listItem
                })
            }
        }
        default: return state;
    }
}