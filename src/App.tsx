import React from 'react';
import './App.css';
import {IBoard} from "./store/types/types";
import {RootStateType} from "./store/store";
import {useSelector} from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'
import {Main} from "./components/Main/Main";
import {BoardScreen} from "./components/BoardScreen/BoardScreen";

function App() {

    const boards: Array<IBoard> = useSelector((state: RootStateType): Array<IBoard> => state.board.boards);

    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path='/' component={() => <Main boards={boards}/>} />
                <Route path='/:id' component={() => <BoardScreen boards={boards}/>} />
            </BrowserRouter>
        </div>
    );
}

export default App;
