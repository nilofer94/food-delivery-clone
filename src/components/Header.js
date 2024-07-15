import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"


const Header = () =>{
    const[isLogin,setLogin] = useState(false)
    return (
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={()=>{setLogin(!isLogin)}}>{isLogin?"Logout":"Login"}</button>
        </ul>

        </div>
    </div>
        )
}

export default Header;