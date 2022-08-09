import React from 'react'
import { useEffect } from 'react'


export default function About() {
  


    return (
        <div className='flex pt-28 justify-between lg:space-x-4 md:flex-col md:items-center' id='Services'  >
            <div>
                <div className='text-[#00c66c] font-semibold text-lg flex items-center'>
                    <hr className='border-1 border-[#00c66c] w-7 mr-2 rounded-xl' />
                    <p className='text-xl'>About me</p>
                </div>
                <p className='text-white text-3xl font-semibold mt-4'>I'm here</p>
                <p className='text-white text-3xl font-semibold mb-4'>to help your next project</p>
                
                <div className='flex space-x-6 pt-6'>
                    <div className='font-semibold text-sm  text-white'>
                        <div className='flex space-x-2 mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(0,198,108,1)" />
                            </svg>
                            <p>Problem Solving</p>
                        </div>
                        <div className='flex space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(0,198,108,1)" />
                            </svg>
                            <p>Search A Lot</p>
                        </div>
                    </div>
                    <div className='font-semibold text-sm text-white'>
                        <div className='flex space-x-2 mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(0,198,108,1)" />
                            </svg>
                            <p>Creative Idea</p>
                        </div>
                        <div className='flex space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(0,198,108,1)" />
                            </svg>
                            <p>High Quality</p>
                        </div>
                    </div>
                </div>
                <button className='w-[130px] text-[#00c66c] rounded-lg py-2 mt-10 border-[1px] border-[#00c66c]'>My Portfolio</button>
            </div>
            <div className='flex flex-col'>
                <div className='text-[#00c66c] font-semibold text-lg flex items-center ml-auto'>
                    <hr className='border-1 border-[#00c66c] w-7 mr-2 rounded-xl' />
                    <p className='text-xl'>Skills</p>
                </div>
                <div className='flex flex-col w-[400px] space-y-4 lg:w-[300px] md:w-[330px]'>
                    <div className='w-[160px] h-[60px] bg-[#171f38] text-white text-lg font-semibold rounded-tl-xl rounded-b-xl flex items-center justify-center cursor-pointer space-x-4 mr-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(0,198,108,1)" />
                        </svg>
                        <p>React</p>
                    </div>
                    <div className='w-[160px] h-[60px] bg-[#171f38] text-white text-lg font-semibold rounded-tl-xl rounded-b-xl flex items-center justify-center cursor-pointer space-x-4 ml-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(0,198,108,1)" />
                        </svg>
                        <p>Redux</p>
                    </div>
                    <div className='w-[160px] h-[60px] bg-[#171f38] text-white text-lg font-semibold rounded-tl-xl rounded-b-xl flex items-center justify-center cursor-pointer space-x-4 mr-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(0,198,108,1)" />
                        </svg>
                        <p>Tailwind</p>
                    </div>
                    <div className='w-[160px] h-[60px] bg-[#171f38] text-white text-lg font-semibold rounded-tl-xl rounded-b-xl flex items-center justify-center cursor-pointer space-x-4 ml-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="rgba(0,198,108,1)" />
                        </svg>
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
