import React, { Component } from 'react';
import './todo.scss';

class Todo extends Component {
  render() {
    return (
      <div className='todo'>
        <h3 className='text'>{this.props.data.text}</h3>
        {/* <small className='id'>{this.props.data.id}</small> */}
        <div className='actions'>
          <span onClick={() => this.props.onRemove(this.props.data.id)}>🗑️</span>
        </div>
      </div>
    );
  }
}

export default Todo;
