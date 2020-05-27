import React, {FC, useState} from 'react';
import {CreatorBoards} from "./CreatorBoards";
import {IAddBoard, ICreatorBoardsContainer} from "./CreatorBoardsTypes";
import {addBoardActionCreator} from "../../../store/actions/boardsActions";
import {useDispatch} from "react-redux";

export const CreatorBoardsContainer: FC<ICreatorBoardsContainer> = ({boards}) => {

    const dispatch = useDispatch();

    const [openCreatorBoards, setCreatorBoards] = useState<boolean>(false);

    const [inputValue, setInputValue] = useState<string>('');

    const addBoard: IAddBoard = text => {
        if (text !== '') {
            let matches: number;
            let newId: number;
            do {
                matches = 0;
                newId = Math.floor(Math.random() * Math.floor(boards.length + 1));
                for (let i: number = 0; i < boards.length; i++) {
                    if (boards[i].id === newId) matches++
                }
            } while (matches !== 0);
            dispatch(addBoardActionCreator(newId, text));
            setInputValue('');
            setCreatorBoards(false);
        }
    };

    return (
        <CreatorBoards
            openCreatorBoards={openCreatorBoards}
            setCreatorBoards={setCreatorBoards}
            boards={boards}
            inputValue={inputValue}
            setInputValue={setInputValue}
            addBoard={addBoard}
        />
    )
}