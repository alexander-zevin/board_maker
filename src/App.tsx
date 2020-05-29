import React, {useEffect} from 'react';
import './App.css';
import {IBoard, IState} from "./store/types/types";
import {RootStateType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {BoardScreen} from "./components/BoardScreen/BoardScreen";
import {apiLocalStorage} from "./api/apiLocalStorage";
import {getStateThunkCreator} from "./store/thunks/getLocalStorageThunkCreator";

function App() {

    const state: IState = useSelector((state: RootStateType): IState => state.board);
    debugger

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStateThunkCreator())
    }, []);

    useEffect(() => {
        apiLocalStorage.setState(state);
    }, [state]);

    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path='/' component={() => <Main boards={state.boards}/>} />
                <Route path='/:boardId' component={() => <BoardScreen boards={state.boards}/>} />
            </BrowserRouter>
        </div>
    );
}

export default App;
