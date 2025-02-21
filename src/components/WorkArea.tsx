import { Board } from "./Board";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

let nextId : number = 0;

export interface Blocks {
  id: number;
  children?: React.ReactNode;
  isActive: boolean;
};

export function WorkArea() {
  const [blocks, setBlocks] = useState<Blocks[]>([]);

  function addBlock(children : React.ReactNode, isActive : boolean) {
    console.log("click", blocks);
    setBlocks([
      ...blocks,
      {id: nextId++, children, isActive: false}
    ]);
  }

  const toggleBlockActive = (id : number) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, isActive: !block.isActive } : block
      )
    );
  }

  return (
    <>
    <div className="work-area">
      <Sidebar addBlock={addBlock} blocks={blocks}/>
      <Board blocks={blocks}
       toggleBlockActive={toggleBlockActive}/>
    </div>
    </>
  )
}