import './popup.scss'

interface IProps {
  children: React.ReactNode,
  active: boolean,
  setActive: (active: boolean) => void,
}

const Popup = (props: IProps) => {
  const { active, setActive } = props;

  return (
    <div className={active ? 'popup active' : 'popup'}
      onClick={() => setActive(false)}>
      <div className='blur' />
      <div className='popup__content' onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}

export default Popup;