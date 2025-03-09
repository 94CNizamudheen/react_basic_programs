
import React,{useState} from "react";

function Foods (){

    const [foods,setFoods]= useState([
        "Apple",
        "Orange",
        "Pinaple",
        "Mango",
        "Banana"
    ]);

    function addFoods(){
        const newFood= document.getElementById("foodInput").value;
        document.getElementById("foodInput").value= "";
        setFoods(f=> [...f,newFood])


    }
    function removeFoods(index){
        setFoods(foods.filter((_ , i )=>i!==index));
    }

    return(
        <div className="food-container">
            <h2 className="food-heading">List of Foods</h2>
            <ul>
                {foods.map((food,index)=><li key={index} onClick={()=>removeFoods(index)} >{food}</li>)}
            </ul>

            <input  type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={addFoods}>ADD Food</button>


        </div>
    )
};

export default Foods;