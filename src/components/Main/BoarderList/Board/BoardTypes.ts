import {IBoard} from "../../../../store/types/types";

export interface IBoardContainerProps {
    boards: Array<IBoard>
}

export interface IBoardProps {
    id: number
    name: string
}