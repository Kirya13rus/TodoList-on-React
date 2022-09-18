import { createAction } from "@reduxjs/toolkit";

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM'
const SET_IS_COMPLETE_ITEM = 'SET_IS_COMPLETE_ITEM'

interface SetComplete {
    id: number;
    isComplete: boolean;
}

export const setNewTodoAction = createAction<string>(ADD_TODO);
export const removeToDoItemAction = createAction<number>(REMOVE_TODO_ITEM);
export const setIsCompleteItemAction = createAction<SetComplete>(SET_IS_COMPLETE_ITEM)