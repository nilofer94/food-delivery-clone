import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import NestedRestaurantCategory from "./NestedRestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
const {resId} = useParams();
const [showItems,setShowItems] = useState(null);
const handleShowItems = (title) =>{
setShowItems(title)
}
const resInfo = useRestaurantMenu(resId)
    if(resInfo === null)
    return <Shimmer/>
    
    const { name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"].includes("ItemCategory"))

    return(
        <div>
          <div className="text-center font-bold text-xl my-6">{name}</div>
          <div className="text-center text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</div>
          <div>
            {categories.map(
              (category) => {
                return(category?.card?.card?.["@type"].includes("NestedItemCategory")?
                <NestedRestaurantCategory data={category?.card?.card} key={category?.card?.card?.title} showItems={showItems} handleShowItems={handleShowItems}/>
                :<RestaurantCategory data={category?.card.card} key={category?.card?.card?.title} showItems={showItems} handleShowItems={handleShowItems}/>
              )
              }
            )}
          </div>
        </div>
    )
}

export default RestaurantMenu;