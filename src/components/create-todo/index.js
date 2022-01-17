import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../redux/actions';
import { v4 as uuid } from 'uuid';
import './styles.css';
import { useSelector } from 'react-redux';

export default function CreateTodo() {
  const existingTodo = useSelector((state) => state.selected);
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setTodo(existingTodo?.content);
  }, [existingTodo]);

  const onSubmit = () => {
    if (todo.trim() !== '') {
      dispatch({
        type: existingTodo?.id ? ACTIONS.UPDATE : ACTIONS.CREATE,
        payload: existingTodo?.id
          ? {
              ...existingTodo,
              content: todo,
            }
          : {
              id: uuid(),
              content: todo,
              status: 'todo',
            },
      });
      if (existingTodo?.id) {
        dispatch({
          type: ACTIONS.REMOVE_SELECTED,
        });
      }
      setTodo('');
    }
  };
  return (
    <div className='create-container '>
      <input
        type={'text'}
        className='create-input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter Todo'
      />
      <div className='submit' onClick={onSubmit}>
        <span>Submit</span>
      </div>
    </div>
  );
}
