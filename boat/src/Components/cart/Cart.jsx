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
          <h2>Choose Payment Method</h2>
        </div>
        <div >
          
          <div className='ss'>
            <div className='ssd' ></div>
            <img  style={{height:'70px' , borderRadius:'10px'}} src="data:image/jpeg;base64,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" alt="" />
          </div>

           <div className='ss'>
            <div className='ssd'></div>
             <img style={{height:'70px',borderRadius:'10px'}} src="data:image/png;base64,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" alt="" />
           </div>
           <div className='ss'>
            <div className='ssd'></div>
             <img style={{height:'70px',borderRadius:'10px'}} src="data:image/png;base64,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" alt="" />
           </div>
        {/* <select>
            <option value="">Choose Payment Method</option>
            <option value="cd"><img src="data:image/jpeg;base64,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" alt="" /></option>
            <option value="db">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">COD</option>
          </select> */}
        </div>
        <div>
         <Link to="/paymentdone"> <button className='ptp'>Proceed To Pay</button></Link>
        </div>
      </div>
      </div>
  )
}

export default Cart