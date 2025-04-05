import { createContext, useContext, useState } from "react";

 const UserContext = createContext();


export  default function UserProvider({
    children
}) {
    const [user,setUser] = useState({
        name:"",
        password:"",
    })
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () =>{
    const data = useContext(UserContext);

    return data;
}