const Ticker = () => {

  const skills = ['react', 'javascript', 'ruby', 'SQL', 'rails', 'python', 'postgreSQL'];
  const drawTicker = (item) => {
    return (
      <div className='ticker-item'>
        <span className='big'>{item}</span>
        <span className='medium'>{item}</span>
      </div>
    )
  };

  return (
    <footer className='ticker'>
      {skills.map((item) => {
        return drawTicker(item);
      })}
    </footer>
  )
}

export default Ticker;