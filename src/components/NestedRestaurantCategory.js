import ItemList from "./ItemList";

const NestedRestaurantCategory = ({data,showItems,handleShowItems}) =>{
    const handleClick = (title) =>{
        if(title === showItems)
        {handleShowItems(null)}
        else{
        handleShowItems(title)
        }
        }
        

    
    return(
        <div className="w-3/4 mx-auto bg-gray-100 shadow-lg p-4 my-6 ">
            <div className="font-bold text-lg py-4">
                <span>{data.title}</span>
            </div>
            <div className="">
                {data.categories.map(
                    category=>{
                        return(
                            <div>
                            <div className="cursor-pointer flex justify-between items-center font-bold text-base pt-6 pb-2 border-b border-black-100 last:border-b-0" onClick={()=>handleClick(category.title)}>
                                <span>{category.title} ({category.itemCards.length})</span>
                                {showItems===category.title?<span>&#9650;</span>:<span>&#9660;</span>}
                            </div>
                            <div>
                            {showItems===category.title&&<ItemList items={category.itemCards}/>}
                            </div>
                            </div>
                        )
                    }
                )}
            </div>
        
    </div>
    )
}

export default NestedRestaurantCategory;