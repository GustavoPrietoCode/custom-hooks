import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [ ];

//recoge los datos del localstorage
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => { 


    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    const handdleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //para enviar el action al useReducer se usa dispatch
        dispatch( action );
    }

    useEffect(() => {
      //console.log(todos)
      localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos])
    

    const handleDeleteTodo = ( id ) => {
        //console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        // console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done).length;

    return {
        todos,
        handdleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount

    }

}