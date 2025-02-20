import {Blocks} from "./WorkArea"
import "../styles/Board.scss"
import { useState, cloneElement } from "react";
import React from "react";

interface Board {
  blocks: Blocks[];
  toggleBlockActive: (id: number) => void;
}

export function Board({blocks, toggleBlockActive} : Board) {

  // const strokeColor = block.isActive ? "lime" : "#000000";

  return (
    <div className="board">
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
    </div>
  )
}