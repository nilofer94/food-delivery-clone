const RestaurantCategory = (props) => {

const {data} = props
console.log(data)
  return (
    <div>
     <div className="w-full bg-gray">
        <span>
            {data.title}
        </span>
     </div>
    </div>
  )
}

export default RestaurantCategory
