import { addItem } from "../utils/cartSlice";
import { DISH_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux"

const ItemList = ({items}) =>{
    const dispatch = useDispatch()
    
    
    const handleItems = (item)=>{
      dispatch(addItem(item))
    }
    
    
    return(
        <div>
           {items.map(item=>{
                return(<div key={item?.card?.info?.id} className="flex justify-between items-center py-4 my-4 border-b border-black-100 last:border-b-0">
                     <div className="flex flex-col w-9/12">
                        <div className="text-lg font-semibold ">
                        {item.card.info.name}
                        </div>
                        <div className="text-lg font-semibold py-1">
                        <span>₹ {item.card.info.defaultPrice?(item.card.info.defaultPrice/100):(item.card.info.price)/100}</span>
                        </div>
                        {item.card.info.ratings.aggregatedRating.rating&&<div className="py-1">
                            <span className="text-green-700 font-bold">
                            &#10032;{item.card.info.ratings.aggregatedRating.rating}
                            </span>
                            <span className="text-gray-700 font-bold font-sm pl-1">
                            ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                            </span> 
                        </div>}
                        <div className="text-sm font-sans font-medium line-clamp-2 text-gray-700 py-1">
                            {item.card.info.description}
                        </div>
                    </div>
                    
                    <div className="px-4 w-3/12">
                   
                    <div className="relative">
                      <img className="rounded-xl h-32 w-full object-cover" alt={item.card.info.name} src={DISH_IMAGE_URL + "/" + item.card.info.imageId} />
                      <div className="absolute w-full -bottom-3">
                        <div className="flex justify-center">
                      <button className="bg-white shadow-lg text-center px-8 py-1 rounded-lg text-green-600 text-lg font-extrabold hover:bg-gray-300"
                      onClick={()=>handleItems(item)}>ADD</button>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>)
           })} 
        </div>
    )
}

export default ItemList