import React from "react";
import "../styles/Misc.scss"

interface BlockProps {
  children: React.ReactElement | React.ReactElement[];
  addBlock:(children: React.ReactNode) => void;
}

 export function Block({children, addBlock}: BlockProps) {

   return (
    <div className="block" onClick={() => {
      addBlock(children);
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{left: "1px", top: "1px", width: "42px", height: "42px", display: "block", position: "relative", overflow: "hidden"}}>
      {children}
      </svg>
    </div>
   )
 }
