import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,avgRating,cuisines,locality} = resData
   return(<div className="m-4 p-4 w-[250] bg-blue-50 rounded-lg">
    <img className="res-logo rounded-lg h-full w-full" src={CDN_URL + resData.cloudinaryImageId} alt="res-img"/>
       <h3 className="res-card-name pt-2 text-ellipsis overflow-hidden whitespace-break-spaces font-bold">{name}</h3> 
       <h4>{avgRating}</h4>
       <h4 className="res-card-cuisine text-ellipsis overflow-hidden whitespace-break-spaces">{cuisines.join(",")}</h4>
       <h4>{locality.toLowerCase()}</h4>
    </div>)
}

export const withDiscountCard = (props) =>{
    return (props)=>{
        return (
        <div className="relative">
            <label className="absolute top-1/2 text-white font-bold pl-10 overflow-hidden whitespace-nowrap text-ellipsis">{props?.resData.aggregatedDiscountInfoV3.header + " " + props?.resData.aggregatedDiscountInfoV3.subHeader}</label>
            <RestaurantCard {...props} />
        </div>
            )
    }
}

export default RestaurantCard