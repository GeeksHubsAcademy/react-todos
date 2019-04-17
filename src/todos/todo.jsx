import React, { Component } from 'react';
import './todo.scss';

class Todo extends Component {
  render() {
    return (
      <div className='task'>
        <span className='text'>{this.props.text}</span>
      </div>
    );
  }
}

export default Todo;
