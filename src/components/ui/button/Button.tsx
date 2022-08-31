import './button.scss'
import { IButton } from './button-model'

const Button = (props: IButton) => {

  const { title, style_type, bg_img, setActive } = props;


  let style = '';
  !style_type ? style = 'primary' : style = style_type;

  return (
    <button className={`button ${style} ${bg_img}`}
      onClick={() => { setActive !== undefined ? setActive(true) : console.log('a') }} >
      {title}
    </button >
  )
}

export default Button