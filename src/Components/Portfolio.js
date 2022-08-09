import React from 'react'
import Card from './Card'
import { useState,useEffect } from 'react'
import RestaurantWebsite from '../Media/RestaurantWebsite.png'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import education from '../Media/education.jpg'
import reddit from '../Media/reddit.jpg'
import portfolio from '../Media/portfolio.jpg'

export default function () {
    const {ref,inView} = useInView({threshold:0.2})
    const animation  = useAnimation()
    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1,
                transition:{
                    duration:1.5
                }
            })
        }
        if(!inView){
            animation.start({
                opacity:0
            })
        }
    })
    return (
        <div className='pt-28 ' id='Portfolio' ref={ref}>
            <div className='flex justify-between'>
                <div className='text-[#00c66c] font-semibold text-lg flex items-center mb-3'>
                    <hr className='border-1 border-[#00c66c] w-9 mr-2 rounded-xl' />
                    <p className='text-xl md:text-base'>My portfolio</p>
                </div>
                <p className='text-white font-semibold text-lg md:text-base'>Web Design</p>
            </div>
            <p className='text-xl font-semibold text-white pb-8 md:text-base'>Some of my distinguished works</p>
            <motion.div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 ' animate={animation}>
                <Card
                    img={RestaurantWebsite}
                    href='https://eclectic-custard-d540e6.netlify.app/'
                    href2='https://github.com/Paddyislw/HubZone'
                    name='Restaurant Website'
                />
                <Card
                    img={education}
                    href='https://mellifluous-paletas-de199d.netlify.app/'
                    href2='https://github.com/Paddyislw/Eductaion-Platform-Website'
                    name='Education Platform Website'
                />
                <Card img={reddit}
                    href='https://delightful-douhua-b27cff.netlify.app/'
                    href2='https://github.com/P-NBLT/reddit-clone'
                    name='Reddit Clone'
                />
                <Card img={portfolio}
                    href='https://eclectic-custard-d540e6.netlify.app/'
                    href2='https://github.com/Paddyislw/HubZone'
                    name='Portfolio Website'
                />
            </motion.div>
        </div>
    )
}
