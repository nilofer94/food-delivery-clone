import ItemList from "./ItemList";

const RestaurantCategory = ({data,handleShowItems,showItems}) =>{
const handleClick = () =>{
    if(data.title === showItems)
    {
        handleShowItems(null)
    }
    else{
    handleShowItems(data.title)
    } 
}

    return(
        <div className="w-3/4 mx-auto bg-gray-100 shadow-lg p-4 my-6 ">
            <div className="flex justify-between items-center cursor-pointer font-bold text-lg" onClick={()=>handleClick()}>
                <span>{data.title} ({data.itemCards.length})</span>
                {showItems===data.title?<span>&#9650;</span>:<span>&#9660;</span>}
            </div>
            {showItems===data.title&&<div>
                <ItemList items={data.itemCards}/>
            </div>}
            
        </div>
    )
}

export default RestaurantCategory;
