import React from 'react'

type Props = {
    children: React.ReactNode
}

const SectionTitle = ({children}: Props) => {
  return (
    <h1 className='text-4xl lg:text-5xl uppercase'>{children}</h1>
  )
}

export default SectionTitle