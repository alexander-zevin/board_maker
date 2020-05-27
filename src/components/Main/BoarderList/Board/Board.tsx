import React, {FC} from 'react';
import {BoardBox} from "./BoardStyles";
import {IBoardProps} from "./BoardTypes";

export const Board: FC<IBoardProps> = ({id, name}) => {
    return (
        <BoardBox>{name}</BoardBox>
    )
}