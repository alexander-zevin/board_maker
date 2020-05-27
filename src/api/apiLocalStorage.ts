import {IState} from "../store/types/types";

export const apiLocalStorage = {
    setState: (state: IState) => {
        localStorage.setItem('tasks', JSON.stringify(state));
    },
    getState: () => {
        return JSON.parse(localStorage.getItem('tasks') as string);
    }
};

