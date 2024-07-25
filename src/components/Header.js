import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    const[isLogin,setLogin] = useState(false);
    const isOnline = useOnlineStatus()
    return (
    <div className="flex justify-between items-center px-8 py-4 mb-4 shadow-xl font-semibold ">
        <div className="logo-container cursor-pointer">
        <Link to="/"> 
        <img className="w-20" src={LOGO_URL} alt="logo"/>
        </Link>
        
        </div>
        <div>
        <ul className="flex">
            <li className="px-4">Online Status : {isOnline?"✔":"🛑"}</li>
            <li className="px-4 cursor-pointer hover:text-orange-500">Home</li>
            <li className="px-4 cursor-pointer hover:text-orange-500">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 cursor-pointer hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 cursor-pointer hover:text-orange-500">Cart</li>
            <button className="login px-4 hover:text-orange-500" onClick={()=>{setLogin(!isLogin)}}>{isLogin?"Logout":"Login"}</button>
        </ul>

        </div>
    </div>
        )
}

export default Header;