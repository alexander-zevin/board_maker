import React, {FC, useState} from 'react';
import {useParams, Redirect} from "react-router-dom";
import {IAddList, IBoardScreenProps} from "./BoardScreenTypes";
import {AddBlock, AddListBox, AddListInput, BoardBackBox, ListsSection} from "./BoardScreenStyles";
import {List} from "./List/List";
import {useDispatch} from "react-redux";
import {addListActionCreator} from "../../store/actions/listActions";

export const BoardScreen: FC<IBoardScreenProps> = ({boards}) => {

    const dispatch = useDispatch();

    const {boardId} = useParams();

    let board = boards.find(item => item.id === Number(boardId));

    // if (!board) throw new Error('Board not found');

    const addList: IAddList = name => {
        if (name !== '' && board) {
            let matches: number;
            let newListId: number;
            do {
                matches = 0;
                newListId = Math.floor(Math.random() * Math.floor(board.list.length + 1));
                for (let i = 0; i < board.list.length; i++) {
                    if (board.list[i].listId === newListId) matches++
                }
            } while (matches !== 0);
            dispatch(addListActionCreator(newListId, Number(boardId), name));
            setInputValue('');
        }
    }

    const [inputValue, setInputValue] = useState<string>('')

    return (
        <>
            {
                board ?
                <>
                    <BoardBackBox>{board.name}</BoardBackBox>
                    <ListsSection>
                        {board.list &&
                            board.list.map(
                                item => <List list={item} boardId={Number(boardId)}/>
                            )
                        }
                        <AddListBox>
                            <AddListInput
                                onChange={ event => {setInputValue(event.target.value)} }
                                onKeyUp={event => {event.keyCode === 13 && addList(inputValue)}}
                                value={inputValue}
                            /><br/>
                            <span>Give me a name</span>
                        </AddListBox>
                    </ListsSection>
                </> :
                <Redirect to="/"/>
            }
        </>
    )
}