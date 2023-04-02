import React from 'react'
import NavList from './NavList'
import Button from '../../sub-component/Button'
import Logo from '../../images/Event Logo 2.svg'
function navbar() {
  return (
    <>
      <nav className=' bg-cust-white flex justify-between items-center py-5'>
        <a href="/"><img src={Logo} alt="" width='70%'/></a>
        <NavList />
        <div>
        <button className='px-5 py-3 '>Login</button>
        <Button text='Get started' />
        </div>
      </nav>
    </>
  )
}

export default navbar
