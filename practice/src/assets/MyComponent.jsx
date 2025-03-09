
import React, { useState } from "react";

function MyComponent() {
    const [name,setName]= useState("");
    const [quantiy,setQuantity]= useState();
    const [comment,setComment]= useState('');
    const [payment,setPayment]= useState();
    const [shipping,setShipping]= useState("Delivery");


   function handleNameChange(event){
    setName(event.target.value)
   };

   function handleQuanty(event){
    setQuantity(event.target.value);
   };

   function handleComment(event){
    setComment(event.target.value)
   };
   function handlePayment(event){
    setPayment (event.target.value)
   };
   function handleShipping(event){
    setShipping(event.target.value);
   }


    return (
        <div className="form-component">
            <input className="input-area" placeholder="Enter your name" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input className="input-area" placeholder="Quantiy" value={quantiy} onChange={handleQuanty} type="number"/>
            <p>Quantity:{quantiy} </p>
            <textarea className="input-area" placeholder="Text here" name="" id=""  onChange={handleComment}></textarea>
            <p>Comment: {comment}</p>
            <select className="input-area" value={payment}  onChange={handlePayment}  name="" id="">
                <option value="">Select Payment Method</option>
                <option value="VISA">VISA</option>
                <option value="Master Card">Master Card</option>
            </select>
            <p>Payment: {payment}</p>
           <label htmlFor="">
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShipping} />
                Pick Up
           </label><br />
           <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShipping} />
           <label htmlFor="">
                Delivery
           </label>
           <p> Shipping: {shipping}</p>
        </div>
    )

};

export default MyComponent;