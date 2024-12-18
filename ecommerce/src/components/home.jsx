
import { Link, NavLink } from "react-router-dom"
import NavbarItem from "./navbar"
import Footer from "./footer"
export default function Home(){

    return(
<div>
<NavbarItem/>
    <NavLink>
        <Link to="/login">GO TO login PAGE </Link>
        <Link to="/register">GO TO register PAGE </Link>
</NavLink>
<h1>HooooooME PAGE</h1>

<Footer/>
</div>
    )


}