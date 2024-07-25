import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,avgRating,cuisines,locality} = resData
return(<div className="w-[200] p-4 m-4 bg-blue-50 rounded-lg transition ease delay-100  hover:scale-90 duration-100">
      <img className="rounded-xl h-[170] w-full" src={CDN_URL + resData.cloudinaryImageId} alt="res-img"/>
       <h3 className="font-bold pt-4 overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3> 
       <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">{avgRating}</h4>
       <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(",")}</h4>
       <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">{locality.toLowerCase()}</h4>
    </div>)
}

export const withDiscountLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div className="relative">
                <label className="absolute text-white font-bold top-1/2 px-10 overflow-hidden whitespace-nowrap text-ellipsis">{props.resData.aggregatedDiscountInfoV3.header +" " + props.resData.aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard