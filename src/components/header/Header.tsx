import { useState } from 'react';
import '../content.scss';
import Button from '../ui/button/Button';
import Navigation from './navigation/Navigation';
import Burger from '../ui/burger/Burger';
import './header.scss';
import Popup from '../ui/popup/Popup';
import Login from './loginForm/Login';


const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [popUpActive, setPopUpActive] = useState(true)

  const hasWindow = typeof window !== 'undefined';
  const windowWidth = hasWindow ? window.innerWidth : 1200;

  const accountHandler = () => {
    setBurgerActive(false);
    setPopUpActive(true);
  }

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
                <a href='#planning-form'>How It Works</a>
                <a href='#trip'>Plan Your Trip</a>
                <a href='#destinations'>Destinations</a>
                <a href='#travel'>Travel Stories</a>
              </Navigation> :
              <div className={`burger__btn ${burgerActive ? 'close' : 'open'}`} onClick={() => setBurgerActive(!burgerActive)}>
                <span />
              </div>
            }
            {windowWidth < 1200 ?
              <Burger active={burgerActive} setActive={setBurgerActive}>
                <a href='#planning-form'>How It Works</a>
                <a href='#trip'>Plan Your Trip</a>
                <a href='#destinations'>Destinations</a>
                <a href='#travel'>Travel Stories</a>
                <a href=' ' onClick={accountHandler}>Account</a>
                <a href='#social-media'>Social Media</a>
              </Burger> :
              null}
          </nav>
          <Popup active={popUpActive} setActive={setPopUpActive}>
            <Login />
          </Popup>
          {windowWidth > 1200 ?
            <Button title={'Login'} style_type={'small'}
              setActive={setPopUpActive} /> :
            null}
        </div>
      </div>
    </header>
  )
}

export default Header