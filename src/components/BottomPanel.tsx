import "../styles/Board.scss"
import {faPenToSquare, faTrashCan} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function BottomPanel({enableGrid, setEnableGrid}) {

  return (
    <div className="bottomPanel">
      <FontAwesomeIcon icon={faPenToSquare}
       className="bottom-panel__icon" onClick={() => setEnableGrid(!enableGrid)}/>
      <FontAwesomeIcon icon={faTrashCan}
       className="bottom-panel__icon"/>
    </div>
  )
}