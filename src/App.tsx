import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from './hooks/redux-hook';
import { removeToDoItemAction, setIsCompleteItemAction, setNewTodoAction } from './redux/actions/todo-actions'
import { TodoItem } from './todo-item/todo-item';



export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [hide, setHide] = useState(false)

  const dispatch = useAppDispatch()

  const addNewItem = (event: any) => {
    event.preventDefault();
    dispatch(setNewTodoAction(inputValue))
  }

  const removeItem = (id: number) => {
    dispatch(removeToDoItemAction(id))
  }

  const setCompleteTodoItem = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsCompleteItemAction({ id, isComplete: event.target.checked }))
  }

  const changeEventValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)

  }

  const setShowHide = () => {
    setHide(!hide)
  }

  return (
    <div className='wrapper'>
      <form action="#">
        <input type="text" value={inputValue} onChange={(event) => changeEventValue(event)} />
        <div onClick={setShowHide}>
          <TodoItem removeItem={removeItem}
            setCompleteTodoItem={setCompleteTodoItem} 
            hide={hide}/>
        </div>
        <button type='submit' onClick={(event) => addNewItem(event)}>add</button>
      <button onClick={setShowHide}>{
          !hide ? ('hide') : ('show')
          }</button>
      </form>
    </div>
  );
}

export default App;
