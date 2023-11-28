import { createContext, useContext } from "react";

export const todosContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo Msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deletTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const TodoProvider = todosContext.Provider;

export function useTodos() {
  return useContext(todosContext);
}











// import {createContext, useContext} from "react"

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: " Todo msg",
//             completed: false,
//         }
//     ],
//     addTodo: (todo) => {},
//     updateTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {}
// })


// export const useTodo = () => {
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider