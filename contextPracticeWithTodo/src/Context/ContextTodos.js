import React, { createContext, useContext } from "react";

const ContextTodos = createContext({
    todos :{
        id :1,
        todoMsg: "Todo msg",
        complete:false

    },
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    deleteAll : ()=>{},
    completeToggle : (id)=>{},
})


export const TodoProvider = ContextTodos.Provider

export function useTodos(){
    return useContext(ContextTodos)
}