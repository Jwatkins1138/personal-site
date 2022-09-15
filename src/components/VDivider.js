import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const VDivider = () => {
  return (
    <div className='v-div'>
      <div className='v-top'><FontAwesomeIcon className='' icon={faAsterisk} size='2x' /></div>
      <div className='v-bottom'><FontAwesomeIcon className='' icon={faAsterisk} size='2x' /></div>
    </div>
  )
}

export default VDivider;