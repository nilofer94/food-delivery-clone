import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
    const[isLogin,setLogin] = useState(false);
    const isOnline = useOnlineStatus();
    const {loggedinUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)
    console.log("cart",cartItems)

    return (
    <div className="flex justify-between items-center px-8 py-4 mb-4 shadow-xl font-semibold ">
        <div className="logo-container cursor-pointer">
        <Link to="/"> 
        <img className="w-20" src={LOGO_URL} alt="logo"/>
        </Link>
        
        </div>
        <div>
        <ul className="flex">
            {/* <li className="px-4">Online Status : {isOnline?"🟢":"🛑"}</li> */}
            <li className="px-4 cursor-pointer hover:text-orange-500">
            <Link to="/">Home
            </Link>
            </li>
            <li className="px-4 cursor-pointer hover:text-orange-500">
            <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 cursor-pointer hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 cursor-pointer hover:text-orange-500"><Link to="/cart">Cart 
            {cartItems.length>0&&<span>({cartItems.length})</span>}</Link></li>
            <button className="login px-4 hover:text-orange-500" onClick={()=>{setLogin(!isLogin)}}>{isLogin?"Logout":"Login"}</button>
            <li>{loggedinUser}</li>
        </ul>

        </div>
    </div>
        )
}

export default Header;