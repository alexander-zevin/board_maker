import styled from "styled-components";
import {CreatorBoardBox} from "../Main/CreatorBoards/CreatorBoardsStyles";
import {BoardBox} from "../Main/BoarderList/Board/BoardStyles";
import React from "react";

export const AddListBox = styled.div`
    background-color: #cfd8dc;
    text-align: center;
    display: inline-block;
    padding: 8px;
    margin-top: 16px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
`;

export const BoardBackBox = styled(BoardBox)`
     margin-bottom: 0px;
`;

export const ListsSection = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
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

