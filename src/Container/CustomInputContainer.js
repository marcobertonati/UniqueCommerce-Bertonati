import React , {useEffect} from 'react';
import {useLocation} from 'react-router-dom'



export default function CustomInputContainer (props) {

    return (
        <input style={{color: 'red'}} {...props} />
    )
}