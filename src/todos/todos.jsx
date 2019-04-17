import React, { Component } from 'react';
import './todos.scss';
import Todo from './todo.jsx';

class Todos extends Component {
  state = {
    todos: [],
    newTaskText: '',
  };

  addTask = text => {
    if (text) {
        let newTask = {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date(),
        };

        this.setState({ todos: [...this.state.todos, newTask] , newTaskText: ''});
    }
  };
  handleNewTask = ev => {
    if (ev.keyCode === 13) {
        this.addTask(this.state.newTaskText.trim())
    }
  };

  render() {
    return (
      <div className='todos'>
        <div className='addTask'>
          <input type='text' placeholder='add new task' onKeyUp={this.handleNewTask} value={this.state.newTaskText} onChange={ev => this.setState({ newTaskText: ev.target.value })} />
        </div>
        <div className='taskList'>
          {this.state.todos.map(todo => (
            <Todo text={todo.text} key={todo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
