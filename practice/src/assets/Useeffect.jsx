import React, { useState, useEffect } from "react";

function UseEffectSample() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(() => {
        document.title = `Count : ${count} ${color}`
    }, [color, count])

    function add() {
        setCount(c => c + 1);
    }
    function substract() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }} >Count: {count}</p>
            <button onClick={add}>add count</button>
            <button onClick={substract}>substract count</button><br />
            <button onClick={changeColor}>change color</button>
        </>
    )


};

export function Window() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",resize);
        console.log("EVENT LISTNENER ADDED");

        return()=>{
            window.removeEventListener("resize",resize);
            console.log("EVENT LISTNENER REMOVED")
        }
    },[])

    useEffect(()=>{
        document.title= ` size : ${width} X ${height}`
    })

    function resize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p>Window Width: {width} px</p>
            <p>Window Height: {height} px</p>
        </>

    )
}

export default UseEffectSample;
