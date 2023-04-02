import React from 'react'

function Button(props) {
  return (
    <>
          <button className='bg-[#DF3602] rounded-lg px-5 py-3 text-[#FFFDFD] text-base'>{props.text}</button>
    </>
  )
}

export default Button
