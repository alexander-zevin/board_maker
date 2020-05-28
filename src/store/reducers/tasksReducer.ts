import {ActionType, ITask} from "../types/types";
import {ADD_TASK} from "../constants/tasksActions";

export const taskReducer = (state: Array<ITask>, action: ActionType): Array<ITask> => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {taskId: action.taskId, taskText: action.taskName, isPerformed: false}
            ]
        default: return state;
    }
}