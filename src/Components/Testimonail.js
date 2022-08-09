import React from 'react'
import World from '../Media/World.webp'
import CrouselTe from './CrouselTe'

export default function Testimonail() {
    return (
        <div className='pt-28 flex justify-between space-x-8 md:flex-col md:items-center md:space-y-6 '>
            
            <div>
                <div className='text-[#00c66c] font-semibold text-lg flex items-center mb-3'>
                    <hr className='border-1 border-[#00c66c] w-9 mr-2 rounded-xl' />
                    <p className='text-xl lg:text-lg'>Testimonails</p>
                </div>
                <p className='text-white text-xl font-semibold lg:text-lg'>What my client says</p>
                <div>
                    <CrouselTe />
                </div>
            </div>
            <div>
                <img src={World} className='w-[500px] lg:w-[400px] md:w-[300px]' />
            </div>
        </div>
    )
}
