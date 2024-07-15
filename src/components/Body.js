import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSeachText] = useState("")

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
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>setSeachText(e.target.value)}/>
                <button onClick={()=>{
                    let filteredSearchList = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredSearchList)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                let filteredList = listOfRestaurants.filter(res=>res.info.avgRating > 4);
                setListOfRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
        </div>
            <div className="res-container">
                {filteredRestaurants.length===0?<Shimmer/>:filteredRestaurants.map((resItem)=>
                    (<Link key={resItem.info.id}
                         to={"/restaurant/"+resItem.info.id}>
                            <RestaurantCard resData={resItem.info} />
                            </Link>)
                )}
        </div>
    </div>)
    }

export default Body;