import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem from '../content-item';
import './styles.css';

export default function TabsContent({ selected = 'todo' }) {
  const todo = useSelector((state) => state.todos);
  return (
    <div className='content-container'>
      {todo
        .filter((item) => item.status === selected)
        .map((item, index) => {
          return <ContentItem key={index} data={item} />;
        })}
    </div>
  );
}
