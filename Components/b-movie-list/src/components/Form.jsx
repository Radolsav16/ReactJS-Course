import { root } from "../main";
import Button from "./AddButton";
import Paragraph from "./Paragraph";

export default function Form(){

    const addMovie = () =>{
        const movie = document.getElementById('movie').value;
        
        root.render(
            <>
            <Paragraph name={ movie }/>
            <Button name="Add Movie"/>
            </>
        )

    }

    return (


        <>
         <input type="text" name="movie" id="movie"/>
         <input type="submit" placeholder="Submit" onClick={addMovie} />
        </>
    )
}