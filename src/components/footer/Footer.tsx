import './footer.scss';
import '../content.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='footer__wrapper'>
          {/* <div className='footer__content'> */}
          <p className='footer__trademark'>All Rights Reserved © Travel Portal</p>
          <nav id='social-media' className='footer__navigation'>
            <ul className='footer__navigation__list'>
              <li className='footer__navigation__list-item'>
                <a className=' footer__navigation__link footer__navigation__link_instagram' href="/"> </a>
              </li>
              <li className='footer__navigation__list-item'>
                <a className='footer__navigation__link footer__navigation__link_youtube' href="/"> </a>
              </li>
              <li className='footer__navigation__list-item'>
                <a className='footer__navigation__link footer__navigation__link_twitter' href="/"> </a>
              </li>
            </ul>
          </nav>
          {/* </div> */}

        </div>
      </div>
    </footer>
  )
}

export default Footer