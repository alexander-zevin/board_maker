import {ActionType, IList} from "../types/types";
import {ADD_TASK, SET_PERFORMED} from "../constants/tasksContants";

export const taskReducer = (state: IList, action: ActionType): IList => {
    debugger
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {taskId: action.taskId, taskText: action.taskName, isPerformed: false}
                ]
            }
        case SET_PERFORMED: {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (action.taskId === item.taskId) {
                        return {
                            ...item,
                            isPerformed: action.isPerformed
                        }
                    } else return item
                })
            }
        }
        default: return state;
    }
}