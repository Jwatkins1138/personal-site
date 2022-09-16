import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <section className='tech'>
      <table>
        <thead>
          <tr>
            <th><h3>languages</h3></th>
            <th></th>
            <th><h3>frameworks</h3></th>
            <th><h3>ect</h3></th>
            <th><h3>ect</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span> ruby</span></td>
            <td><FontAwesomeIcon icon={faGem} size='2x' /></td>
            <td>ruby on rails</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td><span> javascript</span></td>
            <td><FontAwesomeIcon icon={faJsSquare} size='2x' /></td>
            <td>react</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td><span> python</span></td>
            <td><FontAwesomeIcon icon={faPython} size='2x' /></td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td><span> java</span></td>
            <td><FontAwesomeIcon icon={faJava} size='2x' /></td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Tech;
