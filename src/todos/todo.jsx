import React, { Component } from 'react';
import './todo.scss';

class Todo extends Component {
  delete = () => this.props.onRemove(this.props.data.id);
  complete = () => {
    let newTask = { ...this.props.data, completed: !this.props.data.completed };
    this.props.onEdit(newTask);
  };

  render() {
    let completedTask = this.props.data.completed ? ' completed ' : '';


    return (
      <div className={'todo' + completedTask}>
        <h3 className='text'>{this.props.data.text}</h3>
        {/* <small className='id'>{this.props.data.id}</small> */}
        <div className='actions'>
          <span onClick={this.delete}>🗑️</span>
          <span onClick={this.complete}>{this.props.data.completed ? '✔️' : '✅'} </span>
        </div>
      </div>
    );
  }
}

export default Todo;
