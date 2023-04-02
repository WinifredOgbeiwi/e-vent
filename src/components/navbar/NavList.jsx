import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
function NavList() {
    return (
        <>
            <ul className='flex gap-7 items-center text-cust-navy-blue mr-16'>
                <li>Company
                    <RiArrowDropDownLine className='inline text-3xl' />
                </li>
                <li>For event host</li>
                <li>For event personnel</li>
                <li>Use cases
                    <RiArrowDropDownLine className='inline text-3xl' />
                </li>
                <li>Resources
                    <RiArrowDropDownLine className='inline text-3xl' />
                </li>
            </ul>

        </>
    )
}

export default NavList
