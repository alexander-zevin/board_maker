import styled from "styled-components";
import {AddListInput} from "../BoardScreenStyles";

export const ListBox = styled.div`
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
    margin-right: 16px;
    background-color: white;
    padding: 8px;
    text-align: center;
`;

export const AddTasksInput = styled(AddListInput).attrs(props => ({
    placeholder: 'Add a tasks'
}))`
    border-width: 1px;
    padding: 5px;
    margin-top: 10px;
    outline: none;
`;