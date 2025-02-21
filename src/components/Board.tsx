import {Blocks} from "./WorkArea"
import "../styles/Board.scss"
import React from "react";
import { BottomPanel } from "./BottomPanel";
import { useState } from "react";

interface Board {
  blocks: Blocks[];
  toggleBlockActive: (id: number) => void;
}

export function Board({blocks, toggleBlockActive} : Board) {

  const [enableGrid, setEnableGrid] = useState<boolean>(true);

  console.log(blocks);

  return (
    <div className={`board ${enableGrid ? "board-grid_enabled" : ""}`}>
        {blocks.map(block => (
          <div className="board-block" key={block.id} onClick={() => toggleBlockActive(block.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="board-block__image" style={{left: "1px", top: "1px", display: "block", position: "relative", overflow: "hidden"}} viewBox="0 0 42 42" preserveAspectRatio="xMidYMid meet">
                {React.Children.map(block.children, child => 
                  React.cloneElement(child as React.ReactElement, {
                    stroke: block.isActive ? "lime" : "#000000"
                  })
                )}
            </svg>
          </div>
        ))}
        <BottomPanel enableGrid={enableGrid} 
        setEnableGrid={setEnableGrid}/>
    </div>
  )
}