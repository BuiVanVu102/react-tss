import React, { Component } from 'react'
import { FaInfoCircle, FaPencilAlt, FaSortAmountDownAlt, FaTrashAlt } from 'react-icons/fa'
import { Todo } from '../../../../utils/common'
import { GiSandsOfTime } from 'react-icons/gi'
import { FiCheckSquare } from 'react-icons/fi'
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
        {/* <div className="container"> */}
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
                <FiCheckSquare style={{}} size={'2em'} color={'#007bff'} />
                <input type="text" value={todo.title} className="list__todo--head---text" />
              </div>
              <div className="list__todo--due">
                <GiSandsOfTime
                  style={{ padding: '9px', border: '1px solid #ffc107' }}
                  size={'2em'}
                  color={'#ffc107'}
                />
              </div>
              <div className="list__todo--action">
                <div className="list__todo--action---icon">
                  <FaPencilAlt style={{}} size={'.8em'} color={'#007bff'} />
                  <FaTrashAlt style={{}} size={'.8em'} color={'#dc3545'} />
                </div>
                <div className="list__todo--action---time">
                  <FaInfoCircle style={{}} size={'.6em'} color={'#6c757d'} />
                  <label htmlFor="" className="list__todo--action---time-lb">
                    {todo.date}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </>
    )
  }
}

export default TodoList
