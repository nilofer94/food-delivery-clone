import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    return(
        <div className="w-3/4 mx-auto bg-gray-100 shadow-lg p-4 my-6 ">
            <div className="flex justify-between items-center cursor-pointer font-bold text-lg">
                <span>{data.title} ({data.itemCards.length})</span>
                <span> &#9660;</span>
            </div>
            <div>
                <ItemList items={data.itemCards}/>
            </div>
            
        </div>
    )
}

export default RestaurantCategory;