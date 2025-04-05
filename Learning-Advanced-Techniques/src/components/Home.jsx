import { use } from "react";
import { useUserContext } from "../providers/User"

export default function  Home () {
    const { user,setUser } = useUserContext();

    
    return(
        <>
        <h1>{user.name}</h1>

          <input type="text"  onChange={(event) =>{
            setUser({name:event.target.value,password:'123'})
          }}/>  
        </>
    )
}