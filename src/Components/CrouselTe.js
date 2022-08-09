import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from '../Media/Hero.jpeg'

export default function CrouselTe() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className='w-[600px] mt-10 xl:w-[500px] lg:w-[400px] sm:w-[310px]'>
            <Slider {...settings}>
                <div className='text-white px-10'>
                    <div className='flex space-x-4 pb-6'>
                        <div>
                            <img src={Hero} className='w-12 rounded' />
                        </div>
                        <div>
                            <p className='text-white text-lg font-semibold'>Adam smith</p>
                            <p className='text-[#00c66c] text-lg font-semibold'>Software Engineer</p>
                        </div>
                    </div>
                    <div className='text-[#808cac] space-y-1 mt-4 mb-4 lg:text-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet</p>
                        <p>officiis, numquam cupiditate, enim expedita eveniet dolorum,</p>
                        <p>illo voluptatum! Dolores fuga mollitia atque, placeat</p>
                        <p>Veniam, non distinctio dolorem rerum laboriosam.</p>
                    </div>
                </div>
                <div className='text-white px-10'>
                    <div className='flex space-x-4 pb-6'>
                        <div>
                            <img src={Hero} className='w-12 rounded' />
                        </div>
                        <div>
                            <p className='text-white text-lg font-semibold'>Adam smith</p>
                            <p className='text-[#00c66c] text-lg font-semibold'>Software Engineer</p>
                        </div>
                    </div>
                    <div className='text-[#808cac] space-y-1 mt-4 mb-4 lg:text-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet</p>
                        <p>officiis, numquam cupiditate, enim expedita eveniet dolorum,</p>
                        <p>illo voluptatum! Dolores fuga mollitia atque, placeat</p>
                        <p>Veniam, non distinctio dolorem rerum laboriosam.</p>
                    </div>
                </div>
                <div className='text-white px-10'>
                    <div className='flex space-x-4 pb-6'>
                        <div>
                            <img src={Hero} className='w-12 rounded' />
                        </div>
                        <div>
                            <p className='text-white text-lg font-semibold'>Adam smith</p>
                            <p className='text-[#00c66c] text-lg font-semibold'>Software Engineer</p>
                        </div>
                    </div>
                    <div className='text-[#808cac] space-y-1 mt-4 mb-4 lg:text-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet</p>
                        <p>officiis, numquam cupiditate, enim expedita eveniet dolorum,</p>
                        <p>illo voluptatum! Dolores fuga mollitia atque, placeat</p>
                        <p>Veniam, non distinctio dolorem rerum laboriosam.</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
