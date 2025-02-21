import { SidebarBlocks } from "./SidebarBlocks";
import "../styles/Sidebar.scss";

export function Sidebar({addBlock, blocks}) {
  return (
    <div className="sidebar">
      <h2 className="block-title">Блоки</h2>
      <SidebarBlocks addBlock={addBlock}/>
      <p className="block-count">Количество блоков: {blocks.length}</p>
    </div>
  )
}