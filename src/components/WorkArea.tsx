import { Board } from "./Board";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";

let nextId : number = 0;

export interface Blocks {
  id: number;
  children?: React.ReactNode;
  isActive: boolean;
};

export function WorkArea() {
  const [blocks, setBlocks] = useState<Blocks[]>([]);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.board-block')) {
        unselectAllBlocks();
      }
    };

    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  function addBlock(children : React.ReactNode) {
    console.log("click", blocks);
    setBlocks([
      ...blocks,
      {id: nextId++, children, isActive: false}
    ]);
  }

  const toggleBlockActive = (id : number) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        if ( block.id !== id && block.isActive) {
          return {...block, isActive: false}
        }
        return block.id === id ? { ...block, isActive: !block.isActive } : block;
      })
    );
  };

  const unselectAllBlocks = () => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => {
        return {...block, isActive: false};
      }) 
    );
  };

  const cleanupGrid = () => {
    setBlocks([]);
  }

  return (
    <>
    <div className="work-area">
      <Sidebar addBlock={addBlock} blocks={blocks}/>
      <Board blocks={blocks}
       toggleBlockActive={toggleBlockActive}
       cleanupGrid={cleanupGrid}/>
    </div>
    </>
  )
}