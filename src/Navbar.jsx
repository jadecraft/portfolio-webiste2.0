import { Link, useMatch, useResolvedPath } from "react-router-dom"

function NavBar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Jade Craft</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
            </ul>
        </nav>
    )
}

export default NavBar

function CustomLink ({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname, end: true})
    
    return (
         <li className={isActive ? "active" : ""}>  
            <Link to={to}{...props}>{children}</Link>
         </li>
    )
}