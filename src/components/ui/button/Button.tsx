import './button.scss'
import { IButton } from './button-model'

const Button = (props: IButton) => {

  const { title, style_type, bg_img } = props;

  let style = '';
  !style_type ? style = 'primary' : style = style_type;

  return (
    <button className={`button ${style}`}>
      {title}
    </button>
  )
}

export default Button