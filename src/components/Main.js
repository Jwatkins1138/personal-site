import Tech from './Tech'
import Ticker from './Ticker'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut } from 'react-scroll-motion'

const Main = () => {

  return (
    <div className='container'>
    <main>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch( Fade(), FadeIn())}>
            <span className='big'>animation test stuff</span>
          </Animator>
          <Animator animation={batch( FadeOut())}>
            <span className='big'>animation test stuff</span>
          </Animator>
          <section className='main-section'>
            <div className='filler'><span className='big'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></div>
            <div className='test-main-left'>
              <h2>HELLO</h2>
              <h3 className=''>I am Jason</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          <div className='top-spacer'></div>
          <Tech />
          <div className='bottom-spacer'></div>
          <section className='main-section'>
            <div className='test-main-right'>
              <h2>hello</h2>
              <h3 className=''>I am Jason</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='filler'></div>
          </section>
          <section className='main-section'>
            <div className='filler'></div>
            <div className='test-main-left'>
              <h2>STUFF</h2>
              <h3 className=''>with other stuff</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          <section className='main-section'>
            <div className='test-main-right'>
              <h2>STUFF</h2>
              <h3 className=''>with other stuff</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='filler'></div>
          </section>
        </ScrollPage>
      </ScrollContainer>
    </main>
    <Ticker />
    </div>
  )
}

export default Main;