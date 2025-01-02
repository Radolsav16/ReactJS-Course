import { useState } from "react"

export default function Timer(props){

    const [count,setCount] = useState(0);

    setTimeout(()=>{
        setCount(oldCount => oldCount + 1);
    },1000)

    return(
        <>
            <p>{count}</p>
        </>
    )
}