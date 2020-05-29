import React, {FC} from 'react';
import {AddBox, Button, ButtonBox, CreatorBoardBox, Input, PrimaryButton, Title} from "./CreatorBoardsStyles";
import {ICreatorBoardsProps} from "./CreatorBoardsTypes";

export const CreatorBoards: FC<ICreatorBoardsProps> = ({openCreatorBoards, setCreatorBoards,
    boards, inputValue, setInputValue, addBoard}) => {
    return (
        <CreatorBoardBox onClick={() => {!openCreatorBoards && setCreatorBoards(true)}}>
            <Title>creating a board</Title>
            {
                openCreatorBoards &&
                <AddBox>
                    <div><span>What shall we call the board</span></div>
                    <Input
                        onChange={(event) => {setInputValue(event.target.value)}}
                        onKeyUp={event => {event.keyCode === 13 && addBoard(inputValue)}}
                        value={inputValue}
                        autoFocus={true}
                    />
                    <ButtonBox>
                        <Button onClick={() => {setCreatorBoards(false)}}>CANCEL</Button>
                        <PrimaryButton onClick={() => {addBoard(inputValue)}}>CREATE</PrimaryButton>
                    </ButtonBox>
                </AddBox>
            }
        </CreatorBoardBox>
    )
}