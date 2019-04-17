import React, { Component } from 'react';
import './todos.scss';
import Todo from './todo.jsx';

class Todos extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos-state')) || [],
    newTaskText: '',
    showNoCompleted: false,
  };

  componentDidUpdate() {
    localStorage.setItem('todos-state', JSON.stringify(this.state.todos));
  }

  addTask = text => {
    if (text) {
      let newTask = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date(),
      };

      this.setState({ todos: [newTask, ...this.state.todos], newTaskText: '' });
    }
  };
  handleNewTask = ev => {
    if (ev.keyCode === 13) {
      this.addTask(this.state.newTaskText.trim());
    }
  };

  deleteTask = idQueQuieroEliminar => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== idQueQuieroEliminar) });
  };

  editTask = newTodo => {
    newTodo.updatedAt = new Date();
    let newTodos = this.state.todos.map(todo => (todo.id === newTodo.id ? newTodo : todo));

    this.setState({ todos: newTodos });
  };

  toggleShowNoCompleted = () => this.setState({ showNoCompleted: !this.state.showNoCompleted });

  render() {
    return (
      <div className='todos'>
        <div className='addTask'>
          <input type='text' placeholder='add new task' onKeyUp={this.handleNewTask} value={this.state.newTaskText} onChange={ev => this.setState({ newTaskText: ev.target.value })} />

          <button onClick={this.toggleShowNoCompleted}>toggleShowNoCompleted </button>
        </div>
        <div className='taskList'>
          {this.state.todos.filter(todo => !this.state.showNoCompleted || !todo.completed).map(todo => (
            <Todo data={todo} key={todo.id} onRemove={this.deleteTask} onEdit={this.editTask} />
          ))}
        </div>
        {/* <small>{JSON.stringify(this.state.todos)}</small> */}
      </div>
    );
  }
}

export default Todos;
