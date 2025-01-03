import { useState } from "react"
import TableBody from "./TableBody"
import TableHead from "./TableHead"
import { useEffect } from "react";
import { baseUrl } from "../../../utils/paths";
import { requestApi, requester } from "../../../service/requester";
import UserDetail from "../userDetail/UserDetail";

export default function Table(){

    const [users,setUsers] = useState([]);
    const  [details,setDetails] = useState(null);


    useEffect(()=>{
        (async function getUsers() {

            const users = Object.values(await requestApi.get(baseUrl));
            setUsers(users);
        })()
    })

    const seeDetailsHandler = (user) =>{
        setDetails(user);
    }

    const onCLoseHanlder = () => {
        setDetails(null);
        
        
    }

   

    return(
        <>
      <div className="table-wrapper">
        <table className="table">
         <TableHead />
         <TableBody users = {users} onDetails = {seeDetailsHandler} />
         {details && <UserDetail  user ={details} close = { onCLoseHanlder } />}
         </table>
      </div> 
    </>
 )
}