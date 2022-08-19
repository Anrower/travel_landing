import './burger.scss'

interface IProps {
  children: React.ReactNode,
  active: boolean,
  setActive: (active: boolean) => void,
}

const Burger = (props: IProps) => {
  const { active, setActive } = props;

  return (
    <div className={active ? 'burger active' : 'burger'}
      onClick={() => setActive(false)}>
      <div className='blur' />
      <div className='burger__content' onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}

export default Burger