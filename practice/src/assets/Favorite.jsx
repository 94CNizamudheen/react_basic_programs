

import React,{useState} from "react";

function Favorite(){

    const [car,setCar]= useState({
        year:2000,
        makers:"Honda",
        model:"City"
    });
    function handleCarYear(event){
        setCar(c=>({...c,year:event.target.value}));
    };
    function handleCarMakers(event){
        setCar(c=>({...c,makers:event.target.value}));
    };
    function handleCarModel(event){
        setCar(c=>({...c,model:event.target.value}));
    }

    return(
        <div className="favorite">
            <p>Your Favorite Car is : {car.year} {car.makers} {car.model} </p>
            <input type="number" value={car.year} onChange={handleCarYear}   /><br />
            <input type="text" value={car.makers} onChange={handleCarMakers}  /><br />
            <input type="text" value={car.model} onChange={handleCarModel}  />
        </div>
    )
};
export default Favorite