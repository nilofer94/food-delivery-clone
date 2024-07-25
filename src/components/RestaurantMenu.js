import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

const {resId} = useParams()
const resInfo = useRestaurantMenu(resId)
  
    if(resInfo === null)
    return <Shimmer/>
    
    
    const { name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"].includes("ItemCategory"))
    
    return(
        <div className="menu">
             <div className="text-center font-bold  text-black text-2xl my-4 py-4 font-serif">{name}</div>
           <p className="text-center font-bold text-lg">{cuisines?.join(" , ")} - {costForTwoMessage}</p>
           <div>
           {categories.map((category)=>{
            return(<RestaurantCategory data={category?.card?.card}/>)
           })}
           </div>
        </div>
    )
}

export default RestaurantMenu;