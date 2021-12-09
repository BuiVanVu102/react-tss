import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import TodoFeature from './features/Todo'
import TodoForm from './features/Todo/components/TodoForm'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/todo" element={<TodoFeature />} />
      </Routes> */}
      <Switch>
        <Route path="/todo" component={TodoFeature} exact></Route>
      </Switch>
    </div>
  )
}

export default App
