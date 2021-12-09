import React, { Component } from 'react'
import { Todo } from '../../../../utils/common'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

interface Props {}

interface State {
  listTodo: Todo[]
}

class ListPage extends Component<Props, State> {
  state: State = {
    listTodo: [
      { id: 1, title: 'Buy groceries for next week', status: 'complete' },
      { id: 2, title: 'Renew car insurance', status: 'complete' },
      { id: 3, title: 'Sign up for online course', status: 'complete' },
    ],
  }
  handleSubmit = (values: { title: string; date?: Date }) => {
    const newTodo = {
      id: this.state.listTodo.length + 1,
      title: values.title,
      date: values?.date ? values.date.toString() : undefined,
      status: 'complete',
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
  renderTodoList = () => {}

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.handleSubmit}></TodoForm>
        <TodoList listTodo={this.state.listTodo}></TodoList>
      </div>
    )
  }
}

export default ListPage
