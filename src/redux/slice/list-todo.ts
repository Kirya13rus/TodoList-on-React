import { createSlice } from "@reduxjs/toolkit"
import {removeToDoItemAction, setIsCompleteItemAction, setNewTodoAction} from "../actions/todo-actions"

interface ListTodo {
    todoList: {
        id: number;
        text: string;
        isComplete: boolean;
    }[]
}

const initialState: ListTodo = {
    todoList: []
}

const TodoSlice = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setNewTodoAction, (state, action) => {
            state.todoList.push({
                id: new Date().getTime(),
                text: action.payload,
                isComplete: false,
            })
        })
        builder.addCase(removeToDoItemAction, (state, action) => {
          state.todoList = state.todoList.filter(({id}) => action.payload !== id);
            
        })
        builder.addCase(setIsCompleteItemAction, (state, action) => {
            const {id, isComplete} = action.payload;
            state.todoList = state.todoList.map((element) => {
                const el = element;
                if (el.id === id) {
                    el.isComplete = isComplete;
                }
                return el;
            });
        })
    }
})


export default TodoSlice.reducer