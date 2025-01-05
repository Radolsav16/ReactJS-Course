import TableRow from "./TableRow"

export default function TableBody({
    users,
    
}){
    return(
        <>
        <tbody>
            {users.map(user => <TableRow key = {user._id} user = {user} />)}
        </tbody>
        </>
    )
}