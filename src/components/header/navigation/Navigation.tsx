import React from 'react'

interface IProps {
  children: React.ReactNode
}

const Navigation = (props: IProps) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default Navigation