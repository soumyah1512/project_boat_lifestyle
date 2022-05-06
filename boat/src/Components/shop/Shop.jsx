import React from 'react'
import { useCart } from 'react-use-cart'
import ProductsArray from "../../ProductData/Productdata"
import Styles from './Shop.module.css'
const Shop = () => { 

  const{addItem}= useCart();
  
  return (
  <>
     
      <div className={Styles.con}>
      <img className={Styles.imgpic} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734" alt="" />
      <div className={Styles.topleft}>Home/ Wireless Earbuds</div>
      </div>
      
      <div className={Styles.sortDiv}>
        <div>
          <h2>Sort By</h2>
        </div>
        <div>
        
        <select>
          <option value="Featured">Featured</option>
          <option value="A-Z">Alphabetically, A-Z</option>
          <option value="Z-A">Alphabetically, Z-A</option>
          <option value="l2h">Price, low to high</option>
          <option value="h2l">Price, high to low</option>
        </select>
        </div>
      </div>
    <div className={Styles.midshops}>
    <h1 className={Styles.midshop}>Wireless Earbuds</h1>
    <div className={Styles.container} >

       {ProductsArray.map((product,index)=>{
         return (
           <div key={index} className={Styles.innercon}>
               <div>
               <img className={Styles.size} src={product.image} alt="" />
               </div>
               <div className={Styles.smallcon}>

               <div >
                  <h3>{product.title}</h3>
               </div>
                <div className={Styles.flexf}>
                
                <div className={Styles.flexff}>
               <div>
                <p style={{color:'red', fontWeight:'650'}}>₹{product.price}</p>
               </div>

               <div >
                <p >₹<s>{product.mrp}</s></p>
              </div>

                </div>

              <div>
               <button className={Styles.adata} onClick={()=>addItem(product)}>ADD +</button>
              </div>
                </div>

              <div>
              <p >{product.color}</p>
              </div>

           </div>
               </div>


)

})

}

    </div>
    <h1 style={{color:'white', marginLeft:'200px'}}>Airdopes - The Top Rated Bluetooth Earbuds in the Market</h1>
    <div className={Styles.datadd}>

<p>Airdopes offer the most incredible listening experience with revolutionary design. Truly in ear wireless with no cables, no connectors, and no hassles. Designed for comfort and unstoppable music, always remain on your toes as Airdopes brings to you the dopest tech there is out there!</p>
<p>Powered with boAt’s Insta Wake n’ Pair™ technology & ASAP™ Fast Charge, these true wireless earbuds power on and connect instantly right out of the charging case. No more going into settings to find and pair the device, welcome to the new era of seamless, instant connection. </p>
<p>boAt Airdopes come with passive and active noise cancellation technology that cancels out external noise, delivering only the sound of your media to your ears. No longer will there be any interference from external sources. Airdopes are designed and perfected for superior calls and entertainment. These wireless earbuds come with massive drivers that deliver superior sound, sound that is unmatched and inimitable.</p>
<p>Made from fine and premium materials, these bluetooth earbuds are made to be comfortable and secure. You can choose from a variety of silicone tips provided to adjust accordingly and ensure a supreme and comfortable fit based on how you want your experience to be.</p>
<p>Love adventure? Airdopes are here for you. The IPX rating ensures all the mechanical parts are tightly enclosed in an airtight housing that prevents water, sweat from seeping into the earbuds. No longer do you have to worry about damaging a device. Airdopes are rugged and sturdy, able to take on anything that is thrown at it. Make the best of your day without worry.</p>
<p>Airdopes are perfect for WFH calls or meetings. Microphones are placed in key locations on the earbuds that accurately picks up your voice while cancelling out background noise. The result is a clear and crisp voice and a consistent experience. Moreover, with the latest Bluetooth technology, pairing instantly with multiple devices while switching between those devices has never been easier. Simplicity and elegance define Airdopes.</p>
<p>Sound with unmatched style. Airdopes are available in a variety of colours that bring the latest fashion trends to the forefront. The variety of colours available make Airdopes the earbuds to die for.</p>
<p>Style it up with our best earbuds, the new way to flaunt your vibe! From the Queen of Prints, Masaba's funky take on our Airdopes 441 wireless earbuds, to our TRebel range of earbuds, only for women - boAt is bringing to you crazy new feats every passing day. Magic and Music are synonymous when you plug in the Airdopes earphones!

</p>

</div>

<div className={Styles.para}>

<p>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
</div>
</div>
  </>
      
     )
      
  }

export default Shop