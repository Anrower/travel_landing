import './destinations.scss';
import '../content.scss'
import Slider from '../slider/Slider';
import Button from '../ui/button/Button';

const Destinations = () => {
  return (
    <div className="destinations">
      <div className='content'>
        <div className="destinations__wrapper">
          <h2 className="destinations__title">POPULAR DESTINATIONS</h2>
          <div className='destinations__slider'>
            <Slider />
          </div>
          <div className='destinations__button'>
            <Button title='Find More' bg_img='arrow_r' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations