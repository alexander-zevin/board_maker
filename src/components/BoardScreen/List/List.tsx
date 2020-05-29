import React, {FC, useState} from 'react';
import {AddTasksInput, ListBox} from "./ListStyles";
import {IListProps} from "./ListTypes";
import {Task} from "./Task/Task";
import {useDispatch} from "react-redux";
import {addTaskActionCreator, setTasksActionCreator} from "../../../store/actions/tasksActions";
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';
import {ITask} from "../../../store/types/types";

export const List: FC<IListProps> = ({list, boardId}) => {

    const dispatch =  useDispatch()

    const [inputValue, setInputValue] = useState<string>('');

    const listId: number = list.listId;

    const addTask = (listId: number, boardId: number, name: string) => {
        if (inputValue !== '') {
            let matches: number;
            let newTaskId: number;
            do {
                matches = 0;
                newTaskId = Math.floor(Math.random() * Math.floor(list.tasks.length + 1));
                for (let i = 0; i < list.tasks.length; i++) {
                    if (list.tasks[i].taskId === newTaskId) matches++
                }
            } while (matches !== 0);
            dispatch(addTaskActionCreator(newTaskId, boardId, listId, name));
        }
    }

    const SortableItem = SortableElement(({item}: {item: ITask}) =>
        <Task taskId={item.taskId} taskText={item.taskText} isPerformed={item.isPerformed} listId={listId} boardId={boardId}/>);

    const SortableList = SortableContainer(({tasks}: {tasks: Array<ITask>}) => {
        return (
            <div>
                {
                    tasks.map((item: ITask, index: number) => <SortableItem key={`item-${item.taskId}`} index={index} item={item}/>)
                }
            </div>
        )
    })

    const onSortEnd = ({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) => {
        dispatch(setTasksActionCreator(arrayMove(list.tasks, oldIndex, newIndex), boardId, listId))
    };

    return (
        <ListBox>
            <span>{list.listName}</span><br/>
            <AddTasksInput
                value={inputValue}
                onChange={event => {setInputValue(event.target.value)}}
                onKeyUp={event => {event.keyCode === 13 && addTask(listId, boardId, inputValue)}}
            />
            <SortableList tasks={list.tasks} onSortEnd={onSortEnd}/>
        </ListBox>
    )
}