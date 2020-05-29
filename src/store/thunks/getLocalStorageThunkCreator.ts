import {Dispatch} from "redux";
import {ISetStateAction, IState} from "../types/types";
import {apiLocalStorage} from "../../api/apiLocalStorage";
import {setStateActionCreator} from "../actions/boardsActions";

export const getStateThunkCreator = () => (dispatch: Dispatch<ISetStateAction>) => {
    const stateLocalStorage: IState = apiLocalStorage.getState();

    if (stateLocalStorage !== null) {
        dispatch(setStateActionCreator(stateLocalStorage));
    }
};
