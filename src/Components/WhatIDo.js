import React from 'react'

export default function WhatIDo() {
    return (
        <div className='pt-24 flex justify-between space-x-4 sm:flex-col sm:space-y-6' id='About'>
            <div className='flex items-center space-x-6 lg:flex-col lg:space-x-0 lg:space-y-3 '>
                <div className='flex-col flex space-y-10 lg:space-y-3'>
                    <div className='w-[270px] 2xl:w-[250px] sm:w-[330px] md:w-[200px] md:h-[80px] md:text-sm xl:w-[220px] xl:text-base xl:h-[100px] h-[130px] bg-[#171f38] text-white text-lg font-semibold rounded-tl-xl rounded-b-xl flex items-center justify-center cursor-pointer space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                            <path fill="none" d="M0 0h24v24H0z" /><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" fill="rgba(1,210,147,1)" />
                        </svg>
                        <p> UI/UX Design</p>
                    </div>
                    <div className='w-[270px] 2xl:w-[250px] sm:w-[330px] md:w-[200px] md:h-[80px] md:text-sm xl:w-[220px] xl:text-base xl:h-[100px] h-[130px] bg-[#171f38] text-white text-lg font-semibold rounded-t-xl rounded-bl-xl flex items-center justify-center cursor-pointer space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                            <path fill="none" d="M0 0h24v24H0z" /><path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" fill="rgba(1,210,147,1)" />
                        </svg>
                        <p>Web Development</p>
                    </div>
                </div>
                <div>
                    <div className='w-[270px] 2xl:w-[250px] sm:w-[330px] md:w-[200px] md:h-[80px] md:text-sm xl:w-[220px] xl:text-base xl:h-[100px] h-[130px] bg-[#171f38] text-white text-lg font-semibold rounded-t-xl round-bl-xl flex items-center justify-center cursor-pointer space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                            <path fill="none" d="M0 0h24v24H0z" /><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="rgba(1,210,147,1)" />
                        </svg>
                        <p>React App</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-[#00c66c] font-semibold text-lg flex items-center mb-3'>
                    <hr className='border-1 border-[#00c66c] w-9 mr-2 rounded-xl' />
                    <p className='text-xl xl:text-lg'>What I do</p>
                </div>
                <p className='text-white text-3xl font-semibold xl:text-2xl'>Better Design,</p>
                <p className='text-white text-3xl font-semibold xl:text-2xl'>Better Experience</p>
                <div className='text-[#808cac] space-y-1 mt-4'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet culpa nobis corporis</p>
                    <p>officiis, numquam cupiditate, enim expedita eveniet dolorum, aliquid nesciunt sapiente</p>
                    <p>illo voluptatum! Dolores fuga mollitia atque, placeat minima quibusdam accusantium!</p>
                    <p>Veniam, non distinctio dolorem rerum laboriosam deleniti.</p>
                </div>
            </div>
        </div>
    )
}
