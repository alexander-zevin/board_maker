import styled from 'styled-components';

export const Title = styled.span`
    font-size: 1.5em;
`;

export const CreatorBoardBox = styled.div`
    text-align: center;
    display: inline-block;
    background-color: #81c784;
    padding: 30px;
    margin-right: 16px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
`;

export const Input = styled.input`
    border: none;
    padding: 5px;
    margin-top: 10px;
    outline: none;
`;

export const AddBox = styled.div`
    margin-top: 30px;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
`;

export const Button = styled.button`
    padding: 5px;
    border: none;
    background-color: transparent;
    outline: none;
`;

export const PrimaryButton = styled(Button)`
    background-color: white;
    box-shadow: 0 2px 3px rgba(0,0,0,0.5);
    border-radius: 3px;
    
`;