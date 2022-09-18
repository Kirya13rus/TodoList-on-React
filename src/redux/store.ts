import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slice/list-todo"

const rootReducer = combineReducers({
    todoList: TodoSlice
})

export const configStore = () => {
    return configureStore({
        reducer: rootReducer, 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
export type AppDispatch = AppStore['dispatch']