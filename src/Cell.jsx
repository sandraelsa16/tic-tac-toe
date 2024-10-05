// import React from "react";
// import './App.css'

// function Cell({id,cell,go,setGo,cells,setCells,winningMessage}) {
//   const handleClick =(e)=>{
//     if(!winningMessage){
//       const taken=e.target.firstChild.classList.contains('circle')|| e.target.firstChild.classList.contains('cross')|| e.target.classList.contains("circle")|| e.target.classList.contains("cross")

//       if(!taken){
//        if(go==="circle"){
//          e.target.firstChild.classList.add('circle')
//          handleCellChange("circle")
//          setGo("cross")
//        }
//        if(go==="cross"){
//          e.target.firstChild.classList.add('cross')
//          handleCellChange("cross")
//          setGo("circle")
//        }
//       }
//     }
    

//   }

//   const handleCellChange = (className)=>{
//    const nextCells = cells.map((cell,index)=>{
//       if(index===id){
//         return className
//       } else {
//         return cell
//       }
//     })
//     setCells(nextCells)
//   }
//   return <div className="square" id={id} onClick={handleClick} >
//     <div className={cell}></div>
//   </div>;
// }

// export default Cell;


import React from "react";
import './App.css';

function Cell({ id, cell, go, setGo, cells, setCells, winningMessage }) {
  const handleClick = () => {
    if (!winningMessage && cell === '') {
      // Update the cell value based on the current turn (go)
      const nextCells = cells.map((currentCell, index) => {
        if (index === id) {
          return go;  // Set the current cell to "circle" or "cross"
        }
        return currentCell;
      });

      setCells(nextCells);  // Update cells in state
      setGo(go === "circle" ? "cross" : "circle");  // Toggle the turn
    }
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      {/* Dynamically set the class based on the cell value */}
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
