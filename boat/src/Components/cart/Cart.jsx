import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if(isEmpty) return <h1>Your Cart is Empty</h1>
  return (
   
    <div>
      <div>
        <h5>Cart({totalUniqueItems}) total Items: ({totalItems}) </h5>
        {items.map((product, index)=>{
          return(
            <div>
              <span key={index}></span>
          <div>
          <img src={product.image} alt="" />
          </div>
          <div>
          <h3>{product.title}</h3>
          </div>
          <div>
          <p>₹{product.price}</p>
          </div>
          <div>
          <p>₹{product.mrp}</p>
          </div>
          <div>
          <p>{product.color}</p>
          </div>
          <div>
          <p>Quantity: ({product.quantity})</p>
          </div>
          <div>
            <button onClick={()=>updateItemQuantity(product.id, product.quantity -1)}>-</button>
            <button onClick={()=>updateItemQuantity(product.id, product.quantity +1)}>+</button>
          </div>
          <div>
          <button onClick={()=>removeItem(product.id)}>Remove Item</button>
          </div>
          
            </div>
          )
          
        })}
        <div>
            <h2>Total Price: {cartTotal}</h2>
        </div>
        <div>
          <button onClick={()=>emptyCart()}>Clear Card</button>
        </div>
      </div>
      </div>
      
  )
}

export default Cart