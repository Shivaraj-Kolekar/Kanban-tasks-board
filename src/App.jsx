import React from 'react'
import Todoinput from './assets/components/TodoInput'
import ProgressTodo from './assets/components/ProgressTodo'
import BlockedTask from './assets/components/BlockedTask'
import CompletedTask from './assets/components/CompletedTask'
import TodoCard from './assets/components/TodoCard'

const App = () => {
  return (
    <div className='flex justify-center flex-col align-middle'>
      <div className='font-container flex justify-center align-middle flex-col my-10 lg:flex-row m-2'>
        <Todoinput />
        <ProgressTodo />
        <BlockedTask />
        <CompletedTask />
      </div>
    </div>
  )
}

export default App
