import React, {FC} from 'react';
import {IBoarderListProps} from "./BoarderListTypes";
import {Board} from "./Board/Board";
import {Link} from "react-router-dom";

export const BoarderList: FC<IBoarderListProps> = ({boards}) => {

    const boardsArray = boards.map(
        item => 
            <Link to={`/${item.id}`}>
                <Board id={item.id} name={item.name}/>
            </Link>
    )

    return (
        <>
            {boardsArray}
        </>
    )
}