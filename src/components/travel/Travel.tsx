import './travel.scss';
import '../content.scss';
import StoryItem from './StoryItem/StoryItem';
import Button from '../ui/button/Button';
import Footer from '../footer/Footer';

interface IStoryItems {
  title: string,
  img: string,
}

const storyItems = [
  {
    title: '10 Photos of Attractive Thailand',
    img: 'Thailand'
  },
  {
    title: 'Canyonlands National Park, Utah',
    img: 'Utah'
  },
  {
    title: 'I left my heart in the Mountains!        ',
    img: 'Mountains'
  },
  {
    title: 'The Longest journey in my life! ',
    img: 'Journey'
  },
];

const Travel = () => {
  return (
    <div id='travel' className="travel">
      <div className='travel__blur'>
        <div className="content">
          <h2 className="travel__title">TRAVEL STORIES</h2>
          <div className="travel__wrapper">
            <div className='travel__story-list'>
              {storyItems?.map((item: IStoryItems) => {
                return <StoryItem key={item.img} path={item.img} title={item.title} />
              })}
            </div>
            <div className='travel__button'>
              <Button title='See More' bg_img='arrow_r' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Travel