import { cleanup } from '@testing-library/react';
import React , {useEffect} from 'react';
import {useLocation} from 'react-router-dom'

export default function AddEventListenerContainers () {

    function handleListenerClick(event) {
        console.log(event)
        
    }

   useEffect(()=> {
       
       window.addEventListener('click', handleListenerClick)

       return()=> {
        window.removeEventListener('click',handleListenerClick)

       }


   }, [])

    return(

    <div>

    </div>

    )


}
