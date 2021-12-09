import React, { Component } from 'react'
import { FaInfoCircle, FaPencilAlt, FaSortAmountDownAlt, FaTrashAlt } from 'react-icons/fa'
import { Todo } from '../../../../utils/common'

import './style.scss'
interface Props {
  listTodo: Todo[]
}
interface State {}

class TodoList extends Component<Props, State> {
  state: State = {}

  render() {
    const { listTodo } = this.props
    return (
      <>
        <div className="container">
          <div className="main">
            <div className="main__filter">
              <label htmlFor="" className="main__filter--lb">
                Filter
              </label>
              <select name="" id="" className="main__filter--sl">
                <option value="all" selected>
                  All
                </option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
                <option value="has-due-date">Has-due-date</option>
              </select>
            </div>
            <div className="main__sort">
              <label htmlFor="" className="main__sort--lb">
                Sort
              </label>
              <select name="" id="" className="main__sort--sl">
                <option value="added-date-asc" selected>
                  Added date
                </option>
                <option value="due-date-desc">Due date</option>
              </select>
              <FaSortAmountDownAlt
                className="main__sort--icon"
                style={{}}
                size={'1em'}
                color={'#007bff'}
              />
            </div>
          </div>
          <div className="list">
            {listTodo.map((todo) => (
              <div className="list__todo" key={todo.id}>
                <div className="list__todo--head">
                  <input type="checkbox" className="list__todo--head---ip" />
                  <span className="list__todo--head---title">{todo.title}</span>
                </div>
                <div className="list__todo--action">
                  <div className="list__todo--action---icon">
                    <FaPencilAlt />
                    <FaTrashAlt />
                  </div>
                  <div className="list__todo--action---time">
                    <FaInfoCircle />
                    <label htmlFor="">28th Jun 2020</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default TodoList
