
import React, {  useEffect, useRef } from "react";

function UseRefComponent() {
    const inputRef = useRef(null)

    useEffect(() => {
        console.log("Component rendered")
        console.log(inputRef)
    })

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor= "yellow"
    }


    return (
        <div>
            <button onClick={handleClick} >
                click me
            </button>
            <input type="" ref={inputRef} />
        </div>

    )

};
export default UseRefComponent;