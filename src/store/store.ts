import {createStore, combineReducers, applyMiddleware} from 'redux';
import {boardReducer} from "./reducers/boardsReducer";
import {listReducer} from "./reducers/listReducer";

const rootReducer = combineReducers({
    board: boardReducer,
    // list: listReducer
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer);
