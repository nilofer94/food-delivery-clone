import React, { useEffect, useState } from "react";
import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSeachText] = useState("")
    const onlineStatus = useOnlineStatus();
    const DiscountAddedRestaurantCard = withDiscountLabel(RestaurantCard)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
       const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json()
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

   
    if(!onlineStatus) return(<h1>Looks like you're offline!Please check your internet connection</h1>)


    return(<div>
        <div className="flex items-center">
            <div className="p-2 m-2">
                <input type="text" className="border border-solid border-black rounded-lg p-2" value={searchText} onChange={(e)=>setSeachText(e.target.value)}/>
                <button className="ml-2 px-4 py-2 bg-green-100 rounded-lg" onClick={()=>{
                    let filteredSearchList = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredSearchList)
                }}>Search</button>
            </div>
            <button className="ml-2 px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                
                let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
                setFilteredRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
        </div>
            <div className="flex items-center flex-wrap">
                {filteredRestaurants.length===0?<Shimmer/>:filteredRestaurants.map((resItem)=>
                    (<Link key={resItem.info.id}
                         to={"/restaurant/"+resItem.info.id}>
                            {resItem.info.aggregatedDiscountInfoV3?<DiscountAddedRestaurantCard resData={resItem.info} />:<RestaurantCard resData={resItem.info}/>}
                            </Link>)
                )}
        </div>
    </div>)
    }

export default Body;