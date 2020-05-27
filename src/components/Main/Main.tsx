import React, {FC} from 'react';
import {CreatorBoardsContainer} from "./CreatorBoards/CreatorBoardsContainer";
import {BoarderList} from "./BoarderList/BoarderList";
import {MainBox} from "./MainStyles";
import {IMainProps} from "./MainTypes";

export const Main: FC<IMainProps> = ({boards}) => {
    return (
        <MainBox>
            <CreatorBoardsContainer boards={boards}/>
            <BoarderList boards={boards}/>
        </MainBox>
    )
}