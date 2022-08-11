import React from 'react'
import Hinata from '../Media/Hinata.webp'
import { useState } from 'react'

export default function Card(props) {

    return (
        <div className=' w-[360px] lg:w-[300px] bg-[#171e39] px-3 rounded-lg flex flex-col items-center my-3  md:mx-auto' >
            <p className='mr-auto text-[#00d28c] font-semibold text-xl pt-2 '>{props.name}</p>
            <div className='flex space-x-3 py-3 mr-auto mb-2'>
                <p className='bg-[#434b66] text-white text-sm rounded w-[80px] text-center py-[2px]'>Web</p>
                <p className='bg-[#434b66] text-white text-sm rounded w-[80px] text-center py-[2px]'>Web design</p>
                <p className='bg-[#434b66] text-white text-sm rounded w-[80px] text-center py-[2px]'>UI-UX</p>
            </div>
            <img src={props.img} className='w-[350px] lg:w-[280px] mb-8' />
            <div className='flex justify-between w-[330px] lg:w-[280px] mb-4'>
                <a href={props.href} target='_blank'><button className='w-20 text-sm border-[1px] border-[#00c66c] rounded text-[#00c66c] py-2 hover:bg-[#00c66c] hover:text-white'>Launch</button></a>
                <a href={props.href2} target='_blank'><button className='w-20 text-sm border-[1px] border-[#00c66c] rounded text-[#00c66c] py-2 hover:bg-[#00c66c] hover:text-white'>GitHub</button></a>
            </div>
        </div>
    )
}
