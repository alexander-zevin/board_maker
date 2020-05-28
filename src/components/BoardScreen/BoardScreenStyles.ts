import styled from "styled-components";
import {CreatorBoardBox} from "../Main/CreatorBoards/CreatorBoardsStyles";
import {BoardBox} from "../Main/BoarderList/Board/BoardStyles";
import React from "react";

export const AddListBox = styled(CreatorBoardBox)`
    background-color: white;
    padding: 8px;
`;

export const BoardBackBox = styled(BoardBox)`
    
`;

export const ListsSection = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const AddListInput = styled.input.attrs(props => ({
    placeholder: 'Add a list'
}))`
    border-width: 1px;
    padding: 5px;
    margin-top: 10px;
    outline: none;
`;

export const AddBlock = styled.div`
    position: absolute;
    z-index: 1;
`;

