import React from "react";
import {useState} from "react";

const TrafficLight = () => {
	const [ color, setColor] = useState("red");
 
     return (
         <div>
             <div className="palo"></div>
             <div className = "contenedor">
                 <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " selected" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " selected" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " selected" : "" )}></div>
             </div>
         </div>
     );
 };
export default TrafficLight;
