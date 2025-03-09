
import React,{useState} from "react";

function ColorPicker(){
    const [color,SetColor]= useState("#dc8ece")

    function handleColor(event){
        SetColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1 className="heading"> Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColor} />
        </div>
    );
};
export default ColorPicker;