import React, {FC, useEffect} from 'react';
import {CreatorBoardsContainer} from "./CreatorBoards/CreatorBoardsContainer";
import {BoarderList} from "./BoarderList/BoarderList";
import {MainBox} from "./MainStyles";
import {IMainProps} from "./MainTypes";
import {useDispatch} from "react-redux";
import {apiLocalStorage} from "../../api/apiLocalStorage";

export const Main: FC<IMainProps> = ({boards}) => {

    return (
        <MainBox>
            <CreatorBoardsContainer boards={boards}/>
            <BoarderList boards={boards}/>
        </MainBox>
    )
}