import "../styles/Board.scss"
import {faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface BottomPanel {
  enableGrid: boolean;
  setEnableGrid: React.Dispatch<React.SetStateAction<boolean>>;
  cleanupGrid: () => void;
}

export function BottomPanel({enableGrid, setEnableGrid, cleanupGrid} : BottomPanel) {

  return (
    <div className="bottomPanel">
      <FontAwesomeIcon icon={faPenToSquare}
       className="bottom-panel__icon" onClick={() => setEnableGrid(!enableGrid)}/>
      <FontAwesomeIcon icon={faTrashCan}
       className="bottom-panel__icon" onClick={() => cleanupGrid()}/>
    </div>
  )
}