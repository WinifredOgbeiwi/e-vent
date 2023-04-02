import React from 'react'
import Img1 from '../../images/whyMainImg.png'
import Img2 from '../../images/whyImg2.png'
function Why() {
    return (
        <>
            <section className='pt-20' >
                <div className=' text-cust-navy-blue text-center mb-[60px]'>
                    <h2 className=' font-bold text-5xl'>WHY E-VENT</h2>
                    <p className=' text-xl'>Bringing effortlessly efficient event management</p>
                </div>

                <div className='flex items-center'>
                    <div>
                        <h5 className='text-[#0077C2] text-xl'>For event host</h5>
                        <h3 className=' font-semibold text-[2.5rem] text-cust-navy-blue mt-2 mb-10'>Customizable event personnel sourcing</h3>
                        <p className='text-cust-navy-blue text-xl font-normal '>Browse, filter and select event personnel with our wide pool<br/> of qualified personnel of your choice. Source by reviews,<br/> availability, location, price & skills.</p>
                        <div className='flex gap-1 my-10'>
                     <div className='w-3 h-3 border-2 rounded-full '></div>
                        <div className='w-3 h-3 border-2 rounded-full'></div>
                        <div className='w-3 h-3 border-2 rounded-full'></div>
                            <div className='w-3 h-3 border-2 rounded-full'></div>
                        </div>
                        <button className='border-2 border-[#DF3602] rounded-lg px-5 py-3 text-[#DF3602] text-base '>Learn more</button>
                    </div>
                    <div className=' shadow-xl border-l-2'>
                    <img src={Img1} alt="" />
                    </div>
                </div>




                <div className='flex items-center justify-center mt-20'>
                    <div className=' shadow-xl border-l-2'>
                        <img src={Img2} alt="" />
                    </div>  
                    <div className='ml-[3.75rem]'> 
                        <h5 className='text-[#0077C2] text-xl'>For event personnel</h5>
                        <h3 className=' font-semibold text-[2.5rem] text-cust-navy-blue mt-2 mb-10'>Digitalized event operations across sales inbound</h3>
                        <p className='text-cust-navy-blue text-xl font-normal '>From sales inbound prospecting to checkout manage your<br/> event enquiries and incoming leads, finances, inventory,<br/> event personnels, and schedules all in one place.</p>
                        <div className='flex gap-1 my-10'>
                            <div className='w-3 h-3 border-2 rounded-full '></div>
                            <div className='w-3 h-3 border-2 rounded-full'></div>
                            <div className='w-3 h-3 border-2 rounded-full'></div>
                            <div className='w-3 h-3 border-2 rounded-full'></div>
                        </div>
                        <button className='border-2 border-[#DF3602] rounded-lg px-5 py-3 text-[#DF3602] text-base '>Learn more</button>
                    </div>
                   
                </div>






            </section>
        </>
    )
}

export default Why