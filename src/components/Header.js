import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    const[isLogin,setLogin] = useState(false);
    const onlineStatus = useOnlineStatus()
    return (
    <div className="flex justify-between items-center border-b-4 border-gray-100sss">
        <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="logo"/>
        </div>
        <div className="nav-items">
        <ul className="flex p-4 m-4">
            <li className="px-4">Home</li>
            <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">Cart</li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">{onlineStatus? "🟢" : "🔴"}</li>
            <button className="login" onClick={()=>{setLogin(!isLogin)}}>{isLogin?"Logout":"Login"}</button>
        </ul>

        </div>
    </div>
        )
}

export default Header;