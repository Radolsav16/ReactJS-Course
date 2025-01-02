import { root } from "../main"
import Form from "./Form"

export default function Button(props){

    
    const addMovieHandler = () => {
        root.render(
            <Form />
        )

      
    }

    return(
        <>
            <button onClick={ addMovieHandler }>{props.name}</button>
        </>
    )
}