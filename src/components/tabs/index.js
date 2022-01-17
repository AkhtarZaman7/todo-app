import React from 'react';
import './styles.css';

export default function Tabs({ selected = 'todo', setSelected }) {
  return (
    <div className='tabs-container'>
      <div
        className='tab'
        style={{ backgroundColor: selected === 'todo' ? '#4D638D' : '#F1F1F3' }}
        onClick={() => {
          setSelected('todo');
        }}
      >
        <span style={{ color: selected === 'todo' ? 'white' : 'black' }}>
          Todo's
        </span>
      </div>
      <div
        className='tab'
        style={{
          backgroundColor: selected === 'completed' ? '#4D638D' : '#F1F1F3',
        }}
        onClick={() => {
          setSelected('completed');
        }}
      >
        <span style={{ color: selected === 'completed' ? 'white' : 'black' }}>
          Completed
        </span>
      </div>
      <div
        className='tab'
        style={{
          backgroundColor: selected === 'deleted' ? '#4D638D' : '#F1F1F3',
        }}
        onClick={() => {
          setSelected('deleted');
        }}
      >
        <span style={{ color: selected === 'deleted' ? 'white' : 'black' }}>
          Delete
        </span>
      </div>
    </div>
  );
}
