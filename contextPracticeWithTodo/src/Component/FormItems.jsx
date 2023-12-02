import React, { useState } from 'react'
import { useTodos } from '../Context/ContextTodos'

const FormItems = ({ todo }) => {

    const [toggle, setToggle] = useState(true)
    const [todoMsg, settodoMsg] = useState(todo.todoMsg)
    const [todoCompleted, settodoCompleted] = useState(false)
    const { deleteTodo, updateTodo } = useTodos()

    const edit = () => {
        updateTodo(todo.id, { ...todo, todoMsg })
        setToggle((prev) => prev = !prev)

    }
    const completedTodo = () => {
        settodoCompleted(prev => prev = !prev)
    }
    return (
        <div
            className={` w-full border-2  border-blue-800  h-12
        ${todoCompleted ? "bg-red-400" : ""}  
         flex gap-2 items-center  justify-between max-w-2xl 
           my-1 rounded-2xl`}
        >
            <input type="checkbox"
                onChange={completedTodo}
                checked={todoCompleted}
                className='ml-2' />
            {toggle ?
                <div className={`border border-gray-500 rounded-md h-9 w-[75%]  pl-2
                ${todoCompleted ? "line-through" : ""} 
                flex items-center text-white  `} >
                    {todo.todoMsg}
                </div> :
                <input
                    type="text"
                    className='h-10 w-full p-1 rounded-md outline-none
                   '
                    value={todoMsg}
                    onChange={e => settodoMsg(e.target.value)}
                    placeholder='Enter Todos...'
                />
            }
            <div className='h-10 w-28 flex font-bold  '>
                <button
                    onClick={() => edit()}
                    disabled={todoCompleted ? true : false}
                    className=' flex-1  bg-green-600 '>
                    {toggle ? "✏️" : " 📁"}
                </button>
                <button onClick={() => deleteTodo(todo.id)} className=' flex-1  bg-yellow-400 -500 rounded-r-xl'> ❌</button>
            </div>
        </div>
    )
}

export default FormItems