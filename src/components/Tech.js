import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <section className='tech'>
      <table>
        <thead>
          <tr>
            <th><h3>languages</h3></th>
            <th><h3>frameworks</h3></th>
            <th><h3>ect</h3></th>
            <th><h3>ect</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faGem} /><span> ruby</span></td>
            
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faJsSquare} /><span> javascript</span></td>
          </tr>
          <tr>
            <td>python</td>
          </tr>
          <tr>
            <td>java</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Tech;
