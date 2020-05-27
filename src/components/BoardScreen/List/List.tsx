import React, {FC} from 'react';
import {ListBox} from "./ListStyles";
import {IListProps} from "./ListTypes";
import {Task} from "./Task/Task";

export const List: FC<IListProps> = ({list}) => {
    return (
        <ListBox>
            <span>{list.listName}</span>
            {
                list.tasks.map(item =>
                    <Task taskId={item.taskId} taskText={item.taskText} isPerformed={item.isPerformed} />)
            }
        </ListBox>
    )
}