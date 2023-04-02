import React from 'react'
import HeroImage from '../../images/heroImage.png'
import Lines from '../../images/lines.png'
import Type0fEvent from '../type-of-event/Type0fEvent'


function Hero() {
  return (
    <>
      <section className='bg-[#FEFAF8] mb-20'>
        <div className='flex items-center pt-10'>
          <div className='relative'>
            <h1 className=' font-bold text-5xl leading-[3rem] mb-5' >Digitalized <span className='text-[#DF3602]'>end-to-end</span> solution for event<br /> <span className='text-[#DF3602]'>planning
            </span></h1>
            <p>Streamline planning, save time and deliver unforgettable<br />experiences for events</p>
            <img src={Lines} alt="" className='absolute w-7 top-24 left-48' />
          </div>
          <img src={HeroImage} alt="" className='rounded-lg' />
        </div>

        <Type0fEvent />


      </section>
    </>
  )
}

export default Hero
