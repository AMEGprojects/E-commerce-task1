
import { Link, NavLink } from "react-router-dom"
import NavbarItem from "./navbar";
import Footer from "./footer";
import styles from './login.module.css';
export default function Login (){

    return(

<div>
<NavbarItem/>
<NavLink>
        <Link to="/">GO TO home PAGE </Link>
        <Link to="/register">GO TO register PAGE </Link>
</NavLink>

<h2>login user</h2>


<input  type="text" placeholder="enter user name" id="username"/>
<input  type="password" placeholder="enter password" id="password"/>
<input  type="submit" value="sign in" id="sign_in"/>
<h3>have an account <a href="register.html">Register</a></h3> 


<Footer/>


</div>
        

    );

}