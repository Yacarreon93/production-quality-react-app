import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList } from './components/todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: false },
        { id: 2, name: 'Build an app', isComplete: false },
        { id: 3, name: 'Ship it', isComplete: true },
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(evt) {
    evt.preventDefault()
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <div className="Todo-app">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.currentTodo} />
          <TodoList
            todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
