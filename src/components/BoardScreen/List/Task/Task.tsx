import React, {FC} from 'react';
import {TaskRow} from "./TasksStyles";
import {ITaskProps} from "./TaskTypes";

export const Task: FC<ITaskProps> = ({taskId, taskText, isPerformed}) => {
    return (
        <TaskRow>
            <span>{taskText}</span>
        </TaskRow>
    )
}