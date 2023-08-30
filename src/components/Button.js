import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className=' text-gray-600 px-5 py-1 m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button