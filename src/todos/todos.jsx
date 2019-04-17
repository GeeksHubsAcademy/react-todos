import React, { Component } from 'react';
import './todos.scss';

class Todos extends Component {
  render() {
    return (
      <div className='todos'>
        <div className='addTask'>
          <input type='text' placeholder='add new task' />
        </div>
        <div className='taskList'>
          <div className='task'>
            <span className='text'>aprender react</span>
          </div>
          <div className='task'>
            <span className='text'>aprender jsx</span>
          </div>
          <div className='task'>
            <span className='text'>aprender sass</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
