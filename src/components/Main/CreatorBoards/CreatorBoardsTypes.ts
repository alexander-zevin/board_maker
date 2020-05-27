import {Dispatch, SetStateAction} from "react";
import {IBoard} from "../../../store/types/types";

export interface ICreatorBoardsContainer {
    boards: Array<IBoard>
}

export interface IAddBoard {
    (text: string): void
}

export interface ICreatorBoardsProps extends ICreatorBoardsContainer {
    openCreatorBoards: boolean
    setCreatorBoards: Dispatch<SetStateAction<boolean>>
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
    addBoard: IAddBoard
}