
import { Link, NavLink } from "react-router-dom"
import NavbarItem from "./navbar";
import Footer from "./footer";
import styles from './login.module.css'
export default function Register (){

    return(

<div>
<NavbarItem/>

<h2>register user</h2>

<input type="text" placeholder="enter user name" id="username"/>
<input type="email" placeholder="enteremail" id="email"/>
<input type="password" placeholder="enter password" id="password"/>
<input type="submit" value="sign up" id="sign_up"/>
<h3>have an account <a href="login.html">
<NavLink>
        <Link to="/">GO TO home PAGE </Link>
        <Link to="/login">GO TO login PAGE </Link>
</NavLink>
    </a></h3> 

<Footer/>
</div>
        

    );

}
