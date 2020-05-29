import {createStore, combineReducers, applyMiddleware} from 'redux';
import {boardReducer} from "./reducers/boardsReducer";
import thunk from 'redux-thunk'

const middlewares = [thunk]

const rootReducer = combineReducers({
    board: boardReducer
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
