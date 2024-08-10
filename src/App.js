import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const About = lazy(()=>import("./components/About"))
const Grocery = lazy(()=>import("./components/Grocery"))


const AppLayout = () =>{

  const [userName,setUserName] = useState("");

  useEffect(()=>{
    const data = {
      name: "Nilo"
    };
    setUserName(data.name)
  },[])
    return (
      <Provider store={appStore}>
     <UserContext.Provider value={{loggedinUser:userName,setUserName}}>
    <div className="app">
     <Header/>
     <Outlet/>
    </div>
    </UserContext.Provider> 
    </Provider>

        )
}

const appRouter = createBrowserRouter([
{
path: "/",
element : <AppLayout/>,
children:[
  {
    path:"/",
    element:<Body/>
  },
  {
  path : "/about",
  element : <Suspense fallback={<Shimmer/>}><About/> </Suspense>
  },
  {
    path : "/contact",
    element : <Contact/> 
    },
    {
      path : "/grocery",
      element : <Suspense fallback={<Shimmer/>}><Grocery/> </Suspense>
      },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu/>
  },
  {
    path : "/cart",
    element : <Cart/>
    }],
errorElement : <Error/>
}

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)