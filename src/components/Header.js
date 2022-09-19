import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='head-left'>
        <Link to='/' ><h1>JASON CHRISTOPHER WATKINS</h1></Link>
        <h3 className='sub-title'>fullstack software engineer</h3>
      </div>
      <div className='head-right'>
        <Link to='/projects'><div className='head-item'><h5>projects</h5></div></Link>
        <Link to='/music'><div className='head-item'><h5>music</h5></div></Link>
        <Link to='/photo'><div className='head-item'><h5>photography</h5></div></Link>
        <div className='head-item'><h5>contact</h5></div>
      </div>
    </header>
  )
}

export default Header;