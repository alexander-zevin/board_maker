import {ActionType, IList, ITask} from "../types/types";
import {ADD_TASK} from "../constants/tasksActions";

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
        default: return state;
    }
}