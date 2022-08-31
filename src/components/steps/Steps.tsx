import './steps.scss'
import '../content.scss'
import Button from '../ui/button/Button'



const Steps = () => {
  return (
    <div id='trip' className='steps'>
      <div className='content'>
        <div className='steps__wrapper'>
          <h2 className='steps__title'>3 STEPS TO THE PERFECT TRIP</h2>
          <div className='steps__buttons'>
            <div className='steps__buttons-container'>
              <Button bg_img='byke' style_type='steps-btn' />
              <p className='steps__buttons-title'>Tell us what you want to do</p>
            </div>
            <div className='steps__buttons-container'>
              <Button bg_img='calendar' style_type='steps-btn' />
              <p className='steps__buttons-title'>Share us preferable dates</p>
            </div>
            <div className='steps__buttons-container'>
              <Button bg_img='plane' style_type='steps-btn' />
              <p className='steps__buttons-title'>We will give you recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps