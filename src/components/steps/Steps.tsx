import './steps.scss'
import '../content.scss'
import Button from '../ui/button/Button'



const Steps = () => {
  return (
    <div className='steps'>
      <div className='content'>
        <div className='steps__wrapper'>
          <h2 className='steps__title'>3 STEPS TO THE PERFECT TRIP</h2>
          <div className='steps__buttons'>
            <Button title='to-do' bg_img='steps-btn' />
            <Button title='dates' bg_img='steps-btn' />
            <Button title='recomendation' bg_img='steps-btn' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps