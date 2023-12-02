
import { useEffect, useState } from 'react'
import './App.css'
import FormTodo from './Component/FormTodo'
import FormItems from './Component/FormItems'
import { TodoProvider } from './Context/ContextTodos'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((oldTodos) => [...oldTodos, { todoMsg: todo, ...todo }])
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    const setTodo = localStorage.setItem("todos", JSON.stringify(todos))
    // }
  }, [todos])

  const deleteTodo = (id) => {
    const filteredTodo = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodo)
  }
  const completeToggle = (id) => {
    console.log("addd")
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id == id ? { ...todo, todoMsg: todo.todoMsg } : prevTodo))
  }

  const deleteAll = () => {
    setTodos([])
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, completeToggle, deleteAll }}>
      <div className='min-h-screen bg-red-800 py-8 ' >
        <div className=' m-auto w-full max-w-2xl text-center font-bold text-white text-xl'>
          <h1>Massage Your Todos </h1>
        </div>
        <FormTodo />
        <div className='flex flex-col justify-center items-center min-h-[60px]'>
          {todos?.map((todo) => (
            <div
              className='flex flex-col max-w-2xl w-full justify-center items-center min-h-[60px]' key={todo.id} >
              <FormItems todo={todo} />
            </div>
          )
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
