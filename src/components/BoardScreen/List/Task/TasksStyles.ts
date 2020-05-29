import styled from "styled-components";

export const TaskRow = styled.div`
    background-color: #bbdefb;
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
    margin: 8px 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
`;

export const CheckBox = styled.input.attrs(props => ({
    type: "checkbox",
    checked: props.checked
}))`
    
`;