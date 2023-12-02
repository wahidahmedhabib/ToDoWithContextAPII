import React, { useState } from 'react'
import { useTodos } from '../Context/ContextTodos'

const FormTodo = () => {
    const [todo, setTodo] = useState('')
    const { addTodo, deleteAll } = useTodos()

    const add = (e) => {
        e.preventDefault()
        // console.log(todo)
        if (!todo) return

        addTodo({ id: Date.now(), todoMsg: todo, completeToggle: true })
        setTodo('')
        // console.log("TODO->",todo)

    }
    const allDelete = () => {
        console.log('Alll delete')
    }
    return (
        <div>
            <form onSubmit={add} className='border-purple-100   flex  justify-center '>
                <div className=' w-full  h-12 border-2 border-blue-800 flex gap-0  
                justify-between max-w-2xl my-4 rounded-2xl '>
                    <input type="text"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        className='w-full p-1 outline-none rounded-l-xl'
                        placeholder='Enter Todos...'
                    />
                    <div className='w-28 flex font-bold  float-right'>
                        <button className=' flex-1  bg-green-600 ' >Add</button>
                        <button onClick={() => deleteAll()} className=' flex-1  bg-orange-500 rounded-r-xl'>DEL</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default FormTodo