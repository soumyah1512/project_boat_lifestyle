import React from 'react'
import { useCart } from 'react-use-cart'
import ProductsArray from "../../ProductData/Productdata"




const Shop = () => {

  const{addItem}= useCart();
  // const addItem = useCart() => {
  //   console.log("abc");
  // }


 

  return (
    <>
    <div>Shop</div>

    {ProductsArray.map((product, index)=>{
    
       return(
      <div key={index}>
        <span ></span>
        <div>
        <img src={product.image} alt="" />
        </div>
        <div>
        <h3>{product.title}</h3>
        </div>
        <div>
        <p>{product.price}</p>
        </div>
        <div>
        <p>{product.mrp}</p>
        </div>
        <div>
        <p>{product.color}</p>
        </div>
        <div>
        <button onClick={()=>addItem(product)}>Add To Cart</button>
        </div>
        
      </div>
     )
      
})}
  </>
  )
}

export default Shop