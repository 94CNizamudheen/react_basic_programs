import React,{useContext} from "react";
import { UserContext } from "./ComponantA";
function ComponantD(){
    const user= useContext(UserContext)

    return(
        <div className="box">
            <h1>Componant D</h1>
            <h2>{`bye ${user} `} </h2>
        </div>
    )
};
export default ComponantD;