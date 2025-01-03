import TableRow from "./TableRow"

export default function TableBody({
    users,
    onDetails,
    
}){
    return(
        <>
        <tbody>
            {users.map(user => <TableRow key = {user._id} user = {user} onDetails = {onDetails}/>)}
        </tbody>
        </>
    )
}