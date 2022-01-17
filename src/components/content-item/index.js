import React from 'react';
import './style.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../redux/actions';

export default function ContentItem({ data }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch({
      type: data.status === 'deleted' ? ACTIONS.REMOVE : ACTIONS.DELETE,
      payload: {
        id: data.id,
      },
    });
  };

  const onEdit = () => {
    dispatch({
      type: ACTIONS.SELECT,
      payload: data,
    });
  };
  const onComplete = () => {
    dispatch({
      type: ACTIONS.UPDATE,

      payload: { ...data, status: 'completed' },
    });
  };
  return (
    <div
      className='content-item-container'
      style={{
        borderLeft: `.5pc solid ${
          data.status === 'completed'
            ? 'green'
            : data.status === 'deleted'
            ? 'red'
            : 'purple'
        }`,
        borderColor: ` ${
          data.status === 'completed'
            ? 'green'
            : data.status === 'deleted'
            ? 'red'
            : 'purple'
        }`,
      }}
    >
      {data.status === 'todo' ? (
        <span className='content'>{data.content}</span>
      ) : (
        <strike className='content'>{data.content}</strike>
      )}
      <div className='icons'>
        {data.status !== 'completed' && (
          <TiTick color='green' size={24} onClick={onComplete} />
        )}
        <AiFillEdit color='blue' size={24} onClick={onEdit} />
        <AiFillDelete color='red' size={24} onClick={onDelete} />
      </div>
    </div>
  );
}
