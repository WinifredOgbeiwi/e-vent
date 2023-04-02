import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineDateRange } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Button from '../../sub-component/Button'
function Type0fEvent() {
  return (
    <>
      <section className='relative'>

              <div className='flex justify-between items-center bg-white shadow-md w-[1062px] h-[84px] px-6 rounded-2xl text-base text-cust-navy-blue absolute -top-10 left-44'>

                  <div className='flex items-center'>
                      <FiSearch className='inline text-xl mr-2' />
                      <p>What type of event personnel are you looking for?</p>
                  </div>

                  <div className='flex items-center border-l-[1px] border-[#CCD1D4] px-5 py-2'>
                      <HiOutlineLocationMarker className='inline text-xl mr-2' />
                      <p>Location</p>
                  </div>

                  <div className='flex items-center border-l-[1px] border-[#CCD1D4] px-5 py-2'>
                      <MdOutlineDateRange className='inline text-xl mr-2' />
                      <p>Date of event</p>
                      <RiArrowDropDownLine className='text-5xl ml-10' />
                  </div>

                  <Button text='Search' />
              </div>
      </section>
    </>
  )
}

export default Type0fEvent
