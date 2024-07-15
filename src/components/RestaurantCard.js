import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,avgRating,cuisines,locality} = resData
   return(<div className="res-card">
    <img className="res-logo" src={CDN_URL + resData.cloudinaryImageId} alt="res-img"/>
       <h3 className="res-card-name">{name}</h3> 
       <h4>{avgRating}</h4>
       <h4 className="res-card-cuisine">{cuisines.join(",")}</h4>
       <h4>{locality.toLowerCase()}</h4>
    </div>)
}

export default RestaurantCard