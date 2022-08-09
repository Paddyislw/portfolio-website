import React from 'react'
import { useRef,useEffect } from 'react'
import Hero from '../Media/Hero.jpeg'

export default function HeroSec() {
  return (
    <div className='flex pt-16 justify-between md:flex-col md:items-center md:space-y-4'>
        <div>
            <div className='text-[#00c66c] font-semibold text-lg flex items-center'>
              <hr className='border-1 border-[#00c66c] w-7 mr-2 rounded-xl'/>
              <p className='text-xl'>Hello</p>  
            </div>
            <p className='text-white text-5xl font-semibold pt-1 pb-3 xl:text-4xl'>I'm <span>Pradyum Singh</span></p>
            <p className='text-lg xl:text-base text-[#808cac] pb-4'>React Developer</p>
            <p className='text-lg xl:text-base text-[#808cac]'>I am passionate about taking risks and solving them by Communicating & Sharing</p>
            <p className='text-lg xl:text-base text-[#808cac]'>experience and knowledge</p>
            <button className='w-32 border-[1px] border-[#00c66c] rounded text-[#00c66c] py-2 mt-6'>Hire me</button>
        </div>
        <div>
            <img src={Hero} className='w-[450px] rounded-tl-[60px] xl:w-[350px] md:w-[250px]'/>
        </div>
    </div>
  )
}
