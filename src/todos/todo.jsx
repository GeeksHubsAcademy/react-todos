import React, { Component } from 'react';
import './todo.scss';

class Todo extends Component {
  delete = () => this.props.onRemove(this.props.data.id);
  complete = () => {
    let newTask = { ...this.props.data, completed: !this.props.data.completed };
    this.props.onEdit(newTask);
  };

  render() {
      let style = {textDecoration: this.props.data.completed ? 'line-through' : ''}
    return (
      <div className='todo' style={style}>
        <h3 className='text'>{this.props.data.text}</h3>
        {/* <small className='id'>{this.props.data.id}</small> */}
        <div className='actions'>
          <span onClick={this.delete}>🗑️</span>
          <span onClick={this.complete}>✔️</span>
        </div>
      </div>
    );
  }
}

export default Todo;
