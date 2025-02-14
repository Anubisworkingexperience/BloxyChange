import "../styles/Misc.scss"

 export function Block({children}) {
   return (
    <>
    <div className="block">
    <svg xmlns="http://www.w3.org/2000/svg" style={{left: "1px", top: "1px", width: "42px", height: "42px", display: "block", position: "relative", overflow: "hidden"}}>
      {children}
      </svg>
    </div>
    </>
   )
 }
