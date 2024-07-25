import React, { useEffect, useState } from "react";
import RestaurantCard, { withDiscountCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSeachText] = useState("");
    const DiscountedRestaurantCard = withDiscountCard(RestaurantCard)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
       const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json()
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

   

    return(<div className="body">
        <div className="filter flex items-center">
            <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black rounded-lg px-2" value={searchText} onChange={(e)=>setSeachText(e.target.value)}/>
                <button className="bg-green-100 mx-4 px-4 cursor-pointer rounded-lg" onClick={()=>{
                    let filteredSearchList = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredSearchList)
                }}>Search</button>
            </div>
            <div>
            <button className="px-4 bg-gray-50 cursor-pointer rounded-lg" onClick={()=>{
                let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
                setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
            </div>
        </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurants.length===0?<Shimmer/>:filteredRestaurants.map((resItem)=>
                    (<Link key={resItem.info.id}
                         to={"/restaurant/"+resItem.info.id}>
                            {resItem.info.aggregatedDiscountInfoV3 ? <DiscountedRestaurantCard resData={resItem.info} /> : <RestaurantCard resData={resItem.info} />}
                            </Link>)
                )}
        </div>
    </div>)
    }

export default Body;