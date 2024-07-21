import React from 'react'
import Todoinput from './assets/components/TodoInput'
import ProgressTodo from './assets/components/ProgressTodo'
import BlockedTask from './assets/components/BlockedTask'
import CompletedTask from './assets/components/CompletedTask'
import TodoCard from './assets/components/TodoCard'

const App = () => {
  return (
    <div className='font-container flex justify-center align-middle flex-col lg:flex-row m-10'>
      <Todoinput />
      <ProgressTodo />
      <BlockedTask />
      <CompletedTask />
    </div>
  )
}

export default App
