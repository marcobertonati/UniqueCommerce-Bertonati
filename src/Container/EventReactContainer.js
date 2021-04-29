import React , {useEffect} from 'react';
import {useLocation} from 'react-router-dom'



export default function TestContainer () {

    function handleInputChange(event) {
        // console.log(event.target.value)
        // console.log(event)

        // CHEQUEAR PORQUE NO FUNCIONA. EN REALIDADN O ES EVENT.TARGET.VALUE, es otra prop de EVENT.
        if (event.target.value === "a") {
            event.preventDefault();
        } else {
            console.log(event.target.value);
        }
    }

    function handleInputFocus (event) {
        // console.log('Se ejecutó handleInputFocus')
        // console.log(event)
    }

    function handleInputBlur(event) {
        // console.log('Se ejecutó handleInputBlur')
        // console.log(event)
    }

    function handleButtonClick(event) {
        // console.log('Se ejecutó handleButtonClick')
        // console.log(event)
        
    }

    // este evento haría que no nos deje escribir en el input, por ejemplo que no pueda ingresar caracteres especiales
    function handleKeyDown(event) {
        event.preventDefault();
        
    }

    return(

    <div>
        <input onKeydDown={handleKeyDown} onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur} type="text" placeholder="Hola ingresá tu nombre" />
        <button onClick={handleButtonClick}>Click</button>
    </div>

    )


}