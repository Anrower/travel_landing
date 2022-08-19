import { useState } from 'react'
import '../content.scss'
import Button from '../ui/button/Button'
import Navigation from '../navigation/Navigation'
import Burger from '../ui/burger/Burger'
import './header.scss'


const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 1200;

  return (
    <header className='header'>
      <div className="content">
        <div className="header__wrapper">
          <div className='logo'>
            <h1 className='logo__title'>Travel Portal</h1>
          </div>
          <nav className='navigation'>
            {windowWidth > 1200 ?
              <Navigation>
                <a href='/'>How It Works</a>
                <a href='/'>Plan Your Trip</a>
                <a href='/'>Destinations</a>
                <a href='/'>Travel Stories</a>
              </Navigation> :
              <div className={`burger__btn ${burgerActive ? 'close' : 'open'}`} onClick={() => setBurgerActive(!burgerActive)}>
                <span />
              </div>
            }
            {windowWidth < 1200 ?
              <Burger active={burgerActive} setActive={setBurgerActive}>
                <a href='/'>How It Works</a>
                <a href='/'>Plan Your Trip</a>
                <a href='/'>Destinations</a>
                <a href='/'>Travel Stories</a>
              </Burger> :
              null}
          </nav>
          {windowWidth > 1200 ?
            <Button title={'Login'} style_type={'small'} /> :
            null}
        </div>
      </div>
    </header>
  )
}

export default Header