import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,avgRating,cuisines,locality,sla} = resData


    return(
    <div className="rounded-lg transition ease delay-100  hover:scale-90 duration-100">
        <div className="relative">
      <img className="rounded-2xl h-[160] w-full object-cover drop-shadow-md" src={CDN_URL + resData.cloudinaryImageId} alt="res-img"/>
      <div className="absolute text-white font-extrabold text-lg bottom-0 px-3 pb-2 overflow-hidden whitespace-nowrap text-ellipsis w-full h-1/2 rounded-b-2xl bg-linear">
      {props.resData.aggregatedDiscountInfoV3 && <label className="absolute bottom-0">
        {props?.resData?.aggregatedDiscountInfoV3?.header + " " + props?.resData?.aggregatedDiscountInfoV3?.subHeader}</label>}
        </div>
        </div>
       <h3 className="ml-3 font-bold pt-4 overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3> 
       <h4 className="ml-3 overflow-hidden whitespace-nowrap text-ellipsis font-semibold"><span className="pr-1 text-green-700">★</span>{avgRating}<span className="text-xl pl-1">&bull;</span><span className="pl-1">{sla.slaString}</span></h4>
       <h4 className="ml-3 overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">{cuisines.join(",")}</h4>
       <h4 className="ml-3 overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">{locality.toLowerCase()}</h4>
    </div>)
}

export const withDiscountLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div className="relative">
                {/* <label className="absolute text-white font-bold top-1/2 px-10 overflow-hidden whitespace-nowrap text-ellipsis">{props.resData.aggregatedDiscountInfoV3.header +" " + props.resData.aggregatedDiscountInfoV3.subHeader}</label> */}
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard