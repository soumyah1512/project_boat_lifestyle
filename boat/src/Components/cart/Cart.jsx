import React from 'react'
import { useCart } from 'react-use-cart'
import "./Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if(isEmpty) return <h1 className='cartEmpty'>Your Cart is Empty</h1>
  return (
   <div className='container'>
    <div>
      <div>
            <div className='countDiv'>
                <div>
                  <h5>Total Price: {cartTotal}</h5>
                </div>
                <div>
                  <h5>total Items: ({totalItems}) </h5>
                </div>
            </div>
        {items.map((product, index)=>{
          return(
           
          <div key={index} className='mapDiv'>
          <div>
          <img src={product.image} alt="" />
          </div>
          <div>
          <h2>{product.title}</h2>
          
          <h5>₹{product.price}</h5>
          
          <p>Quantity: ({product.quantity})</p>
          <div className='btndiv'>
            <button className='minus' onClick={()=>updateItemQuantity(product.id, product.quantity -1)}>-</button>
            <button className='add' onClick={()=>updateItemQuantity(product.id, product.quantity +1)}>+</button>
            </div>
          <button className='remove' onClick={()=>removeItem(product.id)}>Remove Item</button>
          </div>
          
            </div>
          )
          
        })}
        
        <div className='clearBtnDiv'>
          <button className='clearBtn' onClick={()=>emptyCart()}>Clear Items</button>
        </div>
      </div>
      </div>
      <div className='infoDiv'>
        <div>
        <h2>Contact Information</h2>
        </div>
        <div>
        <input type="text" placeholder='Email' />
        </div>
        <div>
        <p><input type="checkbox"></input> Keep me updated on my order status over email and whatsapp </p>
        </div>
        <div>
          <h4>
            Shipping Address
          </h4>
        </div>
        <div>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name' />
        </div>
        <div>
          <input type="text" placeholder='Address' />
        </div>
        <div>
        <input type="text" placeholder='Apartment, Suite, etc.' />
        </div>
        <div>
        <input type="text"  placeholder='City' />
        </div>
        <div>
          <select>
          <option value="">Select State</option>
            <option value="">Delhi</option>
            <option value="">Maharashtra</option>
            <option value="">Bangalore</option>
            <option value="">Chennai</option>
          </select>
          <input type="text" placeholder='Pincode' />
        </div>
        <div className='paymentSection'>
          <h2>Payment Options</h2>
        </div>
        <div>
        <select>
            <option value="">Choose Payment Method</option>
            <option value="cd">Cardit Card</option>
            <option value="db">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">COD</option>
          </select>
        </div>
        <div>
         <Link to="/paymentdone"> <button className='ptp'>Proceed To Pay</button></Link>
        </div>
      </div>
      </div>
  )
}

export default Cart