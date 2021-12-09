import React, { Component, FormEvent, SyntheticEvent } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import './style.scss'

interface Props {
  onSubmit: (value: { title: string; date?: Date }) => void
}
interface State {
  title: string
  date?: Date | undefined
}

class TodoForm extends Component<Props, State> {
  state = {
    title: '',
    date: undefined,
  }

  handleSubmit = (value: { title: string; date?: Date }) => {
    const { onSubmit } = this.props

    if (onSubmit) {
      onSubmit(value)
    }
    this.state.title = ''
  }
  handleOnchange = (event: any) => {
    event.preventDefault()
    this.setState((State) => ({
      title: event.target.value,
    }))
  }

  handleDateChange = (e: any) => {
    this.setState({ date: new Date(e.target.value) })
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header__title">
            <FaCheckSquare
              className="header__title--icon"
              style={{}}
              size={'3em'}
              color={'#007bff'}
            />
            <u className="header__title--text">My Todo-s</u>
          </div>
          <div className="header__input">
            <input
              type="text"
              name="title"
              id=""
              value={this.state.title}
              className="header__input--text"
              placeholder="Add new"
              onChange={this.handleOnchange}
            />
            <input
              type="date"
              name=""
              id=""
              className="header__input--date"
              onChange={this.handleDateChange}
            />
            <button
              type="submit"
              className="header__input--submit"
              onClick={() => this.handleSubmit({ title: this.state.title, date: this.state.date })}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoForm
