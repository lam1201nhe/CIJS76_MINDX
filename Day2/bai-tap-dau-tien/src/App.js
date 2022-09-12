import React from 'react'
import Task from './Task'

const App = () => {
  const listTasks = [
    "clean up bedroom", "buy some milk", "jogging ", "Learn react", "Doing exercises"
    ]
  return (
    <div className="container-task">
      <input type="text" placeholder="Enter the task here ..." />
        {listTasks.map((e, index) => {
        return <Task key={index} task={e} />
      })}
    </div>
  )
}

export default App