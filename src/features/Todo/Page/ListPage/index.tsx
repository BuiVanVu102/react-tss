import React, { Component } from 'react'
import { Todo } from '../../../../utils/common'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

import './style.scss'

interface Props {}

interface State {
  listTodo: Todo[]
}

class ListPage extends Component<Props, State> {
  state: State = {
    listTodo: [
      { id: 1, title: 'Buy groceries for next week', status: 'active', date: '12/12/2021' },
      { id: 2, title: 'Renew car insurance', status: 'active', date: '12/12/2021' },
      { id: 3, title: 'Sign up for online course', status: 'active', date: '12/12/2021' },
    ],
  }
  handleSubmit = (values: { title: string; date?: Date }) => {
    const newTodo = {
      id: this.state.listTodo.length + 1,
      title: values.title,
      date: values?.date ? values.date.toLocaleString().split(',')[0] : undefined,
      status: 'active',
    }
    const newTodoList = [...this.state.listTodo, newTodo]
    if (values.title.trim()) {
      this.setState((State) => ({
        listTodo: newTodoList,
      }))
    } else {
      alert('not thing!!!')
    }
    console.log(this.state.listTodo)
  }
  // renderTodoList = () => {}

  render() {
    return (
      <div>
        <div className="container">
          <TodoForm onSubmit={this.handleSubmit}></TodoForm> <hr />
          <TodoList listTodo={this.state.listTodo}></TodoList>
        </div>
      </div>
    )
  }
}

export default ListPage
