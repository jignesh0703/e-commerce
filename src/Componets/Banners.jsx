import React, { useEffect, useState } from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Banners = () => {

    const [banner, setBanner] = useState(0);
    const banners = [banner1, banner2, banner3, banner4];

    const handlePrevBanner = () => {
        setBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    const handleNextBanner = () => {
        setBanner((prev) => (prev + 1) % banners.length);
    };

    const handleDotClick = (index) => {
        setBanner(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setBanner((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
      }, [banners.length]);

    return (
        <>
            <div className='w-full flex justify-center items-center mt-2'>
                <div className='w-[80%] bg-white'>
                    <div className='w-[100%]'>
                        <img src={banners[banner]} alt="banners" className='w-[100%] h-[15rem]' />
                    </div>
                </div>
                <div className='absolute flex justify-between w-[80%] bg-transparent'>
                    <button className='w-[2.5rem] h-[5rem] bg-slate-100 rounded-br-[5px] rounded-tr-[5px] flex justify-center items-center text-[1.2rem] text-[#555555]' onClick={handlePrevBanner}><FaAngleLeft /></button>
                    <button className='w-[2.5rem] h-[5rem] bg-slate-100 rounded-bl-[5px] rounded-tl-[5px] flex justify-center items-center text-[1.2rem] text-[#555555]' onClick={handleNextBanner}><FaAngleRight /></button>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${banner === index ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </>
    )
}

export default Banners