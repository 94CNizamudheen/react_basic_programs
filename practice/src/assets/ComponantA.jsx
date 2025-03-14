import React,{useState,createContext} from "react";
import ComponantB from "./ComponantB";


export const UserContext= createContext();


function ComponantA(){
    const [user,setUser]= useState("Nizam")
    return(
        <div className="box">
            <h1>Componant A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
            <ComponantB user={user}/>
            </UserContext.Provider>
            
        </div>
    )
};
export default ComponantA;