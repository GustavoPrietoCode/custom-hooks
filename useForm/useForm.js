// vídeo 123

import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onResetForm = () => { setFormState( initialForm ) };


    // vídeo 119
    /**
     * 
     * @param {target} event.target es el target del input
     * al desestructurar target, sacamos el name y el value del input 
     */
    const onInputChange = ( { target }) => {
        //console.log(target); 
        const { name, value } = target; //sacamos el name y el value del input
        setFormState({
            ...formState,
            [ name ]: value //JS propiedad computada [name] le damos el valor del value
        });
    }

    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange
    }
}
