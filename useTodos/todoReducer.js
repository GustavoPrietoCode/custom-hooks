export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type) {
        case '[TODO] Add Todo':
            //spread con todo el initialstate + action.payload = nuevo todo
            return [ ...initialState, action.payload  ] 
        case '[TODO] Remove Todo':
            //spread con todo el initialstate + action.payload = nuevo todo
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if( todo.id === action.payload ){ //id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        
        default:
            return initialState;
    }

}