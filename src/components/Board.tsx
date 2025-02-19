import {Blocks} from "./WorkArea"
import "../styles/Board.scss"

export function Board({blocks} : Blocks[]) {

  return (
    <div className="board">
        {blocks.map(block => (
          <div className="board-block" key={block.id}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{left: "1px", top: "1px", width: "42px", height: "42px", display: "block", position: "relative", overflow: "hidden"}}>
                {block.children}
            </svg>
          </div>
        ))}
    </div>
  )
}