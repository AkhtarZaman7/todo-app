import React, { useState } from 'react';
import Tabs from '../../components/tabs';
import TabsContent from '../../components/tabs-content';
import './styles.css';
import { FaPen } from 'react-icons/fa';
import CreateTodo from '../../components/create-todo';

export default function TodoList() {
  const [selected, setSelected] = useState('todo');
  return (
    <div className='container'>
      <div className='contentWrap'>
        <h3 style={{ color: '#4D63s8D' }}>todos</h3>
        <FaPen size={25} color={'#4D638D'} />
      </div>
      <CreateTodo />
      <Tabs selected={selected} setSelected={setSelected} />
      <TabsContent selected={selected} />
    </div>
  );
}
