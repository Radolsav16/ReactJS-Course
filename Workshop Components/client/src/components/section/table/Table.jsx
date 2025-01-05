import { useState } from "react"
import TableBody from "./TableBody"
import TableHead from "./TableHead"
import { useEffect } from "react";
import { baseUrl } from "../../../utils/paths";
import { requestApi, requester } from "../../../service/requester";


export default function Table(){

    const [users,setUsers] = useState([]);


    useEffect(()=>{
        (async function getUsers() {

            const users = Object.values(await requestApi.get(baseUrl));
            setUsers(users);
        })()
    },[])


    return(
        <>
      <div className="table-wrapper">
        <table className="table">
         <TableHead />
         <TableBody users = {users} />
         </table>
      </div> 
    </>
 )
}