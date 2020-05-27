import {IBoard} from "../../store/types/types";

export interface IBoardScreenProps {
    boards: Array<IBoard>
}

export interface IAddList {
    (name: string): void
}