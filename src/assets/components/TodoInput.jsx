import React, { useEffect, useState } from 'react'
import KanbanLabel from './KanbanLabel'
function Todoinput () {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const [input, setInput] = useState('')
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAdd = e => {
    e.preventDefault()
    if (input !== '') {
      setTodos([...todos, { id: todos.length + 1, text: input.trim() }])
    }
    setInput('')
  }

  function handleDeleteClick (id) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todos.filter(todo => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id
    })
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTodos(removeItem)
  }
  return (
    <div className='mx-4'>
      {' '}
      <div className='flex flex-col w-full '>
        <label className='text-sky-800  bg-sky-300/80 my-4 font-bold w-fit rounded-lg px-4 py-2'>
          To Do
        </label>
        <input
          className='rounded-lg px-4  py-2 font-semibold border-2 border-gray-500 bg-slate-700'
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className='bg-sky-300 px-4 font-bold text-neutral-800 py-2 rounded-lg mt-4 '
          type='submit'
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className='bg-slate-800 min-h-96 w-auto lg:w-72 py-2 px-4 my-4 rounded-lg '>
        <div className=' '>
          <ul>
            {todos.map(todo => (
              <div className='flex py-2 px-4 bg-blue-400 text-gray-800 font-semibold rounded-lg flex-row my-4 justify-between'>
                <li className='m-2' key={todo.id}>
                  {todo.text}
                </li>
                <button
                  className='flex align-middle p-2 h-fit w-fit'
                  onClick={() => handleDeleteClick(todo.id)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                  >
                    <path d='M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                  </svg>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  {
    /*

  return (
    <div>
      <input
        onChange={e => setTodos(e.target.value)}
        type='text'
        required='true'
        placeholder='task'
      ></input>
      <button onClick={displayTodo}>add</button>
      <button>Update </button>
      <button>Delete</button>
      <div>
        {todos.map(todo => (
          <div>{todo}</div>
        ))}
      </div>
    </div>
  )*/
  }
}

export default Todoinput
