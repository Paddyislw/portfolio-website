import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function NavBar() {
    
    const animation = useAnimation()
    useEffect(() => {
       animation.start({   
            transition:{
                duration:0.4
            }
       })
    })

    const [openTab, setopenTab] = useState(1)
    const [nav, setnav] = useState(true)
    const incative = 'text-[#808cac] cursor-pointer font-semibold'
    const active = 'text-[#00c66c]   cursor-pointer font-semibold mx-auto'
    const activeNav = '    2xl:px-[90px]  xl:px-[85px]  lg:px-[50px] md:px-[20px] sm:px-[10px] flex pt-4 items-center justify-between sticky top-0 left-0 bg-[#0f1730] py-6 shadow-2xl px-[200px] z-50 h-[80px]'
    const inactiveNav = ' 2xl:px-[90px]  xl:px-[85px]  lg:px-[50px] md:px-[20px] sm:px-[10px] flex pt-4 items-center justify-between sticky top-0 left-0 bg-[#0f1730] py-6  px-[200px] z-50 h-[80px]'
    const [open, setOpen] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 80) {
            setnav(false)
        }
        else {
            setnav(true)
        }
    }
    window.addEventListener('scroll', changeBackground);


    return (
        <div className={nav ? inactiveNav : activeNav}>
            <div className='text-white text-3xl font-semibold lg:text-2xl'><span className='text-[#00c66c]'>Pr</span>adyum</div>
            <div className='flex items-center space-x-10 lg:hidden'>
                <p className={openTab === 1 ? active : incative} onClick={() => { setopenTab(1) }}><a href='#'>Home</a></p>
                <p className={openTab === 2 ? active : incative} onClick={() => { setopenTab(2) }}><a href='#About'>About</a></p>
                <p className={openTab === 3 ? active : incative} onClick={() => { setopenTab(3) }}><a href='#Services'>Services</a></p>
                <p className={openTab === 4 ? active : incative} onClick={() => { setopenTab(4) }}><a href='#Portfolio'>Portfolio</a></p>
                <p className={openTab === 5 ? active : incative} onClick={() => { setopenTab(5) }}><a href='#Contact'>Contact</a></p>
                <p className='text-[#00c66c]'>  +919549646369</p>
            </div>
            <div className='hidden lg:block'>
                <button onClick={() => { setOpen(!open) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" />
                    </svg>
                </button>
                {open &&
                    <motion.div className='flel flex-col w-[200px] absolute px-10 space-y-10 pt-10 pb-20 shadow-2xl rounded-xl z-50 bg-[#0f1730] right-0 ' >
                        <p className={openTab === 1 ? active : incative} onClick={() => { setopenTab(1) }}><a href='#'>Home</a></p>
                        <p className={openTab === 2 ? active : incative} onClick={() => { setopenTab(2) }}><a href='#About'>About</a></p>
                        <p className={openTab === 3 ? active : incative} onClick={() => { setopenTab(3) }}><a href='#Services'>Services</a></p>
                        <p className={openTab === 4 ? active : incative} onClick={() => { setopenTab(4) }}><a href='#Portfolio'>Portfolio</a></p>
                        <p className={openTab === 5 ? active : incative} onClick={() => { setopenTab(5) }}><a href='#Contact'>Contact</a></p>
                        <p className='text-[#00c66c]'>  +919549646369</p>
                    </motion.div>
                }
            </div>
        </div>
    )
}
