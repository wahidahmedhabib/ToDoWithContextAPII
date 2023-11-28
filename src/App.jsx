import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import TodoItem from './Component/TodoItem'
import TodoForm from './Component/TodoForm'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
    console.log("adtodooo")

  }
  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    console.log("updateee")
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => todos.map((prevTodo) => prevTodo.id == id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  const deletTodo = (id) => {

    const fillData = todos.filter(dell => {
      return dell.id !== id
    })
    setTodos(fillData)
  }
  useEffect(() => {
    const gettodos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(gettodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, toggleCompleted, deletTodo, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App


