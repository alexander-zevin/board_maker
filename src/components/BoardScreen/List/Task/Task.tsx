import React, {FC, useState} from 'react';
import {CheckBox, TaskRow} from "./TasksStyles";
import {ISetPerformed, ITaskProps} from "./TaskTypes";
import {useDispatch} from "react-redux";
import {setPerformedActionCreator} from "../../../../store/actions/tasksActions";

export const Task: FC<ITaskProps> = ({isPerformed, taskId, taskText, listId, boardId}) => {

    const dispatch = useDispatch();

    const setPerformed: ISetPerformed = (isPerformed, taskId, listId, boardId) => {
        dispatch(setPerformedActionCreator(isPerformed, boardId, listId, taskId))
    }

    return (
        <TaskRow>
            <span>{taskText}</span>
            <CheckBox onChange={() => {setPerformed(!isPerformed, taskId, listId, boardId)}} checked={isPerformed}/>
        </TaskRow>
    )
}