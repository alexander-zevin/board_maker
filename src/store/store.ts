import {createStore, combineReducers, applyMiddleware} from 'redux';
import {boardReducer} from "./reducers/reducer";

const rootReducer = combineReducers({
    board: boardReducer,
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer);
