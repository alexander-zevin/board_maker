import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {IBoardScreenProps} from "./BoardScreenTypes";
import {BoardBox} from "../Main/BoarderList/Board/BoardStyles";
import {AddList} from "./BoardScreenStyles";


export const BoardScreen: FC<IBoardScreenProps> = ({boards}) => {

    const {id} = useParams();

    let name;
    let list;

    boards.forEach(
        (item) => {
            if (item.id === Number(id)) {
                name = item.name
                list = item.list
            }
        }
    )

    return (
        <>
            <BoardBox>
                {name}
            </BoardBox>

            <AddList>
                Add a list
            </AddList>
        </>
    )
}