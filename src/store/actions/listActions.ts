import {IAddListAction} from "../types/types";
import {ADD_LIST} from "../constants/listsConstants";

export const addListActionCreator = (id: number, boardId: number, name: string): IAddListAction =>
    ({type: ADD_LIST, id, boardId, name});


