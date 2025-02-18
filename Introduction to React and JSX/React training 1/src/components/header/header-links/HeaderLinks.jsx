export default function HeaderLinks({link,label}){
    return(
        <>
            <li className="nav-item active">
              <a className="nav-link" href={link}>
                {label}
              </a>
            </li>
        </>
    )
}