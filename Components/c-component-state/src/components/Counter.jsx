import { useState } from 'react'
import './Counter.css'


export default function Counter(){

    const [count,setCount] = useState(0);

    const addition = () => {
        setCount(oldCount => oldCount + 1);
    }

    const subtaction = () => {
        setCount(oldCount => oldCount - 1);
    }

    const reset = () =>{
        setCount(0);
    }


    let className = 'positive-text';

    if(count < 0){
        className = 'negative-text'
    }


    return(

        <>
            <p className={className}>{count}</p>

            <button onClick={addition}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={subtaction}>-</button>
        </>
    )
}