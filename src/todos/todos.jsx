import React, { Component } from 'react';
import './todos.scss';
import Todo from './todo.jsx';

class Todos extends Component {
  render() {
    return (
      <div className='todos'>
        <div className='addTask'>
          <input type='text' placeholder='add new task' />
        </div>
        <div className='taskList'>
          <Todo text='aprender js' />
          <Todo text='aprender es6' />
          <Todo text='aprender react' />
          <Todo text='aprender redux' />
        </div>
      </div>
    );
  }
}

export default Todos;
