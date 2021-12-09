import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPage from './Page/ListPage'

interface Props {}
interface State {}

class TodoFeature extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/todo" component={ListPage} exact></Route>
        </Switch>
      </div>
    )
  }
}

export default TodoFeature
