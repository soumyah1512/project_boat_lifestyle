import React from "react";
import {v4 as uuid} from "uuid";

export const Thanks = ()=>{
    return(
        <>
            <div style={{textAlign:"center",marginTop:"8%"}}>
                <img style={{width:"100px"}} src="https://th.bing.com/th/id/OIP.4hCFsRIv_ynvaFadf9Q7UwHaGP?w=246&h=206&c=7&r=0&o=5&pid=1.7"/>
                <h1 style={{color:"teal"}}>You're all set!</h1>
                <p>Your Order ID : #{uuid()}</p>
                <p style={{fontSize:"30px",color:"green"}}><b>Thanks for being Awesome,<br></br>We hope you enjoyed your purchase!</b></p>
                <button style={{borderRadius:"20px",backgroundColor:"blue",color:"white",fontSize:"25px",padding:"10px"}}>Go To Home</button>
            </div>
        </>
    )
}