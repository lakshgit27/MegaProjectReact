import React, { Children } from 'react'

const container = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto-4 px-4'>{children}</div>
  )
}

export default container