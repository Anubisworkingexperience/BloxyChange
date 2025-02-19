import { Sidebar } from "./Sidebar";
import { Board } from "./Board";
import { useState } from "react";

let nextId : number = 0;

export interface Blocks {
  id: number;
  children?: React.ReactNode;
};

export function WorkArea() {
  const [blocks, setBlocks] = useState<Blocks[]>([]);

  function addBlock(children : React.ReactNode) {
    console.log("click", blocks);
    setBlocks([
      ...blocks,
      {id: nextId++, children}
    ]);
  }

  return (
    <>
    <div className="work-area">
      <Sidebar addBlock={addBlock}/>
      <Board blocks={blocks}/>
    </div>
    </>
  )
}