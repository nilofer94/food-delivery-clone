import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return (
        <div className="m-4 p-4">
          <h1 className="text-2xl font-bold text-center ">Cart</h1>
          <div className="text-center ">
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            </div>
            <div className='w-3/4 mx-auto bg-gray-100 shadow-lg p-4 my-6 '>
            {cartItems?.length === 0 && (
              <h1> Cart is empty. Add Items to the cart!</h1>
            )}
            <ItemList items={cartItems} />
          </div>
          </div>
        
      );
}

export default Cart
