
import React,{useState} from "react";

function Car(){

    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]= useState(new Date().getFullYear());
    const [carMaker,setCarMaker]= useState("");
    const [carModel,setCarModel]= useState("");
    
    function addCar(){
      const newCar={
         year:carYear,
         maker:carMaker,
         model:carModel
      };
      setCars(c=>[...c,newCar])
      setCarYear(new Date().getFullYear());
      setCarModel("")
      setCarMaker("")
      
    };
    function removeCar(index){
      setCars(c=> c.filter((_,i)=> i!==index))
    };
    function yearChange(e){
      setCarYear(e.target.value)
    };
    function makerChange(e){
      setCarMaker(e.target.value)
    }
    function modelChange(e){
      setCarModel(e.target.value)
    }

 return (
    <div className="car-container">
      <h2>List Of Car Objects</h2>
      <ul>
         {cars.map((car,index)=>
         <li key={index} onClick={()=>removeCar(index)}>{car.year} {car.maker} {car.model}</li>
         )}
      </ul>

      <input type="number" value={carYear} onChange={yearChange}  /><br />
      <input type="text" value={carMaker} onChange={makerChange} placeholder="Maker"/><br />
      <input type="text" value={carModel} onChange={modelChange} placeholder="Model" /><br />
      <button onClick={addCar} >ADD </button>


    </div>
 )
};

export default Car;