import './storyItem.scss'

interface StoryProps {
  path: string;
  title: string;
}

const StoryItem = (props: StoryProps) => {
  return (
    <div className='story__item'>
      <img className='story__item__image'
        src={require(`../../../images/${props.path}.jpg`)}
        alt="thailand" />
      <div className='story__item__about'>
        <h3 className='story__item__title'>
          {props.title}</h3>
        <p className='story__item__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...<br />
          <span className='story__item__read-more'><a className='read-more__link' href='/'>Read More</a></span>
        </p>
      </div>
    </div>
  )
}

export default StoryItem