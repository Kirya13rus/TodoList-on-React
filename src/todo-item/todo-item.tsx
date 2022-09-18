import React, { ChangeEvent } from "react";
import { useAppSelector } from "../hooks/redux-hook";
import {BsTrashFill} from 'react-icons/bs'

interface ToDoItemProps {
  hide: boolean;
  removeItem: (id: number) => void;
  setCompleteTodoItem: (id: number, event: ChangeEvent<HTMLInputElement>) => void;
}

export const TodoItem: React.FC<ToDoItemProps> = ({removeItem, setCompleteTodoItem, hide}) => {
    const selector = useAppSelector((state) => state.todoList.todoList);
    
    return(
      <div>
          {!selector.length ? (<div> Пока ничего не добавлено</div>) : (
            selector.map(({id, text, isComplete}) => (
              <div key={id} className={`${!isComplete ? 'todo-item' : 'todo-item todo-item__checked'}` + ' ' + `${isComplete && hide
                ? 'todo-hide' : ''
                }`}>
                <input 
                type="checkbox"
                onChange={(event) => setCompleteTodoItem(id, event)} />
                <p>{text}</p>
                <p onClick={() => removeItem(id)}><BsTrashFill/></p>
              </div>
            ))
          )}
      </div>
    )
}