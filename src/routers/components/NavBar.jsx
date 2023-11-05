import { NavLink, Link } from "react-router-dom"
import '../styles/Navbar.css'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar1">
                <Link to='/' className="navbar-brand" href="#"> PIXELART </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to={'/'} className="nav-item nav-link" > Home </NavLink>
                        <NavLink to={'/about'} className="nav-item nav-link" >Music</NavLink>
                        <NavLink to={'/random'} className="nav-item nav-link" >Pictures</NavLink>
                        <NavLink to={'/photos'} className="nav-item nav-link" >Photos</NavLink>
                        <NavLink to={'/art'} className="nav-item nav-link" >Art</NavLink>
                        <NavLink to={'/videos'} className="nav-item nav-link" >Videos</NavLink>
                        <NavLink to={'/movies'} className="nav-item nav-link" >Movies Api</NavLink>
                        <NavLink to={'/ImgApi'} className="nav-item nav-link" >Img Api</NavLink>
                    </ul>
                </div>
            </nav>
        </>

    )
}
